// create an array of objects
var player;
var enemies = [];

var enemySpawnInterval = 500;
var lastEnemySpawn = 0;

var gameOver = false;

function setup() {
	pixelDensity(1) 

	//createCanvas(windowWidth / 4, windowHeight / 4);
	createCanvas(windowWidth, windowHeight);

	player = new Player();

}

function draw() {


	if(!gameOver) {

		// time to spawn a new enemy?
		if(millis() > lastEnemySpawn + enemySpawnInterval) {
			lastEnemySpawn = millis();

			var rando = int(random(4));

			if(rando == 0) {
				// come from the top
				var x = random(width);
				var y = 0;
				var xSpeed = random(-5,5);
				var ySpeed = random(1,5);

				enemies.push(new Enemy(x,y,xSpeed,ySpeed));
			}

			if(rando == 1) {
				// come from the bottom
				var x = random(width);
				var y = height;
				var xSpeed = random(-5,5);
				var ySpeed = random(-1,-5);

				enemies.push(new Enemy(x,y,xSpeed,ySpeed));
			}

			
		}

		background(255);


		player.update();
		player.display();

		// call all methods for enemies
		for(var i = 0; i < enemies.length; i++) {
			enemies[i].update();
			enemies[i].display();
		}

	} else {
		// game is over!
		background(255,0,0);
		fill(255,255,0);
		textAlign(CENTER, CENTER);
		textSize(50);
		text("YOU LOSE!", width/2, height/2);
	}

}


// create a class
function Player () {
 
	// internal variables
	this.x = width/2;
	this.y = height/2;
 
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




// create a class
function Enemy (x, y, xSpeed, ySpeed) {
 
	// internal variables
	this.x = x;
	this.y = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
 
	this.update = function() {
		this.x += xSpeed;
		this.y += ySpeed;

		var distToPlayer = dist(this.x, this.y, player.x, player.y);

		if(distToPlayer < 30) {
			gameOver = true;
		}
	}
 
	this.display = function() {
		fill(255,0,0);
		noStroke();
		ellipse(this.x, this.y, 20, 20);
	}
}