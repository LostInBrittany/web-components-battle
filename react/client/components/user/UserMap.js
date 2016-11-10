"use strict";

import reactPolymer from 'react-polymer'; //IMPORTANT: Must be imported before React.

import React from "react";

import UserCard from "./UserCard.js";

import { connect } from "react-redux";

import { getUsers} from "../../actions/users.js";


class UserMap extends React.Component {
  
  constructor() {
        super();
        reactPolymer.registerAttribute('data-api-key');
        
    }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    
    console.log('CurrentUSer'+this.props.params.id);
    return (
      <div className="row map">
          <google-map latitude="48.8534100" longitude="2.3488000" fit-to-markers data-api-key="AIzaSyB4voafjokZbBCNj4AdylLknJwNmjkbxEg">    
              {this.renderUsers()}
          </google-map>
      </div>
    );
  }



  filterUsers(searchKey, users) {
    return users.filter(user => user.firstname.toLowerCase().match(searchKey.toLowerCase()));
  }

  renderUsers() {
    const { users, searchKey } = this.props;
    return users.map(user => this.renderUser(user));
  }

  renderUser(user) {
    var open=(this.props.params.id===user.id);
    return (      
      <google-map-marker open={open} key={user.id} latitude={user.geo.lat} longitude={user.geo.lng}
        draggable="true" animation="DROP" title={user.firstname + user.lastname }>
        <section className="layout vertical center">
          <a className="username">
              <span>{user.firstname}</span>
              <span className="lastname">{user.lastname}</span>
          </a>
          <img src={user.photo}/>
      </section>
      </google-map-marker>
    );
  }

}

export default connect(state => state.users, { getUsers })(UserMap);
