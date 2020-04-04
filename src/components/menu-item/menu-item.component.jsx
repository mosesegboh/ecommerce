import React from 'react';
import './menu-item.styles.scss';

//we are not returning any state  so lets just render
//we want to dynamically enter the title as a props to be used later so we destructure it for now by removing props. 
//which means we are striping off that props value off the title so that we can use the title where ever we want instead of props.title which will just be perculiar to this compnent
//jsx by defaulthas some styles property that can apply to components
const MenuItem = ({title,imageUrl,size}) => (
    <div 
    // you can also add extre classes dynamically like this below
    className={`${size} menu-item`}>
        <div className='background-Image'   style={{
        // we passing the bacakgorund image as a style to this jxs css in the format below
        //this also enables us to dynamically make changes to our css values
        //we also have to reference this in our css file for any properties you want it to have
        //we broght the background image div because we want to see the effect of it within the div an dnot making the parent div bigger
        backgroundImage: `url(${imageUrl})`
    }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);
export default MenuItem;