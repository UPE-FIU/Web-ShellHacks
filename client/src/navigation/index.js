import React, { Component } from 'react'
import { Route,  Switch } from 'react-router-dom'
//import NavBar from '../Components/NavBar'
import Dashboard from '../pages/dashboard';
import Registration from '../pages/registration'
import Application from '../pages/application'
import Faq from '../pages/faq'
import Schedule from '../pages/schedule'
import Profile from '../pages/profile'
import './style.css'
class Navigation extends Component {


    render() {
        return (
                <div className="navPageContainer">
                    {/* <NavBar className="navbar" /> */}
                    {/* DO NOT REMOVE APP CLASS */}
                    <div className="pages">
                        <Switch>
                            <Route exact path="/" component={Registration} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/application" component={Application} />
                            <Route exact path="/faq" component={Faq} />
                            <Route exact path="/schedule" component={Schedule} />
                            <Route exact path="/profile" component={Profile} />
                        </Switch>
                    </div>
                </div>
        )
    }
}

export default Navigation