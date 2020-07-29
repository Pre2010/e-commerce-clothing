import React, { Component } from 'react';
import './signIn.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleOnFormSubmit = event => {
        event.preventDefault();

        this.setState(
            {
                email: '', 
                password: ''
            }
        )
    }

    handleOnChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleOnFormSubmit}>
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

                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>

                        <CustomButton type='button'
                            onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;