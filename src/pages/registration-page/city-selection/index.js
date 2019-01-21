import React from 'react';
import Logo from '../../../components/logo';
import history from '../../../history';
import Helper from '../../../helpers'; 

import './index.css';

class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            isSelectedItem : false,
            btnColor : {backgroundColor : '#e5e5e5'},
            selectedId : 0
        };
        this.mapList = this.mapList.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputClick = this.inputClick.bind(this);
    }
    componentDidMount() {
        localStorage.getItem('cityList') ? (
            this.setState({
                data :  JSON.parse(localStorage.getItem('cityList'))
            }) ) :
            Helper.getCityList( res => {
                localStorage.setItem('cityList' , JSON.stringify(res.data));
                this.setState({
                    data : res.data
                })
            })
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.isSelectedItem){
            let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
            registrationBody.city_id = this.state.selectedId;
            localStorage.setItem('RegistrationBody', JSON.stringify(registrationBody));
            localStorage.setItem('city' , this.state.selectedId);
            localStorage.setItem('isRegistred' , true);
            history.push('/code');
        }
        return 0;
    }
    inputClick(event) {
        this.setState({
            isSelectedItem : true, 
            btnColor : {backgroundColor : '#6fc617'},
            selectedId : event.target.value 
        });
        return 0;
    }
    mapList() {
        return this.state.data.map((item) => (
            <label key={item.id} className="cnc_item">{item.attributes.name}
                <input type="radio" name="city" value={item.id} onClick={this.inputClick}/>
            </label>));
    }
    render() {
        return (
            <div className="blue-container">
                <Logo logIns={true}/>
                <div className="city_nav">
                    <p>Выберите ваш город</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="cn_case">
                            {this.mapList()}
                        </div>
                        <div className="cn_btn_case">
                            <input className="cn_btn" type="submit" 
                            value="Выберите город" style={this.state.btnColor}/>
                        </div>
                    </form>
                </div> 
            </div>
        );
    }
};

export default CityList;