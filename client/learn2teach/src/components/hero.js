import React from 'react';

const Hero = ({ title, subtitle } ) =>{
    return(
        <div data-testid="heroContainer" className="heroContainer">
           <h1 data-testid="title">{title}</h1>
           <h2 data-testid="subtitle">{subtitle}</h2>
        </div>

    )
}

export default Hero;