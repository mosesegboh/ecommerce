import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


//1. to use state for user auth we convert the function to class
class App extends React.Component {
    constructor(){
      super();
      this.state={
        currentUser: null
      };
    }

  //3.we need to unsubscribe from auth so we use the process below
  unsubscribeFromAuth = null;

componentDidMount(){
  //2.this onauth method below,tells us when the sttae of the user changes automatically by google,google handles the state changes for us,its called an open subscription because it is open when the user signs in and the users login is alwaysavailable
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=> {
      this.setState({currentUser:user});
    });
}

//4.to unsubscribe a user,you can call the function below when the component unmounts
//5.this is how firbase helps us handle login user state regarding 
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){

    return (
      <div>
        {/* placing the header above here basically means the header will always be available despite what the router decide to render to the page */}
        <Header currentUser={this.state.currentUser}/>
        {/* The <Switch /> component will only render the first route that matches/includes the path. Once it finds the first route that matches the path, it will not look for any other matches. Not only that, it allows for nested routes to work properly, which is something that <Router /> will not be able to handle */}
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );

  }

}

export default App;
