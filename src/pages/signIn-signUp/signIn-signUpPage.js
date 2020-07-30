import React from  'react';
import './signIn-signUpPage.scss';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';
const SignInAndSignUpPage = () => {
    return (
        <div className='signIn-signUp'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage;