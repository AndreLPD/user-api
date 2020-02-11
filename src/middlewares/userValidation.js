function userValidation(username){
const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.[!@#\$%\^&])(?=.{6,})";
return regex.match(username);
}

module.exports = userValidation;