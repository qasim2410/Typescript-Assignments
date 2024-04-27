"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
Object.defineProperty(exports, "__esModule", { value: true });
function mySandwiches(...items) {
    return `I want Sandwwich of ${items}`;
}
let collection1 = mySandwiches("Ham", "Cheese", "Lettuce"); // can add
let collection2 = mySandwiches("Turkey", "Swiss");
let collection3 = mySandwiches(); // without arrgument
console.log(collection1);
console.log(collection2);
console.log(collection3);
