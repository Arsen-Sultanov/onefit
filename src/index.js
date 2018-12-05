import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';

import VkHelper from './vk-helper';
import hist from './history';
import RouterList from './router';

import 'reset-css';
import './index.css';






// localStorage.clear();

ReactDOM.render(
    <Router history={hist}>
            <RouterList/>
    </Router>,
    document.getElementById('root')
);

