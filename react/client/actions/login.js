"use strict";


function onLogin (user) {
    dispatch({
      type: "ON_LOGIN",
      user
    });    
}



export { onLogin };
