const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.slice(0, 3);
str2 = str + str2;
str3 = str2.slice(3, str2.length);
// console.log(str3);


//Use a template literal to print the original and modified string in a descriptive phrase.
// console.log(`The old nasty string was ${str}, but the new much better string is ${str3} :).`)


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = Number(input.question("How many letters we chopping? "));
if (userInput <= str.length){
  str2 = str.slice(0, userInput);
  str2 = str + str2;
  str3 = str2.slice(userInput, str2.length);
  console.log(`The old nasty string was ${str}, but the new much better string is ${str3} :).`);
}


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput > str.length){
  userInput = 3;
// let userInput = Number(input.question("How many letters we chopping? "));
str2 = str.slice(0, userInput);
str2 = str + str2;
str3 = str2.slice(userInput, str2.length);
console.log(`You typed a number longer than the original phrase dummy. The old nasty string was ${str}, but the new much better string is ${str3}.`)
}