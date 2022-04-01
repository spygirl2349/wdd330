class Comments {
    constructor () {
        this.commentsList = []
    }

    getAllComments() {
        
    }
    renderCommentList() {

    }
    filterCommentsByName () {

    }

    addComment (userInput) {
       let newComment = {
           name: hikeName,
           date: new Date(),
           content: userInput
       }; 

        this.createComment(newComment);
    }

    createComment (comment) {
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');

        h4.textContent = comment.date;
        p.textContent = comment.content;

        div.append(h4);
        div.append(p);

        return div;
    }

    addCommentBtn () {
        let div = document.createElement('div');
        const addButton = document.createElement('button');
        const input = document.createElement('input');
        addButton.innerHTML = 'Add Comment';
        addButton.addEventListener('click', () => {
            this.addComment(input.value)
        });
        
        div.append(input);
        div.append(addButton);

        return div;
    }
}


export default Comments;
