import animMov from "./animMov.js";
import { randomRoom, roomVisible } from "./animMov.js";

let lightBtnL = document.getElementById("lightBtnL");
let lightBtnR = document.getElementById("lightBtnR");
let doorBtnL = document.getElementById("doorBtnL");
let doorBtnR = document.getElementById("doorBtnR");
export let officeImg = document.getElementById("officeImg");
export let camera = document.getElementById("camera");
let mapContainer = document.getElementById("mapContainer");
export let camImg = document.getElementById("camImg");
let freddynose = document.getElementById("freddynose");
// let playagain = document.getElementById("playagain");
let audio = new Audio("./res/sound/honk.mp3");
const video = document.getElementById("backgroundvideo");
const video2 = document.getElementById("backgroundvideo2");
const video3 = document.getElementById("backgroundvideo3");
const video4 = document.getElementById("backgroundvideo4");
const video5 = document.getElementById("honzajs");

export let officeAudio = document.getElementById("officeAudio");
export let animDoor = document.getElementById("animDoor");
let doorSlam = document.getElementById("doorSlam");
let puppetButtonAll = document.getElementById("puppetButtonAll");
let call = document.getElementById("call");
let openCamera = document.getElementById("openCamera");
let musicBox = document.getElementById("musicBox");
let swoosh = document.getElementById("swoosh");
export let honzakJumpscare = document.getElementById("honzakJumpscare");
export let run = document.getElementById("run");
export let camSwitch = document.getElementById("camSwitch");
export let lightSound = document.getElementById("lightSound");

export let soundArr = [call, officeAudio, musicBox, run, lightSound];
let mode = localStorage.getItem("mode");
const time = document.getElementById("time");
export const turnaround = document.getElementById("turnaround");
const puppetButton = document.getElementById("puppetButton");
let game = document.getElementById("game");
const start2 = document.getElementById("start2");
let lightVisibleR = 0;
let lightVisibleL = 0;
export let doorVisibleL = 0;
export let doorVisibleR = 0;
export let officecam = 0;
let puppetTime;
let frameTime;
export let energy = 100;
export let energyDrain;
export let time1 = 0;
export let puppetStage = 0;
export let chDoorBool = "";
if (mode == 0) {
energyDrain = 0.15;
puppetTime = 2000;
frameTime = 2000;
}
else if (mode == 1) {
energyDrain = 0.25;
puppetTime = 1000;
frameTime = 1000;

}

function death() {
  window.location.href = "index.html";
  console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
}

function puppet() {
  if (randomRoom == 6 || energy <= 0 || time1 >= 6) {
    puppetStage += 0;
  } else {
    puppetStage += 1;
  }
  // console.log("puppet stage=" + puppetStage);
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
  //  console.log("Energy reduced by " + energyDrain + ". Current energy:", energy);
  energyindicator.innerHTML = parseInt(energy);
  if (energy <= 0) {
    energyindicator.style.display = "none";
    time.style.display = "none";
    officeImg.style.display = "none";
    clearInterval(reduceEnergy);
    video.play();
    camera.style.display = "none";
    backgroundvideo.style.display = "block";
    camImg.style.display = "none";
    mapContainer.style.display = "none";
    // playagain.style.display = "block";
    turnaround.style.display = "none";
    soundArr.forEach((element) => {
      element.pause();
    });
    setInterval(death, 51000);
  }
}
function reducetime() {
  time1 += 1;
  time.innerHTML = `${time1} AM`;
  if (time1 >= 6) {
    officeImg.src = "./res/videos/sixAM.mp4";
    video2.play();
    camera.style.display = "none";
    setInterval(reducetime2, 850);
    camImg.style.display = "none";
    turnaround.style.display = "none";
    mapContainer.style.display = "none";
    energyindicator.style.display = "none";
    time.style.display = "none";
    setInterval(death, 9000);
  }
}
function reducetime2() {
  setInterval((backgroundvideo2.style.display = "block"), 1000);
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
  setInterval(reducetime, 45000);
  setInterval(puppet, puppetTime);
  setInterval(frame, frameTime);
  call.play();
  officeAudio.play();
};

lightBtnL.onclick = () => {
  bgLL();
};

lightBtnR.onclick = () => {
  bgRL();
  console.log("chDoorBool " + chDoorBool);
};

doorBtnL.onclick = () => {
  bgLD();
  console.log("doorVisibleL " + doorVisibleL);
  doorSlam.load();
  doorSlam.play();
};

doorBtnR.onclick = () => {
  bgRD();
  doorSlam.load();
  doorSlam.play();
};

