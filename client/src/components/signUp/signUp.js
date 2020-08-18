import React, { useState } from 'react';
import {SignUpContainer, TitleContainer, IncorrectPasswordContainer} from './signUp.styles.js';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions';


const SignUp = ({signUpStart}) => {
    // we could use individual useState()'s for each property,
    // but in this case since we are using a generic method, handleOnChange, to change a dynamic value
    // we don't need to have individual useState()'s since that method takes care of it
    const [userCredentials, setUserCredentials] = useState(
        {
            displayName: '', 
            email: '', 
            password: '', 
            confirmPassword: ''
        }
    );    

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleOnSubmit = async event => {
        // prevents the form's default submit event
        event.preventDefault();
        signUpStart({displayName, email, password});
    };

    const handleOnChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    };
        
    return (
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleOnSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleOnChange}
                    label='Display Name'
                    required/>

                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleOnChange}
                    label='Email'
                    required/>

                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleOnChange}
                    label='Password'
                    required/>

                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleOnChange}
                    label='Confirm Password'
                    required/>

                    {
                        // if our password and confirmPassword is not null AND are not equal to each other, show the IncorrectPasswordContainer and disable
                        // the Custom Button, else don't show IncorrectPasswordContainer and enable the button
                        ((password && confirmPassword) && (password !== confirmPassword)) ?
                            <div>
                                <IncorrectPasswordContainer>Passwords don't match. Please make sure the password is entered correctly and try again.</IncorrectPasswordContainer>
                                <CustomButton disabled type='submit'>SIGN UP</CustomButton>
                            </div>
                        : <CustomButton type='submit'>SIGN UP</CustomButton>
                    }
            </form>
        </SignUpContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    // we pass our userCredentials to our dispatch which will pass it along to our saga listening for this action.
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);