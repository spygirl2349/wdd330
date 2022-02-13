import util from './utilities.js';
import ls from './ls.js';

// When add event listeners
document.getElementById('addBtn').onclick = addNewTodo;
document.getElementById('activeFilter').onclick = applyFilter;
document.getElementById('allFilter').onclick = applyFilter;
document.getElementById('completedFilter').onclick = applyFilter;


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
    ls.saveTodo(todo);
}

function createTodoItem(todo) {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let cInput = document.createElement('input');
    let span = document.createElement('span');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    div.id = todo.id;
    label.setAttribute("class", "container");
    cInput.setAttribute("type", "checkbox");
    cInput.setAttribute("value", "incomplete");
    cInput.onclick = toggleComplete;
    span.setAttribute("class", "checkmark");
    btn.textContent = "X";
    btn.onclick = deleteTodo;

    p.textContent = todo.content;


    //append input and span to label
    label.append(cInput);
    label.append(span);
    //add everything to div
    div.append(label);
    div.append(p);
    div.append(btn);

    //add div(task) to the div container (tasks)
    let tasks = document.getElementById('tasks');
    tasks.append(div);
}

function addToList(todoDiv) { 
    //WHAT DO YOU WANT HERE????
    //load todos calls this function... but why?
    //STICKS IT INTO LIST
}

function loadTodos () {
    let todo_list = ls.getTodoList();

    console.log(`todolist inside loadTodos: ${JSON.stringify(todo_list)}`);

    todo_list.forEach(todo => {
        createTodoItem(todo);
    })
    
    // if (todo_list != []) {
    //     for (let i = 0; i < todo_list.length; i++) {
    //         createTodoItem(i);
    //     }
    // }
}

function deleteTodo(event) {
    // let task = document.getElementById(event.srcElement.parentNode);
    // ls.deleteTodo(task)
    // task.parentNode.removeChild(task);

    const btn = event.currentTarget;
    let del = btn.parentNode.getAttribute('data-id');
    ls.deleteTodo(del);
    document.getElementById('tasks'). innerHTML = '';
    loadTodos();

}

function toggleComplete(e) {
    let todo_list = ls.getTodoList();

    console.log(`todolist inside toggleComplete: ${todo_list}`);

    // if (input.value == "incomplete") {
    //     input.value = "complete";
    // }

    // todolist[e].completed = true;
    // todo.completed = true;
    // let id = todo.id;
    // document.getElementById(id).setAttribute("class", "");


}

function applyFilter(e){
    //Clear the list
    document.getElementById('tasks'). innerHTML = '';
    //Declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();
    //Check which filter to apply
    if (e.currentTarget.id == 'activeFilter') {
        filteredTodos = util.activeFilter(allTodos);
    } else if (e.currentTarget.id == 'allFilter') {
        filteredTodos = allTodos;
    } else if (e.currentTarget.id == 'completedFilter') {
        filteredTodos = util.completedFilter(allTodos);
    }

    //Draw the list
    filteredTodos.forEach(todo => {
        createTodoItem(todo);
    })
}