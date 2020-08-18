import React from  'react';
import {SignInSignUpContainer} from './signIn-signUpPage.styles';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';
const SignInAndSignUpPage = () => {
    return (
        <SignInSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInSignUpContainer>
    )
}

export default SignInAndSignUpPage;