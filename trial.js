
// Style Properties
// 
// let value, lengthElmnt;
// value =document.querySelectorAll("li:nth-child(odd)");

const todo = document.querySelectorAll(".list-group-item")[0].style;
const todoList = document.querySelector(".list-group").style;
const clearButton = document.querySelector("#todoClearButton").style;

todo.color = "#fff";
todo.backgroundColor = "purple";
todo.fontWeight = "bold";
todo.paddingTop = "20px";
todo.paddingLeft = "50px";

todoList.marginTop ="60px";
todoList.marginLeft ="60px";

clearButton.backgroundColor="red";
clearButton.fontWeight="bold";
clearButton.padding="6px";
clearButton.borderRadius ="5px"
clearButton.borderColor = "brown"


console.log("Todo :",todo);



// const arrayValue = Array.from(value)

// arrayValue.forEach(function(toDo1, index){
//     toDo1.style.backgroundColor = "lightgrey"
//     // console.log(index+1, ". Form ",toDo1)
// })












