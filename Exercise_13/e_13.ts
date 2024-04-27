//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const myTrans: string[] = ["Car","Bike","Bus","Train","Aeroplane"];

// 1st method(loop);
//for(let i = 0; i <=4; i++){
   //           console.log(`I would like to own a ${myTrans[i]}`);
//}

// 2nd constant

myTrans.map((id)=>{
   console.log(`I ould like to on a ${id}`);
})