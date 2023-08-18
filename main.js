function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);

	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('post',gotposes);
}
function modelLoaded(){
	console.log("los memes del 2010 ya no dan risa");
}
function gotposes(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}
function draw() {
	game()
}






