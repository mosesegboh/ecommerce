import React from 'react';
//import link to link our logo to the home page
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';


const Header =()=>(
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
        </div>
    </div>
)

export default Header;