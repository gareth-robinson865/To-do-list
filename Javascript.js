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
    newListItem.setAttribute("id", "active-list-item"+thingsToDo);
    newListItem.setAttribute("class", "active-list-item");

    //create a delete and completed button to go into the list item
    let deleteButton = document.createElement("input");
    deleteButton.setAttribute("id", "dlt-btn");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "Remove");
    deleteButton.setAttribute("onclick", "deleteToDo("+ thingsToDo +");");


    let completedButton = document.createElement("button");
    completedButton.setAttribute("id", "done-button");

    //create the text for the delete and complete button
    let deleteButtonText = document.createTextNode("Delete");
    let completeButtonText = document.createTextNode("Complete");

    //appending the text into the delete and complete button
    deleteButton.appendChild(deleteButtonText);
    completedButton.appendChild(completeButtonText);

    //creating the a h3 element to hold the information
    let textHolder = document.createElement("h3");

    //creating the text to be appended into the h3
    let listText = document.createTextNode(item);

    //appending the text to the h3 element
    textHolder.appendChild(listText);

    //appending the text, complete and delete button to the list element
    newListItem.appendChild(textHolder);
    newListItem.appendChild(deleteButton);
    newListItem.appendChild(completedButton);

    //appending the new list item to the overall list
    let itemList = document.getElementById("list");
    itemList.appendChild(newListItem);

    thingsToDo++
    console.log(thingsToDo);
}

const deleteToDo = (ID) => {
    document.getElementById('active-list-item'+ID).remove();
}

const completeToDo = (ev) => {
    ev.preventDefault();
}
//onclick event created for the entry button
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener('click', createToDo);
});
