import React from 'react';
//import link to link our logo to the home page
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

import {auth} from '../../firebase/firebase.utils';


const Header =({currentUser})=>(
    <div className='header'>
    {/* linking to our hompage */}
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                //itenarery operator to check if user is logged in or not
                currentUser ? (
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                )  : (
                <Link className='option' to='/signin'>SIGN IN</Link>
                )}
        </div>
    </div>
);

export default Header;