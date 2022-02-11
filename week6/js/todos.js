import util from './utilities.js';
import ls from './ls.js';

// When add button is clicked...
document.getElementById('addBtn').onclick = addNewTodo;

const input = document.getElementById('todoInput');

input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        addNewTodo();
    }
})

loadTodos();

function addNewTodo(e) {
    const todo = {id: Date.now(), content: input.value, completed: false };

    input.value = "" ;

    createTodoItem(todo);

    //save to ls
    ls.saveTodo(todo)
}

function createTodoItem(todo) {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let cInput = document.createElement('input');
    let span = document.createElement('span');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    div.id = todo.id
    label.setAttribute("class", "container")
    cInput.setAttribute("type", "checkbox")
    cInput.setAttribute("value", "completed")
    span.setAttribute("class", "checkmark")
    btn.textContent = "X"
    btn.onclick = deleteTodo()

    p.textContent = todo.content


    //append input and span to label
    label.append(cInput)
    label.append(span)
    //add everything to div
    div.append(label);
    div.append(p);
    div.append(btn);

    addToList(div)
    
}

function addToList(todoDiv) { 
    //add div(task) to the div container (tasks)
    let tasks = document.getElementById('tasks');
    tasks.append(todoDiv);
}

function loadTodos () {
    let todo_list = ls.getTodoList()

    if (todo_list != null) {
        todo_list.foreach(todo => {
            createTodoItem(todo);
        })
    }
}

function deleteTodo(event) {
    // let task = document.getElementById(event.srcElement.parentNode);
    // ls.deleteTodo(task)
    // task.parentNode.removeChild(task);

}

function toggleComplete(e) {

}

function applyFilter(e){
    //Clear the list

    //Declare variables

    //Check which filter to apply

    //Draw the list
}