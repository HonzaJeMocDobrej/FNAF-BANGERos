import animMov from "./animMov.js";
import { randomRoom, roomVisible } from "./animMov.js";

let lightBtnL = document.getElementById("lightBtnL");
let lightBtnR = document.getElementById("lightBtnR");
let doorBtnL = document.getElementById("doorBtnL");
let doorBtnR = document.getElementById("doorBtnR");
let officeImg = document.getElementById("officeImg");
export let camera = document.getElementById("camera");
let mapContainer = document.getElementById("mapContainer");
export let camImg = document.getElementById("camImg");
let freddynose = document.getElementById("freddynose");
let playagain = document.getElementById("playagain");
let audio = new Audio("../res/sound/honk.mp3");
const video = document.getElementById("backgroundvideo");
const video2 = document.getElementById("backgroundvideo2");
const video3 = document.getElementById("backgroundvideo3");
const time = document.getElementById("time");
const turnaround = document.getElementById("turnaround");
const puppetButton = document.getElementById("puppetButton");
let game = document.getElementById("game");

let lightVisibleR = 0;
let lightVisibleL = 0;
let doorVisibleL = 0;
let doorVisibleR = 0;
let officecam = 0;
let energy = 100;
let energyDrain = 0.1;
let time1 = 0;
let puppetStage = 0;

function death() {
  window.location.href = "index.html";
}

function puppet() {
  puppetStage += 1;
  console.log("puppet stage=" + puppetStage);
  if (puppetStage == 10) {
    behindImg.src = "./res/img/puppet1.png";
  } else if (puppetStage == 20) {
    behindImg.src = "./res/img/puppet2.png";
  } else if (puppetStage == 30) {
    behindImg.src = "./res/img/puppet3.png";
  } else if (puppetStage == 40) {
    behindImg.src = "./res/img/puppet4.png";
  }
}

function reduceEnergy() {
  energy -= energyDrain;
  console.log("Energy reduced by " + energyDrain + ". Current energy:", energy);
  energyindicator.innerHTML = parseInt(energy);
  if (energy <= 0) {
    energyindicator.style.display = "none";
    time.style.display = "none";
    officeImg.src = "./res/videos/project.mp4";
    clearInterval(reduceEnergy);
    video.play();
    camera.style.display = "none";
    backgroundvideo.style.display = "block";
    camImg.style.display = "none";
    mapContainer.style.display = "none";
    playagain.style.display = "block";
    setInterval(death, 50000);
  }
}
function reducetime() {
  time1 += 1;
  time.innerHTML = `${time1} AM`;
  if (time1 >= 6) {
    officeImg.src = "./res/videos/sixAM.mp4";
    video2.play();
    camera.style.display = "none";
    backgroundvideo2.style.display = "block";
    camImg.style.display = "none";
    mapContainer.style.display = "none";
    energyindicator.style.display = "none";
    time.style.display = "none";
    setInterval(death, 9000);
  }
}

function move() {
  if (puppetStage > 0) {
    puppetStage -= 1;
  }
}
var elem = document.getElementById("myBar");
var width = 0;
function frame() {
  if (width >= 100) {
    console.log("smrt");
    
  } else {
    width += 2.5;
    elem.style.width = width + "%";
  }
}
window.onload = function () {
  setInterval(reduceEnergy, 960);
  setInterval(reducetime, 113000);
  setInterval(puppet, 2000);
  setInterval(frame, 2000);
};

lightBtnL.onclick = () => {
  bgLL();
};

lightBtnR.onclick = () => {
  bgRL();
};

doorBtnL.onclick = () => {
  bgLD();
};

doorBtnR.onclick = () => {
  bgRD();
};

function bgLL() {
  if (
    lightVisibleL == 0 &&
    lightVisibleR == 0 &&
    doorVisibleL == 0 &&
    doorVisibleR == 0
  ) {
    officeImg.src = "./res/img/LL.webp";
    lightVisibleL = 1;
    console.log("left");
    energyDrain += 0.1;
  } else if (lightVisibleL == 1 && lightVisibleR == 1) {
    officeImg.src = "./res/img/RL.webp";
    lightVisibleL = 0;
    console.log("right");
    energyDrain -= 0.1;
  } else if (lightVisibleL == 1 && lightVisibleR == 0 && doorVisibleR == 0) {
    officeImg.src = "./res/img/Default.webp";
    lightVisibleL = 0;
    console.log("none");
    energyDrain -= 0.1;
  } else if (lightVisibleL == 0 && lightVisibleR == 1 && doorVisibleL == 0) {
    officeImg.src = "./res/img/RL_LL.webp";
    lightVisibleL = 1;
    console.log("both");
    energyDrain += 0.1;
  } else if (lightVisibleL == 0 && doorVisibleR == 1 && doorVisibleL == 0) {
    officeImg.src = "./res/img/RD_LL.webp";
    lightVisibleL = 1;
    console.log("light door");
    energyDrain += 0.1;
  } else if (lightVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/RD.webp";
    lightVisibleL = 0;
    console.log("door");
    energyDrain -= 0.1;
  }

  console.log(lightVisibleL);
}

