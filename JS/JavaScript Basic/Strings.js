//Strings

var str = "Welcome to Orange";


var upperStr = str.toUpperCase();
console.log(upperStr,"||Strings");


var extractTo = str.slice(8, 10).toUpperCase();
console.log(extractTo,"||Strings");

var replaceStr = str.replace("Welcome to", "Hello from");
console.log(replaceStr,"||Strings");
var lowerStr = str.toLowerCase();
console.log(lowerStr,"||Strings");

var lengthStr = str.length;
console.log(lengthStr ,"||Strings");

var str = "Welcome to Orange";

var quoteStr = 'Welcome to "Orange"';
console.log(quoteStr,"||Strings");

var appendStr = str + " Jordan";
console.log(appendStr,"||Strings");

//Strings-2
var inputStr = "cactus";
var firstLetter = inputStr[0];

var replacedStr = inputStr[0] + inputStr.slice(1).replace(new RegExp(firstLetter, 'g'), '*');

console.log(replacedStr,"||Strings");