"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
Object.defineProperty(exports, "__esModule", { value: true });
// function make_shirt(size: string, label:string){
//               return size + label
// }
// let myFunction = make_shirt("large", "I love Typescript");
// console.log(myFunction);
// making shirt of any size
function make_shirt(label, size) {
    return size + label;
}
let myFunction = make_shirt("any size", "I love Typescript");
console.log(myFunction);
