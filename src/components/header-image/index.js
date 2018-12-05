import React from 'react';
import './index.css';

const HeaderImage = (props) => (
    <div className="club_banner" style={{backgroundImage : 'url(' + props.image + ')'}}>
        {props.children}
    </div>
);

export default HeaderImage;