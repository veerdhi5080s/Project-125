leftwristX=0;
rightwristX=0;
difference=0;

function setup(){
  video=createCapture(VIDEO);
  video.size(550,500);
  canvas=createCanvas(550,400);
  canvas.position(620,130);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log("MagzineLoaded");
}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);

  }
}

function draw(){
  background("aqua");
  document.getElementById("square_side").innerHTML="Width & Height of a square will be = "+difference+"px";
  textSize(difference);
  fill("red");
  text("Shreyash",50,200);
}