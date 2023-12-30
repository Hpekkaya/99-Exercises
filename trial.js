
// Selectors property of style
// class, id, tag name
let value;

value =document.getElementById("todoAddButton");
console.log("Value :",value);


value = value.textContent
console.log("Value :",value);
console.log("Value :",value.innerHTML);

// Difference Between .innerHTML and textContent

value.textContent = "<b> Add ToDo List </b>"
// Takes into consideration <b> tag as a string



value.innerHTML = "<b> Add ToDo List </b>"
// Takes into consideration <b> tag as a HTML tag





