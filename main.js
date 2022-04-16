function preload(){

}

function setup(){
 canvas = createCanvas(1000, 1000)
 canvas.center();
 video = createCapture(VIDEO);
 video.hide()
}

function draw(){
    image(video, 200, 300, 500, 400);
    fill(52, 152, 235);
    stroke(3, 33, 59);
    circle(50, 50, 100);
    circle(800, 50, 100);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(100, 20, 650, 50);
}
