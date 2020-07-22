const title = document.getElementById("pop-title");
const text = document.getElementById("pop-subtext");
const link1 = document.getElementById("link-1");
const link2 = document.getElementById("link-2");
const pic1 = document.getElementById("pop-card-1");
const pic2 = document.getElementById("pop-card-2");
// const fname = document.getElementById("name");
// const email = document.getElementById("email");
// const company = document.getElementById("company");
// const message = document.getElementById("message");
const formNav = document.getElementById("formNav");
const myNav = document.getElementById("myNav");
const codeInfo = document.getElementById("codeInfo");
const start = document.getElementsByClassName("start");
const ham = document.getElementsByClassName("ham");
const form = document.getElementsByClassName("form");
var info;

function clicked(event, item) {
  if(event.keyCode === 13){
    event.preventDefault();
    item.click();
  }
}

function destroy(){
  while(codeInfo.firstChild){
    codeInfo.removeChild(codeInfo.firstChild);
  }
}

function openNav() {
    destroy();
    myNav.style.width = "100%";
    myNav.scrollTo(0, 0);
    link2.style.visibility = "visible";
    pic1.style.backgroundPosition = "unset";
    disable(start);
    enable(ham);
  }
  
  function disable(item) {
    for (var i = 0; i < item.length; i++){
        item[i].tabIndex = "-1";
    }
  }

  function enable(item) {
    for (var i = 0; i < item.length; i++){
        item[i].tabIndex = "1";
    }
  }

  function closeNav(item, var1, var2, var3) {
    myNav.style.width = "0%";
    disable(ham);
    enable(start);
  }

  function setCards(x, y) {
    pic1.style.backgroundImage = x;
    pic2.style.backgroundImage = y;
  }

  function setLinks(x, y, w){
      link1.href = x;
      link1.innerHTML = "";
      link1.append(w);
      link2.href = y
  }

  function setText(x, y){
      title.innerHTML = "";
      title.append(x);
      text.innerHTML = "";
      text.append(y);
  }

function bingoCard() {
    openNav();
    setCards('url(img/redBingo.png)', 'url(img/purpleBingo.png)');
    setLinks("https://cavanagh.dev/bingo/", "https://github.com/ryan-w-c/bingo", "Play Now", "View on Github");
    setText("Bingo Card Generator", "This site creates a random bingo card that can be played in the browser or printed.");
    createInfo("JavaScript");
    createInfo("HTML");
    createInfo("CSS");
  }

function elevator() {
    openNav();
    setCards('url(img/elev.png)', 'url(img/elevator.png)');
    setLinks("https://github.com/KRSung/Elevator_3.0", "https://github.com/ryan-w-c/bingo", "View on Github");
    link2.style.visibility = "hidden";
    setText("Elevator Simulator", "This project simulates an elevator. It is capable of changing the number of floors, elevators, and seed, as well as, allowing different types of passengers. It taught the core concepts of object-oriented programming and was completed with a partner as a class project.");
    createInfo("Java");
  }

function bingoDraw() {
    openNav();
    setCards('url(img/bingoNum.png)', 'url(img/board.png)');
    setLinks("https://cavanagh.dev/bingoBoard/", "https://github.com/ryan-w-c/bingoBoard", "Play Now");
    setText("Bingo Number Draw", "This site draws random numbers for a bingo game and displays them on a bingo board.");
    createInfo("JavaScript");
    createInfo("HTML");
    createInfo("CSS");
  }

function rgb() {
    openNav();
    setCards('url(img/rgbPic.png)', 'url(img/rgb2.png)');
    setLinks("https://github.com/ryan-w-c/RGB-Image-Generator/releases/download/v1.0.0/RGB-Image_Generator.zip", "https://github.com/ryan-w-c/RGB-Image-Generator", "Download Zip (Windows)");
    setText("RGB-Image-Generator", "This program reads a user selected image and stores each RGB value. A new one pixel length image is created using the stored RGB values. The new image is then stretched to the desired output ratio.");
    createInfo("Python");
    createInfo("Kivy");
    createInfo("PIL");
  }

function ticTacToe() {
    openNav();
    setCards('url(img/tic2.png)', 'url(img/tic1.png)');
    pic1.style.backgroundPosition = "center";
    setLinks("https://ryan-w-c.itch.io/tic-tac-toe", "https://github.com/ryan-w-c/TicTacToe", "Play Now");
    setText("Tic-Tac-Toe", "This game is a basic 3-in-a-row or 5-in-a-row, turn based, tic-tac-toe game.");
    createInfo("C#");
    createInfo("Unity Game Engine");
  }

function createInfo(codeUsed) {
  info = document.createElement("p");
  info.className = "code";
  info.innerHTML = "&bull; " + codeUsed;
  codeInfo.appendChild(info);
  }

function contact(item) {
    formNav.style.width = "100%";
    formNav.scrollTo(0, 0);
    // fname.value = "";
    // email.value = "";
    // company.value = "";
    // message.value = "";
    disable(start);
    enable(form);
  }

function closeContact(item) {
    formNav.style.width = "0%";
    disable(form);
    enable(start);
  }
