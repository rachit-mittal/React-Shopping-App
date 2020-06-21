import React from 'react';

import './signinpage.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SigninPage = () => (

    <div className="sign-in-page">
        <SignIn />
        <SignUp />
    </div>
    
)

export default SigninPage;