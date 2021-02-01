const ul = document.getElementById("ul");
const input = document.getElementById("input");
const button1 = document.getElementById("button");

button1.addEventListener("click", function () {
    const newInputValue = document.getElementById("item").value;
    document.getElementById(newInputValue).value = "";
})