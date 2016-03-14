var studentArray = [];

function setup() {
    background(168, 100, 168);
    createCanvas(windowWidth, windowHeight);


    studentArray = new Array(
        "Cece",
        "Alisha",
        "Joe",
        "Taylor",
        "Mackenzie",
        "Joyce",
        "Paige",
        "Alex",
        "Brittaney",
        "Shane",
        "Ryan",
        "Bryan",
        "Tyler",
        "Kimberly",
        "Shelby",
        "Ariel",
        "Lily",
        "Alex",
        "Barrett"
    ) 
}

function draw() {
}

function chooseStudent(){
    textFont("Georgia");
    textAlign(CENTER);
    textSize(32);
    textStyle(BOLD);
    fill(255);
    background(168, 100, 168);
    var index = floor(random(studentArray.length));  //convert to integer
    text(studentArray[index],width/2,height/4);  //displays one of the arrray items 
    studentArray.splice(index, 1); //removes name from the array
}

function mousePressed() {
    chooseStudent();
    print(studentArray);
    return;
}















