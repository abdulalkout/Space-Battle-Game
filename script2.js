// //-----------------------Initiate Variables -------------------//
// const aliensArray = [
//   "https://media3.giphy.com/media/qRQLjmQ8MPmB3D2Bsq/giphy.gif?cid=6c09b952qj24vpb567pwt9i78wq6npl40yzujwa80gke0861&ep=v1_stickers_related&rid=giphy.gif&ct=s",
//   "https://media1.giphy.com/media/BcuLq7kvQWuftTzBh4/giphy.gif?cid=6c09b952vrbn5n247x0rvnmr3qgfhg1wcdso0fvo3e047meu&rid=giphy.gif&ct=s",
//   "https://media1.giphy.com/media/WmpKzem7ky3YXiOlXX/giphy.gif",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQmSvMui9Kr2SGxCHE8SA04GzO74AicYoQZYGorHvNqEKbLzbQ8yTEMEYMuBq9KXHyNE&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Sxgdd3ByE-TJmPHQkr6p_eaHOHYXQ0LFrv3qx_DQ1c5A-1NfCxjtqB-hvBRloFKeQmc&usqp=CAU",
//   "https://media1.giphy.com/media/13ea4eXuOuQsmY/giphy.gif",
// ];

// const coolImgArryBackground = [
//   "https://media1.giphy.com/media/RtpmUzMbynBeCgEa5E/giphy.gif",
//   "https://i.gifer.com/WBVk.gif",
//   "https://media0.giphy.com/media/nKDErGClW3lsRiZ3p9/giphy.gif",
// ];

// let roundCount = 1;
// let alienNumber = 0;
// //---------------------Classes for Players--------------//
// class Alien {
//   constructor(hull, firepower, accuracy) {
//     this.hull = hull;
//     this.firepower = firepower;
//     this.accuracy = accuracy;
//   }

//   methodFromExample() {
//     return this.name;
//   }

//   getScores() {
//     return [this.hull, this.firepower, this.accuracy];
//   }

//   gotHitted(hitPower) {
//     this.hull = this.hull - hitPower;
//   }

//   changeAllScors(newHull, newFirepower, newAccuracy) {
//     this.hull = newHull;
//     this.firepower = newFirepower;
//     this.accuracy = newAccuracy;
//   }
// }

// class User {
//   constructor(hull = 20, firepower = 5, accuracy = 0.7) {
//     this.hull = hull;
//     this.firepower = firepower;
//     this.accuracy = accuracy;
//   }

//   methodFromExample() {
//     return this.name;
//   }

//   getScores() {
//     return [this.hull, this.firepower, this.accuracy];
//   }

//   gotHitted(hitPower) {
//     this.hull = this.hull - hitPower;
//   }

//   genrateNewAlien(newHull, newFirepower, newAccuracy) {
//     return new Alien(newHull, newFirepower, newAccuracy);
//   }
// }
// const usAssembly = new User();
// // const newAlien = new Alien(3, 3, 0.6);

// ///////////////////////////////////////////////////////////////////
// let newAlien = [
//   creatAlien(),
//   creatAlien(),
//   creatAlien(),
//   creatAlien(),
//   creatAlien(),
//   creatAlien(),
// ];
// console.log(newAlien);
// console.log(newAlien[alienNumber]);
// //--------------------------DOM Section-------------------------//
// //----Queries--//
// const titleRound = document.querySelector(".round");
// const gameUpdateScreen = document.querySelector(".gameUpdate");

// const popUpButton = document.querySelector("#reset");

// const selectUsAssembly = document.querySelector(".usAssemblyScore");
// const userScore = selectUsAssembly.getElementsByTagName("li");
// displayScors(userScore, usAssembly);

// const selectAlien = document.querySelector(".alienScore");
// const alienScore = selectAlien.getElementsByTagName("li");
// displayScors(alienScore, newAlien);

// const attackButton = document.querySelector("#attack");

// const alienImg = document.querySelector(".alienImg");
// alienImg.setAttribute("src", aliensArray[0]);

// //---Functions---//
// function creatAlien() {
//   let newAlienFirePower = Math.floor(Math.random() * 4) + 2;
//   let newAlienHull = Math.floor(Math.random() * 6) + 3;
//   let newAlienAccuracy = Math.random() * (0.8 - 0.6) + 0.6;
//   newAlienAccuracy = newAlienAccuracy.toFixed(1);
//   const newAlien = new Alien(newAlienHull, newAlienFirePower, newAlienAccuracy);
//   //   alienImg.setAttribute("src", aliensArray[roundCount]);
//   return newAlien;
// }

