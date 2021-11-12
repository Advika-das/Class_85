canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
rover_width=100;
rover_height=90;
nasa_images_array=["NASA_image_1.jpg","NASA_image_2.jpg","NASA_image_3.jpg"];
random_number=Math.floor(Math.random()*3);
background_image=nasa_images_array[random_number];
rover_image="rover.png";
rover_X=10;
rover_Y=10;
function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;
    rover_imagetag=new Image();
    rover_imagetag.onload=uploadRover;
    rover_imagetag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imagetag, rover_X, rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38")
    {
        up();
        console.log("up");
    }
    if(keypressed=="39")
    {
        right();
        console.log("right");
    }
    if(keypressed=="40")
    {
        down();
        console.log("down");
    }
    if(keypressed=="37")
    {
        left();
        console.log("left");
    }
}

function up(){
    if(rover_Y >=0){
        rover_Y=rover_Y-10;
        console.log("when up arrow is pressed, X= "+rover_X+"| Y= "+rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_Y <=500){
        rover_Y=rover_Y+10;
        console.log("when down arrow is pressed, X= "+rover_X+"| Y= "+rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_X >=0){
        rover_X=rover_X-10;
        console.log("when left arrow is pressed, X= "+rover_X+"| Y= "+rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_X <=700){
        rover_X=rover_X+10;
        console.log("when right arrow is pressed, X= "+rover_X+"| Y= "+rover_Y);
        uploadBackground();
        uploadRover();
    }
}