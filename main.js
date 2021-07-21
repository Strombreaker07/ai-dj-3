song1 = "";
song2 = "";

leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;

function preload()
{
    song1 = loadSound("dna.mp3")
    song2 = loadSound("cradles.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses)
}

function modelloaded()
{
    console.log("model Loaded!");
}

function draw()
{
    image(video, 0, 0, 600, 500);
    //(var, x, y, width, height);
}

function play()
{
    song.play();

    song.setVolume(1);

    song.rate(1);
}

function pause()
{
    song.pause();
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}