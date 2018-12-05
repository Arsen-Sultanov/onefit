import React from 'react';
import './index.css';

const RoundAvatar = props => (
    <div 
        className="cii_img" 
        style={ {backgroundImage : 'url(' + props.image + ')'}} 
    ></div>
);

export default RoundAvatar;