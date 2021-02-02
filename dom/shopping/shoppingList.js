const ul = document.querySelector("ul");
let input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    let newInputValue = document.getElementById("item").value;
    console.log(newInputValue);

    document.getElementById("item").value = "";

    const li = document.createElement("li");
    let span = document.createElement("span");
    const deleteButton = document.createElement("button");

    li.append(span, deleteButton);
    span.textContent = newInputValue;
    deleteButton.textContent = "Delete";
    
    ul.append(li);

    deleteButton.onclick = function remove() {
        li.remove();
    }

    document.getElementById("item").focus();
})