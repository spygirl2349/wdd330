import {Rect, Circle} from './shapes.js';

//VARIABLES
let type = "Rectangle"
let x = undefined;
let y = undefined;
let color = "black"

//BUTTON EVENT LISTENERS
let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", selectType, false);
}
//gets info on which button was pressed
function selectType(e) {
    type = e.path[0].innerText;    
}

//Set color value
let form = document.getElementById("set-color");
form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    color = form.elements['color'].value;
});

//EVENT LISTENERS
//for the computers
let canvas = document.querySelector("canvas");
//sets the starting point for the shape
canvas.addEventListener("pointerdown", (e)=> {
    x = e.offsetX;
    y = e.offsetY;
});
//sets the ending point and creates the shape
canvas.addEventListener("pointerup", followMouse)

//for touch screen devices
canvas.addEventListener("touchstart", (e)=> {
    console.log(e)
    x = e.touches[0].clientX;
    y = e.touches[0].screenY - e.touches[0].clientY;
    console.log(`x: ${x}, y: ${y}`);
});
//sets the ending point and creates the shape
canvas.addEventListener("touchend", followMouse);

//Create the shape
function followMouse (e) {
    let w = Math.abs(x - e.offsetX);
    let h = Math.abs(y - e.offsetY)
    let radius = w/2


    if (type == "Rectangle") {
        let rect1 = new Rect(x, y, w, h, color);
        rect1.draw();

    } else if (type == "Circle") {
        let cir1 = new Circle(x + radius, y + radius, 4, 4, radius, color);
        cir1.draw();

    }
}
