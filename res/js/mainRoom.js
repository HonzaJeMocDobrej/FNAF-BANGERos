let lightBtnL = document.getElementById("lightBtnL");
let lightBtnR = document.getElementById("lightBtnR");
let doorBtnL = document.getElementById("doorBtnL");
let doorBtnR = document.getElementById("doorBtnR");
let bgImg = document.getElementById("bgImg");


let lightVisibleL = 0;
let doorVisibleL = 0;

let lightDivL = document.createElement("div");


let lightDivR = document.createElement("div");
let doorDivL = document.createElement("div");
let doorDivR = document.createElement("div");

let buttArr = [lightBtnL, lightBtnR, doorBtnL, doorBtnR];

buttArr.forEach(eachButt => {
    eachButt.style.zIndex = 10;
});


lightBtnR.onmousedown = () => {
    lightDivR.style.backgroundColor = "yellow";
    lightDivR.style.right = "330px";
    lightDivR.style.opacity = "0.5";
    divParams(lightDivR, "-30px", "170px", "skewY(-20deg)");
    bgImg.append(lightDivR);
}

lightBtnR.onmouseup = () => {
    lightDivR.remove();
}

lightBtnL.onmousedown = () => {
    
    lightDivL.style.backgroundColor = "yellow";
    lightDivL.style.left = "240px"
    lightDivL.style.opacity = "0.5";
    divParams(lightDivL, "-40px", "180px", );
    bgImg.append(lightDivL);
    
}

lightBtnL.onmouseup = () => {
    lightDivL.remove();
}

doorBtnR.onmousedown = () => {
    doorDivR.style.backgroundColor = "yellow";
    doorDivR.style.right = "330px";
    divParams(doorDivR, "-30px", "170px");
    bgImg.append(doorDivR);
}

doorBtnR.onmouseup = () => {
    doorDivR.remove();
}

doorBtnL.onclick = () => {

    if (doorVisibleL == 0) {
        doorDivL.style.backgroundImage = "url('../res/img/door.png')";
        doorDivL.style.backgroundRepeat = "no-repeat";
        doorDivL.style.backgroundSize = "cover";
        doorDivL.style.left = "245px"
        divParams(doorDivL, "0px", "180px");
        bgImg.append(doorDivL);
        doorVisibleL++;
    }
    else if (doorVisibleL == 1) {
        doorDivL.remove();
        doorVisibleL = 0;
    }
    
}

// doorBtnL.onmouseup = () => {
//     doorDivL.remove();
// }

function divParams(div, y, width, transform) {
    div.style.position = "fixed";
    div.style.bottom = y;
    div.style.height = "800px";
    div.style.width = width;
    div.style.transform = transform;
}