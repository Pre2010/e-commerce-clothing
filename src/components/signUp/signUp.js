import React, { Component } from 'react';
import {SingUpContainer, TitleContainer} from './signUp.styles.js';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';


class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleOnSubmit = async event => {
        // prevents the form's default submit event
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            // we create a new user with the destructured email and password with the values we get from the form.
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            // we create a new entry in our DB for the user with their displayName
            await createUserProfileDocument(user, {displayName});

            // this will clear our form after successfully creating a user.
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleOnChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }
    
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <SingUpContainer>
                <TitleContainer>I do not have an account</TitleContainer>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleOnSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleOnChange}
                        label='Display Name'
                        required/>

                        <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleOnChange}
                        label='Email'
                        required/>

                        <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleOnChange}
                        label='Password'
                        required/>

                        <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleOnChange}
                        label='Confirm Password'
                        required/>

                        <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SingUpContainer>
        )
    }
}

export default SignUp;