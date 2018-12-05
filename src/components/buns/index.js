import React from 'react';
import './index.css';

const Buns = (props) => (
    <div className="cd_buns">
        {props.wifi ? <div className="bdb_item bdb_wifi"></div> : null}
        {props.food ? <div className="bdb_item bdb_food"></div> : null}
        {props.coffee ? <div className="bdb_item bdb_coffee"></div> : null}
    </div>
);

export default Buns;