var card = "";
var cardnumber = "";
var cardcount = 0;
var card_inside = "";
var card_inside_last = "0";
var card_last = "0";
var cardmatch = 0;
var score = 0;
var life = 3;
var cardmatch = 0;
var attemptC1 = 0; 
var attemptC2  = 0; 
var attemptC3  = 0; 
var attemptC4  = 0; 
var attemptC5  = 0; 
var attemptC6  = 0; 
var attemptC7  = 0; 
var attemptC8  = 0; 
var attemptC9  = 0; 
var attemptC10  = 0; 
var attemptC11  = 0; 
var attemptC12  = 0;
var GameStatus =   document.getElementById("GameStatus");
GameStatus.innerHTML = "PLAY";
var resetBtn = document.getElementById("resetBtn");
var scoreText = document.getElementById("scoreText");
scoreText.innerHTML = ("Score:" + "<br>" + score);
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
const card11 = document.getElementById("card11");
const card12 = document.getElementById("card12");

var card1_inner = document.getElementById("card1_inner");
var card2_inner = document.getElementById("card2_inner");
var card3_inner = document.getElementById("card3_inner");
var card4_inner = document.getElementById("card4_inner");
var card5_inner = document.getElementById("card5_inner");
var card6_inner = document.getElementById("card6_inner");
var card7_inner = document.getElementById("card7_inner");
var card8_inner = document.getElementById("card8_inner");
var card9_inner = document.getElementById("card9_inner");
var card10_inner = document.getElementById("card10_inner");
var card11_inner = document.getElementById("card11_inner");
var card12_inner = document.getElementById("card12_inner");


resetBtn.innerHTML = "START";
resetBtn.addEventListener("click", StartGame);

function StartGame(){
if(cardmatch != 6){
console.log("attemptC9" + attemptC9);
console.log("life"+life);
console.log("cardcount" + cardcount);

card1_inner = document.getElementById("card1_inner");
card2_inner = document.getElementById("card2_inner");
card3_inner = document.getElementById("card3_inner");
card4_inner = document.getElementById("card4_inner");
card5_inner = document.getElementById("card5_inner");
card6_inner = document.getElementById("card6_inner");
card7_inner = document.getElementById("card7_inner");
card8_inner = document.getElementById("card8_inner");
card9_inner = document.getElementById("card9_inner");
card10_inner = document.getElementById("card10_inner");
card11_inner = document.getElementById("card11_inner");
card12_inner = document.getElementById("card12_inner");
card1.classList.add("card");
card2.classList.add("card");
card3.classList.add("card");
card4.classList.add("card");
card5.classList.add("card");
card6.classList.add("card");
card7.classList.add("card");
card8.classList.add("card");
card9.classList.add("card");
card10.classList.add("card");
card11.classList.add("card");
card12.classList.add("card");
card1.classList.remove("cardhide");
card2.classList.remove("cardhide");
card3.classList.remove("cardhide");
card4.classList.remove("cardhide");
card5.classList.remove("cardhide");
card6.classList.remove("cardhide");
card7.classList.remove("cardhide");
card8.classList.remove("cardhide");
card9.classList.remove("cardhide");
card10.classList.remove("cardhide");
card11.classList.remove("cardhide");
card12.classList.remove("cardhide");
attemptC1 = 0; 
attemptC2  = 0; 
attemptC3  = 0; 
attemptC4  = 0; 
attemptC5  = 0; 
attemptC6  = 0; 
attemptC7  = 0; 
attemptC8  = 0; 
attemptC9  = 0; 
attemptC10  = 0; 
attemptC11  = 0; 
attemptC12  = 0;
score = 0;
life = 3;
card = "";
cardnumber = "";
cardcount = 0;
card_inside = "";
card_inside_last = "0";
card_last = "0";
cardcount = 0;
cardmatch = 0;
GameStatus.innerHTML = "PLAYING";
resetBtn.innerHTML = "RESET";
scoreText.innerHTML = ("Score:" + "<br>" + score);
play();
}
if(cardmatch >= 6){

card1_inner = document.getElementById("card1_inner");
card2_inner = document.getElementById("card2_inner");
card3_inner = document.getElementById("card3_inner");
card4_inner = document.getElementById("card4_inner");
card5_inner = document.getElementById("card5_inner");
card6_inner = document.getElementById("card6_inner");
card7_inner = document.getElementById("card7_inner");
card8_inner = document.getElementById("card8_inner");
card9_inner = document.getElementById("card9_inner");
card10_inner = document.getElementById("card10_inner");
card11_inner = document.getElementById("card11_inner");
card12_inner = document.getElementById("card12_inner");
card1.classList.add("card");
card2.classList.add("card");
card3.classList.add("card");
card4.classList.add("card");
card5.classList.add("card");
card6.classList.add("card");
card7.classList.add("card");
card8.classList.add("card");
card9.classList.add("card");
card10.classList.add("card");
card11.classList.add("card");
card12.classList.add("card");
card1.classList.remove("cardhide");
card2.classList.remove("cardhide");
card3.classList.remove("cardhide");
card4.classList.remove("cardhide");
card5.classList.remove("cardhide");
card6.classList.remove("cardhide");
card7.classList.remove("cardhide");
card8.classList.remove("cardhide");
card9.classList.remove("cardhide");
card10.classList.remove("cardhide");
card11.classList.remove("cardhide");
card12.classList.remove("cardhide");
attemptC1 = 0; 
attemptC2  = 0; 
attemptC3  = 0; 
attemptC4  = 0; 
attemptC5  = 0; 
attemptC6  = 0; 
attemptC7  = 0; 
attemptC8  = 0; 
attemptC9  = 0; 
attemptC10  = 0; 
attemptC11  = 0; 
attemptC12  = 0;
cardmatch = 0;
life = 3;
card = "";
cardnumber = "";
cardcount = 0;
card_inside = "";
card_inside_last = "0";
card_last = "0";
cardcount = 0;
cardmatch = 0;
}
console.log("attemptC9" + attemptC9);
console.log("life"+life);
console.log("cardcount" + cardcount);
}

