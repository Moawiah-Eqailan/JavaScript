//Use the concat() method to combine two arrays into a single array. Q1
let arr1 = ["1, 2, 3"];
let arr2 = ["4, 5, 6"];
let new_arr = arr1.concat(arr2);
console.log(new_arr, "|Q1");

//2.Use the slice() method to extract a portion of an array. Q2
let arr3 = ["1, 2, 3, 4, 5, 6"];
let new_arr_fru = arr3.splice(2, 2)
console.log(arr3, "|Q2");

//Use the splice() method to add and remove elements from an array. Q3
let arr4 = ["1, 2, 3, 4, 5, 6"];
arr4.splice(6, 0, "3");
console.log(arr4[1], "|Q3");

//Use the for...of loop to iterate through an array.Q4
//let arr5 = ["1, 2, 3, 4, 5"];

//for (let element of arr5) {
//console.log(arr5, "|Q4");
//S}


//Create an array of numbers and use the forEach() method to print each element to the console. Q5
let arr6 = ["1, 2, 3, 4, 5, 6"];

arr6.forEach(function (arrS6) {
    console.log(arr6, "|Q5");
});
