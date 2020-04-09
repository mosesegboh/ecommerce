import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

//1. because we have to store what the user is typing, we need to use a class in component

class SignIn extends React.Component{
    constructor(props){
    super(props);
    //the state will store an empty string of our email and password at first
    this.state={
        email:'',
        password: ''
        }   
    }
    //4.the function will handle our subission button
    handleSubmit = event => {
        //5.this function will prevent the default submit action from firing,we want full control of what is going to happen as regards the form
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = event => {
        //6.this pulls in the respective values from our form
        //7.the input target will be what they just set or typed in i.e name and value of input feild
        const { value, name } = event.target;
        //9. we then set the state to whatever we input the user sets in,then we can pass thesame function to both feilds
        this.setState({[name]: value})
    }

    //2. then the render a div with the sign in form
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                {/* 3. this function declared below will handle out form submission */}
                {/* 8.the handleChange function below will receive what is inputed handle what was inputed */}
                {/* 10.change out input to form inpur using what we created in other form input component */}
                {/* 11.then we change our onchange function to handle change */}
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} handleChange={this.handleChange} type="email" label="email" required/>
                    <FormInput name="password" value={this.state.password} handleChange={this.handleChange} type="password" label="password" required/>
                    {/* 12.we used the customer button input here */}
                    <div className='buttons'>
                        <CustomButton type="submit" value='Submit Form'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
//9.
export default SignIn;