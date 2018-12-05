import React from 'react';
import InputMask from 'react-input-mask';
import './index.css';

const Input = (props)=>(
        <InputMask {...props} className='input'/>
);

export default Input;