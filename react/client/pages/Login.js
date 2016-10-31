import reactPolymer from 'react-polymer'; //IMPORTANT: Must be imported before React.
import React, { Component } from 'react';

export default class Login extends Component {

    constructor() {
        super();
        reactPolymer.registerAttribute('login-url');                
        reactPolymer.registerEvent('login-success','login-success');        
    }

    componentDidMount() {
        
    }


    render() {
        var loginUrl = "http://localhost:3001/api/login";
        

        return (
            <div className="login">
                <link rel="import" href="static/elements/frf-login/frf-login.html"/>
                <div className="views">
                    <frf-login ref="frfLogin"                               
                               login-url={loginUrl}                                                              
                               login-success={this.onLogin}>
                        <span id="title">DevFest Nantes</span>
                        <img id="logo" src="/static/images/devfest.jpg"/>
                    </frf-login>
                </div>
            </div>
        );
    }

    onLogin(event) {
        var userInfo = event.target.userInfo.get();
        window.location.hash='/users';
    }

}