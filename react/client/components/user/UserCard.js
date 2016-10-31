"use strict";

import React from "react";

import UserInfo from "./UserInfo";
import { Link } from "react-router";

class UserCard extends React.Component {
  render() {
    const { id, firstname, lastname, photo, manager, contactInfoPro, email, phone } = this.props;

    return (
      <div className="card">
        <div className="card-image">
          <img src={photo} />
          <span className="card-title">{`${firstname} ${lastname}`}
          <Link to={`/user/map/${id}`} className="btn-flat"><i className="map material-icons md-36">add_location</i></Link>
          </span>                    
        </div>
        <div className="card-content">          
          <UserInfo icon="md-email" value={email} />
          <UserInfo icon="md-phone" value={phone} />
          <UserInfo label="Manager" value={manager} />
        </div>        
      </div>
    );
  }  
}

UserCard.defaultProps = {
  photo: "static/images/profile.svg"
};

export default UserCard;
