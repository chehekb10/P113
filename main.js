function preload(){
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(60, 250);
    video= createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 50, 80);
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(70, 450, 460, 20);


    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 450, 80);


    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 450, 80);
}
