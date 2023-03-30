import { invBtn1, invBtn2, invBtn3 } from "./mainRoom.js";

export let randomRoom;
export let roomVisible;

export default function animMov() {
    let random;
    let interval;
    
    
        function unvIntFunc() {
           
                
                random = Math.floor(Math.random() * 3) + 1;
                if (random == 1) {
                    interval = setTimeout(unvIntFunc, 5000);

                }
                
                else if (random == 2) {
                    interval = setTimeout(unvIntFunc, 15000);
                }
                
                else if (random == 3) {
                    interval = setTimeout(unvIntFunc, 25000);
                }

                randomRoom = Math.floor(Math.random() * 3) + 1;
                console.log("Random: " + random)
                console.log("Random room: " + randomRoom)
         
                invBtn1.onclick = () => {
                    if (randomRoom == 1) {
                        console.log("Banger")
                        camImg.src = "res/img/StageHonzak.png";
                      }
                    else {
                        camImg.src = "res/img/emptyStage.png";
                      }
                    }
                    
                    invBtn2.onclick = () => {
                      if (randomRoom == 2) {
                        camImg.src = "res/img/LHallHonzak.png"
                      }
                      else{
                        camImg.src = "res/img/LHallEmpty.png"
                      }
                    }
                    
                    invBtn3.onclick = () => {
                      if (randomRoom == 3) {
                        camImg.src = "res/img/RHallHonzak.png"
                      }
                      else{
                        camImg.src = "res/img/RHallEmpty.png"
                      }
                    }
        }

        unvIntFunc();

        


    }
