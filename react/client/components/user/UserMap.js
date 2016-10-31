"use strict";

import reactPolymer from 'react-polymer'; //IMPORTANT: Must be imported before React.

import React from "react";

import UserCard from "./UserCard.js";

import { connect } from "react-redux";

import { getUsers} from "../../actions/users.js";


class UserMap extends React.Component {
  
  constructor() {
        super();
        reactPolymer.registerAttribute('api-key');
        
    }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="row">
          <google-map latitude="48.8534100" longitude="2.3488000" fit-to-markers api-key="AIzaSyB4voafjokZbBCNj4AdylLknJwNmjkbxEg">    
              
          </google-map>
      </div>
    );
  }



  filterUsers(searchKey, users) {
    return users.filter(user => user.firstname.toLowerCase().match(searchKey.toLowerCase()));
  }

  renderUsers() {
    const { users, searchKey } = this.props;
    const displayedUsers = this.filterUsers(searchKey, users);

    return displayedUsers.map(user => this.renderUser(user));
  }
}

export default connect(state => state.users, { getUsers })(UserMap);
