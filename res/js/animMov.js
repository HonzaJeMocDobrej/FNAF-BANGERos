

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
  let randomInt;


  function unvIntFunc() {

    if (count == 0) {
      random = 3
      randomRoom = 1
      count++;
      console.log("First statement")
    }

    else if (count >= 1 && randomRoom == 1) {
      random = Math.floor(Math.random() * 3) + 1;
      randomRoom = Math.floor(Math.random() * 3) + 1;
      console.log("Second statement")
    }

    else if (randomRoom == 2) {
      leftAndRightLoc(leftArr)
      console.log("Left Side")
    }

    else if (randomRoom == 3) {
      leftAndRightLoc(rightArr)
      console.log("Right Side")
    }

    else if (randomRoom == 4 || randomRoom == 5) {
      random = Math.floor(Math.random() * 3) + 1;
      randomRoom = 6;
      console.log("Final statement")
    }

    if (random == 1) {
      interval = setTimeout(unvIntFunc, 5000);

    }

    else if (random == 2) {
      interval = setTimeout(unvIntFunc, 5000);
    }

    else if (random == 3) {
      interval = setTimeout(unvIntFunc, 5000);
    }


    console.log("Random: " + random)
    console.log("Random room: " + randomRoom)

    const btns = document.getElementsByClassName("invBtn");
    [...btns].forEach(element => {
      element.onclick = () => {
        inRoom = element.dataset.inroom;
        checkActive(element);
        checkAnimPos(element.dataset.inroom, element.dataset.inroom, element.dataset.img, element.dataset.imgempty, true);
        console.log(`In room: ${element.dataset.inroom}`);
      }
    });

    checkAnimPos(1, 1, "res/img/StageHonzak.png", "res/img/emptyStage.png");
    checkAnimPos(2, 2, "res/img/LHallHonzak.png", "res/img/LHallEmpty.png");
    checkAnimPos(3, 3, "res/img/RHallHonzak.png", "res/img/RHallEmpty.png");
  }

  function checkAnimPos(roomVal, randomRoomVal, source, emptySource, boolean) {
    if ((inRoom == randomRoomVal) || boolean){
      camImg.src = "../res/videos/static.gif";
      console.log(inRoom + randomRoomVal)
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
