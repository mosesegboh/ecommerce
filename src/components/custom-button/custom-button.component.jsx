import React from 'react';

import './custom-button.styles.scss';

//1.render a stateless button component
//2 we will need the styles for this button accross our application
const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;