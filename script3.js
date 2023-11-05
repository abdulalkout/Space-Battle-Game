//-----------------------Initiate Variables -------------------//
const aliensArray = [
  "https://media3.giphy.com/media/qRQLjmQ8MPmB3D2Bsq/giphy.gif?cid=6c09b952qj24vpb567pwt9i78wq6npl40yzujwa80gke0861&ep=v1_stickers_related&rid=giphy.gif&ct=s",
  "https://media1.giphy.com/media/BcuLq7kvQWuftTzBh4/giphy.gif?cid=6c09b952vrbn5n247x0rvnmr3qgfhg1wcdso0fvo3e047meu&rid=giphy.gif&ct=s",
  "https://media1.giphy.com/media/WmpKzem7ky3YXiOlXX/giphy.gif",
  "https://media3.giphy.com/media/I2yfbeZ7Hw9qboDWqJ/giphy.gif?cid=6c09b952lveq9wdqa48n8iob6j6tuloemmlsh8kx4bn96t3t&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s",
  "https://media4.giphy.com/media/d7nUMsadSuoX0oWFZI/giphy.gif?cid=6c09b952ptoso0pwzf5563b5dfmg3ryx4juepjli6eb8datl&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s",
  "https://media3.giphy.com/media/5xaOcLQKkS2ZYcRDItO/giphy.gif?cid=6c09b952cr03t8d37ug7xxz0roylbubdpcy230dwvfuf91rq&ep=v1_stickers_related&rid=giphy.gif&ct=s",
];

const coolImgArryBackground = [
  "https://media1.giphy.com/media/RtpmUzMbynBeCgEa5E/giphy.gif",
  "https://i.gifer.com/WBVk.gif",
  "https://media0.giphy.com/media/nKDErGClW3lsRiZ3p9/giphy.gif",
];

//---------------------Classes for Players--------------//
class Alien {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
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

  changeAllScors(newHull, newFirepower, newAccuracy) {
    this.hull = newHull;
    this.firepower = newFirepower;
    this.accuracy = newAccuracy;
  }
}

class User {
  constructor(hull = 20, firepower = 5, accuracy = 0.7) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
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
    return new Alien(newHull, newFirepower, newAccuracy);
  }
}
const usAssembly = new User();
let newAlienArr = [
  creatAlien(),
  creatAlien(),
  creatAlien(),
  creatAlien(),
  creatAlien(),
  creatAlien(),
];
let roundCount = 0;
let alienNumber = 0;
let newAlien = newAlienArr[alienNumber];
//--------------------------DOM Section-------------------------//
//----Queries--//
const titleRound = document.querySelector(".round");
const gameUpdateScreen = document.querySelector(".gameUpdate");

const popUpButton = document.querySelector("#reset");

const selectUsAssembly = document.querySelector(".usAssemblyScore");
const userScore = selectUsAssembly.getElementsByTagName("li");
displayScors(userScore, usAssembly);

const selectAlien = document.querySelector(".alienScore");
const alienScore = selectAlien.getElementsByTagName("li");
displayScors(alienScore, newAlien);

const attackButton = document.querySelector("#attack");

const alienImg = document.querySelector(".alienImg");
alienImg.setAttribute("src", aliensArray[roundCount]);

// ------------------------Functions-----------------------//
function creatAlien() {
  let newAlienFirePower = Math.floor(Math.random() * 4) + 2;
  let newAlienHull = Math.floor(Math.random() * 6) + 3;
  let newAlienAccuracy = Math.random() * (0.8 - 0.6) + 0.6;
  newAlienAccuracy = newAlienAccuracy.toFixed(1);
  const newAlien = new Alien(newAlienHull, newAlienFirePower, newAlienAccuracy);
  return newAlien;
}

function displayScors(playerScore, plyerClass) {
  const scoreTrack = ["Hull :", "Fire Power :", "Accuracy :"];
  for (let i = 0; i < playerScore.length; i++) {
    let scoreArr = plyerClass.getScores();
    playerScore[i].textContent = `${scoreTrack[i]}${scoreArr[i]}`;
  }
}

