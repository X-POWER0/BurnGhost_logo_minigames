//alert ("start")
const burnghost = document.getElementById("burnghost");
const fount = document.getElementById("fount");
//const StartBtn = document.getElementsByClassName('AgainB');
const StartBtn = document.getElementById('AgainB');
let health = 100;
let score = 0;
let start = 0;
let HPdecreas;
let hit = false;
if (start == 0){
StartBtn.addEventListener("click", function() 
{
  start = 1;
console.log(start);

if (start == 1){
hit = false;
console.log(hit)
health = 100;
document.getElementById('pl').innerHTML = ("PLAYING");
document.getElementById('hlt').innerHTML = ("Health: " + health);
document.getElementById('sc').innerHTML = ("Score: " + score);
if(health > 0 && fount.classList != "fountMov") {fount.classList.add("fountMov")}
document.addEventListener("keydown", function(event) {
jump(); });
burnghost.addEventListener("click", function(event) {
jump(); });
function jump () {
if (burnghost.classList != "jump") {
burnghost.classList.add("jump")
}
setTimeout( function() {burnghost.classList.remove("jump")}
, 700)
}
let isAlive = setInterval (function() {
let burnghostTop = parseInt(window.getComputedStyle(burnghost).getPropertyValue("top"));
let fountLeft = parseInt(window.getComputedStyle(fount).getPropertyValue("left"));



if(fountLeft < 50 && fountLeft > 0 && burnghostTop >= 140) {
//HPdecreas = setInterval (function() {if(fountLeft < 50 && fountLeft > 0 && burnghostTop >= 140) {--health;}}, 1000);
--health;
hit = true;
document.getElementById('hlt').innerHTML =  ("Health: " + health);
document.getElementById('sc').innerHTML = ("Score: " + score);

if (burnghost.classList != "burnghost-hit") {
burnghost.classList.add("burnghost-hit")
console.log("hit");
}
setTimeout( function() {burnghost.classList.remove("burnghost-hit")}
, 700)
//console.log(":(")

console.log(hit)
if ( health <= 0 )
{
if(fount.classList == "fountMov") {fount.classList.remove("fountMov")}
//console.log("Gameover" + score);
document.getElementById('pl').innerHTML = ("GAME OVER! score: " + score);
health = 100;
hit = false;

console.log(hit)
score = 0;
start = 0;
}
        
}
if (hit == false && fountLeft <= 0 && fountLeft > -2 && health > 0) {
++score;
hit = false;
hit = false;
hit = false;
console.log(hit)
document.getElementById('sc').innerHTML = ("Score: " + score);
}
if (fountLeft <= 0 && hit == true && fountLeft > -2 && health > 0){
hit = false;
hit = false;
hit = false;
console.log(hit)
document.getElementById('sc').innerHTML = ("Score: " + score);
}


}, 10)

}


});}
