import { fixName } from "../1. Functions/functions.js";

export default class User{
    constructor(firstName, lastName, email, password){
        this.firstName = fixName(firstName);
        this.lastName = fixName(lastName);
        this.email = email;
        this.password = password;
    }
}