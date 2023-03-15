let lightBtnL = document.getElementById("lightBtnL");
let lightBtnR = document.getElementById("lightBtnR");
let doorBtnL = document.getElementById("doorBtnL");
let doorBtnR = document.getElementById("doorBtnR");
let bgImg = document.getElementById("bgImg");

let lightVisibleR = 0;
let lightVisibleL = 0;
let doorVisibleL = 0;
let doorVisibleR = 0;

let lightDivL = document.createElement("div");
let lightDivR = document.createElement("div");
let doorDivL = document.createElement("div");
let doorDivR = document.createElement("div");

let buttArr = [lightBtnL, lightBtnR, doorBtnL, doorBtnR];

buttArr.forEach(eachButt => {
    eachButt.style.zIndex = 10;
});


lightBtnR.onmousedown = () => {
    if (doorVisibleR == 0) {
        lightDivR.style.backgroundColor = "yellow";
        lightDivR.style.right = "330px";
        lightDivR.style.opacity = "0.5";
        divParams(lightDivR, "-30px", "170px", "skewY(-20deg)");
        bgImg.append(lightDivR);
        lightVisibleR++;
    }
}

lightBtnR.onmouseup = () => {
    lightDivR.remove();
    lightVisibleR = 0;
}

lightBtnL.onmousedown = () => {
    
    if (doorVisibleL == 0) {
        lightDivL.style.backgroundColor = "yellow";
        lightDivL.style.left = "240px"
        lightDivL.style.opacity = "0.5";
        divParams(lightDivL, "-60px", "180px", "skewY(30deg)");
        lightDivL.style.height = "830px";
        bgImg.append(lightDivL);
        lightVisibleL++;
    }
    
}

lightBtnL.onmouseup = () => {
    lightDivL.remove();
    lightVisibleL = 0;
}

doorBtnR.onclick = () => {
    if (doorVisibleR == 0 && lightVisibleR == 0) {
        doorDivR.style.backgroundImage = "url('../res/img/doorR.png')";
        doorDivR.style.backgroundRepeat = "no-repeat";
        doorDivR.style.backgroundSize = "cover";
        doorDivR.style.right = "330px";
        divParams(doorDivR, "-40px", "170px");
        doorDivR.style.height = "900px"
        bgImg.append(doorDivR);
        doorVisibleR++;
    }
    else if (doorVisibleR == 1) {
        doorDivR.remove();
        doorVisibleR = 0;
    }
}

doorBtnL.onclick = () => {

    if (doorVisibleL == 0 && lightVisibleL == 0) {
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



function divParams(div, y, width, transform) {
    div.style.position = "fixed";
    div.style.bottom = y;
    div.style.height = "800px";
    div.style.width = width;
    div.style.transform = transform;
}