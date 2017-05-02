// store our array of Thingy objects
var thingies = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	textSize(60);
	textAlign(CENTER, CENTER);
	rectMode(CENTER);
}

function draw() {
	background(255);

	fill(0);

	// accelerationX, Y, and Z are system vars that access
	// your devices accelerometer, let's just see what
	// kind of values they give us to get a sense of how to
	// use them
	// text(int(rotationX), width/2, 100);
	// text(accelerationY, width/2, 200);
	// text(accelerationZ, width/2, 300);

	// not super useful. let's try rolling our own
	var smoothRotX = (rotationX * .1) + (pRotationX * .9);
	var mappedRotX = map(smoothRotX, -180, 180, 0, width);

	fill(255);
	rect(width / 2, 400, width, 30);
	fill(255, 0, 0);
	rect(mappedRotX, 400, 10, 30);

	for (var i = 0; i < thingies.length; i++) {
		thingies[i].update();
	}

}

// mouse pressed can also mean screen pressed
function mousePressed() {
	thingies.push(new Thingy(mouseX, mouseY));
}

function Thingy(x, y) {

	// internal variables
	this.x = x;
	this.y = y;

	// implement velocity so it can pick up speed
	this.velY = 0.0;
	this.velX = 0.0;

	this.update = function() {
		// velocity from rotation
		this.velY += rotationX;
		this.velX += rotationY;

		// add it at 30% to objects
		this.x += this.velX * .3;
		this.y += this.velY * .3;

		// bounce against walls of phone screen
		if (this.x > width) {
			this.x = width;
			this.velX *= -0.7;
		}

		if (this.x < 0) {
			this.x = 0;
			this.velX *= -0.7;
		}

		if (this.y > height) {
			this.y = height;
			this.velY *= -0.7;
		}

		if (this.y < 0) {
			this.y = 0;
			this.velY *= -0.7;
		}

		// draw
		fill(0);
		ellipse(this.x, this.y, 80, 80);
	}
}
