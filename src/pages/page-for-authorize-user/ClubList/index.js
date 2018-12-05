import React from 'react';
import { Link } from 'react-router-dom'
import Helper from '../../../helpers'; 

import './index.css';

import HeaderSearch from '../../../components/header-search';
import FooterNavigation from '../../../components/footer-navigation';
import RoundAvatar from '../../../components/round-avatar';
import Star from '../../../components/star';

class ClubList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        };
        this.mapItems = this.mapItems.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }
    componentDidMount() {
        Helper.getClubList(
            (res) => {
                console.log(res);
                this.setState({
                    data : res.data
                });
            }, 
            localStorage.getItem('city'),
            1
        );
        localStorage.setItem('page', 2)
    }
    onScroll(e) {
        if(e.target.scrollTop + e.target.clientHeight + 5 >= e.target.scrollHeight && localStorage.getItem('page') != 1){
            Helper.getClubList(
                (res) => {
                    console.log(res.data);
                    this.setState((prevState) => {
                        return {data :  [...prevState.data, ...res.data]}
                    });
                    let page = localStorage.getItem('page')
                    page++;
                    localStorage.setItem('page', page,)
                }, 
                localStorage.getItem('city'),
                localStorage.getItem('page')
            );
        }
    }
    mapItems() {
        return this.state.data.map(item => (
            <div className="cl_item" key={item.id}>
                <Link to={"/" + item.id} >
                        <RoundAvatar image={item.attributes.logo}/>
                        <div className="cii_desc">
                            <h4>{item.attributes.name}</h4>
                            <p>{item.attributes.metro}</p>
                        </div>
                </Link>
                <a href="#">
                    <Star like={item.attributes.is_favorites}/>
                </a>
            </div>
        ));
    }
    render() {
        return (
            <div className="container">
                <HeaderSearch/>
                <main onScroll={this.onScroll}>
                    {this.mapItems()}
                </main>
                <FooterNavigation/>
            </div>
        )
    }
}

export default ClubList;