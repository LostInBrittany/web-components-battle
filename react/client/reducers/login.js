"use strict";

import { createStore } from "redux";

const INITIAL_STATE = {
  currentUser: null
};

function loggin(user) {
  return user;
}

function loginUpdate (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ON_LOGIN':
      return Object.assign({}, state, {currentUser: action.user});    
    default:
      return state;
  }
}

export default loginUpdate;
