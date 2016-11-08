"use strict";
import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router";
import { connect } from "react-redux";
import { logout } from "../../actions/login.js";

class Nav extends React.Component {

  componentDidMount() {
    this.refs.logoutLink.addEventListener("logout", this.logout.bind(this));    
  }


  render() {
    let display='hidden';    
    let conectedUser=false;
    const { currentUser } = this.props;
    if(currentUser && currentUser.firstname){
        display='visible';
    }
    return (
      <nav className="light-blue darken-4">
        <div className="nav-wrapper appNav">
          <Link to="/">
            <img className="logo" src="static/images/logo-people.svg" />
          </Link>
          <span className="flex"></span>          
          <user-link style={{visibility:display}} ref="logoutLink" name={currentUser.firstname}></user-link>                    
        </div>
      </nav>
    );
  }

  logout() {
    this.props.logout();
    window.location.hash='/login';
  }
}

//export default Nav;
export default connect(state => state.login,{ logout })(Nav);
