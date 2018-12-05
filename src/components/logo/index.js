import React from 'react';
import './index.css';

const Logo = (props) => (
    props.logIns ? <div className="logo_style logo_and_inscript"></div> : <div className="logo_style logo"></div>
);

export default Logo;  