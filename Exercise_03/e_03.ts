// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName:string = "qasimHussain";

// lower Case
console.log(personName.toLowerCase());

//Upper Case
console.log(personName.toUpperCase());

// Title Case
let firstLetter:string = personName.charAt(0).toUpperCase();
let restLetters:string = personName.slice(1).toLowerCase();

let titleCase = firstLetter + restLetters;
console.log(titleCase);