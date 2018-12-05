import React from 'react';
import './index.css';

const WorkTime = (props) => (
    <div className="cdo_time">
        <i></i>
        <p>Режим работы: <span>{props.time}</span></p>
    </div>
);

export default WorkTime;