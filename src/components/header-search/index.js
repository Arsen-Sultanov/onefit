import React from 'react';
import './index.css';
import SearchInput from '../serch-input';

const HeaderSearch = () => (
    <header>
        <SearchInput />
        <div className="header_nav">
            <a className="hn_item" href="club_map.html">
                <div className="hn_map"></div>
            </a>
            <a className="hn_item" href="club_filter.html">
                <div className="hn_filter"></div>
            </a>
        </div>
    </header>
);

export default HeaderSearch;