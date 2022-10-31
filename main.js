noseX=0,0
noseY=0,0
function preload(){
 lipsImage=loadImage("lips.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("posenet is initialized");

}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
    noseX= results[0].pose.nose.x-20;
    noseY= results[0].pose.nose.y+15;
    console.log("nosex= "+ noseX );
    console.log("nosey= "+ noseY );
  }
}
function draw(){
image(video,0,0,300,300);
fill(250,0,0);
image(lipsImage,noseX,noseY,50,40);

}

function take_snapshot(){
    save("myfilterimage.png")
}