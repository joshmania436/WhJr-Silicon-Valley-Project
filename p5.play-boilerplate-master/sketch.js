var bg2,bg3;
//var player;
var current_img;
var gameState ="start";
var greeting,greeting1,greeting2,greeting3,greeting4,greeting5; 
var button1,button2;         
function preload(){
bg1 =loadImage( "assests/Grandevent.jpg" );
bg2 =loadImage("assests/openingImg.jpg");
bg3 =loadImage("assests/detective img.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  current_img =bg3;
 button1 =createButton("New Game");
button1.position(displayWidth/2 -150,displayHeight/2); 
button1.mousePressed(changeBg2);

 button2 =createButton("Reset Saved Data");
button2.position(displayWidth/2-50,displayHeight/2);
button2.mousePressed(changeBg3);
}

function draw() {
  background(current_img);  
  
  
  greeting =createElement('h3');
  greeting.html("Hello");
  greeting.position(displayWidth/2-300,displayHeight/2 + 400);
  //textSize(20);
  //fill("white");

  greeting1 =createElement('h3');
  greeting1.html("THIS WORK IS ENTIRELY FICTIONAL");
  greeting1.position(displayWidth/2 -300,displayHeight/2 -300);

  greeting2 =createElement('h3');
  greeting2.html("This is a detective game, in this game you should solve mystries,find clues, be alert etc..");
  greeting2.position(displayWidth/2-300,displayHeight/2 -250);

greeting3 =createElement('h3');
  greeting3.html("A walkthrough on what the game is about:-");
  greeting3.position(displayWidth/2 -300,displayHeight/2 - 200); 

  greeting4 =createElement('h3');
  greeting4.html("The game starts at a grand event and suddenly the lights fuse!");
  greeting4.position(displayWidth/2 -300,displayHeight/2 -150);

  greeting5 =createElement('h3');
  greeting5.html("When the lights are back on, the people present in the grand event are shocked to see the Mayor of ProHat DEAD!");
greeting5.position(displayWidth/2 -400,displayHeight/2 -100);

  drawSprites();
}
function changeBg2(){
current_img = bg2;
}

function changeBg3(){
current_img =bg3;
greeting.hide();
greeting1.hide();
greeting2.hide();
greeting3.hide();
greeting4.hide();
greeting5.hide();

//button2.hide();
}