// function displayScors(playerScore, scoreArr) {
//   const scoreTrack = ["Hull :", "Fire Power :", "Accuracy :"];
//   for (let i = 0; i < playerScore.length; i++) {
//     // let scoreArr = plyerClass.getScores();
//     playerScore[i].textContent = `${scoreTrack[i]}${scoreArr[i]}`;
//   }
// }

// function checkScores() {
//   if (usAssembly.hull <= 0) {
//     displayUpdateScreen(2000, "you lossssss");
//   } else if (newAlien[alienNumber].hull <= 0) {
//     displayUpdateScreen(2000, "You killed the alien");
//     displayUpdateScreen(2000, `alien hull ${newAlien[alienNumber].hull}`);
//     nextRound1();
//     const clearTimeOut = setTimeout(retreat, 4000);
//     if (roundCount + 1 === 6) {
//       displayUpdateScreen(3000, "You Just won the game");
//       popUpButton.style.display = "block";
//       return;
//     } else {
//       roundCount = roundCount + 1;
//       alienNumber += 1;
//     }
//   } else if (newAlien[alienNumber].hull >= 0) {
//     return;
//   }
// }

// function nextRound1() {
//   alienImg.setAttribute("src", aliensArray[roundCount]);
//   titleRound.textContent = `Round : ${roundCount + 1}`;
//   let alienScore = newAlien[alienNumber].getScores();
//   displayScors(alienScore, alienScore);
// }

// function nextRound() {
//   if (newAlien.hull <= 0) {
//     let newAlienFirePower = Math.floor(Math.random() * 4) + 2;
//     let newAlienHull = Math.floor(Math.random() * 6) + 3;
//     let newAlienAccuracy = Math.random() * (0.8 - 0.6) + 0.6;
//     newAlienAccuracy = newAlienAccuracy.toFixed(1);
//     const newAlien = new Alien(
//       newAlienHull,
//       newAlienFirePower,
//       newAlienAccuracy
//     );
//     // newAlien.changeAllScors(newAlienHull, newAlienFirePower, newAlienAccuracy);
//     alienImg.setAttribute("src", aliensArray[roundCount]);
//     titleRound.textContent = `Round : ${roundCount + 1}`;
//     let alienScore = newAlien[alienNumber].getScores();
//     displayScors(alienScore, alienScore);
//   }
// }

// function gameUpdate(updateText) {
//   const showGameUpdat = document.createElement("p");
//   showGameUpdat.textContent = updateText;
//   gameUpdateScreen.appendChild(showGameUpdat);
// }

// function clearUpdateScreen() {
//   gameUpdateScreen.textContent = "Game Update";
// }

// function displayUpdateScreen(sec, text) {
//   displyGameUpdateTimeOut = setTimeout(gameUpdate, sec, text);
// }

// function reset() {
//   location.reload();
// }

// function retreat() {
//   clearUpdateScreen();
//   const retreatTxt = document.createElement("p");
//   const yesButton = document.createElement("button");
//   const noButton = document.createElement("button");
//   retreatTxt.textContent = "Run A Way";
//   yesButton.textContent = "Yes";
//   noButton.textContent = "Not happening";
//   gameUpdateScreen.appendChild(retreatTxt);
//   gameUpdateScreen.appendChild(yesButton);
//   gameUpdateScreen.appendChild(noButton);

//   // Event listeners //
//   yesButton.addEventListener("click", (e) => {
//     clearUpdateScreen();
//     displayUpdateScreen(1000, "You are a loser");
//     const reloadSetTimieOut = setTimeout(reset, 6000);
//   });
//   noButton.addEventListener("click", (e) => {
//     clearUpdateScreen();
//     return;
//   });
// }

// //---Event Listeners--//
// attackButton.addEventListener("click", (evt) => {
//   while (true) {
//     gameUpdate("you Attack");
//     let randomNumber1 = Math.random();
//     if (randomNumber1 < usAssembly.accuracy) {
//       displayUpdateScreen(1000, "the alien got hit");
//       newAlien[alienNumber].gotHitted(usAssembly.firepower);
//       displayScors(alienScore, newAlien[alienNumber]);
//       checkScores();
//       return;
//     } else if (randomNumber1 > usAssembly.accuracy) {
//       displayUpdateScreen(1000, "Aliens survived");
//       displayUpdateScreen(2000, "Aliens will Attack");
//       if (Math.random() < newAlien[alienNumber].accuracy) {
//         displayUpdateScreen(3000, "You have been hitten");
//         usAssembly.gotHitted(newAlien[alienNumber].firepower);
//         displayScors(userScore, usAssembly);
//         checkScores();
//         return;
//       } else {
//         displayUpdateScreen(3000, "You Survived");
//       }
//     }
//   }
// });
