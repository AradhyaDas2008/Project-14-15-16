noseX=0;
noseY=0;
function preload(){
    moustache=loadImage('https://i.postimg.cc/fb2txfWc/unnamed-3.png');
}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}
function modelLoaded(){console.log("poseNet is initialized");}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y;
    }
}
function draw(){
image(video, 0, 0, 300, 300);
//circle(noseX, noseY, 50);
//fill("red");
//stroke("green");
image(moustache, noseX, noseY, 60, 50);
}
function take_snapshot(){
    save('aradhya.png');
}
