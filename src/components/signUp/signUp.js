import React, { Component } from 'react';
import {SignUpContainer, TitleContainer} from './signUp.styles.js';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions';


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

        const {signUpStart} = this.props;
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart({displayName, email, password});
    };

    handleOnChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }
    
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <SignUpContainer>
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
            </SignUpContainer>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    // we pass our userCredentials to our dispatch which will pass it along to our saga listening for this action.
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);