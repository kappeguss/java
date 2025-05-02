"use strict"

const todos = [
    {
        id: 1,
        descrizione: "Imparare a programmare",
        done: true
    },
    {
        id: 2,
        descrizione: "Imparare Javascript",
        done: false
    },
    {} //per altre funzioni 
];

const form = document.getElementById("add_todo_form");
const textInput = document.getElementById("todo_text");

function insertTodo(todos, descrizione)
{
    todos.push({
        descrizione: descrizione, 
        done: false
    });
}

function render(ul, todos){
    ul.innerHTML = "";

    for(let i=0; i < todos.lenght; i++){
        const todo = todos[i];

        //clonazione nodo luuunga (da continuare)
    }
        

}

const todoList = document.querySelector(" .todo-list");
const itemTpl = todoList.children[1];
todoList.innerHTML= "";

form.onsubmit = function(evento) {
    evento.preventDefault();
   const descrizione = textInput.value;
    // da verificare in caso se textInput.value non è vuoto
    insertTodo(todos, descrizione);

    render(todos);
}

