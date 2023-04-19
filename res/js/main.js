

const button = document.getElementById("button");
const text = document.getElementById("text");
const video4 = document.getElementById("backgroundvideo4");
const indexBackgroundMusic = document.getElementById("indexBackgroundMusic");
const tutorial = document.getElementById("tutorial");
const tutorial2 = document.getElementById("tutorial2");
const wantToPlay = document.getElementById("wantToPlay");
const back = document.getElementById("back");
const start = document.getElementById("start");
const start2 = document.getElementById("start2");

let mode = 0;

button.onclick = () => {
  text.style.display = "none";
  button.style.display = "none";
  wantToPlay.style.display = "block";
  video4.play();
  indexBackgroundMusic.play();
  
};

tutorial.onclick = () => {
  tutorial2.style.display = "block";
  button.style.display = "none";
  video4.style.display = "none";
  start.style.display = "none";
  tutorial.style.display = "none";
  honzabg.style.display = "none";
  noc.style.display = "none";
  back.style.display = "block";
  start2.style.display = "none";
};
back.onclick = () => {
  tutorial2.style.display = "none";
  button.style.display = "block";
  video4.style.display = "block";
  start.style.display = "block";
  tutorial.style.display = "block";
  honzabg.style.display = "block";
  noc.style.display = "block";
  back.style.display = "none";
  start2.style.display = "block";
};

start.onmouseover = () => {
  start.innerHTML = `>>> Play`;
};
start.onmouseleave = () => {
  start.innerHTML = `Play`;
};
tutorial.onmouseover = () => {
  tutorial.innerHTML = `>>> Tutorial`;
};
tutorial.onmouseleave = () => {
  tutorial.innerHTML = `Tutorial`;
};

start2.onmouseover = () => {
  start2.innerHTML = `>>> Impossible mode`;
};
start2.onmouseleave = () => {
  start2.innerHTML = `Impossible mode`;
};

start.onclick = () => {
mode = 0;
localStorage.setItem("mode", mode);
}
start2.onclick = () => {
  mode = 1;
  localStorage.setItem("mode", mode);
  }

localStorage.setItem("mode", mode);


