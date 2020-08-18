import React, { useState } from 'react';
import {
    SignInContainer, 
    TitleContainer, 
    ButtonsContainer
} from './signIn.styles.js';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

// converted from a class to functional component to use React Hooks
const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    
    const {email, password} = userCredentials;

    const handleOnSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleOnChange = event => {
        const {value, name} = event.target;

        // we spread in our userCredentials and update the value that needs to be changed.
        setCredentials({...userCredentials, [name]: value})
    }

    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleOnSubmit}>
                <FormInput
                    name='email'
                    value={email}
                    type='email'
                    handleOnChange={handleOnChange}
                    label='Email'
                    required />

                <FormInput 
                    name='password' 
                    value={password} 
                    type='password' 
                    handleOnChange={handleOnChange}
                    label='Password'
                    required/>

                <ButtonsContainer>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>

                    <CustomButton type='button'
                        onClick={googleSignInStart} isGoogleSignIn>
                        Sign In with Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);