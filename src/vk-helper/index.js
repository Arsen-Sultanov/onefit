import connect  from '@vkontakte/vkui-connect';
connect.send('VKWebAppInit', {});
connect.send("VKWebAppGetPhoneNumber", {});
connect.send("VKWebAppGetUserInfo", {});

const getUserInfo = (data) =>{
    let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
    registrationBody.name = data.data.first_name + " " + data.data.first_name;
    registrationBody.first_name = data.data.first_name;
    registrationBody.last_name = data.data.last_name;;
    localStorage.setItem('RegistrationBody', JSON.stringify(registrationBody));
    return ;
};

const getPhoneNumber = (data) =>{
    let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
    registrationBody.phone = number
    localStorage.setItem('RegistrationBody', JSON.stringify(registrationBody));
    return;
};


const vkHelper = (data) => {
    let ParseData = JSON.parse(data);
    if(ParseData.detail.type){
        getPhoneNumber(ParseData.detail);
        getUserInfo(ParseData.detail);
    }
    return;
};

connect.subscribe((data)=>vkHelper(data));