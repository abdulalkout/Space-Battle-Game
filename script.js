//-----------------------Initiate Variables -------------------//
const aliensArray = [
  "https://media3.giphy.com/media/qRQLjmQ8MPmB3D2Bsq/giphy.gif?cid=6c09b952qj24vpb567pwt9i78wq6npl40yzujwa80gke0861&ep=v1_stickers_related&rid=giphy.gif&ct=s",
  "https://media1.giphy.com/media/BcuLq7kvQWuftTzBh4/giphy.gif?cid=6c09b952vrbn5n247x0rvnmr3qgfhg1wcdso0fvo3e047meu&rid=giphy.gif&ct=s",
  "https://media1.giphy.com/media/WmpKzem7ky3YXiOlXX/giphy.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQmSvMui9Kr2SGxCHE8SA04GzO74AicYoQZYGorHvNqEKbLzbQ8yTEMEYMuBq9KXHyNE&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Sxgdd3ByE-TJmPHQkr6p_eaHOHYXQ0LFrv3qx_DQ1c5A-1NfCxjtqB-hvBRloFKeQmc&usqp=CAU",
  "https://media1.giphy.com/media/13ea4eXuOuQsmY/giphy.gif",
];
let roundCount = 1;

//---------------------Classes for Players--------------//
class Alien {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    // this.method = this.method.bind(this);
  }

  methodFromExample() {
    return this.name;
  }

  getScores() {
    return [this.hull, this.firepower, this.accuracy];
  }

  gotHitted(hitPower) {
    this.hull = this.hull - hitPower;
  }

  genrateNewAlien(newHull, newFirepower, newAccuracy) {
    const newAlien = new Alien(newHull, newFirepower, newAccuracy);
  }
}

class User {
  constructor(hull = 20, firepower = 5, accuracy = 0.7) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    // this.method = this.method.bind(this);
  }

  methodFromExample() {
    return this.name;
  }

  getScores() {
    return [this.hull, this.firepower, this.accuracy];
  }

  gotHitted(hitPower) {
    this.hull = this.hull - hitPower;
  }
}
const usAssembly = new User();
const newAlien = new Alien(3, 3, 0.6);

//--------------------------DOM Section-------------------------//
//----Queries--//
const titleRound = document.querySelector(".round");
const gameUpdateScreen = document.querySelector(".gameUpdate");

const selectUsAssembly = document.querySelector(".usAssemblyScore");
const userScore = selectUsAssembly.getElementsByTagName("li");
displayScors(userScore, usAssembly);

const selectAlien = document.querySelector(".alienScore");
const alienScore = selectAlien.getElementsByTagName("li");
displayScors(alienScore, newAlien);

const attackButton = document.querySelector("#attack");

const alienImg = document.querySelector(".alienImg");
alienImg.setAttribute("src", aliensArray[0]);

//---Functions---//
function displayScors(playerScore, plyerClass) {
  const scoreTrack = ["Hull :", "Fire Power :", "Accuracy :"];
  for (let i = 0; i < playerScore.length; i++) {
    let scoreArr = plyerClass.getScores();
    playerScore[i].textContent = `${scoreTrack[i]}${scoreArr[i]}`;
  }
}

function checkScores() {
  if (usAssembly.hull <= 0) {
    console.log("you lossssss");
  } else if (newAlien.hull <= 0) {
    console.log("You killed the alien");
    nextRound();
    if (roundCount + 1 === 6) {
      console.log("You Just won the game");
      // location.reload();
      return;
    } else {
      roundCount = roundCount + 1;
    }
  }
}

function nextRound() {
  let newAlienFirePower = Math.floor(Math.random() * 4) + 2;
  let newAlienHull = Math.floor(Math.random() * 6) + 3;
  let newAlienAccuracy = Math.random() * (0.8 - 0.6) + 0.6;
  newAlienAccuracy = newAlienAccuracy.toFixed(1);
  const newAlien = new Alien(newAlienHull, newAlienFirePower, newAlienAccuracy);
  alienImg.setAttribute("src", aliensArray[roundCount]);
  titleRound.textContent = `Round : ${roundCount + 1}`;
  displayScors(alienScore, newAlien);
}

function gameUpdate(updateText) {
  const showGameUpdat = document.createElement("p");
  showGameUpdat.textContent = updateText;
  gameUpdateScreen.appendChild(showGameUpdat);
}

//---Event Listeners--//
attackButton.addEventListener("click", (evt) => {
  while (true) {
    gameUpdate("you Attack");
    let randomNumber1 = Math.random();
    if (randomNumber1 < usAssembly.accuracy) {
      gameUpdate("the alien got hit"), "1000000";
      // console.log("the alien got hit");
      newAlien.gotHitted(usAssembly.firepower);
      displayScors(alienScore, newAlien);
      checkScores();
      return;
    } else if (randomNumber1 > usAssembly.accuracy) {
      gameUpdate("Aliens survived");
      gameUpdate("Aliens will Attack");
      // console.log("Aliens survived");
      // console.log("Aliens will Attack");
      if (Math.random() < newAlien.accuracy) {
        gameUpdate("You have been hitten!");
        // console.log("You have been hitten!");
        usAssembly.gotHitted(newAlien.firepower);
        displayScors(userScore, usAssembly);
        checkScores();
        return;
      } else {
        gameUpdate("You Survived");
        // console.log("you survived");
      }
    }
  }
});
