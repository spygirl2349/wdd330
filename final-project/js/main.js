import { Create } from './shapes.js';
import { getHero, hideDiv, makeHiddendiv, getFormInfo } from './utilities.js';
import { getShapesList, deleteDrawing } from './ls.js';

let canvas = document.querySelector("canvas");
let c = canvas.getContext('2d');

//VARIABLES
let dict = {
    type: "Rectangle",
    x: undefined,
    y: undefined,
    x2: undefined,
    y2: undefined,
    color: "black",
    font: "serif",
    fontSize: 30,
}

let url = "js/heroes.json"
let drawing = false;

//functions
getHero(url);

let shapes = getShapesList();

console.log(shapes)

if (shapes.length > 0) {
    for (let i = 0; i < shapes.length; i++) {
        console.log(shapes[i])
        let populate = new Create(shapes[i], true);
        populate.draw()

    }
}

let create = new Create(dict)
// makeHiddendiv("Rectangle");
// makeHiddendiv("Circle");
// getFormInfo("Rectangle-div");
// getFormInfo("Circle-div"); 

//BUTTON EVENT LISTENERS
let btns = document.querySelectorAll(".button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", selectType, false);
}
let clearbtn = document.getElementById("clear");
clearbtn.addEventListener("click", (e) => {
    c.clearRect(0, 0, innerWidth, innerHeight);
    deleteDrawing()
}, false)
//gets info on which button was pressed
function selectType(e) {
    dict["type"] = e.path[0].innerText;

    if (dict["type"] === "Text") {
        hideDiv(dict["type"]);

    }
}

//Set color value
let form = document.getElementById("set-color");
form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    dict["color"] = form.elements['color'].value;
});

//text settings
let textForm = document.getElementById("set-text");
textForm.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    dict["color"] = textForm.elements['color'].value;
    dict["fontSize"] = textForm.elements['font-size'].value;
    dict["font"] = textForm.elements['font'].value;

    let text = prompt("What would you like it to say?");
    dict["text"] = text

});

//------------------EVENT LISTENERS ------------------
canvas.addEventListener("mousedown", (e) => {
    dict["x"] = e.offsetX;
    dict["y"] = e.offsetY;
    drawing = true;
});


canvas.addEventListener("mousemove", (e) => {
    if (drawing === true) {
        if (dict["type"] === "Line") {
            // followMouse(e)
            dict["x2"] = e.offsetX;
            dict["y2"] = e.offsetY;
            create = new Create(dict)
            create.draw();
            dict["x"] = e.offsetX;
            dict["y"] = e.offsetY;
        }
        // c.clearRect(x, y, wi, hi);

    }
});

canvas.addEventListener("mouseup", (e) => {
    if (drawing) {
        // followMouse(e); 
        dict["x2"] = e.offsetX;
        dict["y2"] = e.offsetY;
        create = new Create(dict)
        create.draw()
        drawing = false;
    }
});

// TODO:
// 1. Get drawing animation to work 
// 3. Ovals?
// 4. switch between fill and stroke

// 2. Can you change the color of the text? XX 
// 5. add local storage save XX
// 6. add clear button XX