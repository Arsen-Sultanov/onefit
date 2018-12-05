import React from 'react';
import history from '../../../history';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Helper from '../../../helpers'; 
import './index.css';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
        if(registrationBody.number){
            let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
            this.state = {
                number : JSON.parse(localStorage.getItem('RegistrationBody')).phone
            };
            Helper.athorization({phone : registrationBody.phone});
        }else{
            this.state = {
                number : ""
            }
        }
        this.onSubmit = this.onSubmit.bind(this.onSubmit);
    }
    onSubmit(event) {
        let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
        registrationBody.phone = event.target[0].value.replace(/[\s]/g , '');
        localStorage.setItem('RegistrationBody', JSON.stringify(registrationBody));
        Helper.athorization(
            {phone : registrationBody.phone}
        );
        event.preventDefault();
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