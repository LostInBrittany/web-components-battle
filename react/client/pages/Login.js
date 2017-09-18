import reactPolymer from 'react-polymer'; //IMPORTANT: Must be imported before React.
import React, { Component } from 'react';
import { onLogin } from "../actions/login.js";
import { connect } from "react-redux";

class Login extends Component {

    constructor() {
        super();
        reactPolymer.registerAttribute('slot')
        reactPolymer.registerEvent('login-success','login-success');
    }

    componentDidMount() {        
        this.refs.frfLogin.addEventListener("login-success", this.onLogin.bind(this));
    }


    render() {
        var loginUrl = "http://localhost:3001/api/login";
        

        return (
            <div className="login">
                <link rel="import" href="static/elements/frf-login/elements.html"/>
                <link rel="import" href="static/elements/frf-login/frf-login.html"/>
                <div className="views">
                    <frf-login ref="frfLogin"                               
                               login-url={loginUrl}                                                              
                               login-success={(e)=>this.onLogin(e)}>                        
                        <span id="title">Devfest 2017</span>
                        <img slot="logo" id="logo" src="/static/images/gde.png"/>
                    </frf-login>
                </div>
            </div>
        );
    }

    onLogin(event) {
        var userInfo = event.target.userInfo.get();
        this.props.onLogin(userInfo);
        window.location.hash='/users';
    }

}

export default connect(null, { onLogin })(Login);