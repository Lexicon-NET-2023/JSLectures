class User{
    //Private field
    #firstName

    //public prop
    get firstName(){
     return this.#firstName
    }
    set firstName(value){
        this.#firstName = value
    }

    //Constructor
    constructor(firstName){
        this.#firstName = firstName;
    }

    //Methods

    //Private
    #privateFunc(){
        console.log('from private')
    }

    //Public
    publicFunc(){
        console.log('from public')
        this.#privateFunc();
    }

}

class Admin extends User{

    constructor(firstName, salary){
        super(firstName);
        this.salary = salary;
    }

 
    adminFunc(){
        console.log('admin func');
        super.publicFunc();
    }
}

const admin = new Admin('Kalle');
admin.salary = 20000;
admin.adminFunc();
//admin.publicFunc(); 
console.log(admin);