import React from 'react';
import './index.css';

const Trainer = (props) => (
    <div class="ccc_item">
        <div class="ccci_img" style={{backgroundImage : props.img}}></div>
        <div class="ccci_txt">
            <h5>{props.name}</h5>
            <p>{props.qualification}</p>
        </div>
    </div>
);

export default Trainer;