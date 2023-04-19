import { camImg, chDoorBool, doorVisibleL, doorVisibleR, honzakJumpScare, officeImg, run, officeAudio, lightSound, camSwitch, officecam, soundArr } from "./mainRoom.js";

export let randomRoom;
export let roomVisible;
const btns = document.getElementsByClassName("invBtn");

export default function animMov() {
  let random;
  let interval;
  let inRoom = 1;
  let count = 0;
  let leftArr = [1, 4];
  let rightArr = [1, 5];
  let rightBackArr = [1, 3];
  let randomInt;


  function unvIntFunc() {
    
    //--------------------------Room Logic--------------------------//

    if (count == 0) {
      random = 3
      randomRoom = 1
      count++;
    }

    else if (count >= 1 && randomRoom == 1) {
      random = Math.floor(Math.random() * 3) + 1;
      randomRoom = Math.floor(Math.random() * 3) + 1;
    }

    else if (randomRoom == 2) {
      leftAndRightLoc(leftArr)
    }

    else if (randomRoom == 3) {
      leftAndRightLoc(rightArr)
    }

    else if (randomRoom == 4) {
      random = Math.floor(Math.random() * 3) + 1;
      if (doorVisibleL == 1) {
        run.play();
        randomRoom = Math.floor(Math.random() * 2) + 1;
      }
      else{
        randomRoom = 6;
      }
    }
    
    else if (randomRoom == 5) {
      random = Math.floor(Math.random() * 3) + 1;
      if (doorVisibleR == 1) {
        run.play();
        leftAndRightLoc(rightBackArr)
      }
      else{
        randomRoom = 6;
      }
    }

    //--------------------------Random Time--------------------------//

    if (random == 1) {
      interval = setTimeout(unvIntFunc, 5000);

    }

    else if (random == 2) {
      interval = setTimeout(unvIntFunc, 15000);
    }

    else if (random == 3) {
      interval = setTimeout(unvIntFunc, 25000);
    }


    console.log("Random: " + random)
    console.log("Random room: " + randomRoom)

    const btns = document.getElementsByClassName("invBtn");
    [...btns].forEach(element => {
      element.onclick = () => {
        camSwitch.load();
        camSwitch.play();
        inRoom = element.dataset.inroom;
        checkActive(element);
        checkAnimPos(element.dataset.inroom, element.dataset.inroom, element.dataset.img, element.dataset.imgempty, true);
        console.log(`In room: ${element.dataset.inroom}`);
      }
    });

    checkAnimPos(1, 1, "res/img/StageHonzak.png", "res/img/emptyStage.png", false);
    checkAnimPos(2, 2, "res/img/LHallHonzak.png", "res/img/LHallEmpty.png", false);
    checkAnimPos(3, 3, "res/img/RHallHonzak.png", "res/img/RHallEmpty.png", false);

    //--------------------------Changing BG--------------------------//

    if (randomRoom == 5 && chDoorBool == 'RL' ) {
      officeImg.src = "./res/img/RHonzak.png"
    }
    if (randomRoom == 4 && chDoorBool == 'LL' ){
      officeImg.src = "./res/img/LHonzak.png"
    }
    if (randomRoom == 5 && chDoorBool == 'RLLL' ){
      officeImg.src = "./res/img/LL_RHonzak.png"
    }
    if (randomRoom == 4 && chDoorBool == 'RLLL' ){
      officeImg.src = "./res/img/RL_LHonzak.png"
    }
    if (randomRoom == 4 && chDoorBool == 'RDLL' ){
      officeImg.src = "./res/img/LHonzakRClosed.png"
    }
    if (randomRoom == 5 && chDoorBool == 'LDRL' ){
      officeImg.src = "./res/img/RHonzakLClosed.png"
    }
    else{
      
    }

    //--------------------------Game Ended By Losing--------------------------//
    
    if (randomRoom == 6) {
     clearTimeout(interval);
      console.log("Interval Cleared")
      setTimeout(() => {
        soundArr.forEach(element => {
          element.pause();
        });
        honzakJumpScare()  
          
      }, 5000);
      setTimeout(death, 10000);
    }
  }
  function death() {
    window.location.href = "index.html";
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    turnaround.style.display = "none";
  }

  function checkAnimPos(roomVal, randomRoomVal, source, emptySource, boolean) {
    console.log(boolean)
    if (((inRoom != randomRoom && randomRoom == randomRoomVal)) || boolean){
      if (officecam == 1) {
        camSwitch.play();
      }
      camImg.src = "../res/videos/static.gif";
      console.log(inRoom + " asd" + randomRoomVal)
    }
      setTimeout(() => {
        if (inRoom == roomVal && randomRoom == randomRoomVal) {
          camImg.src = source;
        }
        else if (inRoom == roomVal && randomRoom != randomRoomVal) {
          camImg.src = emptySource
        }
      }, 200);
  }

  function leftAndRightLoc(arr) {
    random = Math.floor(Math.random() * 3) + 1;
    randomInt = Math.floor(Math.random() * 2);
    randomRoom = arr[randomInt];
  }

  unvIntFunc();



}

 function checkActive (data){
  [...btns].forEach(element => {
    element.classList.remove("active");
    if(element == data){
      element.classList.add("active");
    }
  });
}
