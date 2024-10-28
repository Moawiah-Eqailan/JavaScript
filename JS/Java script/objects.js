// Create an object and add a new property to it using bracket notation. Q1

let student = {
    name: "Adam",
    age: 25,
}
student.gender = "male";
console.log(student, "|Q1");


// Use the Object.values() method to get an array of an object's values. Q2

let student1 = {
    name: "Adam",
    age: 25,
}
student1.gender = "male";
let values = Object.values(student1)
console.log(values, "|Q2");


// Use the Object.entries() method to get an array of key-value pairs for an object. Q3

let student2 = {
    name: "Adam",
    age: 25,
    gender: "male"
}
let entries = Object.entries(student2)
console.log(entries, "|Q3");


// Use the Object.assign() method to merge two objects.Q4  

let student3 = {
    name: "Adam",
    age: 25,
}
let assign = Object.assign(student3)
student3.gender = "male";
console.log(student3, "|Q4");


// Use the Object.seal() method to prevent changes to an object's properties but allows changes to its 
// values. Q5

let student4 = {
    name: "Adam",
    age: 25,
}
let seal = Object.seal(student4)
console.log(student4, "|Q5");
