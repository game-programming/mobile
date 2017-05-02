// create an array of objects
var bouncers = [];

var gameOver = false;

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

	if(!gameOver) {
		// semi-transparent background
		fill(255,30);
		noStroke();
		rect(0,0,width,height);

		// call all methods for bouncers
		for(var i = 0; i < bouncers.length; i++) {
			bouncers[i].update();
			bouncers[i].display();
		}
	} else {
		// game is over!
		background(255,0,0);
		fill(255,255,0);
		text("YOU LOSE!", width/2, height/2);
	}

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

		// have we touched the sides?
		if(this.x < 0 || this.x > width) {
			gameOver = true;
		}
		if(this.y < 0 || this.y > height) {
			gameOver = true;
		}
	}
 
	this.display = function() {
		fill(0);
		noStroke();
		ellipse(this.x, this.y, 40, 40);
	}
}