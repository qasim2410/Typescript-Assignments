"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
const personName = "qasimHussain";
// lower Case
console.log(personName.toLowerCase());
//Upper Case
console.log(personName.toUpperCase());
// Title Case
let firstLetter = personName.charAt(0).toUpperCase();
let restLetters = personName.slice(1).toLowerCase();
let titleCase = firstLetter + restLetters;
console.log(titleCase);
