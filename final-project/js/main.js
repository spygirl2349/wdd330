import {Create} from './shapes.js';
import {disable, getHero, hideDiv, makeHiddendiv, getFormInfo} from './utilities.js';

let canvas = document.querySelector("canvas");
let c = canvas.getContext('2d');

//VARIABLES
let dict = {
    type: "Rectangle",
    x: undefined,
    y: undefined,
    x2: undefined,
    y2: undefined,
    mainColor: "black",
    font: "serif",
    fontSize: 30,
}

console.log(Object.keys(dict))
console.log(dict["type"])
let url = "js/heroes.json"
// let type = "Rectangle"
// let x = undefined;
// let y = undefined;
// let mainColor = "black";
// let font = "serif";
// let fontSize = 30;
let drawing = false;

//functions
disable();
getHero(url);

let create = new Create(dict)
// makeHiddendiv("Rectangle");
// makeHiddendiv("Circle");
// getFormInfo("Rectangle-div");
// getFormInfo("Circle-div"); 

//BUTTON EVENT LISTENERS
let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", selectType, false);
}
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
    dict["mainColor"] = form.elements['color'].value;
});

//text settings
let textForm = document.getElementById("set-text");
textForm.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    dict["mainColor"] = textForm.elements['color'].value;
    dict["fontSize"] = textForm.elements['font-size'].value;
    dict["font"] = textForm.elements['font'].value;
    
});

//------------------EVENT LISTENERS ------------------
canvas.addEventListener("mousedown", (e)=> {
    dict["x"] = e.offsetX;
    dict["y"] = e.offsetY;
    drawing = true;
});


canvas.addEventListener("mousemove", (e) => {
    if (drawing === true ) {
        if (dict["type"] === "Line") {
            // followMouse(e)
            dict["x2"] = e.offsetX;
            dict["y2"] = e.offsetY;
            create = new Create(dict)
            create.draw();
            dict["x"] = e.offsetX;
            dict["y"] = e.offsetY;
        }
        // let wi = Math.abs(x - e.offsetX);
        // let hi = Math.abs(y - (e.offsetY));
        // c.clearRect(x, y, endX, endY);
        // followMouse(e, "green");
        
        // c.clearRect(x, y, wi, hi);
        
        //followMouse(e)
    }
});

canvas.addEventListener("mouseup", (e) => {
    if (drawing) {
        // followMouse(e); 
        dict["x2"] = e.offsetX;
        dict["y2"] = e.offsetY; 
        console.log(`before: ${dict["mainColor"]}`)    
        create = new Create(dict)
        console.log(`after: ${dict["mainColor"]}`)
        create.draw()
        drawing = false;
    }
});


//Create the shape
// function followMouse (e, color = mainColor) {
//     let w = Math.abs(x - e.offsetX);
//     let h = Math.abs(y - e.offsetY);
//     let radius = w/2
    
//     //tri
//     let xa = x;
//     let ya = e.offsetY;
//     let xb = e.offsetY;
//     let yb = e.offsetY;
    
//     if (type == "Rectangle") {
//         let rect1 = new Rect(x, y, w, h, color);
//         rect1.draw();
        
//     } else if (type == "Circle") {
//         let cir1 = new Circle(x + radius, y + radius, 4, 4, radius, color);
//         cir1.draw();
        
//     } else if (type == "Line"){
//         let line1 = new Line(x, y, e.offsetX, e.offsetY, color);
//         line1.draw()
        
//     } else if (type == "Triangle") {
//         let tri1 = new Tri (x, y, xa, ya, xb, yb, color);
//         tri1.draw();

//     } else if (type == "Text") {
//         let text = prompt("What would you like it to say?");
//         let txt = new Text(text, x, y, fontSize, font, color);
//         txt.draw();

//     }
// }

//for touch screen devices
// canvas.addEventListener("touchstart", (e)=> {
//     console.log(e)
//     x = e.touches[0].clientX;
//     y = e.touches[0].screenY - e.touches[0].clientY;
//     console.log(`x: ${x}, y: ${y}`);
// });
// //sets the ending point and creates the shape
// canvas.addEventListener("touchend", followMouse);
// canvas.addEventListener("touchstart", (e) => {
//     console.log("touch started");
//     ex = e.touches[0].clientX;
//     why = e.touches[0].screenY - e.touches[0].clientY;
// })

// //implement mousemove instead of touch move
// canvas.addEventListener("touchmove", (e)=> {
//     // console.log(e)

//     c.clearRect(0, 0, innerWidth, innerHeight);

//     let wi = Math.abs(ex - e.touches[0].clientX);
//     let hi = Math.abs(why - (e.touches[0].screenY - e.touches[0].clientY));
    
//     // c.clearRect(ex, why, wi, hi);
    
//     let rect2 = new Rect(ex, why, wi, hi, color);
//     rect2.draw()
// })


// TODO:
// 1. Get drawing animation to work
// 2. Can you change the color of the text? 
// 3. Ovals?
// 4. switch between fill and stroke
// 5. 