card1.addEventListener("click",  card1F);
function card1F(){if(life < 0){endGame();} else{opencard("1"); cardcount += 1; attemptC1 += 1; if(attemptC1>3){life -= 1;}}}
card2.addEventListener("click",  card2F);

function card2F(){if(life < 0){endGame();} else{opencard("2"); cardcount += 1; attemptC2 += 1; if(attemptC2>3){life -= 1;}}}
card3.addEventListener("click",  card3F);

function card3F(){if(life < 0){endGame();} else{opencard("3"); cardcount += 1; attemptC3 += 1; if(attemptC3>2){life -= 1;}}}
card4.addEventListener("click",  card4F);

function card4F(){if(life < 0){endGame();} else{opencard("4"); cardcount += 1; attemptC4 += 1; if(attemptC4>2){life -= 1;}}}
card5.addEventListener("click",  card5F);

function card5F(){if(life < 0){endGame();} else{opencard("5"); cardcount += 1; attemptC5 += 1; if(attemptC5>2){life -= 1;}}}
card6.addEventListener("click",  card6F);

function card6F(){if(life < 0){endGame();} else{opencard("6"); cardcount += 1; attemptC6 += 1; if(attemptC6>2){life -= 1;}}}
card7.addEventListener("click",  card7F);

function card7F(){if(life < 0){endGame();} else{opencard("7"); cardcount += 1; attemptC7 += 1; if(attemptC7>2){life -= 1;}}}
card8.addEventListener("click",  card8F);

function card8F(){if(life < 0){endGame();} else{opencard("8"); cardcount += 1; attemptC8 += 1; if(attemptC8>2){life -= 1;}}}
card9.addEventListener("click",  card9F);

function card9F(){if(life < 0){endGame();} else{opencard("9"); cardcount += 1; attemptC9 += 1; if(attemptC9>2){life -= 1;}}}
card10.addEventListener("click",  card10F);

function card10F(){if(life < 0){endGame();} else{opencard("10"); cardcount += 1; attemptC10 += 1; if(attemptC10>2){life -= 1;}}}
card11.addEventListener("click",  card11F);

function card11F(){if(life < 0){endGame();} else{opencard("11"); cardcount += 1; attemptC11 += 1; if(attemptC11>2){life -= 1;}}}
card12.addEventListener("click",  card12F);

function card12F(){if(life < 0){endGame();} else{opencard("12"); cardcount += 1; attemptC12 += 1; if(attemptC12>2){life -= 1;}}}

function life_play(){


}
function opencard(cardnumber)
{

if (cardcount > 1 ){

if(card1.classList == ("cardhide")){
card1.classList.add("card");
card1.classList.remove("cardhide");
}
if(card2.classList == ("cardhide")){
card2.classList.add("card");
card2.classList.remove("cardhide");
}
if(card3.classList == ("cardhide")){
card3.classList.add("card");
card3.classList.remove("cardhide");
}
if(card4.classList == ("cardhide")){
card4.classList.add("card");
card4.classList.remove("cardhide");
}
if(card5.classList == ("cardhide")){
card5.classList.add("card");
card5.classList.remove("cardhide");
}
if(card6.classList == ("cardhide")){
card6.classList.add("card");
card6.classList.remove("cardhide");
}
if(card7.classList == ("cardhide")){
card7.classList.add("card");
card7.classList.remove("cardhide");
}
if(card8.classList == ("cardhide")){
card8.classList.add("card");
card8.classList.remove("cardhide");
}
if(card9.classList == ("cardhide")){
card9.classList.add("card");
card9.classList.remove("cardhide");
}
if(card10.classList == ("cardhide")){
card10.classList.add("card");
card10.classList.remove("cardhide");
}
if(card11.classList == ("cardhide")){
card11.classList.add("card");
card11.classList.remove("cardhide");
}
if(card12.classList == ("cardhide")){
card12.classList.add("card");
card12.classList.remove("cardhide");
}
cardcount = 0
}
card = "card" + cardnumber;
card_inside = card + "_inner";
console.log(card);
card_inside = document.getElementById(card_inside).innerHTML;
card = document.getElementById(card);
 if (card.classList != "cardhide" && card != card_last )
{
card.classList.add("cardhide");
card.classList.remove("card");

console.log("attemptC9" + attemptC9);
console.log("life"+life);
console.log("AAcardcount" + cardcount);

}
if(card_inside_last == card_inside && card.classList == "cardhide" && card != card_last && card_last.classList != "card"){
card_last.classList.remove("cardhide");
card.classList.remove("cardhide");
cardmatch+=1;
cardcount = 0;
if (life >=0){
if (cardmatch == 6){
score +=1;
scoreText.innerHTML = ("Score:" + "<br>" + score);
nextGame();
}
}
}
 
if(card.classList == "cardhide"  && card == card_last )
{
card.classList.add("card");
card.classList.remove("cardhide");

if (card_last.classList != "cardhide"){
card_last.classList.add("card");
card_last.classList.remove("cardhide");
}
cardcount = 0;
}



card_last = card;
card_inside_last = card_inside;
}



