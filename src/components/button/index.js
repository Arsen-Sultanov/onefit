import React from 'react';
import './index.css'

const Button = (props)=>(
    <input 
       
        name={props.name} 
        type={props.type}
        className={props.className ? "button " + props.className :  "button " } 
        onClick={props.onClick} 
        value={props.btnText.toLowerCase()}
    />
);

export default Button;