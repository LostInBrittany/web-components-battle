"use strict";

import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router";

class Nav extends React.Component {

  componentDidMount() {
    console.log('mount');    
    this.refs.logoutLink.addEventListener("logout", this.logout);    
  }


  render() {
    return (
      <nav className="light-blue darken-4">
        <div className="nav-wrapper">
          <Link to="/">
            <img className="logo" src="static/images/logo-people.svg" />
          </Link>
          <user-link ref="logoutLink" name="Cyril Balit" logout={this.logout}></user-link>
        </div>
      </nav>
    );
  }

  logout() {
    window.location.hash='/login';
  }
}

export default Nav;
