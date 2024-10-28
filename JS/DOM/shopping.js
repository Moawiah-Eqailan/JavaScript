document.body.style.cssText = "margin: 0; padding: 0; box-sizing: border-box;"



const style = document.createElement("style");
style.textContent = `
    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item button {
        margin-left: 10px;
       background-color: red;
       color:white;
       font-size: 15px;

    }
`;
document.head.appendChild(style);



document.getElementById("body").style.cssText = "padding: 10px;  background-color: coral; border: 1px solid coral; border-radius: 10px; width: 400px;";


document.getElementById("mlist").innerText = "MY Shopping List";


document.querySelector("p").innerText = "Enter a new item :";
document.querySelector("p").style.display = "inline";


document.querySelector("button").innerText = "Add item";
document.querySelector("button").style.display = "inline";
document.querySelector("button").style.backgroundColor = "green"
document.querySelector("button").style.color = "white"


document.querySelector("input").style.cssText = " border: 2px solid blue; border-radius: 4px;";
document.querySelector("input").style.color = "green";



const itemInput = document.getElementById("itemInput");

const addButton = document.getElementById("addButton");


const itemDisplay = document.getElementById("itemDisplay");
document.getElementById("itemDisplay").style.color = "green"
document.getElementById("itemDisplay").style.fontSize = "20px"



addButton.onclick = function () {
    const newItem = itemInput.value.trim();
    if (newItem) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML = `${newItem} <button class="deleteButton">Delete</button>`;


        itemDiv.querySelector(".deleteButton").onclick = function () {
            itemDisplay.removeChild(itemDiv);
        };

        itemDisplay.appendChild(itemDiv);
        itemInput.value = "";
    } else {
        alert("Please enter an item :( ");
    }
};
