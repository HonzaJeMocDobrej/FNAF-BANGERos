let lightBtnL = document.getElementById("lightBtnL");
let lightBtnR = document.getElementById("lightBtnR");
let doorBtnL = document.getElementById("doorBtnL");
let doorBtnR = document.getElementById("doorBtnR");
let officeImg = document.getElementById("officeImg");

let lightVisibleR = 0;
let lightVisibleL = 0;
let doorVisibleL = 0;
let doorVisibleR = 0;

function setBg(btn, source) {
    btn.onclick = () => {
        officeImg.src = source;
    }

    
}

// lightBtnL.onmousedown = () => {
//     officeImg.src = "./res/img/LL.webp";
// }

// lightBtnL.onmouseup = () => {
//     officeImg.src = "./res/img/Default.webp";
// }

setBg(lightBtnL, "./res/img/LL.webp");
setBg(lightBtnR, "./res/img/RL.webp");
setBg(doorBtnL, "./res/img/LD.webp");
setBg(doorBtnR, "./res/img/RD.webp");