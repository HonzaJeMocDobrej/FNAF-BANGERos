import animMov from "./animMov.js";
import { randomRoom, roomVisible } from "./animMov.js";

let lightBtnL = document.getElementById("lightBtnL");
let lightBtnR = document.getElementById("lightBtnR");
let doorBtnL = document.getElementById("doorBtnL");
let doorBtnR = document.getElementById("doorBtnR");
let officeImg = document.getElementById("officeImg");
let camera = document.getElementById("camera");
let mapContainer = document.getElementById("mapContainer");
export let camImg = document.getElementById("camImg");
export let invBtn1 = document.getElementById("invBtn1");
export let invBtn2 = document.getElementById("invBtn2");
export let invBtn3 = document.getElementById("invBtn3");
let freddynose = document.getElementById("freddynose");
let playagain = document.getElementById("playagain");
let audio = new Audio("../res/sound/honk.mp3");
const video = document.getElementById('backgroundvideo');

let lightVisibleR = 0;
let lightVisibleL = 0;
let doorVisibleL = 0;
let doorVisibleR = 0;
let officecam = 0;
let energy = 100;
let energyDrain = 1;



function reduceEnergy() {
  energy -= energyDrain;
  console.log("Energy reduced by "+energyDrain+". Current energy:", energy);
  if (energy <= 0) {
    officeImg.src = "./res/videos/project.mp4";  
clearInterval(reduceEnergy);
video.play();
camera.style.display = "none";
backgroundvideo.style.display = "block";
camImg.style.display = "none";
mapContainer.style.display = "none";
playagain.style.display ="block";

  }
}

window.onload = function () {
  // setInterval(reduceEnergy, 200000000000);
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
    energyDrain +=1;
  } else if (lightVisibleL == 1 && lightVisibleR == 1) {
    officeImg.src = "./res/img/RL.webp";
    lightVisibleL = 0;
    console.log("right");
    energyDrain -=1;
  } else if (lightVisibleL == 1 && lightVisibleR == 0 && doorVisibleR == 0) {
    officeImg.src = "./res/img/Default.webp";
    lightVisibleL = 0;
    console.log("none");
    energyDrain -=1;
  } else if (lightVisibleL == 0 && lightVisibleR == 1 && doorVisibleL == 0) {
    officeImg.src = "./res/img/RL_LL.webp";
    lightVisibleL = 1;
    console.log("both");
    energyDrain +=1;
  } else if (lightVisibleL == 0 && doorVisibleR == 1 && doorVisibleL == 0) {
    officeImg.src = "./res/img/RD_LL.webp";
    lightVisibleL = 1;
    console.log("light door");
    energyDrain +=1;
  } else if (lightVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/RD.webp";
    lightVisibleL = 0;
    console.log("door");
    energyDrain -=1;
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
    energyDrain +=1;
  } else if (lightVisibleL == 1 && lightVisibleR == 1) {
    officeImg.src = "./res/img/LL.webp";
    lightVisibleR = 0;
    console.log("left");
    energyDrain -=1;
  } else if (lightVisibleL == 0 && lightVisibleR == 1 && doorVisibleL == 0) {
    officeImg.src = "./res/img/Default.webp";
    lightVisibleR = 0;
    energyDrain -=1;
    console.log("none");
  } else if (lightVisibleL == 1 && lightVisibleR == 0 && doorVisibleR == 0) {
    officeImg.src = "./res/img/RL_LL.webp";
    lightVisibleR = 1;
    console.log("both");
    energyDrain +=1;
  } else if (lightVisibleR == 0 && doorVisibleL == 1 && doorVisibleR == 0) {
    officeImg.src = "./res/img/LD_RL.webp";
    lightVisibleR = 1;
    console.log("light door");
    energyDrain +=1;
  } else if (lightVisibleR == 1 && doorVisibleL == 1) {
    officeImg.src = "./res/img/LD.webp";
    lightVisibleR = 0;
    console.log("door");
    energyDrain -=1;
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
    energyDrain +=1;
  } else if (doorVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/RD.webp";
    doorVisibleL = 0;
    console.log("right");
    energyDrain -=1;
  } else if (doorVisibleL == 1 && doorVisibleR == 0 && lightVisibleR == 0) {
    officeImg.src = "./res/img/Default.webp";
    doorVisibleL = 0;
    console.log("none");
    energyDrain -=1;
  } else if (doorVisibleL == 0 && doorVisibleR == 1 && lightVisibleL == 0) {
    officeImg.src = "./res/img/RD_LD.webp";
    doorVisibleL = 1;
    console.log("both");
    energyDrain +=1;
  } else if (lightVisibleR == 1 && doorVisibleL == 0 && lightVisibleL == 0) {
    officeImg.src = "./res/img/LD_RL.webp";
    doorVisibleL = 1;
    console.log("light door");
    energyDrain +=1;
  } else if (lightVisibleR == 1 && doorVisibleL == 1) {
    officeImg.src = "./res/img/RL.webp";
    doorVisibleL = 0;
    console.log("light");
    energyDrain -=1;
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
    energyDrain +=1;
  } else if (doorVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/LD.webp";
    doorVisibleR = 0;
    console.log("left");
    energyDrain -=1;
  } else if (doorVisibleL == 0 && doorVisibleR == 1 && lightVisibleL == 0) {
    officeImg.src = "./res/img/Default.webp";
    doorVisibleR = 0;
    console.log("none");
    energyDrain -=1;
  } else if (doorVisibleL == 1 && doorVisibleR == 0 && lightVisibleR == 0) {
    officeImg.src = "./res/img/RD_LD.webp";
    doorVisibleR = 1;
    console.log("both");
    energyDrain +=1;
  } else if (lightVisibleL == 1 && doorVisibleR == 0 && lightVisibleR == 0) {
    officeImg.src = "./res/img/RD_LL.webp";
    doorVisibleR = 1;
    console.log("light door");
    energyDrain += 1;
  } else if (lightVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/LL.webp";
    doorVisibleR = 0;
    console.log("light");
    energyDrain -=1;
  }

  console.log(doorVisibleR);
}

camera.onclick = () => {
  if (officecam == 0) {
    officeImg.style.display = "none";
    mapContainer.style.display = "block";
    camImg.style.display = "block";
    officecam = 1;
    energyDrain +=1;
  } else if (officecam == 1) {
    officeImg.style.display = "block";
    mapContainer.style.display = "none";
    camImg.style.display = "none";
    officecam = 0;
    energyDrain -=1;
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
 
// changeCamAtr(invBtn1, invBtn2, invBtn3, "res/img/StageHonzak.png");
// changeCamAtr(invBtn2, invBtn1, invBtn3, "res/img/LHallEmpty.png");
// changeCamAtr(invBtn3, invBtn2, invBtn1, "res/img/RHallEmpty.png");

// changeCamAtr(invBtn1, invBtn2, invBtn3, "res/img/StageHonzak.png");
// changeCamAtr(invBtn2, invBtn1, invBtn3, "res/img/LHallEmpty.png");
// changeCamAtr(invBtn3, invBtn2, invBtn1, "res/img/RHallEmpty.png");



freddynose.onclick = () => {
  audio.play(); 
};




animMov();



