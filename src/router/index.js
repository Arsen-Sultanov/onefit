import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Code from '../pages/registration-page/Code';
import Login from '../pages/registration-page/Login';
import CityList from '../pages/registration-page/CityList';
import Registration from '../pages/registration-page/Registration';

import ClubList from '../pages/page-for-authorize-user/ClubList';
import ClubAbout from '../pages/page-for-authorize-user/ClubAbout';
import Workout from '../pages/page-for-authorize-user/Workout';


const CheckRegistrationStep = () => {
    window.registrationRouterArray = window.registrationRouterArray || [];
    let registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
    if(window.registrationRouterArray.length < 3){
        if(registrationBody === null){
            localStorage.setItem('RegistrationBody',JSON.stringify({}));
            registrationBody = JSON.parse(localStorage.getItem('RegistrationBody'));
        }
        if(registrationBody.phone === undefined){
            window.registrationRouterArray = [...window.registrationRouterArray, <Route exact key={1} path='/' component={Login}/>];
        }
        if(registrationBody.name === undefined && registrationBody.first_name === undefined && registrationBody.last_name === undefined){
            console.log(window.registrationRouterArray);
            window.registrationRouterArray = [...window.registrationRouterArray, <Route exact key={3} path='/registration' component={Registration}/>];
        }
        if(registrationBody.city_id === undefined ){
            window.registrationRouterArray = [...window.registrationRouterArray, <Route exact key={4} path='/citylist' component={CityList}/>];
        }
    }
    if(localStorage.getItem('isRegistred') || window.registrationRouterArray.length < 4){
        window.registrationRouterArray = [...window.registrationRouterArray, <Route exact key={2} path='/code' component={Code}/>];
    }

    return window.registrationRouterArray;
}

const FirstEntered = () => (
    <Switch>
        {CheckRegistrationStep()}
    </Switch>
);

const Entered = () => (
    <Switch>
        <Route exact path='/clublist' component={ClubList}/>        
        <Route exact path='/clublist/:direction' component={ClubAbout}/>
        <Route exact path='/workout' component={Workout}/>
    </Switch>
);

const RouterList = ()=>{
    return(
        <div className="container">
            {
                localStorage.getItem('token') ? <Entered /> : <FirstEntered />
            }
        </div>
    )
};

export default RouterList;