import connect  from '@vkontakte/vkui-connect';
connect.send('VKWebAppInit', {});

const getUserInfo = (callbackFunction) =>{
    connect.send("VKWebAppGetUserInfo", {});
    connect.subscribe((data)=>{
        if(data.detail.data){
            let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
            registrationBody.name = data.data.first_name + " " + data.data.first_name;
            registrationBody.first_name = data.detail.data.first_name;
            registrationBody.last_name = data.detail.data.last_name;;
            localStorage.setItem('RegistrationBody', JSON.stringify(registrationBody));
            return;
        }
        alert("Ошибка вк!");
    })
};

const getPhoneNumber = (callbackFunction) =>{
    connect.send("VKWebAppGetPhoneNumber", {});
    connect.subscribe((data)=>{
        console.log(data);
        if(data.detail.data){
            let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
            registrationBody.phone = "+" +  data.detail.data.phone_number;
            localStorage.setItem('RegistrationBody', JSON.stringify(registrationBody));
            callbackFunction(data.detail.data.phone_number)
            return;
        }
        alert("Ошибка вк!");
    })
};


export default {
    getUserInfo,
    getPhoneNumber
};