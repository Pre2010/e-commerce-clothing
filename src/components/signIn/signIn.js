import React, { Component } from 'react';
import {
    SignInContainer, 
    TitleContainer, 
    ButtonsContainer
} from './signIn.styles.js';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

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
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
    }

    handleOnChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        const {googleSignInStart} = this.props;
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
                            onClick={googleSignInStart} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);