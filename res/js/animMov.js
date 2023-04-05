import { invBtn1, invBtn2, invBtn3 } from "./mainRoom.js";

export let randomRoom;
export let roomVisible;

export default function animMov() {
    let random;
    let interval;
    let inRoom = 1;
    
    
    setTimeout(() => {
        function unvIntFunc() {
           
                  
                  random = Math.floor(Math.random() * 3) + 1;
                  if (random == 1) {
                    interval = setTimeout(unvIntFunc, 5000);
                    
                  }
                  
                  else if (random == 2) {
                    interval = setTimeout(unvIntFunc, 5000);
                  }
                  
                  else if (random == 3) {
                    interval = setTimeout(unvIntFunc, 5000);
                  }
                  
                  randomRoom = Math.floor(Math.random() * 3) + 1;
                  console.log("Random: " + random)
                  console.log("Random room: " + randomRoom)
                  
                  invBtn1.onclick = () => {
                    inRoom = 1;
                    checkAnimPos(1, 1, "res/img/StageHonzak.png", "res/img/emptyStage.png");
                    console.log(`In room: ${inRoom}`);
                  }
                  
                  invBtn2.onclick = () => {
                    inRoom = 2;
                    checkAnimPos(2, 2, "res/img/LHallHonzak.png", "res/img/LHallEmpty.png");
                    console.log(`In room: ${inRoom}`);
                  }
                  
                  invBtn3.onclick = () => {
                    inRoom = 3;
                    checkAnimPos(3, 3, "res/img/RHallHonzak.png", "res/img/RHallEmpty.png");
                    console.log(`In room: ${inRoom}`);
                  }
                  
                  checkAnimPos(1, 1, "res/img/StageHonzak.png", "res/img/emptyStage.png");
                  checkAnimPos(2, 2, "res/img/LHallHonzak.png", "res/img/LHallEmpty.png");
                  checkAnimPos(3, 3, "res/img/RHallHonzak.png", "res/img/RHallEmpty.png");
                }
                
                function checkAnimPos(roomVal, randomRoomVal, source, emptySource){
                  if (inRoom == roomVal && randomRoom == randomRoomVal) {
                    camImg.src = source;
                  }
                  else if (inRoom == roomVal && randomRoom != randomRoomVal) {
                    camImg.src = emptySource
                  }
                }
                
                unvIntFunc();
              }, 15000);

        


    }