function bgLL() {
  if (
    lightVisibleL == 0 &&
    lightVisibleR == 0 &&
    doorVisibleL == 0 &&
    doorVisibleR == 0
  ) {
    lightSound.play();
    lightVisibleL = 1;
    console.log("left");
    energyDrain += 0.1;
    chDoorBool = "LL";
    if (randomRoom == 4) {
      officeImg.src = "./res/img/LHonzak.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/LL.webp";
    }
  } else if (lightVisibleL == 1 && lightVisibleR == 1) {
    lightVisibleL = 0;
    console.log("right");
    energyDrain -= 0.1;
    chDoorBool = "RL";
    if (randomRoom == 5) {
      officeImg.src = "./res/img/RHonzak.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/RL.webp";
    }
  } else if (lightVisibleL == 1 && lightVisibleR == 0 && doorVisibleR == 0) {
    officeImg.src = "./res/img/Default.webp";
    lightVisibleL = 0;
    console.log("none");
    energyDrain -= 0.1;
    chDoorBool = "";
    lightSound.pause();
  } else if (lightVisibleL == 0 && lightVisibleR == 1 && doorVisibleL == 0) {
    lightVisibleL = 1;
    console.log("both");
    energyDrain += 0.1;
    chDoorBool = "RLLL";
    if (randomRoom == 4) {
      officeImg.src = "./res/img/RL_LHonzak.png";
      animDoor.play();
    } else if (randomRoom == 5) {
      officeImg.src = "./res/img/LL_RHonzak.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/RL_LL.webp";
    }
  } else if (lightVisibleL == 0 && doorVisibleR == 1 && doorVisibleL == 0) {
    lightVisibleL = 1;
    console.log("light door");
    energyDrain += 0.1;
    chDoorBool = "RDLL";
    lightSound.play();
    if (randomRoom == 4) {
      officeImg.src = "./res/img/LHonzakRClosed.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/RD_LL.webp";
    }
  } else if (lightVisibleL == 1 && doorVisibleR == 1) {
    lightSound.pause();
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
    lightVisibleR = 1;
    console.log("right");
    energyDrain += 0.1;
    chDoorBool = "RL";
    lightSound.play();
    if (randomRoom == 5) {
      officeImg.src = "./res/img/RHonzak.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/RL.webp";
    }
  } else if (lightVisibleL == 1 && lightVisibleR == 1) {
    lightVisibleR = 0;
    console.log("left");
    energyDrain -= 0.1;
    chDoorBool = "LL";
    if (randomRoom == 4) {
      officeImg.src = "./res/img/LHonzak.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/LL.webp";
    }
  } else if (lightVisibleL == 0 && lightVisibleR == 1 && doorVisibleL == 0) {
    officeImg.src = "./res/img/Default.webp";
    lightVisibleR = 0;
    energyDrain -= 0.1;
    console.log("none");
    chDoorBool = "";
    lightSound.pause();
  } else if (lightVisibleL == 1 && lightVisibleR == 0 && doorVisibleR == 0) {
    lightVisibleR = 1;
    console.log("both");
    energyDrain += 0.1;
    chDoorBool = "RLLL";
    if (randomRoom == 4) {
      officeImg.src = "./res/img/RL_LHonzak.png";
      animDoor.play();
    } else if (randomRoom == 5) {
      officeImg.src = "./res/img/LL_RHonzak.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/RL_LL.webp";
    }
  } else if (lightVisibleR == 0 && doorVisibleL == 1 && doorVisibleR == 0) {
    lightVisibleR = 1;
    console.log("light door");
    energyDrain += 0.1;
    chDoorBool = "LDRL";
    lightSound.play();
    if (randomRoom == 5) {
      officeImg.src = "./res/img/RHonzakLClosed.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/LD_RL.webp";
    }
  } else if (lightVisibleR == 1 && doorVisibleL == 1) {
    officeImg.src = "./res/img/LD.webp";
    lightVisibleR = 0;
    console.log("door");
    energyDrain -= 0.1;
    lightSound.pause();
  }

  console.log(lightVisibleR);
}

function bgLD() {
  if (doorVisibleL == 0 && doorVisibleR == 0 && lightVisibleR == 0) {
    officeImg.src = "./res/img/LD.webp";
    doorVisibleL++;
    console.log("left");
    energyDrain += 0.1;
    lightVisibleL = 0;
    chDoorBool = "";
    lightSound.pause();
  } else if (doorVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/RD.webp";
    doorVisibleL = 0;
    console.log("right");
    energyDrain -= 0.1;
    chDoorBool = "";
  } else if (doorVisibleL == 1 && doorVisibleR == 0 && lightVisibleR == 0) {
    officeImg.src = "./res/img/Default.webp";
    doorVisibleL = 0;
    console.log("none");
    chDoorBool = "";
    energyDrain -= 0.1;
  } else if (doorVisibleL == 0 && doorVisibleR == 1) {
    officeImg.src = "./res/img/RD_LD.webp";
    doorVisibleL = 1;
    lightVisibleL = 0;
    console.log("both");
    energyDrain += 0.1;
    chDoorBool = "";
    lightSound.pause();
  } else if (lightVisibleR == 1 && doorVisibleL == 0) {
    doorVisibleL = 1;
    lightVisibleL = 0;
    console.log("light door");
    energyDrain += 0.1;
    chDoorBool = "LDRL";
    lightSound.play();
    if (randomRoom == 5) {
      officeImg.src = "./res/img/RHonzakLClosed.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/LD_RL.webp";
    }
  } else if (lightVisibleR == 1 && doorVisibleL == 1) {
    doorVisibleL = 0;
    console.log("light");
    energyDrain -= 0.1;
    chDoorBool = "RL";
    if (randomRoom == 5) {
      officeImg.src = "./res/img/RHonzak.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/RL.webp";
    }
  }

  console.log(doorVisibleL);
}

