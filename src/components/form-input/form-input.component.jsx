import React from 'react';
import './form-input.styles.scss';

//1.this form was created to handle our form input
//2.we destructured here because we are going to spread handle change on the rest of the input feilds
const FormInput = ({ handleChange, label, ...otherProps }) => (
    //3.we want the label and the input to be together so we wrap them all up in a group
    <div className="group">
        {/* 4.otherProps such as the name email and other props displayed in other sign in form will get passed in here */}
        <input className='form-input' onChange={handleChange} {...otherProps} type="text"/>
        {/* 5.we are confirming if we need  to generate a label here or not */}
        {
            //6. this label will always have a form-input-label property but the shrink label will be passed in when the user has typed something
            label ?
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
            </label>
            :null
        }
    </div>
);
export default FormInput;

