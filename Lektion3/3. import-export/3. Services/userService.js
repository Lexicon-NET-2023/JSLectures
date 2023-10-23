class UserService{
    static signUp(userObj){
        console.log(`register the user ${userObj.firstName}`);
        setTimeout(() =>{
            console.log(userObj)
        }, 1000)
    }

    static signIn(email, password){
        console.log('signing in the user');
        setTimeout(()=> {
            console.log(email, password)
        }, 1000)
    }
}

export default UserService;