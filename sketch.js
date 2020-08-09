var child, parent, database;
var appState , form,start,app;

function setup(){
    canvas = createCanvas(300,500);
    database = firebase.database();
    appState = "start";
    start= new Start();
    start.page();
}
function draw(){
    background(255,223,0);
}