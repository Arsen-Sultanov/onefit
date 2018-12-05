import React from 'react';
import Button from '../../../components/button';
import Input from '../../../components/input';
import History from '../../../history';
import Helper from '../../../helpers'; 
import './index.css';
class CodePage extends React.Component{
    constructor(props) {
        super(props); 
        localStorage.getItem('isRegistred') ? 
        Helper.getToken({phone : JSON.parse(localStorage.getItem('RegistrationBody')).phone, }) : 
        Helper.registration(JSON.parse(localStorage.getItem('RegistrationBody')));
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        Helper.getToken(
            {
            phone : JSON.parse(localStorage.getItem('RegistrationBody')).phone, 
            code : event.target[0].value
            },
            () => {}
        );
    }
    render() {
        return (
            <div className="blue-container">
                <form className="container-margin login-main" onSubmit={this.onSubmit}>
                    <div className="login-label">
                        <label>Вам на телефон выслано СМС<p/>с кодом подтверждения регистрации</label>
                        <Input placeholder="* * * * * *" type="password" autocomplete="new-password" />
                        <label>Отправить СМС повторно</label>
                    </div>
                    <div className="to-bottom">
                        <Button btnText="продолжить" type="submit" />
                    </div>
                </form>
            </div>
        );
    }
};
export default CodePage;