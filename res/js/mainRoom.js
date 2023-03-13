let lightBtnL = document.getElementById("lightBtnL");
let lightBtnR = document.getElementById("lightBtnR");
let doorBtnL = document.getElementById("doorBtnL");
let doorBtnR = document.getElementById("doorBtnR");
let bgImg = document.getElementById("bgImg");


let lightVisibleL = false;

let lightDivL = document.createElement("div");


let lightDivR = document.createElement("div");
let doorDivL;
let doorDivR;

let buttArr = [lightBtnL, lightBtnR, doorBtnL, doorBtnR];

buttArr.forEach(eachButt => {
    eachButt.style.zIndex = 10;
});


lightBtnR.onmousedown = () => {
    lightDivR.style.backgroundColor = "yellow";
    lightDivR.style.position = "fixed";
    lightDivR.style.right = "200px";
    lightDivR.style.bottom = "0px";
    lightDivR.style.height = "600px";
    lightDivR.style.width = "140px";
    bgImg.append(lightDivR);
}

lightBtnR.onmouseup = () => {
    lightDivR.remove();
}

lightBtnL.onmousedown = () => {

    lightVisibleL = true;
    lightDivL.style.backgroundColor = "yellow";
    lightDivL.style.position = "fixed";
    lightDivL.style.left = "200px"
    lightDivL.style.bottom = "0px"
    lightDivL.style.height = "600px";
    lightDivL.style.width = "140px";
    bgImg.append(lightDivL);
    console.log(lightVisibleL);

}

lightBtnL.onmouseup = () => {
    lightVisibleL = false;
    lightDivL.remove();
    console.log(lightVisibleL);
}