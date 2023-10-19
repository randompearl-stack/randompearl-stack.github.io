var programCode = function (processingInstance) {
  with (processingInstance) {
    size(500, 500);
  
    noStroke();
    var color1 = 255;
    var color2 = 0;
    var color3 = 0;
    
    var tpurple = false;
    var torange = true;
    var tgreen = false;
    var tcyan = false;
    var tblue = false;
    var tred = false;
    var time = 0;

    draw = function () {
      if (torange) {
        color2 += 3;
      }
      // changes the background color into orange and then yellow

      if (color1 === 255 && color2 === 255 && color3 === 0) {
        tgreen = true;
        torange = false;
      }
      // stops the addition of green and starts the removal of red

      if (tgreen) {
        color1 -= 3;
      }
      // changes the background color into green

      if (color1 === 0 && color2 === 255 && color3 === 0) {
        tcyan = true;
        tgreen = false;
      }
      // stops the removal of red and starts the addition of blue

      if (tcyan) {
        color3 += 3;
      }
      // changes the background color into cyan

      if (color1 === 0 && color2 === 255 && color3 === 255) {
        tblue = true;
        tcyan = false;
      }
      // stops the addition of blue and starts the removal of green

      if (tblue) {
        color2 -= 3;
      }
      // changes the background color into blue

      if (color1 === 0 && color2 === 0 && color3 === 255) {
        tblue = false;
        tpurple = true;
      }
      // stops the removal of green and starts the addition of red

      if (tpurple) {
        color1 += 3;
      }
      // changes the background color into purple

      if (color1 === 255 && color2 === 0 && color3 === 255) {
        tpurple = false;
        tred = true;
      }
      // stops the addition of red and starts the removal of blue

      if (tred) {
        color3 -= 3;
      }
      // changes the background color into red
      if (color3 < 0) {
        color3 = 0;
      }
      if (color1 === 255 && color2 === 0 && color3 === 0) {
        tred = false;
        torange = true;
      }
      background(255, 255, 255);
      stroke(color1, color2, color3);
      rect(width / 2 - 100, height / 2 - 100, 200, 200, 50);
    };
  }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("mycanvas");

// Move the canvas to the center using CSS
canvas.style.position = "absolute";
canvas.style.top = "50%";
canvas.style.left = "50%";
canvas.style.transform = "translate(-50%, -50%)";

// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);