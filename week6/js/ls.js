const TODO_LIST = "todolist";

function getTodoList() {
    //get Todo list from local storage (ls)
    let todo_list = localStorage.getItem(TODO_LIST);
    if (todo_list == null) {
        return new Array();
    } else {
        return JSON.parse(todo_list);
    }
}

function saveTodo (todo) {
    //save todo item to the todolist in ls
    let todo_list = getTodoList();

    todo_list.push(todo);
    localStorage.setItem(TODO_LIST, JSON.stringify(todo_list));
    
}

function deleteTodo(del) {
    let todo_list = getTodoList();
    for (let i=0; i < todo_list.length; i++) {
        if (todo_list[i].id == del) {
            todo_list.splice(i, 1);
            break;
        }
    }

    localStorage.setItem(TODO_LIST, JSON.stringify(todo_list));
}

function completedTodo(cId, comp){
    let todo_list = getTodoList();

    for (let i=0; i < todo_list.length; i++) {
        if (todo_list[i].id == cId) {
            todo_list[i].completed = comp;
            break;
        }
    }

    localStorage.setItem(TODO_LIST, JSON.stringify(todo_list));
}

export default {
    saveTodo,
    deleteTodo,
    getTodoList,
    completedTodo
}
