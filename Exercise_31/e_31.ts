/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let userName1 : string[] = ["Qasim","Hussain","Akkasha","Huzaifa"]
// console.log(userNames1);

userName1 = [];

if(userName1.length > 0){
      for (let i =0; i < userName1.length; i++){
            if(userName1[i] == "Qasim"){
      console.log(`hello ${userName1[i]} would you like to see a status report`)
            }else{
                    console.log(`hello ${userName1[i]} thank you for logging in again`) 
            }
      }
      
}else{
      console.log(`We need to find some users!`)
}
