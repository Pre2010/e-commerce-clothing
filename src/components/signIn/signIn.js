import React, { Component } from 'react';
import {
    SignInContainer, 
    TitleContainer, 
    ButtonsContainer
} from './signIn.styles.js';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleOnSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.error(error);
        }
    }

    handleOnChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleOnSubmit}>
                    <FormInput
                        name='email'
                        value={this.state.email}
                        type='email'
                        handleOnChange={this.handleOnChange}
                        label='Email'
                        required />

                    <FormInput 
                        name='password' 
                        value={this.state.password} 
                        type='password' 
                        handleOnChange={this.handleOnChange}
                        label='Password'
                        required/>

                    <ButtonsContainer>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>

                        <CustomButton type='button'
                            onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;