import React from 'react';
import './index.css';
const Addres = (props) => (
    <div className="cd_address">
        <p>
            {props.address ? props.address + ", ": null}
            {props.metro ? props.metro : null}
        </p>
        <a className="cda_link">
            <div className="cda_icon"></div>
        </a>
    </div>
);
export default Addres;