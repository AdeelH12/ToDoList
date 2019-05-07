const input = document.getElementById('input-field');
const submitBtn = document.getElementsByClassName('submit-btn');
const ul = document.getElementById('list');
const toDos = [];


function getInputValue(){
    
    const userInput = input.value;


    //Check if the user has entered any value to the input field
       if(userInput){

        toDos.push(userInput);

        displayToDos();
        
    }else{

        alert("Enter a To Do");
    }




}

function displayToDos(){

    //Creating a li element where the TO DOs are displayed
    const li = document.createElement('li');
    li.setAttribute = ('id', 'list-element');
    li.style.marginTop = "50px";
    li.style.fontSize = '25px';
    


    //The value entered into the input field will now be passed through to the li element
    li.appendChild(document.createTextNode(input.value));


    //Appened the li element to the ul
    ul.appendChild(li);


    //resetting the input value
    input.value = "";

    const deleteItem = document.createElement('button');
    deleteItem.setAttribute('id', 'deleteBtn');
 
    deleteItem.appendChild(document.createTextNode('X'));

    li.appendChild(deleteItem);

    //Setting an onclick event to the button
    deleteItem.onclick = () => {

        li.style.display = "none";
    }

    
}