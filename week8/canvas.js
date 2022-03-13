let canvas = document.querySelector('canvas');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

c.fillStyle = "red";
c.fillRect(300, 100, 150, 150);
c.fillStyle = "white";
c.fillRect(335, 250, 75, 75);

//circles
c.beginPath();
c.arc(350, 150, 15, 0, Math.PI * 2, false);
c.filleStyle = "white";
c.fill();

c.beginPath();
c.arc(420, 210, 15, 0, Math.PI * 2, false);
c.filleStyle = "white";
c.fill();

//semi-circle
c.beginPath();
c.arc(301, 215, 15, (3* Math.PI)/2, Math.PI / 2, false);
c.filleStyle = "white";
c.fill();

c.beginPath();
c.arc(365, 249, 15, Math.PI, 0, false);
c.filleStyle = "white";
c.fill();

//quarter circle
let three_pi_2 = 90 * (Math.PI/ 180)
console.log(three_pi_2)
c.beginPath();
c.moveTo(500, 110);
c.arc(500, 110, 15, three_pi_2, three_pi_2 + Math.PI * 0.5, false);
c.filleStyle = "white";
c.fill();

// 90 * (Math.PI/ 180)
// 90 * (Math.PI/ 180) + Math.PI * 0.5
c.fillStyle = 'white';
const drawQuarterCircle = (origin, radius, startAngleDeg = 0) => {
	const startAngle = startAngleDeg * (Math.PI / 180);
	const endAngle = startAngle + Math.PI * 0.5;
	c.beginPath();
	c.moveTo(origin.x, origin.y);
	// Draw actual arc
	c.arc(origin.x, origin.y, radius, startAngle, endAngle, false);
	c.fill();
}

drawQuarterCircle({x: 449,y: 101}, 15, 90);


