let canvas = document.querySelector('canvas');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//create circles in a random place on the screen
// for (let i = 0; i < 10; i++) {
//     // x = (a random num btwn 0 & 1) * with of the window/screen
//     let x = Math.random() * window.innerWidth; 
//     let y = Math.random() * window.innerHeight; 

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }


// //animate a circle - verison 1
// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 8;
// let dy = (Math.random() - 0.5) * 8;

// let radius = 30;

// let colors = ["blue", "green", "red", "yellow"];
// let color = "blue";

// c.beginPath();
// c.arc(x, y, radius, 0, Math.PI * 2, false);
// c.fillStyle = color;
// c.fill();


// if (x + radius > innerWidth || x - radius < 0) {
//     dx = -dx;
// } 

// x += dx;


// if (y + radius > innerHeight || y - radius < 0) {
//     dy = -dy;
// }

// y += dy;

// if (y + radius == innerHeight || x + radius == innerWidth ||  x - radius == 0 || y - radius == 0 ) {
//     console.log("inside the if");
//     let colorI = Math.floor(Math.random() * colors.length);
//     console.log(colorI)
//     // while (color == colors[colorI]) {
//     //     colorI = Math.floor(Math.random() * colors.length);
//     //     console.log(colorI);
//     // }
//     color = colors[Math.floor(colorI)];
// }


//text
c.fillStyle = "blue";
c.font = "30px Arial";
c.fillText("Hello World", innerWidth / 2, innerHeight/ 2);

c.font = "30px Comic Sans MS";
c.fillStyle = "red";
c.textAlign = "center";
c.fillText("Hello World", canvas.width/2, canvas.height/2);


let mouse = {
    x: undefined,
    y: undefined
}

let maxRadius = 70;
let minRadius = 5;

let colorArray = ["#090c08","#FFB997","#757083","#8a95a5","#b9c6ae"]

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    

})

window.addEventListener('resize', function() {
    canvas.width =  window.innerWidth;
    canvas.height = window.innerHeight;

    init()
})

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        }

        this.update = function () {
            
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            } 

            
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;    

            //interactivity
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius){
                    this.radius += 1;
                }
            } else if (this.radius > this.minRadius){
                this.radius -= 1;
            }

            this.draw()        
        }
    }
}


let circleArray = []

function init() {
    circleArray = [];

    for (i = 0; i < 600; i++) {
        let radius = Math.random() * 8 + 3;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 4;
        let dy = (Math.random() - 0.5) * 4;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}


function animate() {
    requestAnimationFrame(animate);

    //clears the canvas each time the function is called
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init()
animate();
