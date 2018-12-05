import React from 'react';
import './index.css';

const Dash = (props) => (
    <div className="cbid_dash">
       {props.silver ? <div className="cbid_silver">СЕРЕБРО</div> : null}
       {props.gold ? <div className="cbid_gold">ЗОЛОТО</div> : null}
       {props.platinum ? <div className="cbid_plat">ПЛАТИНА</div> : null}
    </div>
);
export default Dash;