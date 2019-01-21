import React from 'react';
import history from '../../../history';
import Button from '../../../components/button';
import Input from '../../../components/input';
import './index.css';

class CodePage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this.onSubmit);
    }
    onSubmit(e){
        e.preventDefault();
        let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
        registrationBody.name = e.target[0].value + " " + e.target[1].value;
        registrationBody.first_name = e.target[0].value;
        registrationBody.last_name = e.target[1].value;
        localStorage.setItem('RegistrationBody', JSON.stringify(registrationBody));
        history.push('/citylist');
    }
    render() {
        return (
            <div className="blue-container">
                <form onSubmit={this.onSubmit} className="container-margin login-main">
                    <div className="login-label">
                        <Input 
                            required 
                            placeholder="Имя" 
                            type="text"
                            value={JSON.parse(localStorage.getItem('RegistrationBody')).first_name}
                        />
                        <Input 
                            required 
                            placeholder="Фамилия" 
                            type="text"
                            value={JSON.parse(localStorage.getItem('RegistrationBody')).last_name}
                        />
                    </div>
                    <div className="to-bottom">
                        <label>Нажимая <q>Продолжить</q> вы соглашаетесь <p/> с Оферта с физичискими лицами <p/> и Обработка персональных данных</label>
                        <Button  type="submit" btnText="продолжить"/>
                    </div>
                </form>
            </div>
        )
    }
};
export default CodePage;