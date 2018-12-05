import React from 'react';
import './index.css';

const Limit = (props) => (
    <div className="cdo_limit">
        <i></i>
        <p>Лимит осталось: <span>{props.limit}</span></p>
    </div>
);

export default Limit;