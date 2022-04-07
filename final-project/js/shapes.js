import { saveShape } from "./ls.js";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;

let headerH = document.querySelector("header").offsetHeight;
let mainH = document.querySelector("main").offsetHeight;

let diff = headerH + mainH;
canvas.height = window.innerHeight - diff;

let c = canvas.getContext('2d');

class Rectangle {
    constructor(x, y, x2, y2, color) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.w = Math.abs(this.x - this.x2);
        this.h = Math.abs(this.y - this.y2);
        this.color = color

        this.draw = function () {
            c.fillStyle = color;
            c.fillRect(this.x, this.y, this.w, this.h);
        }
    }
}

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xr = this.x + this.radius;
        this.yr = this.y + this.radius;
        this.color = color;

        this.draw = function () {
            c.beginPath();
            c.arc(this.xr, this.yr, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        }
    }
}

class Triangle {
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
    constructor(x, y, x2, y2, color) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;

        this.draw = function () {
            c.beginPath();

            c.lineWidth = 5;
            c.strokeStyle = this.color;

            c.moveTo(this.x, this.y);
            c.lineTo(this.x2, this.y2);
            c.closePath();
            c.stroke();
        }

    }
}

class Text {
    constructor(text, x, y, fontSize, font, color) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.font = font;
        this.color = color;

        this.draw = function () {
            c.font = `${this.fontSize}px ${this.font}`;
            c.fillStyle = this.color;
            c.fillText(text, x, y);
        }
    }
}

class Create {
    constructor(d, ls = false) {
        this.ls = ls
        this.type = d["type"];
        this.color = d["color"]

        this.x = d["x"];
        this.y = d["y"];
        this.x2 = d["x2"];
        this.y2 = d["y2"];
        this.w = Math.abs(this.x - this.x2);
        this.radius = this.w / 2
        if (!this.radius) {
            this.radius = d["radius"];
        }

        //tri
        // this.xa = this.x;
        // this.ya = e.offsetY;
        // this.xb = e.offsetY;
        // this.yb = e.offsetY;

        //text
        this.text = d["text"]
        this.fontSize = d["fontSize"];
        this.font = d["font"];

        this.draw = function () {
            let shape1
            switch (this.type) {
                case "Rectangle": // x, y, x2, y2, color
                    shape1 = new Rectangle(this.x, this.y, this.x2, this.y2, this.color);
                    shape1.draw();
                    break;
                case "Circle": //x, y, radius, color
                    shape1 = new Circle(this.x, this.y, this.radius, this.color);
                    shape1.draw();
                    break;
                case "Line": //x, y, x2, y2, color
                    shape1 = new Line(this.x, this.y, this.x2, this.y2, this.color);
                    shape1.draw()
                    break;
                case "Text": // text, x, y, fontSize, font, color
                    shape1 = new Text(this.text, this.x, this.y, this.fontSize, this.font, this.color);
                    shape1.draw();
            }
            if (this.ls !== true) {
                let myShape = { ...shape1, type: shape1.constructor.name }
                saveShape(myShape);
            }
        }
    }
}

export {
    Create
}
