const TODO_LIST = "todolist";

function getTodoList() {
    //get Todo list from local storage (ls)
    let todo_list = localStorage.getItem(TODO_LIST);
    console.log(`todolist from getTOdolist ${JSON.stringify(todo_list)}`)
    if (todo_list == null) {
        return new Array();
    } else {
        return todo_list;
    }
}

function saveTodo (todo) {
    //save todo item to the todolist in ls
    let todo_list = getTodoList();

    console.log(`todolist from saveTodo ${JSON.stringify(todo_list)}`)
    console.log(`Todo list length: ${todo_list.length}`)

    todo_list.push(todo);
    localStorage.setItem(TODO_LIST, JSON.stringify(todo_list));
    
}

function deleteTodo(id) {
    // //remove todo item from ls
    // console.log("Hello from ls.deleteTodo")
    // //convert for array instead of dict
    // let task = TODO_LIST[todo][id]
    // localStorage.removeItem(task);
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

