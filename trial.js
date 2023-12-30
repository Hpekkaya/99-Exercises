
// Selectors property of style
// class, id, tag name
let value;

value =document.getElementsByClassName("list-group-item");
const arrayValue = Array.from(value)

arrayValue.forEach(function(toDo1, index){
    console.log(index+1, ". Class ",toDo1.className)
    console.log(toDo1.textContent)
})
console.log("Classes :",arrayValue);










