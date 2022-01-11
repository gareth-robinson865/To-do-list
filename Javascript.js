let toDoItems = [];
let thingsToDo = 0;

const createToDo = (ev) => {
    //prevent the page reloading on button press
    ev.preventDefault();

    //take the name value that has been input and save it to a variable
    let item = document.getElementById("to-do-entry").value;
    console.log(item);

    //reset the form to blank for the next input
    document.forms[0].reset();

    //push the to do item to the array
    toDoItems.push(item);
    console.log(toDoItems);

    //create a new list item with the class "list-item"
    let newListItem = document.createElement("li");
    newListItem.setAttribute("class", "new-list-item");

    //creating the text node to hold the information
    let listText = document.createTextNode(item);

    //appending the text node to the list element
    newListItem.appendChild(listText);

    //appending the new list item to the overall list
    let itemList = document.getElementById("list");
    itemList.appendChild(newListItem);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener('click', createToDo);
});