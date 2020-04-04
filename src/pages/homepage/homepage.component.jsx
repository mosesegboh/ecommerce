import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

//let make the homepage a functional compenent becasue we dont need any lilfecycle methods or store a state

const HomePage = () => (
    <div className = 'homepage'>
        <Directory/>
    </div>
);

export default HomePage;
