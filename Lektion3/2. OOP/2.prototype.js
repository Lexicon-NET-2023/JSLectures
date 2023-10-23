function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.revised = false;

    //this.read = () => console.log('read book');
}

const book = new Book('Banana', 'Kalle', 1910);

//book.test = function(){
//
//}

const book2 = new Book('C#', 'Nisse', 2010);

console.log(book);
console.log(book2);

// const arr = [];
// console.log(arr);

// const text = {};
// console.log(text)

Book.prototype.read = function(){
    console.log('read book');
}

book.read();
console.log(book);