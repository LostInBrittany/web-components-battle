"use strict";

import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import { filterUsers } from "../../actions/users.js";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <section className="links">
        <Link to={`/users/list`} className="btn-flat"><i className="material-icons md-36">view_module</i><span>List</span></Link>
        <Link to={`/users/map`} className="btn-flat"><i className="material-icons md-36">add_location</i><span>Map</span></Link>        
      </section>
    );
  }
}



export default SearchBar;
