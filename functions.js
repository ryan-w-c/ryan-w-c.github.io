const title = document.getElementById("pop-title");
const text = document.getElementById("pop-subtext");
const link1 = document.getElementById("link-1");
const link2 = document.getElementById("link-2");
const pic1 = document.getElementById("pop-card-1");
const pic2 = document.getElementById("pop-card-2");
const formNav = document.getElementById("formNav");
const myNav = document.getElementById("myNav");

var hash = window.location.hash;

print(hash)

if (hash == "#hugMeCampus") {
    hugMe();
}

function openNav() {
    myNav.style.width = "100%";
    myNav.scrollTo(0, 0);
    link2.style.visibility = "visible";
    pic1.style.backgroundPosition = "unset";
  }
  
  function closeNav() {
    myNav.style.width = "0%";
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

function chess() {
    openNav();
    setCards('url(img/chess1.png)', 'url(img/chess2.png)');
    pic1.style.backgroundPosition = "center";
    setLinks("https://cavanagh.dev/Chess/", "https://github.com/ryan-w-c/chess", "Play Now", "View on Github");
    setText("Chess", "A chess game with special move, check, checkmate, and stalemate logic.");
}

function elevator() {
    openNav();
    setCards('url(img/elev.png)', 'url(img/elevator.png)');
    setLinks("https://github.com/KRSung/Elevator_3.0", "", "View on Github");
    link2.style.visibility = "hidden";
    setText("Elevator Simulator", "Simulates an elevator with multiple floors, evelvators, passengers, etc.");
}

function crypto() {
    openNav();
    setCards('url(img/crypto1.png)', 'url(img/crypto2.png)');
    pic1.style.backgroundPosition = "center";
    setLinks("https://crypto-prices-webapp.herokuapp.com/", "https://github.com/ryan-w-c/crypto-prices", "Try it");
    setText("Crypto Prices API Webapp", "Compares BTC and ETH prices from two exchanges. The site may take between 30-60 seconds to load on launch.");
}

function cal() {
    openNav();
    setCards('url(img/cal1.png)', 'url(img/cal2.png)');
    pic1.style.backgroundPosition = "center";
    setLinks("https://github.com/ryan-w-c/LaunchMyMeeting", "", "View on Github");
    link2.style.visibility = "hidden";
    setText("MacOS Meeting Launcher", "Launches virtual meetings with one tap.");
}

function hugMe() {
    openNav();
    setCards('url(img/hugMeCampus1.png)', 'url(img/hugMeCampus2.png)');
    setLinks("https://github.com/ryan-w-c/hugMeCampus", "", "View on Github");
    link2.style.visibility = "hidden";
    setText("HugMe Campus Android Application", "Tinder like application for finding hugs on a college campus. Features matchmaking, search, and messaging.");
}

function contact() {
    formNav.style.width = "100%";
    formNav.scrollTo(0, 0);
}

function closeContact() {
    formNav.style.width = "0%";
  }
