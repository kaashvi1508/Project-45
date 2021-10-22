var form;
var backgroundImg, SpaceBG, LandBG, WaterBG;
var gameState=0;
function preload(){
    backgroundImg = loadImage("./assets/background.jpeg");
    SpaceBG = loadImage("./assets/space-bg.jpg");
    LandBG = loadImage("./assets/land-bg.jpg");
    WaterBG = loadImage("./assets/water-bg.jpg");
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    bg = createSprite(width/2,height/2);
    bg.addImage("background",backgroundImg);
    bg.scale=2;

    form = new Form();
    form.display();
}

function draw(){

    if(gameState===1){
        background(LandBG);
        bg.hide();
    }

    if(gameState===2){
        background(WaterBG);
        bg.hide();
    }

    if(gameState===3){
        background(SpaceBG);
        bg.hide();
    }

    drawSprites();
}