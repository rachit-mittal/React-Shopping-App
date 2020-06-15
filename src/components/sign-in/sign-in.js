import React, {Component} from 'react';

import './sign-in.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';


class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState ({email:'', password:''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState ({[name]: value})
        console.log('email: '+ this.state.email);
        console.log('password: '+ this.state.password);
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                

                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label ="email"  />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label ="password"  />

                    <CustomButton >Sign In</CustomButton>
                    <CustomButton isGoogleSignIn>Sign In with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;