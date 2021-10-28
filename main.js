function setup() {

    video= createCapture(VIDEO);
    video.size(300 , 300);
canvas= createCanvas(300 , 300);
canvas.position(69 , 69);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);


}

function gotPoses(results) {

if(results.length>0) {

    console.log(results);

}

}

function modelLoaded() {

    console.log('Posenet Neautralized');

}


function draw() {

background(62 ,  60 , 169);

}
