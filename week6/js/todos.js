import util from './utilities.js';
import ls from './ls.js';

// When add button is clicked...
document.getElementById('addBtn').onclick = addNewTodo;

const input = document.getElementById('todoInput');

input.addEventListener('keypress', e => {
    if (e.key == '13') {
        addNewTodo();
    }
})

loadTodos();

function addNewTodo(e) {
    const todo = {id: Date.now(), content: input.value, completed: false };

    input.value = "" ;

    const task = createTodoItem(todo);

    //save to ls
    ls.saveTodo(todo)
}

function createTodoItem(todo) {
    let 
}

function loadTodos () {
    //stuff here
}

function deleteTodo(e) {
    //stuff here
}