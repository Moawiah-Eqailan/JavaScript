//for loop to find the factorial of a number. Q1
for (let i = 0; i <= 5; i++) {
    console.log(i,"Q1");

}

// Use a for loop to print the Fibonacci sequence up to a given number. Q2

// for (let i = 0; i <= 8; i++) {
//     console.log(i*2+2+1,"Q2"); 
// }



//Use a for loop to print the prime numbers up to a given number. Q3

for (let i = 0; i < 10; i++) {
    console.log(i * 2 + 1,"Q3");
}


// Use a for loop to print the elements of a 2D array .Q4
function print2DArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j] ,"Q4");
        }
    }
}
print2DArray([[1, 2, 3], [4, 5, 6], [7, 8, 9] ]);



// Use a for loop to print the elements of an array in reverse order. Q5

function printReverse(arr1) {
    for (let i = arr1.length - 1; i >= 0; i--) {
        console.log(arr1[i],"Q5");
    }
}
printReverse([1, 2, 3, 4, 5]);
