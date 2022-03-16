import {Rect, Circle} from './shapes.js';

let canvas = document.querySelector("canvas");
let c = canvas.getContext('2d');
//VARIABLES
let type = "Rectangle"
let x = undefined;
let y = undefined;
let color = "black"

//testing variables
let ex = undefined;
let why = undefined;

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
//sets the starting point for the shape
canvas.addEventListener("pointerdown", (e)=> {
    x = e.offsetX;
    y = e.offsetY;
});
//sets the ending point and creates the shape
canvas.addEventListener("pointerup", followMouse)

//for touch screen devices
// canvas.addEventListener("touchstart", (e)=> {
//     console.log(e)
//     x = e.touches[0].clientX;
//     y = e.touches[0].screenY - e.touches[0].clientY;
//     console.log(`x: ${x}, y: ${y}`);
// });
// //sets the ending point and creates the shape
// canvas.addEventListener("touchend", followMouse);
canvas.addEventListener("touchstart", (e) => {
    console.log("touch started");
    ex = e.touches[0].clientX;
    why = e.touches[0].screenY - e.touches[0].clientY;
})
canvas.addEventListener("touchmove", (e)=> {
    // console.log(e.touches[0])

    console.log(c.clearRect(0, 0, innerWidth, innerHeight));

    let wi = Math.abs(ex - e.touches[0].clientX);
    let hi = Math.abs(why - (e.touches[0].screenY - e.touches[0].clientY));
    
    // c.clearRect(ex, why, wi, hi);
    
    let rect2 = new Rect(ex, why, wi, hi, color);
    rect2.draw()
})

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