function bgRD() {
  if (doorVisibleL == 0 && doorVisibleR == 0 && lightVisibleL == 0) {
    officeImg.src = "./res/img/RD.webp";
    doorVisibleR++;
    console.log("right");
    energyDrain += 0.1;
    lightVisibleR = 0;
    chDoorBool = "";
    lightSound.pause();
  } else if (doorVisibleL == 1 && doorVisibleR == 1) {
    officeImg.src = "./res/img/LD.webp";
    doorVisibleR = 0;
    console.log("left");
    energyDrain -= 0.1;
    chDoorBool = "";
  } else if (doorVisibleL == 0 && doorVisibleR == 1 && lightVisibleL == 0) {
    officeImg.src = "./res/img/Default.webp";
    doorVisibleR = 0;
    console.log("none");
    energyDrain -= 0.1;
    chDoorBool = "";
  } else if (doorVisibleL == 1 && doorVisibleR == 0) {
    officeImg.src = "./res/img/RD_LD.webp";
    doorVisibleR = 1;
    lightVisibleR = 0;
    console.log("both");
    energyDrain += 0.1;
    chDoorBool = "";
    lightSound.pause();
  } else if (lightVisibleL == 1 && doorVisibleR == 0) {
    doorVisibleR = 1;
    lightVisibleR = 0;
    console.log("light door");
    energyDrain += 0.1;
    chDoorBool = "RDLL";
    lightSound.play();
    if (randomRoom == 4) {
      officeImg.src = "./res/img/LHonzakRClosed.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/RD_LL.webp";
    }
  } else if (lightVisibleL == 1 && doorVisibleR == 1) {
    doorVisibleR = 0;
    console.log("light");
    energyDrain -= 0.1;
    chDoorBool = "LL";
    if (randomRoom == 4) {
      officeImg.src = "./res/img/LHonzak.png";
      animDoor.play();
    } else {
      officeImg.src = "./res/img/LL.webp";
    }
  }

  console.log(doorVisibleR);
}

camera.onclick = () => {
  openCamera.load();
  openCamera.play();
  if (officecam == 0) {
    officeImg.style.display = "none";
    mapContainer.style.display = "block";
    camImg.style.display = "block";
    turnaround.style.display = "none";
    officecam = 1;
    energyDrain += 0.1;
  } else if (officecam == 1) {
    officeImg.style.display = "block";
    mapContainer.style.display = "none";
    turnaround.style.display = "block";
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
  swoosh.load();
  swoosh.play();
  if (officecam == 0) {
    musicBox.play();
    officecam += 2;
    officeImg.style.display = "none";
    behindImg.style.display = "block";
    camera.style.display = "none";
    energyindicator.style.display = "none";
    puppetButton.style.display = "block";
    puppetButtonAll.style.display = "block";
    myProgress.style.display = "block";
  } else if (officecam == 2) {
    musicBox.pause();
    officecam -= 2;
    officeImg.style.display = "block";
    behindImg.style.display = "none";
    camera.style.display = "block";
    energyindicator.style.display = "block";
    puppetButtonAll.style.display = "none";
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

puppetButtonAll.onmousedown = () => {
  x = setInterval(reducePuppet, 100);
  puppetButton.style.backgroundColor = "white";
  clearInterval(frame);
};

puppetButtonAll.onmouseup = () => {
  clearInterval(x);
  puppetButton.style.backgroundColor = "grey";
};

function checkdeath() {
  console.log(puppetStage);
  if (puppetStage > 42) {
    soundArr.forEach((element) => {
      element.pause();
    });
    puppetJumpScare();
    // console.log("jnkdvkyskmůknjb cjnjiasvmdynhvnjardvdjkkjdky");
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
  game.style.display = "none";
  setInterval(death, 4200);
}

export function honzakJumpScare() {
  energyindicator.style.display = "none";
  time.style.display = "none";
  officeImg.src = "./res/videos/honzakjs.mp4";
  video5.play();
  honzajs.style.display = "block";
  officeImg.style.width = "80vw";
  officeImg.style.height = "80vh";
  camera.style.display = "none";
  mapContainer.style.display = "none";
  camImg.style.display = "none";
  myProgress.style.display = "none";
  backgroundvideo4.style.display = "block";
  puppetButton.style.display = "none";
  setInterval((window.location.href = "index.html"), 4200);
}
