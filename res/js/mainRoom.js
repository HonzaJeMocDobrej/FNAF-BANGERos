let lightBtnL = document.getElementById("lightBtnL");
let lightBtnR = document.getElementById("lightBtnR");
let doorBtnL = document.getElementById("doorBtnL");
let doorBtnR = document.getElementById("doorBtnR");
let bgImg = document.getElementById("bgImg");

let lightDivR;
let doorDivL;
let doorDivR;

lightBtnL.onmousedown = () => {
    let lightDivL = document.createElement("div");
    lightDivL.style.backgroundColor = "yellow";
    lightDivL.style.position = "fixed";
    lightDivL.style.height = "100px";
    lightDivL.style.width = "200px";
    bgImg.append(lightDivL);

}