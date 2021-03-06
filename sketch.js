const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
 if(backgroundImg){
     background(backgroundImg);
 }
 textSize(20);
 fill("white");
 if(hour>=12){ 
     text("Time : "+ hour%12 + " PM", 50,100);
    console.log(hour) 
    }
     else if(hour==0){ 
         text("Time : 12 AM",100,100);
         }

         else{ text("Time : "+ hour%12 + " AM", 50,100);
         console.log(hour) 
        }

    Engine.update(engine);
    
}

async function getBackgroundImg(){

    // write code to fetch time from API
 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
var responseJSON =  await response.json();

    // write code slice the datetime
var dt = responseJSON.datetime;
var hour = dt.slice(14,16);

    // add conditions to change the background images from sunrise to sunset
if (hour >= 04 && hour <= 05){
    bg = "sunrise1.png";
}
else if(hour >= 05 && hour <= 06){
    bg = "sunrise2.png";
}
else if(hour >= 06 && hour <= 07){
    bg = "sunrise3.png";
}
else if(hour >= 07 && hour <= 010){
    bg = "sunrise4.png";
}
else if(hour >= 10 && hour <= 13){
    bg = "sunrise5.png";
}
else if(hour >= 13 && hour <= 17){
    bg = "sunrise6.png";
}
else if(hour >= 17 && hour <= 18){
    bg = "sunset7.png";
}
else if(hour >= 18 && hour <= 19){
    bg = "sunset8.png";
}
else if(hour >= 19 && hour <= 20){
    bg = "sunset9.png";
}
else if(hour >= 20 && hour <= 21){
    bg = "sunset10.png";
}
else if(hour >= 21 && hour <= 22){
    bg = "sunset11.png";
}
else if(hour >= 22 ){
    bg = "sunset12.png";
}
else{
    bg = "sunset12.png"
}

    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg);
}
