import User from "./2. Models/user.js";
import UserService from "./3. Services/userService.js";
import {validate, sendMessage} from "./1. Functions/functions.js"

const user = new User('KallE', 'kArlSsoN', 'kalle@karlsson.com','abc123' );

//UserService.signUp(user);

validate(user, u=> UserService.signUp(u));

sendMessage('kalle', message =>console.log(message));

