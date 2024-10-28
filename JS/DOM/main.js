// Q1,Q2,Q3,Q4,Q5,Q6
// form
document.getElementById("signup").style.cssText = "background-color: #005; color: white; display:inline-block;   padding: 15px;   margin: 15px; line-height: 0.1;";



// Full Name
document.getElementsByClassName("f-name")[0].innerHTML = "Full Name"
document.getElementsByTagName("input")[0].setAttribute("type", "text")



// password
document.getElementsByClassName("pass")[0].innerHTML = "Password:"
document.getElementsByClassName("pass")[1].setAttribute("type", "password",)



// Confirm password
document.getElementsByClassName("con-pass")[0].innerHTML = "Confirm password:"
document.getElementsByClassName("con-pass")[1].setAttribute("type", "password")



// Submit
document.getElementsByTagName("button")[0].innerHTML = "Submit"



document.getElementById("signup").addEventListener("submit", (e) => {
    e.preventDefault();
    const messages = [];
    const inputs = document.getElementsByTagName("input");

    const [fullName, password, confirmPassword] = [
        inputs[0],
        document.getElementsByClassName("pass")[1],
        document.getElementsByClassName("con-pass")[1],

    ];

    if (!fullName.value.trim()) messages.push("Name is required");

    if (password.value.length <= 6) messages.push("Password must be longer than 6 characters");

    if (password.value.length >= 20) messages.push("Password must be least than 20 characters");

    if (password.value !== confirmPassword.value) messages.push("Passwords do not match");

    alert(messages.length ? messages.join("\n") : "Thank you for participating with us, registration has been completed ;)");
});


