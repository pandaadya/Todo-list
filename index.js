let add = document.getElementById("addTodo");
let todoContainer = document.getElementById("todoContainer");
let input = document.getElementById("inputField");

add.addEventListener("click", function () {
    let inputName = document.getElementById("inputField").value;
  if(inputName == "")
  {
    alert("Please Enter To-Do");
  }
  else{

    var input = document.createElement("input");//create an input element when you click on add
  input.classList.add("input-styling");//add new class
  input.setAttribute("type", "text");//set the attribute
  input.value = inputField.value;//take the inputField value then add the value to the newly created input field
  
  todoContainer.appendChild(input);//append the new input field to the todocontainer
  
  inputField.value = "";//make the value null after completeing the task
  
 

  let button = document.createElement("BUTTON");//creating a button
  let text = document.createTextNode("🗑");
  button.classList.add("button");//creating a text node 
  button.appendChild(text);//append the text to the button
  todoContainer.appendChild(button);//append the button to the todocontainer

  button.addEventListener("click", function () {
    todoContainer.removeChild(input);              //function to remove the input field
  });
  button.addEventListener("click", function () {   //function to remove the icon too
    todoContainer.removeChild(button);
  });

  _}
});


  