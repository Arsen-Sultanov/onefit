import React from 'react';
import './index.css';

const Star = props => {
    return props.like ? (<div className="cii_like cii_likeActive"></div>) : (<div className="cii_like"></div>);
}
export default Star;