import React from 'react';
import history from '../../../history';
import Button from '../../../components/button';
import Input from '../../../components/input';
import VkHelper from '../../../vk-helper';
import Helper from '../../../helpers'; 
import './index.css';

class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            number : JSON.parse(localStorage.getItem('RegistrationBody')).phone
        }
        this.onSubmit = this.onSubmit.bind(this.onSubmit);
    }
    componentWillMount(){
        VkHelper.getPhoneNumber(phoneNumber =>{
            this.setState({
                number : phoneNumber
            })
        })
    }

    onSubmit(event){
        event.preventDefault();
        let number = event.target[0].value.replace(/[\s]/g , '');
        let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
        registrationBody.phone = number
        localStorage.setItem('RegistrationBody', JSON.stringify(registrationBody));
        Helper.athorization(
            res => {
                console.log(res);
                if(res.errors && res.errors[0].status === 400){
                    history.push('/registration');
                    return;
                }
                console.log(res);
                localStorage.setItem('isRegistred', 'true');
                history.push('/code');
                return;
            },
            err => {alert(err)},
            {phone : number}
        );
    }

    render () {
        return (
            <div className="blue-container">
                <form className="container-margin login-main" onSubmit={this.onSubmit}>
                    <div className="login-label">
                        <label>Введите свой номер телефона с <p/> которым регестрировались</label>
                        <Input 
                            mask="+7 (999) 999-99-99" 
                            required 
                            placeholder="+7 (000) 000-00-00" 
                            type="tel"
                            value={this.state.number}
                        />
                    </div>
                    <div className="to-bottom">
                        <Button 
                            type="submit" 
                            btnText="продолжить"
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default LoginPage;