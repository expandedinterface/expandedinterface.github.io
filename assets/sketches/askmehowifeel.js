///////////////////////////////////////////////////////////////////////////////////////
//// Ask Me How I Feel
//// Tin Geber, 11.2017
//// Riffing on Mohr: Computer as partner with agency
//// the grid displays cubes either whole or broken
//// depending on how much the CPU is working
//// pulling CPU averages across 2 hours from a csv with >7000 rows
////////////////////////////////////////////////////////////////////////////////

var table;
var cellSize;
var numCellsX;
var numCellsY;
var offset;

function preload() {
  // our table with our data
  table = loadTable("/assets/data/askMeHowIFeel.csv", "csv", "header");
}

function setup() {
  var canvas = createCanvas(720,720, WEBGL);
  canvas.parent('askmehowifeel_sketch');

  // var divWidth = $("#askmehowifeel_sketch").width();
  // var divHeight = $("#askmehowifeel_sketch").height();
  // var myCanvas = createCanvas(divWidth, divHeight, WEBGL);
  // myCanvas.parent('askmehowifeel_sketch');


  cellSize = 72;
  numCellsX = width/cellSize;
  numCellsY = height/cellSize;
  offset = 0; // between 0 and 6000


}

function draw() {

  translate(-width/2,-height/2,0);

  background(255);

  // building our drawings. each drawing depends on the CPU load in a given second
  for(var i = 0; i<numCellsX; i++) {
    for(var j = 0; j<numCellsY; j++) {
      push();
      translate(i*cellSize,j*cellSize);

      // if the CPU has been idle, leave empty
      if ((table.getNum(i*j+offset, 0) + table.getNum(i*j+offset, 1))*1.4 < table.getNum(i*j+offset, 2) ) {
        drawDot();
      }
      else {
        // if CPU worked more for the artist than for itself, destroy the cube
        if (table.getNum(i*j+offset, 0) < table.getNum(i*j+offset, 1)){
            drawBrokenCube(i);
        }
        // if CPU worked more for itself, draw a mohr cube
        else {
          drawCube(i);
        }
      }
      pop();
    }
  }

  if (frameCount % 30 == 0) {
    if (offset < 6000) {
      offset++;
    }
    else {
      offset = 0;
    }
  }

}


function drawBrokenCube(noiseOffset) {
  push();
  stroke(255,200);
  fill(255,30,30);
  beginShape();
  // eight vertices, for the eight cube corners, but randomly broken
  for(var i=0; i<8; i++) {
    vertex(random(8, cellSize-8), random(8, cellSize-8));
    //vertex(map(noise(frameCount*0.12+20+noiseOffset),-1,1,0, cellSize), map(noise(frameCount*0.15+37+noiseOffset),-1,1, 0, cellSize));
  }
  endShape(CLOSE);
  pop();

}

// our perfect little boring mohr cubes
function drawCube(noiseOffset) {
  push();
  stroke(25,200);
  noFill();
  translate(cellSize/2,cellSize/2);
  rotateY(map(noise(frameCount*0.07+20+noiseOffset), -1,1, 0, TWO_PI));
  rotateX(map(noise(frameCount*0.07+37+noiseOffset), -1,1, 0, TWO_PI));
  box(cellSize/3);
  pop();
}

// perhaps one day the idle space will draw something. for now it's leaving empty
function drawDot() {
  push();
  noStroke();
  //rectMode(CENTER);
  translate(cellSize/2,cellSize/2);
  //fill(255,0,0);
  //rect(0,0, cellSize,cellSize);
  fill(255);
  ellipse(0,0,cellSize/4,cellSize/4);
  pop();
}


// function mousePressed() {
//   loop();
// }

// function mouseReleased() {
//   noLoop();
// }
