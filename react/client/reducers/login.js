"use strict";

import { createStore } from "redux";

const INITIAL_STATE = {
  currentUser: {}
};


function loginUpdate (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ON_LOGIN':
      return Object.assign({}, state, {currentUser: action.user});    
    case 'ON_LOGOUT':
      return Object.assign({}, state, {currentUser: {}});
    default:
      return state;
  }
}

export default loginUpdate;
