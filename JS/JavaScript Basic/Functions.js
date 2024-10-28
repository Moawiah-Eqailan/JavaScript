// Functions

function stringToArray(str) {
    return str.split(" ");
}

function hidePhoneNumber(phoneNumber) {
    return "*******" + phoneNumber.slice(-3);
}

function hideEmail(email) {
    const [name, domain] = email.split("@");
    return name.slice(0, 6) + "…@" + domain;
}

function capitalizeFirstLetterOfFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeFirstLetterOfEachWord(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function flipNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

function swapVariables(a, b) {
    let temp = a;
    a = b;
    b = temp;
    [a, b] = [b, a];
    a = a + b;
    b = a - b;
    a = a - b;
    return { a, b };
}

function removeCharacter(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}

function mergeStrings(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}

console.log(stringToArray("Orange Jordan"));
console.log(hidePhoneNumber("0776807777"));
console.log(hideEmail("orange_academy@orange.jo"));
console.log(capitalizeFirstLetterOfFirstWord("coding academy by orange"));
console.log(capitalizeFirstLetterOfEachWord("coding academy by orange"));
console.log(flipNumber(92485));
let result = swapVariables(3, 4);
console.log(`a=${result.a}, b=${result.b}`);
console.log(removeCharacter("Orange", 3));
console.log(mergeStrings("lora", "inge"));
function checkCharacterPosition(char, str) {
    return str.startsWith(char) || str.endsWith(char);
}

function stringToArray(str) {
    return str.split(" ");
}

function reorderCharacters(str) {
    return str.split("").sort().join("");
}


console.log(checkCharacterPosition("o", "orange")); 
console.log(checkCharacterPosition("z", "orange")); 
console.log(stringToArray("Coding Academy by Orange")); 
console.log(reorderCharacters("Orange"));