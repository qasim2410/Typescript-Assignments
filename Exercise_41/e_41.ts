/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

let magicianNames = ["Ayaz","Fayaz","Tariq","Madad"];

function show_magicians(){
              for(let item of magicianNames){
console.log(item);
              }
};

show_magicians();    // calling of function
show_magicians();    // 2nd time calling of function