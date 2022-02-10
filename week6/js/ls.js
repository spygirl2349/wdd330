const TODO_LIST = "todolist";

function getTodoList() {
    //stuff 
}

function saveTodo (todo) {
    //stuff
}

function deleteTodo(id) {
    //stuff
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

