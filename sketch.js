// create an array of objects
var bouncers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	// call all methods for bouncers
	for(var i = 0; i < bouncers.length; i++) {
		bouncers[i].update();
		bouncers[i].display();
	}
}


function mousePressed() {
	// create a bouncer at touch location
	bouncers.push(new Bouncer(mouseX, mouseY));
}


// create a class
function Bouncer(x, y) {
 
	// internal variables
	this.x = x;
	this.y = y;
 
	this.update = function() {

	}
 
	this.display = function() {
		fill(0);
		noStroke();
		ellipse(this.x, this.y, 40, 40);
	}
}