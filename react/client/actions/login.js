"use strict";


function onLogin (user) {  
  return (dispatch) => {
    dispatch({
      type: "ON_LOGIN",
      user: user
    });
  } 
}

function logout () {  
  return (dispatch) => {
    dispatch({
      type: "ON_LOGOUT",
    });
  } 
}



export { onLogin, logout };
