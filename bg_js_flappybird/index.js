const upBtn = document.getElementById("up");
var hole = document.getElementById("hole");
var block = document.getElementById("block");

var water = document.getElementById("Land");
var character = document.getElementById("character");
var jumping = 0;
var JumpCount = 0;
var Gravity;
var counter = 0;
var characterTOP = parseInt(window.getComputedStyle(character).getPropertyValue("top"));



//const gameBoard = document.getElementById("gameBoard");

//character.addEventListener('click',  jump());


const scoreText = document.querySelector("#scoreText");
const gameText = document.querySelector("#gameText");
const textField = document.querySelector('#text-field');

const resetBtn = document.querySelector("#resetBtn");
//const scoreText = document.getElementById("score");
//const resetBtn = document.getElementById("resetBtn");


let running = false;
let score = 0;
let hscore = 0;
let gmTxt = "PLAYING";
//JUMP in reset function
 window.addEventListener("keydown", resetGame);
resetBtn.addEventListener("click", resetGame);

function gameStart(){
	running = true;
if(score>hscore){hscore = score;}
	scoreText.textContent = "sc:"+ score+"_"+"hs:"+hscore;

character.style.top = -document.documentElement.clientHeight * 0.9 + "px";

character.style.top = (characterTOP -90)+"px";
if(block.classList != ("blockanim")){
block.classList.add("blockanim");
block.classList.remove("block");
}


if(hole.classList != ("holeanim")){
hole.classList.add("holeanim");
hole.classList.remove("hole");
}

hole.addEventListener('animationiteration',()=>{
if(running != false){
	var random = -((Math.random()*34) + 60);
hole.style.top = random + "vh";	
score++;
if(score>hscore){hscore = score;}
	scoreText.textContent = "sc:"+ score+"_"+"hs:"+hscore;

}
else{var random = 0; hole.style.top = random + "vh";	
}
})

if(water.classList != ("LandAnim")){
water.classList.add("LandAnim");
water.classList.remove("Land");
}
	nextTick();

resetBtn.textContent = "JUMP";
gmTxt = "PLAYING";
gameText.textContent = gmTxt;
};

function jump(){
jumping = 1;

var jumpInterval = setInterval(function(){
	var characterTOP = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
if(running != false && characterTOP>-document.documentElement.clientHeight * 1.8 && JumpCount<15){
character.style.top = (characterTOP - 3)+"px";
JumpCount ++;

jumping = 0;
}},3);

if(running != false && JumpCount>1 ){
	clearInterval(jumpInterval);
	jumping=0;
	JumpCount=0;
	}

}

function nextTick(){
	if(running){
var blockLEFT = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	
if(score>hscore){hscore = score;}
	scoreText.textContent = "sc:"+ score+"_"+"hs:"+hscore;
hole.style.left = block.style.left+"vw";
Gravity = setInterval(function(){
	var characterTOP = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var characterHeight = parseInt(window.getComputedStyle(character).getPropertyValue("height"));

if(running != false && jumping == 0){
character.style.top = (characterTOP+1)+"px";
}

//to check hit of block or hole
	var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
var cTop = -(document.documentElement.clientHeight-characterTOP);
var cLeft = parseInt(window.getComputedStyle(character).getPropertyValue("right"));

var holeHight = parseInt(window.getComputedStyle(hole).getPropertyValue("height"));

var blockLFT = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var holeBottom = parseInt(window.getComputedStyle(hole).getPropertyValue("bottom"));

//Check GAME oVER
if(running != false && characterTOP> -document.documentElement.clientHeight * 0.6 || running != false && (blockLFT> -document.documentElement.clientWidth * 0.15) && (blockLFT<document.documentElement.clientWidth * 0.05)&&((characterTOP>-(holeBottom+holeHight*0.4)) || (characterTOP<(-document.documentElement.clientHeight+holeTop+holeHight)) )){
//console.log(cLeft + "char"); 
//console.log(document.documentElement.clientWidth);  
console.log(holeHight +"holeH");  
console.log(holeTop+"hole");
console.log(-(document.documentElement.clientHeight-(holeBottom-holeHight*0.5)));
console.log(-(document.documentElement.clientHeight-holeBottom));
console.log(holeBottom+"hb");
console.log(characterTOP+"char");
console.log(-document.documentElement.clientHeight+holeTop+holeHight);
// || (cTop>holeTop+10))
// 
checkGameOver();
if(hole.classList != ("hole")){
hole.classList.add("hole");
hole.classList.remove("holeanim");
}

score=0;
running = false;
displayGameOver();
character.style.top = -document.documentElement.clientHeight * 0.9 + "px";
}
}, 10);
	}
	else{

if(block.classList != ("block")){
block.classList.add("block");
block.classList.remove("blockanim");
}


if(hole.classList != ("hole")){
hole.classList.add("hole");
hole.classList.remove("holeanim");
}

if(water.classList != ("Land")){
water.classList.add("Land");
water.classList.remove("LandAnim");
}
		displayGameOver();
	}
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
	
	//const goingUp = (yVelocity == -unitSize);
	//const goingDown = (yVelocity == unitSize);
	//const goingRight = (xVelocity == unitSize);
	//const goingLeft = (xVelocity == -unitSize);


};
function checkGameOver(){

//random = -((Math.random()*65) + 40);
//hole.style.top = random + "vh";	
hole.style.top = -80 + "vh";	

counter = 0;
	running = false;
character.style.top = -document.documentElement.clientHeight * 0.9 + "px";

if(block.classList != ("block")){
block.classList.add("block");
block.classList.remove("blockanim");
}

if(hole.classList != ("hole")){
hole.classList.add("hole");
hole.classList.remove("holeanim");
}

if(water.classList != ("Land")){
water.classList.add("Land");
water.classList.remove("LandAnim");
}
};
function displayGameOver(){
gmTxt = "GAME OVER!!!";
resetBtn.textContent = "AGAIN";
gameText.textContent = gmTxt;
clearInterval(Gravity);
jumping = 0;
JumpCount = 0;
character.style.top = -document.documentElement.clientHeight * 0.9 + "px";

	running = false;
//nextTick();

};
function resetGame(){
if(running){
jump();
}
if(!running){
gmTxt = "PLAYING";
resetBtn.textContent = "JUMP";
	score = 0;
clearInterval(Gravity);
jumping = 0;
JumpCount = 0;

	gameStart();
}};
