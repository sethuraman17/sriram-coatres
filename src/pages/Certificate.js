import React, { useState } from 'react';
import './Certificate.css';
import img1 from './images/cert.png'
const Services = () => {
    return (
        <div className="certificate-container">
            <img 
                src={img1} 
                alt={'loading...'} 
                className="full-screen-image" 
            />
        </div>
    );
}

export default Services;
