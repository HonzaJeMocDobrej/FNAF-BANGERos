export default function animMov() {
    let interTime = 5000;
    let random;
    let clearIntBool = 0;
    let interval;
    
    
        function unvIntFunc() {
           
                
                random = Math.floor(Math.random() * 3) + 1;
                if (random == 1) {
                    interval = setTimeout(unvIntFunc, 1000);
                    console.log(1)

                }
                
                else if (random == 2) {
                    interval = setTimeout(unvIntFunc, 2000);
                    console.log(2)
                }
                
                else if (random == 3) {
                    interval = setTimeout(unvIntFunc, 3000);
                    console.log(3)
                }
         
        }

        unvIntFunc();
        


    }