function play(){
if (life >= 1){
/*
function whatcard(){
}
*/
life_play()
if(cardmatch == 6){
scoreText.innerHTML = ("Score:" + "<br>" + score);
nextGame();
}
}
else{
endGame();
}
}



function endGame(){
GameStatus.innerHTML = "GAME OVER";
resetBtn.innerHTML = "AGAIN";
scoreText.innerHTML = ("Score:" + "<br>" + score);
console.log("attemptC9" + attemptC9);
console.log("life"+life);
console.log("cardcount" + cardcount);

/*
card1 = "";
card2 = "";
card3 = "";
card4 = "";
card5 = "";
card6 = "";
card7 = "";
card8 = "";
card9 = "";
card10 = "";
card11 = "";
card12 = "";
*/
card1_inner = "";
card2_inner = "";
card3_inner = "";
card4_inner = "";
card5_inner = "";
card6_inner = "";
card7_inner = "";
card8_inner = "";
card9_inner = "";
card10_inner = "";
card11_inner = "";
card12_inner = "";
/*
card1 = document.getElementById("card1");
card2 = document.getElementById("card2");
card3 = document.getElementById("card3");
card4 = document.getElementById("card4");
card5 = document.getElementById("card5");
card6 = document.getElementById("card6");
card7 = document.getElementById("card7");
card8 = document.getElementById("card8");
card9 = document.getElementById("card9");
card10 = document.getElementById("card10");
card11 = document.getElementById("card11");
card12 = document.getElementById("card12");
*/
card1_inner = document.getElementById("card1_inner");
card2_inner = document.getElementById("card2_inner");
card3_inner = document.getElementById("card3_inner");
card4_inner = document.getElementById("card4_inner");
card5_inner = document.getElementById("card5_inner");
card6_inner = document.getElementById("card6_inner");
card7_inner = document.getElementById("card7_inner");
card8_inner = document.getElementById("card8_inner");
card9_inner = document.getElementById("card9_inner");
card10_inner = document.getElementById("card10_inner");
card11_inner = document.getElementById("card11_inner");
card12_inner = document.getElementById("card12_inner");
card1.classList.add("card");
card2.classList.add("card");
card3.classList.add("card");
card4.classList.add("card");
card5.classList.add("card");
card6.classList.add("card");
card7.classList.add("card");
card8.classList.add("card");
card9.classList.add("card");
card10.classList.add("card");
card11.classList.add("card");
card12.classList.add("card");
card1.classList.remove("cardhide");
card2.classList.remove("cardhide");
card3.classList.remove("cardhide");
card4.classList.remove("cardhide");
card5.classList.remove("cardhide");
card6.classList.remove("cardhide");
card7.classList.remove("cardhide");
card8.classList.remove("cardhide");
card9.classList.remove("cardhide");
card10.classList.remove("cardhide");
card11.classList.remove("cardhide");
card12.classList.remove("cardhide");
attemptC1 = 0; 
attemptC2  = 0; 
attemptC3  = 0; 
attemptC4  = 0; 
attemptC5  = 0; 
attemptC6  = 0; 
attemptC7  = 0; 
attemptC8  = 0; 
attemptC9  = 0; 
attemptC10  = 0; 
attemptC11  = 0; 
attemptC12  = 0;
card = "";
cardnumber = "";
cardcount = 0;
card_inside = "";
card_inside_last = "0";
card_last = "0";
cardcount = 0;
cardmatch = 0;
};

function nextGame(){
GameStatus.innerHTML = "GOING UP";
resetBtn.innerHTML = "NEXT";
console.log("attemptC9" + attemptC9);
console.log("life"+life);
console.log("cardcount" + cardcount);
scoreText.innerHTML = ("Score:" + "<br>" + score);
}

