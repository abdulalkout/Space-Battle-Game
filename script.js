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
const newAlien = new Alien(3, 2, 0.6);

//--------------------------DOM Section-------------------------//
//----Queries--//
const selectUsAssembly = document.querySelector(".usAssemblyScore");
const userScore = selectUsAssembly.getElementsByTagName("li");
displayScors(userScore, usAssembly);

const selectAlien = document.querySelector(".alienScore");
const alienScore = selectAlien.getElementsByTagName("li");
displayScors(alienScore, newAlien);

const attackButton = document.querySelector("#attack");

//---Functions---//
function displayScors(playerScore, plyerClass) {
  const scoreTrack = ["Hull :", "Fire Power :", "Accuracy :"];
  for (let i = 0; i < playerScore.length; i++) {
    let scoreArr = plyerClass.getScores();
    playerScore[i].textContent = `${scoreTrack[i]}${scoreArr[i]}`;
  }
}

//---Event Listeners--//
attackButton.addEventListener("click", (evt) => {
  while (true) {
    console.log("you Attack");
    if (Math.random() < usAssembly.accuracy) {
      console.log("the alien got hit");
      newAlien.gotHitted(usAssembly.firepower);
      console.log(newAlien.hull);
      return;
    } else if (Math.random() < newAlien.accuracy) {
      console.log("Aliens survived");
      console.log("Aliens Attack");
      console.log("You have been hitten!");
      return;
    }
    console.log("you survived");
  }
});
