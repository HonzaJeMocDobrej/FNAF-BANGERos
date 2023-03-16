let lightBtnL = document.getElementById("lightBtnL");
let lightBtnR = document.getElementById("lightBtnR");
let doorBtnL = document.getElementById("doorBtnL");
let doorBtnR = document.getElementById("doorBtnR");
let officeImg = document.getElementById("officeImg");

let lightVisibleR = 0;
let lightVisibleL = 0;
let doorVisibleL = 0;
let doorVisibleR = 0;

// function setBg(btn, source, bool) {
//     btn.onclick = () => {
//         if (bool == 0) {
//             officeImg.src = source;
//         }
//         else if (bool == 1) {
//             officeImg.src = "./res/img/Default.webp";
//         } 
        
//         if (lightVisibleL == 1 && lightVisibleR == 1) {
//             officeImg.src = "./res/img/RL_LL.webp";
//         }
//     }
    
    
// }


// else if (doorVisibleL == 1 && doorVisibleR == 1) {
    
    // }
    
lightBtnL.onclick = () => {
    if (lightVisibleL == 0 && doorVisibleL == 0) {
        lightVisibleL++;
        officeImg.src = "./res/img/LL.webp";
    }

    else if (lightVisibleL == 1) {
        officeImg.src = "./res/img/Default.webp";
        lightVisibleL = 0;
    }

    if (officeImg.src = "./res/img/RL.webp") {
        // console.log("banger");
        officeImg.src = "./res/img/RL_LL.webp";
    }

    console.log(lightVisibleL);
}

// if (lightVisibleL == 0 && lightVisibleR == 1) {
//     lightBtnL.onclick = () => {
//         officeImg.src = "./res/img/RL_LL.webp";
//     }
// }
    

lightBtnR.onclick = () => {
    if (lightVisibleR == 0 && doorVisibleR == 0) {
        officeImg.src = "./res/img/RL.webp";
        lightVisibleR++;
    }

    else if (lightVisibleR == 1) {
        officeImg.src = "./res/img/Default.webp";
        lightVisibleR = 0;
    }
    console.log(lightVisibleR);
}

doorBtnL.onclick = () => {
    if (doorVisibleL == 0 && lightVisibleL == 0) {
        officeImg.src = "./res/img/LD.webp";
        doorVisibleL++;
    }
    
    else if (doorVisibleL == 1) {
        officeImg.src = "./res/img/Default.webp";
        doorVisibleL = 0;
    }
}

doorBtnR.onclick = () => {
    if (doorVisibleR == 0 && lightVisibleR == 0) {
        officeImg.src = "./res/img/RD.webp";
        doorVisibleR++;
    }
    
    else if (doorVisibleR == 1) {
        officeImg.src = "./res/img/Default.webp";
        doorVisibleR = 0;
    }
}

// setBg(lightBtnL, "./res/img/LL.webp", lightVisibleL);
// setBg(lightBtnR, "./res/img/RL.webp", lightVisibleR);
// setBg(doorBtnL, "./res/img/LD.webp", doorVisibleL);
// setBg(doorBtnR, "./res/img/RD.webp", doorVisibleR);