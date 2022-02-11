const TODO_LIST = "todolist";

function getTodoList() {
    localStorage.getItem(TODO_LIST);
}

function saveTodo (todo) {
    let key = todo.id
    let todo_list = localStorage.getItem(TODO_LIST);

    //if todo_list doesn't exist
    if (todo_list == null) {
        let todo_list = {key: todo}
        localStorage.setItem(TODO_LIST, todo_list)
    } else {
        todo_list = Object.assign(todo_list, todo) 
        localStorage.setItem(TODO_LIST, todo_list)
    }
}

function deleteTodo(id) {
    console.log("Hello from ls.deleteTodo")

    let task = TODO_LIST[todo][id]
    localStorage.removeItem(task);
}

export default {
    saveTodo,
    deleteTodo,
    getTodoList
}



class Todo {
    // id: new Date(),
    // let content = ""
    constructor(text) {
        this.id = new Date();
        this.content = text;
        this.completed = false;
        document.getElementById(this.id).addEventListener("click", setCompleted)
    }

    setCompleted () {
        document.getElementById(this.id).classList.add("complete")

    }
}