function disableScreenUpdate() {
  gameUpdateScreen.style.display = "none";
}
function displyPlayAgainScreen() {
  popUpButton.style.display = "block";
}

function checkScores(newAlien) {
  if (usAssembly.hull <= 0) {
    clearUpdateScreen();
    displayUpdateScreen(2000, "you lossssss");
  } else if (newAlien.hull <= 0) {
    displayUpdateScreen(2000, "You killed the alien");
    displayUpdateScreen(2000, `alien hull is ${newAlien.hull}`);
    if (roundCount + 1 === 6) {
      //------------- u won
      //   gameUpdateScreen.setAttribute("class", "badge-ribbon");
      clearUpdateScreen();
      displayUpdateScreen(3000, "You Just won the game");
      const disableUpdateScreenTimeout = setTimeout(disableScreenUpdate, 5000);
      const displayPlayAgainScreenTimeout = setTimeout(
        displyPlayAgainScreen,
        6000
      );
      return;
    } else {
      roundCount = roundCount + 1;
      alienNumber = alienNumber + 1;
      const clearTimeOut = setTimeout(retreat, 4000);
      newAlien = newAlienArr[alienNumber];
      nextRound(newAlien);
    }
  } else if (newAlien.hull >= 0) {
    return;
  }
}

function nextRound(newAlien) {
  alienImg.setAttribute("src", aliensArray[roundCount]);
  titleRound.textContent = `Round : ${roundCount + 1}`;
  displayScors(alienScore, newAlien);
}

function gameUpdate(updateText) {
  const showGameUpdat = document.createElement("p");
  showGameUpdat.textContent = updateText;
  gameUpdateScreen.appendChild(showGameUpdat);
}

function clearUpdateScreen() {
  gameUpdateScreen.textContent = "Game Update";
}

function displayUpdateScreen(sec, text) {
  displyGameUpdateTimeOut = setTimeout(gameUpdate, sec, text);
}

function reset() {
  location.reload();
}

function retreat() {
  clearUpdateScreen();
  attackButton.style.display = "none";
  const retreatTxt = document.createElement("p");
  const yesButton = document.createElement("button");
  const noButton = document.createElement("button");
  retreatTxt.textContent = "Run A Way";
  yesButton.textContent = "Yes";
  noButton.textContent = "No";
  yesButton.style.backgroundColor = "#913822";
  noButton.style.backgroundColor = "#913822";
  gameUpdateScreen.appendChild(retreatTxt);
  gameUpdateScreen.appendChild(yesButton);
  gameUpdateScreen.appendChild(noButton);

  // Event listeners //
  yesButton.addEventListener("click", (e) => {
    clearUpdateScreen();
    displayUpdateScreen(1000, "You are a loser");
    const reloadSetTimieOut = setTimeout(reset, 4000);
  });
  noButton.addEventListener("click", (e) => {
    clearUpdateScreen();
    attackButton.style.display = "block";
  });
}

//-------------------------------------Event Listeners-----------------------------//
attackButton.addEventListener("click", (evt) => {
  while (true) {
    newAlien = newAlienArr[alienNumber];
    gameUpdate("you Attack");
    let randomNumber1 = Math.random();
    if (randomNumber1 < usAssembly.accuracy) {
      displayUpdateScreen(1000, "the alien got hit");
      newAlien.gotHitted(usAssembly.firepower);
      displayScors(alienScore, newAlien);
      checkScores(newAlien);
      return;
    } else if (randomNumber1 > usAssembly.accuracy) {
      displayUpdateScreen(1000, "Aliens survived");
      displayUpdateScreen(2000, "Aliens will Attack");
      if (Math.random() < newAlien.accuracy) {
        displayUpdateScreen(3000, "You have been hitten");
        usAssembly.gotHitted(newAlien.firepower);
        displayScors(userScore, usAssembly);
        checkScores(newAlien);
        return;
      } else {
        displayUpdateScreen(3000, "You Survived");
      }
      // you can add a screeen update or clear screen
    }
  }
});
