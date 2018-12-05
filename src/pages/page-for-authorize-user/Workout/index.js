import React from 'react';
import Helper from '../../../helpers'; 

import HeaderImage from '../../../components/header-image';
import FooterNavigation from '../../../components/footer-navigation';
import RoundAvatar from '../../../components/round-avatar';
import Star from '../../../components/star';

import './index.css';

class Workout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="blue-container">
                <HeaderImage/>
            </div>
        )
    }
};

export default Workout;