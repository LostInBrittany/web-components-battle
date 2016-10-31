/**
 * Created by adzs637 on 02/03/2015.
 */
var merge = require('merge');

var user={
  "firstname": "BALIT CYRIL",
  "lastname": "BALIT CYRIL",
  "username": "adzs637",
  "authorities": ["EMPTY","FAP"]
};
var loginError = {
  "errorMessage":"Login failed"
};

var expireError = "[LDAP: error code 49 - INVALID_CREDENTIALS: Bind failed: NO_SUCH_OBJECT - Code utilisateur inconnu ou expiré.]"

var resetError = {
  "errorMessage":"New password incorrect"
};


exports.login = function(req, res){
  var username = req.body.j_username;
  switch(username){
    case 'loginerror':
      res.status(500).json(loginError);
      break;
    case 'expirerror':
      res.status(500).json(expireError);
      break;
    case 'reseterror':
      res.status(500).json(resetError);
      break;
    case 'norole':
      user.authorities=[];
      res.status(200).json(user);
      break;
    default:
      user.authorities.push(username.toUpperCase());
      res.status(200).json(user);
  }
};



exports.logout = function(req, res){
  res.status(200).json({response:'OK'});
};