function bgRL() {
  if (
    lightVisibleL == 0 &&
    lightVisibleR == 0 &&
    doorVisibleR == 0 &&
    doorVisibleL == 0
  ) {
    officeImg.src = "./res/img/RL.webp";
    lightVisibleR = 1;
    console.log("right");
    energyDrain += 0.1;
  } else if (lightVisibleL == 1 && lightVisibleR == 1) {
    officeImg.src = "./res/img/LL.webp";
    lightVisibleR = 0;
    console.log("left");
    energyDrain -= 0.1;
  } else if (lightVisibleL == 0 && lightVisibleR == 1 && doorVisibleL == 0) {
    officeImg.src = "./res/img/Default.webp";
    lightVisibleR = 0;
    energyDrain -= 0.1;
    console.log("none");
  } else if (lightVisibleL == 1 && lightVisibleR == 0 && doorVisibleR == 0) {
    officeImg.src = "./res/img/RL_LL.webp";
    lightVisibleR = 1;
    console.log("both");
    energyDrain += 0.1;
  } else if (lightVisibleR == 0 && doorVisibleL == 1 && doorVisibleR == 0) {
    officeImg.src = "./res/img/LD_RL.webp";
    lightVisibleR = 1;
    console.log("light door");
    energyDrain += 0.1;
  } else if (lightVisibleR == 1 && doorVisibleL == 1) {
    officeImg.src = "./res/img/LD.webp";
    lightVisibleR = 0;
    console.log("door");
    energyDrain -= 0.1;
  }

  console.log(lightVisibleR);
}

function bgLD() {
  if (
    doorVisibleL == 0 &&
    doorVisibleR == 0 &&
    lightVisibleL == 0 &&
    lightVisibleR == 0
  ) {
    officeImg.src = "./res/img/LD.webp";
    doorVisibleL++;
    console.log("left");
    energyDrain += 0.1;
  } else if (doorVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/RD.webp";
    doorVisibleL = 0;
    console.log("right");
    energyDrain -= 0.1;
  } else if (doorVisibleL == 1 && doorVisibleR == 0 && lightVisibleR == 0) {
    officeImg.src = "./res/img/Default.webp";
    doorVisibleL = 0;
    console.log("none");
    energyDrain -= 0.1;
  } else if (doorVisibleL == 0 && doorVisibleR == 1 && lightVisibleL == 0) {
    officeImg.src = "./res/img/RD_LD.webp";
    doorVisibleL = 1;
    console.log("both");
    energyDrain += 0.1;
  } else if (lightVisibleR == 1 && doorVisibleL == 0 && lightVisibleL == 0) {
    officeImg.src = "./res/img/LD_RL.webp";
    doorVisibleL = 1;
    console.log("light door");
    energyDrain += 0.1;
  } else if (lightVisibleR == 1 && doorVisibleL == 1) {
    officeImg.src = "./res/img/RL.webp";
    doorVisibleL = 0;
    console.log("light");
    energyDrain -= 0.1;
  }

  console.log(doorVisibleL);
}

