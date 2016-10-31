"use strict";

import React from "react";

import UserList from "../components/user/UserList.js";

import SearchBar from "../components/search/SearchBar.js";
import { Link } from "react-router";

const styles = {
  addButton: {
    bottom: "45px",
    right: "24px"
  }
};

class Users extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        {this.props.children}        
      </div>
    )
  }
}

export default Users;
