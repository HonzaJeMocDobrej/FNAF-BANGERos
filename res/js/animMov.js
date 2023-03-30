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
         
        }

        unvIntFunc();
        


    }
