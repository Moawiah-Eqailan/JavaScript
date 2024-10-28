// Create a function that will display the smallest value in the array. Q1

function findSmallest(arr) {

    return Math.min(...arr)

}
console.log(findSmallest([30, 45, 60, 7]), "|Q1");


// Function that will return your string in Alphabetical order.Q2 

function AlphabeticalOrder(str) {
    // return str.split('').sort().join('');
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];

    }
    return reverse;
}

console.log(AlphabeticalOrder("hello"), "|Q2");


// Return how many words was given .Q3

// Create function to Multiply all elements in an array by it's length Q4


// let x = [4,2,5]
// function Multiply (arr1) {


// }


// Create a function that will repeat each string character two times Q5

// function doubleChar(str) {
//    str.doubleChar("Coding");

// }
// console.log(doubleChar('Coding'),"|Q5");


function doubleChar(str1) {
    let doubleChar = ("");
    for (let i = 0; i < str1.length; i++) {
        doubleChar += str1[i] + str1[i];
    }
    return doubleChar;
}
console.log(doubleChar("Coding"), "|Q5");