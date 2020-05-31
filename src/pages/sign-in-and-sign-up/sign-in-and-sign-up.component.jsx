import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up' >
        {/* 1.render our component */}
        <SignIn />
        <SignUp />
    </div>
);

//a form-input feild is then created to handle our form inputs
export default SignInAndSignUpPage;