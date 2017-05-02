// create an array of objects
var bouncers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	// create a bouncer at touch location
	for(var i = 0; i < 5; i++) {

		// create a random location
		var x = random(width*.25,width*.75);
		var y = random(height*.4,height*.6);

		// use those and create new bouncer
		bouncers.push(new Bouncer(x, y));
	}
	

}

function draw() {
	// call all methods for bouncers
	for(var i = 0; i < bouncers.length; i++) {
		bouncers[i].update();
		bouncers[i].display();
	}
}


function mousePressed() {
	
}


// create a class
function Bouncer(x, y) {
 
	// internal variables
	this.x = x;
	this.y = y;
 
	this.update = function() {
		// move based on rotation of phone
		// accelerationX, accelerationY, accelerationZ
		// rotationX, rotationY, rotationZ

		this.y += rotationX;
		this.x += rotationY;
	}
 
	this.display = function() {
		fill(0);
		noStroke();
		ellipse(this.x, this.y, 40, 40);
	}
}