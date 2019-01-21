import History from '../history';
const httpHeader =  {'Content-Type' : 'application/json; charset=utf-8'};
//const baseUrl = 'https://onefit.ru/api/v1';
//const baseUrl = 'http://localhost:3001/api/v1';
const baseUrl = 'https://react-test.tw1.su/back/api/v1';

const basePostConfig = {
    method: 'POST',
    headers: httpHeader
};
const baseGettConfig = {
    method: 'GET',
    headers: httpHeader
};

const getToken = (data, callbackFunc) => {
    console.log(data);
    fetch(baseUrl+'/login', {
            ...basePostConfig, 
            body: JSON.stringify(data)
        })
    .then(res => res.json())
    .then(
        res => {
            if(res.errors){
                console.log(res.errors[0]);
            }
            //localStorage.setItem('token', res.data.token);
        }
    )
    .then(callbackFunc)
    .catch((err)=>{alert(err)});
};

const registration = (data) => {
    console.log('func', data);
    fetch(baseUrl+'/register', {
            ...basePostConfig, 
            body: JSON.stringify(data)
        }
    )
    .then(res => res.json())
    .catch((err)=>{alert(err)});
};

const athorization = (data) => {
    fetch(baseUrl+'/login', {
            ...basePostConfig, 
            body: JSON.stringify(data)
        }
    )
    .then(res => res.json())
    .then(
        res => {
            if(res.errors && res.errors[0].status === 400){
                History.push('/registration');
                return;
            }
            localStorage.setItem('isRegistred', 'true');
            History.push('/code');
            return;
        }
    )
    .catch(err => alert(err))
};

const getCityList = (callbackFunc) => {
    fetch(baseUrl+'/cities', baseGettConfig)
    .then(res => res.json())
    .then((data) => {console.log(data); callbackFunc(data)})
    .catch((data) => {alert(data)});
};

const getClubList = (callbackFunc, cityId, page) => {
    fetch(baseUrl+'/halls?filter[city]=' + cityId + '&page[number]=' + page, baseGettConfig)
    .then(res => res.json())
    .then((data) => {console.log(data); callbackFunc(data)})
    .catch((data) => {alert(data)});
};

const getClubAbaut = (callbackFunc, idClub) => {
    fetch(baseUrl+'/halls/' + idClub + '?include=all', baseGettConfig)
    .then(res => res.json())
    .then((data) => {console.log(data); callbackFunc(data)})
    .catch((data) => {alert(data)});
};

export default {getCityList, getClubList, getClubAbaut, athorization, registration, getToken};