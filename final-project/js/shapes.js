let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;

let headerH = document.querySelector("header").offsetHeight;
let mainH = document.querySelector("main").offsetHeight;

let diff = headerH + mainH;
canvas.height = window.innerHeight - diff;

let c = canvas.getContext('2d');

// c.fillStyle = "red";
// c.fillRect(300, 100, 150, 150);
// c.fillStyle = "white";
// c.fillRect(335, 250, 75, 75);

class Rect {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h
        this.color = color

        this.draw = function () {
            c.fillStyle = color;
            c.fillRect(this.x, this.y, this.w, this.h);
        }
    }
}

class Circle {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.color = color;

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
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }

            this.draw()
        }
    }
}

class Tri {
    constructor(x, y, xa, ya, xb, yb, color) {
        this.x = x;
        this.y = y;
        this.xa = xa;
        this.ya = ya;
        this.xb = xb;
        this.yb = yb;
        this.color = color

        this.draw = function () {
            c.beginPath();
            c.moveTo(this.x, this.y);
            c.lineTo(this.xa, this.ya);
            c.lineTo(this.xb, this.yb);
            c.closePath();

            //stroke
            c.lineWidth = 10;
            c.strokeStyle = this.color;
            c.stroke();

            //fill 
            c.fillStyle = this.color;
            c.fill();


        }

    }

}

class Line {
    constructor(x, y, endX, endY, color) {
        this.x = x;
        this.y = y;
        this.endX = endX;
        this.endY = endY;
        this.color = color;

        this.draw = function () {
            c.beginPath();

            c.lineWidth = 5;
            c.strokeStyle = this.color;

            c.moveTo(this.x, this.y);
            c.lineTo(this.endX, this.endY);
            c.closePath();
            c.stroke();
        }

    }
}

class Text {
    constructor(text, x, y, size, font, color) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.size = size;
        this.font = font;
        this.color = color;

        this.draw = function () {
            c.font = `${this.size}px ${this.font}`;
            c.fillStyle = this.color;
            c.fillText(text, x, y);
        }
    }
}

class Create {
    constructor(d) {
        this.e = d["e"];
        this.type = d["type"];
        this.color = d["mainColor"]

        this.x = d["x"];
        this.y = d["y"];
        this.x2 = d["x2"];
        this.y2 = d["y2"];
        this.w = Math.abs(this.x - this.x2);
        this.h = Math.abs(this.y - this.y2);
        this.radius = this.w / 2

        //tri
        // this.xa = this.x;
        // this.ya = e.offsetY;
        // this.xb = e.offsetY;
        // this.yb = e.offsetY;

        //text
        this.fontSize = d["fontSize"];
        this.font = d["font"];

        this.draw = function () {
            // console.log(`x: ${this.x2}, y: ${this.y2} CREATE`)
            switch (this.type) {
                case "Rectangle":
                    let rect1 = new Rect(this.x, this.y, this.w, this.h, this.color);
                    rect1.draw();
                    break;
                case "Circle":
                    let cir1 = new Circle(this.x + this.radius, this.y + this.radius, 4, 4, this.radius, this.color);
                    cir1.draw();
                    break;
                case "Line":
                    let line1 = new Line(this.x, this.y, this.x2, this.y2, this.color);
                    line1.draw()
                    break;
                case "Text":
                    let text = prompt("What would you like it to say?");
                    let txt = new Text(text, this.x, this.y, this.fontSize, this.font, this.color);
                    txt.draw();
            }
        }
    }
}
export {
    Create
}
