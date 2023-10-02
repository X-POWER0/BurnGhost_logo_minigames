const upBtn = document.getElementById("up");
var hole = document.getElementById("hole");
var block = document.getElementById("block");

let PREscore = 0;
var water = document.getElementById("Land");
var character = document.getElementById("character");
var jumping = 0;
var JumpCount = 0;
var Gravity;
var counter = 0;
var characterTOP = parseInt(window.getComputedStyle(character).getPropertyValue("top"));



const scoreText = document.querySelector("#scoreText");
const gameText = document.querySelector("#gameText");
const textField = document.querySelector('#text-field');

const resetBtn = document.querySelector("#resetBtn");


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
//to avoid error of more then 1
PREscore++;

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

if(PREscore>0){score++; PREscore = 0;}

if(score>hscore){hscore = score;}
	scoreText.textContent = "sc:"+ score+"_"+"hs:"+hscore;
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

if(PREscore>0){score++; PREscore = 0;}
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

checkGameOver();
if(hole.classList != ("hole")){
hole.classList.add("hole");
hole.classList.remove("holeanim");
}
PREscore = 0;
score = 0;
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
PREscore = 0;
clearInterval(Gravity);
jumping = 0;
JumpCount = 0;

	gameStart();
}};
