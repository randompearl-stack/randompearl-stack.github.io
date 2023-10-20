var programCode = function (processingInstance) {
  with (processingInstance) {
    size(600, 600);
  
    textAlign(CENTER);
var page = "logo";
var circlesize = 150;
var buttonpressed = false;
var distance;
var clicked = 0;
var color1 = 255;
var color2 = 0;
var color3 = 0;
var ax = -20;
var ex = -20;
var rx = -20;
var ox = -20;
var dx = -20;
var a2x = -20;
var sx = -20;
var hx = -20;
var x = 300;
var y = 300;
var a = 500;
var b = 500;
var re = random(0, 255);
var gr = random(0, 255);
var bl = random(0, 255);
var start = false;
var change = false;
var letterx = [hx, sx, a2x, dx, ox, rx, ex, ax];
var letters = ["h", "s", "a", "d", "o", "r", "e", "A"];
var letternum = 0;
var distance = 500;
var logotime = 0;
var loadingtime = 0;
var fade = 255;
var turnpurple = false;
var turnorange = true;
var turngreen = false;
var turncyan = false;
var turnblue = false;
var turnred = false;
var title = ['   C','     o','     l','      o','       r','            M','              a','              t','              c','               h', '               !'];
var co1 = color(255, 0, 0);
var co2 = color(255, 127, 0);
var co3 = color(255, 255, 0);
var co4 = color(0, 255, 0);
var co5 = color(0, 255, 255);
var co6 = color(0, 0, 255);
var co7 = color(127, 0, 255);
var co8 = color(255, 0, 255);
var co9 = color(200, 200, 200);
var titlecolors = [co1, co2, co3, co4, co5, co6, co7, co8, co1, co2, co9];
var colors = [co1, co2, co3, co4, co5, co6, co7, co8, co9];
var words = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "pink", "silver"];  
var points = 0;
var time = 100;
var positions = [1, 2, 3, 4, 5, 6];
var positions2 = [1, 2, 3, 4, 5, 6];
var positions3 = [1, 2, 3, 4, 5, 6];
var positions4 = [1, 2, 3, 4, 5, 6];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var numbers4 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var pos1 = round(random(0, 5));
var pos2 = round(random(0, 4));
var pos3 = round(random(0, 3));
var num1 = round(random(0, 7));
var num2 = round(random(0, 6));
var num3 = round(random(0, 5));

var removed1 = false;
var removed2 = false;
var removed3 = false; 
var removed4 = false;
var removed5 = false;
var removed6 = false;
var removed7 = false;
var removed8 = false;
var removed9 = false;
var removed10 = false;
var gametitle = function() {
    textSize(65);
    for (var t = 0; t < title.length; t ++) {
        fill(titlecolors[t]);
        text(title[t], t * 35 + 40, 100);
    }
    // writes and colors every letter in the title
};
var rainbowbar = function() {
    strokeWeight(10);
for (var ca = 0; ca < 70; ca ++){
    stroke(lerpColor(co1, co2, ca / 70));
    point(ca + 90, 70);
}
// draws a line of red circles

for (var cb = 0; cb < 70; cb ++) {
    stroke(lerpColor(co2, co3, cb / 70));
    point(cb + 160, 70);
}
// draws a line of orange and yellow circles

for (var cc = 0; cc < 70; cc ++) {
    stroke(lerpColor(co3, co4, cc / 70));
    point(cc + 230, 70);
}
// draws a line of green circles

for (var cd = 0; cd < 70; cd ++) {
    stroke(lerpColor(co4, co5, cd / 70));
    point(cd + 300, 70);
}
// draws a line of green and cyan circles

for (var ce = 0; ce < 70; ce ++) {
    stroke(lerpColor(co5, co6, ce / 70));
    point(ce + 370, 70);
}
//draws a line of blue and dark blue circles

for (var cf = 0; cf < 70; cf ++) {
    stroke(lerpColor(co6, co7, cf / 70));
    point(cf + 440, 70);
}
// draws a line of dark blue and purple circles
};
var logo = function() {
    textSize(40);
    fill(0, 0, 0);
    text(letters[letternum], letterx[letternum], 300);
    text(letters[letternum - 1], letterx[letternum - 1], 300);
    text(letters[letternum - 2], letterx[letternum - 2], 300);
    text(letters[letternum - 3], letterx[letternum - 3], 300);
    text(letters[letternum - 4], letterx[letternum - 4], 300);
    text(letters[letternum - 5], letterx[letternum - 5], 300);
    text(letters[letternum - 6], letterx[letternum - 6], 300);
    text(letters[letternum - 7], letterx[letternum - 7], 300);
    text(letters[letternum - 8], letterx[letternum - 8], 300);
    // writes the text
    
    if (letterx[letternum] < distance - letternum * 60) {
        letterx[letternum] += 10;
    }
    // moves the letter until it has reached its final placement
    
    if (letterx[letternum] === distance - letternum * 60) {
        letternum ++;
    }
    // starts moving the next letter when the previous letter finished moving
    
    if (letternum === 8) {
        logotime ++;
        if (logotime > 40) {
            fade -= 2;
        }
        // starts the fading animation when some time has passed
      
        if (logotime >= 200) {
            page = "loading";
        }
        // goes to the loading page when the fading animation is done
    }
};
var loadingscreen = function() {
    noStroke();
    background(255, 255, 255);
    fill(re, gr, bl);
    rect(x, y, a - x, b - y, 30);
    // draws the weird shape 
    
    if (a > 50 && b === 500) {
        a -= 10;
        start = true;
    }
    // changes the bottom right shape to the bottom left shape
    
    if (a === 100 && b > 50) {
        b -= 10;
        start = false;
    }
    // changes the bottom left shape to the top left shape
    
    if (a >= 100 && a <= 490 && b === 50) {
        a += 10;
        change = false;
    }
    // changes the top left shape to the top right shape
    
    if (a === 500 && b >= 50 && b <= 500 && start === false) {
        b += 10;
        if (change === false) {
            re = random(0, 255);
            gr = random(0, 255);
            bl = random(0, 255);
        }
        change = true;
    }
    // changes the top right shape to the bottom right shape and changes the color
    
    if (loadingtime < 350) {
        loadingtime ++;
        if (loadingtime === 350) {
            page = "menu";
        }
    }
    // goes to the menu once the loading is done
};
var changingbackground = function() {
    if (turnorange === true) {
        color2 += 3;
    }
    // changes the background color into orange and then yellow
    
    if (color1 === 255 && color2 === 255 && color3 === 0) {
        turngreen = true;
        turnorange = false;
    }
    // stops the addition of green and starts the removal of red
    
    if (turngreen === true) {
        color1 -= 3;
    }
    // changes the background color into green
    
    if (color1 === 0 && color2 === 255 && color3 === 0) {
        turncyan = true;
        turngreen = false;
    }
    // stops the removal of red and starts the addition of blue
    
    if (turncyan === true) {
        color3 += 3;
    }
    // changes the background color into cyan
    
    if (color1 === 0 && color2 === 255 && color3 === 255) {
        turnblue = true;
        turncyan = false;
    }
    // stops the addition of blue and starts the removal of green
    
    if (turnblue === true) {
        color2 -= 3;
    }
    // changes the background color into blue
    
    if (color1 === 0 && color2 === 0 && color3 === 255) {
        turnblue = false;
        turnpurple = true;
    }
    // stops the removal of green and starts the addition of red
    
    if (turnpurple === true) {
        color1 += 3;
    }
    // changes the background color into purple
    
    if (color1 === 255 && color2 === 0 && color3 === 255) {
        turnpurple = false;
        turnred = true;
    }
    // stops the addition of red and starts the removal of blue

    if (turnred === true) {
        color3 -= 3;
    }
    // changes the background color into red
    
    if (color1 === 255 && color2 === 0 && color3 === 0) {
        turnred = false;
        turnorange = true;
    }
    // starts the whole cycle again
    
    background(color1, color2, color3);
};
var drawhowbutton = function() {
    noStroke();
    textSize(35);
    fill(255, 255, 255);
    rect(60, 290, 130, 130);
    fill(0, 0, 0);
    text("How", 125, 360);
}; 
var drawplaybutton = function() {
    fill(255, 255, 255);
    ellipse(300, 450, circlesize - 20, circlesize - 20);
    fill(0, 0, 0);
    textSize(40);
    text("Play", 300, 450);
}; 
var drawleaderboardbutton = function() {
    var leaderboardword = ['L','e','a','d','e', 'r', 'b', 'o', 'a', 'r', 'd'];
    fill(255, 255, 255);
    rect(500, 150, 50, 400);
    textSize(35);
    fill(0, 0, 0);
    for (var l = 0; l < 12; l ++) {
        text(leaderboardword[l], 525, (l * 35) + 185);
    }
};
var drawcreditsbutton = function() {
    fill(255, 255, 255);
    rect(270, 210, 150, 100);
    textSize(35);
    fill(0, 0, 0);
    text("Credits", 345, 270);
};
var interacthowbutton = function() {
    if (mouseX > 60 && mouseX < 190 && mouseY > 290 & mouseY < 420) {  cursor("pointer");
        strokeWeight(7);
        stroke(0, 0, 0);
        fill(255, 255, 255);
        rect(50, 280, 150, 150);
        fill(0, 0, 0);
        textSize(40);
        text("How", 125, 360);
    }
    // makes the how button larger and outlined when the mouse hovers over it
};
var interactplaybutton = function() {
    var distanceplay = dist(mouseX, mouseY, 300, 450);
        if (distanceplay <= 65) {
            cursor("pointer");
            fill(255, 255, 255);
            strokeWeight(7);
            stroke(0, 0, 0);
            ellipse(300, 450, circlesize, circlesize);
            fill(0, 0, 0);
            pushMatrix();
            translate(300, 450);
            rotate(sin(frameCount) * 360);
            textSize(45);
            text("Play", 0, 0);
            popMatrix();
    }
    // makes the play button larger and outlined and spin when the mouse hovers over it
};
var interactleaderboardbutton = function() {
    var leaderboardword = ['L','e','a','d','e', 'r', 'b', 'o', 'a', 'r', 'd'];
    if (mouseX > 500 && mouseX < 550 && mouseY > 150 && mouseY < 550) {  cursor("pointer");
        strokeWeight(7);
        stroke(0, 0, 0);
        fill(255, 255, 255);
        rect(495, 140, 60, 420);
        textSize(40);
        fill(0, 0, 0);
        
    for (var l = 0; l < 12; l ++) {
        text(leaderboardword[l], 525, (l * 35) + 185);
    }
    }
    // makes the leaderboard button larger and outlined when the mouse hovers over it
};
var interactcreditsbutton = function() {
    if (mouseX > 270 && mouseX < 420 && mouseY > 210 && mouseY < 310) {  cursor("pointer");
        strokeWeight(7);
        stroke(0, 0, 0);
        fill(255, 255, 255);
        rect(255, 200, 180, 120);
        fill(0, 0, 0);
        textSize(40);
        text("Credits", 345, 270);
    }
    // makes the credits button larger and outlined when the mouse hovers over it
};
var howpage = function() {
    cursor("default");
    background(255, 255, 255);
    textSize(35);
    text("How To Play:", 300, 50);
    rainbowbar();
    textSize(30);
    text("The goal of this game is to match the colors that the words say with the colors of the words the most times in 100 seconds. Each of the rounds will have six choices. ", 30, 90, 550, 300);
    fill(255, 0, 0);
    text("Green", 60, 300);
    fill(0, 0, 0);
    text("would be a wrong choice because it is in red, not green.", 100, 278, 500, 200);
    fill(0, 0, 255);
    text("Blue", 60, 393);
    fill(0, 0, 0);
    text(", however, would be a right choice because it is in blue.", 70, 370, 500, 200);
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(255, 255, 255);
    rect(30, 500, 120, 80);
    fill(0, 0, 0);
    textSize(35);
    text("Back", 90, 550);
};
var leaderboardpage = function() {
    cursor("default");
    var leaderboardpeople = ['', '', '', '', ''];
    var scores = ['', '', '', '', ''];
    background(255, 255, 255);
    
    text("Leaderboard", 290, 50);
    
    for (var n = 1; n < 6; n ++) {
        textSize(35);
            if (n === 1) {
                fill(255, 215, 0);
            }
        
            if (n === 2) {
                fill(195, 195, 195);
            }
        
            if (n === 3) {
                fill(205, 130, 50);
            }
        
            if (n > 3) {
                fill(0, 0, 0);
            }
        textAlign(LEFT);
        text(n + "." + " " + leaderboardpeople[n - 1] + "  ", 20, 30 + n * 100); 
        text(scores[n - 1], 400, 30 + n * 100);
        textAlign(CENTER);
        
    }
    
    fill(255, 255, 255);
    strokeWeight(2);
    rect(460, 10, 120, 80);
    fill(0, 0, 0);
    text("Back", 520, 60);
};
var creditspage = function() {
    cursor("default");
    background(255, 255, 255);
    textSize(35);
    text("Credits:", 300, 50);
    rainbowbar();
    fill(0, 0, 0);
    text("All code in this program was made by me.", 0, 100, 610, 200);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    rect(10, 250, 130, 100);
    fill(0, 0, 0);
    textSize(40);
    text("Back", 75, 310);
};
var playtransition = function() {
    cursor("default");
    fill(255, 255, 255);
    noStroke();
    ellipse(300, 450, circlesize - 20, circlesize - 20);
    
    if (buttonpressed === true && circlesize <= 1090) {
        circlesize += 20;
    }
    // draws an expanding circle for the game transition
};
var draweverything = function() {
    drawhowbutton();
    drawplaybutton();
    drawleaderboardbutton();
    drawcreditsbutton();
    gametitle();
};
var interacteverything = function() {
    interactplaybutton();
    interacthowbutton();
    interactleaderboardbutton();
    interactcreditsbutton();
};
var scorepage = function() {
    background(255, 255, 255);
    fill(0, 0, 0);
    text("You got a score of " + points + "!", 300, 200);
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(255, 255, 255);
    rect(220, 400, 160, 100);
    fill(0, 0, 0);
    text("Back", 300, 460);
};
var timer = function() {
    fill(0, 0, 0);
    textSize(30);
    text(time.toFixed(2) + " seconds", 300, 50);
    if (time > 0) {
        time -= 1/6;
    }
    
    if (time <= 0) {
        time = 0;
        page = "score";
    }
};
var correctchoice = function(num, position) {
    if (position === 1) {
        fill(255, 255, 255);
        noStroke();
        rect(30, 140, 160, 160);
        fill(colors[num]);
        textSize(40);
        text(words[num], 110, 230);
    }
    
    if (position === 2) {
        fill(255, 255, 255);
        noStroke();
        rect(220, 140, 160, 160);
        fill(colors[num]);
        textSize(40);
        text(words[num], 300, 230);
    }
    
    if (position === 3) {
        fill(255, 255, 255);
        noStroke();
        rect(410, 140, 160, 160);
        fill(colors[num]);
        textSize(40);
        text(words[num], 490, 230);
    }
    
    if (position === 4) {
        fill(255, 255, 255);
        noStroke();
        rect(30, 350, 160, 160);
        fill(colors[num]);
        textSize(40);
        text(words[num], 110, 440);
    }
    
    if (position === 5) {
        fill(255, 255, 255);
        noStroke();
        rect(220, 350, 160, 160);
        fill(colors[num]);
        textSize(40);
        text(words[num], 300, 440);
    }
    
    if (position === 6) {
        fill(255, 255, 255);
        noStroke();
        rect(410, 350, 160, 160);
        fill(colors[num]);
        textSize(40);
        text(words[num], 490, 440);
    }
};
var wrongchoice = function(num1, num2, position) {
    if (position === 1) {
        fill(255, 255, 255);
        noStroke();
        rect(30, 140, 160, 160);
        fill(colors[num1]);
        textSize(40);
        text(words[num2], 110, 230);
    }
    
    if (position === 2) {
        fill(255, 255, 255);
        noStroke();
        rect(220, 140, 160, 160);
        fill(colors[num1]);
        textSize(40);
        text(words[num2], 300, 230);
    }
    
    if (position === 3) {
        fill(255, 255, 255);
        noStroke();
        rect(410, 140, 160, 160);
        fill(colors[num1]);
        textSize(40);
        text(words[num2], 490, 230);
    }
    
    if (position === 4) {
        fill(255, 255, 255);
        noStroke();
        rect(30, 350, 160, 160);
        fill(colors[num1]);
        textSize(40);
        text(words[num2], 110, 440);
    }
    
    if (position === 5) {
        fill(255, 255, 255);
        noStroke();
        rect(220, 350, 160, 160);
        fill(colors[num1]);
        textSize(40);
        text(words[num2], 300, 440);
    }
    
    if (position === 6) {
        fill(255, 255, 255);
        noStroke();
        rect(410, 350, 160, 160);
        fill(colors[num1]);
        textSize(40);
        text(words[num2], 490, 440);
    }
};
draw = function() {
    if (page === "logo") {
        background(fade, fade, fade);
        logo();
    }
    
    else if (page === "loading") {
        loadingscreen();
    }
    
    else if (page === "menu") {
        changingbackground();
        draweverything();
        playtransition();
    
        if (buttonpressed === false) {
            cursor("default");
            draweverything();
            interacteverything();
        }
    }
    
    else if (page === "how") {
        howpage();
    }
    
    else if (page === "leaderboard") {
        leaderboardpage();
    }
    
    else if (page === "credits") {
        creditspage();
    }
    
    else if (page === "game") {
        //changingbackground();
        //timer();
        //text("Points: " + points, 300, 100);
        //correctchoice(numbers[num1], positions[pos1]);
        
        if (removed1 === false) {
            positions2.splice(pos1, 1);
            removed1 = true;
        }
        
        if (removed2 === false) {
            numbers2.splice(num1, 1);
            removed2 = true;
        }
        
        //wrongchoice(numbers2[num2], positions2[pos2]);
        
        if (removed3 === false) {
            positions3.splice(pos2, 1);
            removed3 = true;
        }
        
        if (removed4 === false) {
            numbers3.splice(num2, 1);
            removed4 = true;
        }   
        
        //wrongchoice(numbers3[num3], positions[pos3]);
        
        if (removed5 === false) {
            positions4.splice(pos3, 1);
            removed5 = true;
        }
        
        if (removed6 === false) {
            numbers4.splice(num3, 1);
            removed6 = true;
        }   
        
        
    }
    
    if (page === "score") {
        scorepage();
    }
    
    if (circlesize === 1110) {
        page = "game";
        circlesize = 150;
    }
}; 

mouseClicked = function() {
    
    var distanceplay = dist(mouseX, mouseY, 300, 450);
    if (mouseX > 60 && mouseX < 190 && mouseY > 290 && mouseY < 420 && page === "menu") {  
        page = "how";
        buttonpressed = true;
    }
    // goes to the how page when the mouse has clicked on the how button
    
    if (mouseX > 30 && mouseX < 150 && mouseY > 500 && mouseY < 580 && page === "how") {
        page = "menu";
        buttonpressed = false;
    }
    // goes to the menu when the mouse has clicked on the back button in the how page
    
    if (mouseX > 500 && mouseX < 550 && mouseY > 150 && mouseY < 550 && page === "menu") {  
        page = "leaderboard";
        buttonpressed = true;
    }
    // goes to the leaderboard page when the mouse has clicked on the leaderboard button
    
    if (mouseX > 460 && mouseX < 580 && mouseY > 10 && mouseY < 90 && page === "leaderboard") {
        page = "menu";
        buttonpressed = false;
    }
    // goes to the menu when the mouse has clicked on the back button in the leaderboard page
    
    if (mouseX > 270 && mouseX < 420 && mouseY > 210 && mouseY < 310 && page === "menu") {
        page = "credits";
    }
    // goes to the credits page when the mouse has clicked on the credits button
    
    if (mouseX > 10 && mouseX < 140 && mouseY > 250 && mouseY < 350 && page === "credits") {
        page = "menu";
        buttonpressed = false; 
    }
    // goes to the menu when the mouse has clicked on the back button in the credits page 
    
    if (mouseX > 220 && mouseX < 380 && mouseY > 400 && mouseY < 500 && page === "score") {
        circlesize = 150;
        page = "menu";
    }   
    // goes to the menu when the mouse has clicked on the back button in the score page
        
    if (distanceplay <= 100) {
        buttonpressed = true;
    }
    // starts the game
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
