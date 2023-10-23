class Book {
   
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    summary(){
        return `${this.title}`
    }
}

const book = new Book('C#', 'Kalle', 2010);

console.log(book.summary());
console.log(book);

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

const user = new User('Kalle');

console.log(user)
user.publicFunc();

console.log(user.firstName);
user.firstName = 'Nisse';
user.lastName = 'Nilsson'
console.log(user.firstName);
console.log(user);