function bgRD() {
  if (
    doorVisibleL == 0 &&
    doorVisibleR == 0 &&
    lightVisibleL == 0 &&
    lightVisibleR == 0
  ) {
    officeImg.src = "./res/img/RD.webp";
    doorVisibleR++;
    console.log("right");
    energyDrain += 0.1;
  } else if (doorVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/LD.webp";
    doorVisibleR = 0;
    console.log("left");
    energyDrain -= 0.1;
  } else if (doorVisibleL == 0 && doorVisibleR == 1 && lightVisibleL == 0) {
    officeImg.src = "./res/img/Default.webp";
    doorVisibleR = 0;
    console.log("none");
    energyDrain -= 0.1;
  } else if (doorVisibleL == 1 && doorVisibleR == 0 && lightVisibleR == 0) {
    officeImg.src = "./res/img/RD_LD.webp";
    doorVisibleR = 1;
    console.log("both");
    energyDrain += 0.1;
  } else if (lightVisibleL == 1 && doorVisibleR == 0 && lightVisibleR == 0) {
    officeImg.src = "./res/img/RD_LL.webp";
    doorVisibleR = 1;
    console.log("light door");
    energyDrain += 0.1;
  } else if (lightVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/LL.webp";
    doorVisibleR = 0;
    console.log("light");
    energyDrain -= 0.1;
  }

  console.log(doorVisibleR);
}

camera.onclick = () => {
  if (officecam == 0) {
    officeImg.style.display = "none";
    mapContainer.style.display = "block";
    camImg.style.display = "block";
    officecam = 1;
    energyDrain += 0.1;
  } else if (officecam == 1) {
    officeImg.style.display = "block";
    mapContainer.style.display = "none";
    camImg.style.display = "none";
    officecam = 0;
    energyDrain -= 0.1;
  }

  console.log(officecam);
};

function changeCamAtr(mainBtn, otherBtn1, otherBtn2, source) {
  mainBtn.onclick = () => {
    camImg.src = source;
    mainBtn.style.backgroundColor = "grey";
    mainBtn.style.opacity = "0.7";
    otherBtn1.style.backgroundColor = "transparent";
    otherBtn2.style.backgroundColor = "transparent";
  };
}

turnaround.onclick = () => {
  if (officecam == 0) {
    officecam += 2;
    officeImg.style.display = "none";
    behindImg.style.display = "block";
    camera.style.display = "none";
    energyindicator.style.display = "none";
    puppetButton.style.display = "block";
    myProgress.style.display = "block";
  } else if (officecam == 2) {
    officecam -= 2;
    officeImg.style.display = "block";
    behindImg.style.display = "none";
    camera.style.display = "block";
    energyindicator.style.display = "block";
    puppetButton.style.display = "none";
    myProgress.style.display = "none";
  }
};

// changeCamAtr(invBtn1, invBtn2, invBtn3, "res/img/StageHonzak.png");
// changeCamAtr(invBtn2, invBtn1, invBtn3, "res/img/LHallEmpty.png");
// changeCamAtr(invBtn3, invBtn2, invBtn1, "res/img/RHallEmpty.png");
animMov();
// changeCamAtr(invBtn1, invBtn2, invBtn3, "res/img/StageHonzak.png");
// changeCamAtr(invBtn2, invBtn1, invBtn3, "res/img/LHallEmpty.png");
// changeCamAtr(invBtn3, invBtn2, invBtn1, "res/img/RHallEmpty.png");

freddynose.onclick = () => {
  audio.play();
};

var x;
function reducePuppet() {
  if (width > 0) {
    width -= 2;
    elem.style.width = width + "%";
  }
  if (puppetStage > 0) {
    puppetStage -= 1;
    if (puppetStage == 10) {
      behindImg.src = "./res/img/puppet0.png";
    } else if (puppetStage == 20) {
      behindImg.src = "./res/img/puppet2.png";
    } else if (puppetStage == 30) {
      behindImg.src = "./res/img/puppet3.png";
    } else if (puppetStage == 40) {
      behindImg.src = "./res/img/puppet4.png";
    } else if (puppetStage < 10) {
      behindImg.src = "./res/img/puppet0.png";
    }
  }
}

puppetButton.onmousedown = () => {
  x = setInterval(reducePuppet, 100);
  puppetButton.style.backgroundColor = "white";
  clearInterval(frame);
};

puppetButton.onmouseup = () => {
  clearInterval(x);
  puppetButton.style.backgroundColor = "grey";
};

function checkdeath() {
  console.log(puppetStage);
  if (puppetStage > 42) {
    puppetJumpScare();
    console.log("jnkdvkyskmůknjb cjnjiasvmdynhvnjardvdjkkjdky")
  }
}
setInterval(checkdeath, 100);

function puppetJumpScare() {
  energyindicator.style.display = "none";
  time.style.display = "none";
  video3.play();
  camera.style.display = "none";
  backgroundvideo3.style.display = "block";
  camImg.style.display = "none";
  mapContainer.style.display = "none";
 game.style.display ="none";
  setInterval(death, 4200);
}
