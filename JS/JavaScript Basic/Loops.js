
// Conditionals
function checkEligibility(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age > 60) {
        console.log("You may join the seniors’ program.");
    } else if (age > 30) {
        console.log("You are not eligible. You may join other programs.");
    } else if (age >= 18) {
        console.log("You are eligible. Start your application.");
    } else {
        console.log("You may join the kids' program.");
    }
}

function switchCase(str) {
    return str.split("").map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join("");
}

function toCamelCase(str) {
    return str.split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join("");
}

function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}

function isOddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

checkEligibility(1985);
console.log(switchCase("OrAnGe"));
console.log(toCamelCase("Coding Academy by Orange"));
console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By"));
console.log(isOddOrEven(5));
console.log(isOddOrEven(8));
function isNumber(input) {
    return typeof input === 'number' && !isNaN(input);
}

function findLargest(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function checkTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

function isInRange(num, min, max) {
    return num >= min && num <= max;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isNumber(123));
console.log(isNumber("123")); 
console.log(findLargest(5, 9)); 
console.log(checkTriangleType(3, 3, 3)); 
console.log(checkTriangleType(3, 3, 5)); 
console.log(checkTriangleType(3, 4, 5)); 
console.log(isInRange(5, 1, 10));
console.log(isInRange(15, 1, 10)); 
console.log(isLeapYear(2024));
console.log(isLeapYear(2023)); 