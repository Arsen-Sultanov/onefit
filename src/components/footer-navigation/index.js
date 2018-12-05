import React from 'react';
import './index.css';

const FooterNavigation = (props) => (
    <nav>
        <a href="/graph.html" className="nav_item nav_graph">
            <div className="ni_icon"></div>
            <p className="ni_name">Рассписание</p>
        </a>
        <a href="/club_list.html" className="nav_item nav_clubs">
            <div className="ni_icon"></div>
            <p className="ni_name">Клубы</p>
        </a>
        <a href="/coach.html" className="nav_item nav_coach">
            <div className="ni_icon"></div>
            <p className="ni_name">Мои занятия</p>
        </a>
        <a href="/like.html" className="nav_item nav_like">
            <div className="ni_icon"></div>
            <p className="ni_name">Избраное</p>
        </a>
        <a href="/acc.html" className="nav_item nav_acc">
            <div className="ni_icon"></div>
            <p className="ni_name">Кабинет</p>
        </a>
    </nav>
);

export default FooterNavigation;