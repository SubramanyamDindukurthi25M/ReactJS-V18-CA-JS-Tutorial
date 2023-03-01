// ES6 Spread Operator
// [...]
const myBooks = ['good', 'bad', 'new']
const newBooks = [...myBooks, 'old'];
console.log(myBooks);
console.log(newBooks);

// {...}
const myDetails = {
    myName: 'sai',
    myAge: 24
}
const newDetails = {
    ...myDetails,
    myLocation: 'kadapa'
}
console.log(newDetails);