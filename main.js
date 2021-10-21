function preload() {
	world_start = loadSound("world_start.wav");
	marioJump = loadSound("jump.wav");
	marioCoin = loadSound("coin.wav");
	marioKick = loadSound("kick.wav");
	marioGameOver = loadSound("gameover.wav");
	marioDies = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	v1 = createCapture(VIDEO);
	v1.size(900, 300);
	v1.parent("webcam");

	pNet = ml5.poseNet(v1, modelLoaded);
	pNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("Model has Loaded!!");}

function gotPoses(results){
if (results.length > 0){
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
}


}



function draw() {
	game()
}






