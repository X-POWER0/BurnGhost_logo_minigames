const gameBoard = document.querySelector("#gameBoard");
//const gameBoard = document.getElementById("gameBoard");
const ctx  = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const gameText = document.querySelector("#gameText");
const textField = document.querySelector('#text-field');

const resetBtn = document.querySelector("#resetBtn");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
//const scoreText = document.getElementById("score");
//const resetBtn = document.getElementById("resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "black";
const snakeColor = '#f38234';
const snakeBorder = "black";
const foodColor = "white";
const unitSize = 50;


let snake_head;
let img = new Image();
img.src = 'bg.png';
let img_use = img;
//img.onload = function() {img_use = img};
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let gmTxt = "PLAYING";
let snake = [
	{x:unitSize, y:0},
	{x:0, y:0},
];
var snake_head_cord =  {x: snake[0].x ,
                  y: snake[0].y };

upBtn.addEventListener('click',  function(){

	const goingUp = (yVelocity == -unitSize);
	const goingDown = (yVelocity == unitSize);
	const goingRight = (xVelocity == unitSize);
	const goingLeft = (xVelocity == -unitSize);
 if (!goingDown){
			xVelocity = 0;
			yVelocity = -unitSize;}})
downBtn.addEventListener('click', function(){

	const goingUp = (yVelocity == -unitSize);
	const goingDown = (yVelocity == unitSize);
	const goingRight = (xVelocity == unitSize);
	const goingLeft = (xVelocity == -unitSize);
 if (!goingUp){
			xVelocity = 0;
			yVelocity = unitSize;}})
leftBtn.addEventListener('click',  function(){

	const goingUp = (yVelocity == -unitSize);
	const goingDown = (yVelocity == unitSize);
	const goingRight = (xVelocity == unitSize);
	const goingLeft = (xVelocity == -unitSize);
 if (!goingRight){
			xVelocity = -unitSize;
			yVelocity = 0;}})
rightBtn.addEventListener('click',  function(){

	const goingUp = (yVelocity == -unitSize);
	const goingDown = (yVelocity == unitSize);
	const goingRight = (xVelocity == unitSize);
	const goingLeft = (xVelocity == -unitSize);
 if (!goingLeft){
						xVelocity = unitSize;
			yVelocity = 0;}})
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);
function gameStart(){
	running = true;
	scoreText.textContent = score;
	createFood();
	drawFood();
	nextTick();
resetBtn.textContent = "AGAIN";
gmTxt = "PLAYING";
gameText.textContent = gmTxt;
};
function nextTick(){
	if(running){
		setTimeout(()=>{
			clearBoard();
			drawFood();
			moveSnake();
			drawSnake();
			checkGameOver();
			nextTick();
			}, 320);
	}
	else{
		displayGameOver();
	}
};
function clearBoard(){
	ctx.fillStyle = boardBackground;
	ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function createFood(){
	function randomFood(min, max){
		const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
		return randNum;
	};
	foodX = randomFood(0, gameWidth - unitSize);
	foodY = randomFood(0, gameWidth - unitSize);

};
function drawFood(){
	ctx.fillStyle = foodColor;
	ctx.fillRect(foodX, foodY, unitSize, unitSize);
	//ctx.font = "bold 48px serif";
	//ctx.fillStyle = foodColor;
	//ctx.textAlign = "center";
	//ctx.fillStyle = "white";
	//ctx.fillText = ("X", 30, 60, unitSize, unitSize);


};
function moveSnake(){
	const head = {x: snake[0].x + xVelocity,
                  y: snake[0].y + yVelocity};
        snake_head_cord = {x: ((snake[0].x - (unitSize/2))) + xVelocity,
                  y: (snake[0].y - (unitSize/2)) + yVelocity};
	snake.unshift(head);
	//if food is eaten
	if(snake[0].x == foodX && snake[0].y == foodY){
		score+=1;
		scoreText.textContent = score;
		createFood();
	}
	else{
		snake.pop();
	}
};
function drawSnake(){
	ctx.fillStyle = snakeColor;
	//ctx.strokeStyle = snakeBorder;
	snake.forEach(snakePart => {
	ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
	//ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
	});
        snake_head = ctx.drawImage(img, (snake_head_cord.x), (snake_head_cord.y), unitSize *2, unitSize *2);

};
function changeDirection(event){
	const keyPressed = event.keyCode;
	console.log(keyPressed);
	const LEFT = 37;
	const UP = 38;
	const RIGHT = 39;
	const DOWN = 40;

	const UP_letter = 87;
	const DOWN_letter = 83;
	const LEFT_letter = 65;
	const RIGHT_letter = 68;
	
	const goingUp = (yVelocity == -unitSize);
	const goingDown = (yVelocity == unitSize);
	const goingRight = (xVelocity == unitSize);
	const goingLeft = (xVelocity == -unitSize);

	switch(true){
		case((keyPressed == LEFT || keyPressed == LEFT_letter) && !goingRight):
			xVelocity = -unitSize;
			yVelocity = 0;
			break;
		case(keyPressed == RIGHT || keyPressed == RIGHT_letter && !goingLeft):
			xVelocity = unitSize;
			yVelocity = 0;
			break;
		case(keyPressed == UP || keyPressed == UP_letter && !goingDown):
			xVelocity = 0;
			yVelocity = -unitSize;
			break;
		case(keyPressed == DOWN || keyPressed == DOWN_letter && !goingUp):
			xVelocity = 0;
			yVelocity = unitSize;
			break;
	}
};
function checkGameOver(){
	switch(true){
		case (snake[0].x < 0):
			running = false;
			break;
		case (snake[0].x >= gameWidth):
			running = false;
			break;
		case (snake[0].y < 0):
			running = false;
			break;
		case (snake[0].y >= gameHeight):
			running = false;
			break;
	}
	for(let i = 1; i < snake.length; i += 1){
		if((snake[i].x == snake[0].x) && (snake[i].y == snake[0].y)) {
			running = false;
		}
	}
};
function displayGameOver(){
	ctx.font = "50 px MV Boli";
	ctx.fillStyle = "orange";
	ctx.textAlign = "center";
	ctx.fillText = ("GAME OVER", gameWidth / 2, gameHeight / 2);
gmTxt = "GAME OVER!!!";
gameText.textContent = gmTxt;

	running = false;
};
function resetGame(){
gmTxt = "PLAYING";
	score = 0;
	xVelocity = unitSize;
	yVelocity = 0;
	snake = [ 
	{x:unitSize, y:0},
	{x:0, y:0},
	];
	gameStart();
};
