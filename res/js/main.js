

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
const helpWanted = document.getElementById("helpWanted");

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
  start2.style.display = "none";
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
  start2.style.display = "block";
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
  console.log("banger")
  }

localStorage.setItem("mode", mode);


function helpWanted2 () {
  tutorial2.style.display = "none";
  button.style.display = "none";
  video4.style.display = "none";
  start.style.display = "none";
  tutorial.style.display = "none";
  honzabg.style.display = "none";
  noc.style.display = "none";
  back.style.display = "none";
  start2.style.display = "none";
  helpWanted.style.display = "block";


}

let tut = false
function tutMove(){
  console.log("??")
  setTimeout(() => {
    if(tut == false){
      tutorial2.style.backgroundImage = "url(./res/img/tutorial2.png)"
      tut = true;
    } else {
      tutorial2.style.backgroundImage = "url(./res/img/tutorial1.png)"
      tut = false;
    }
    tutMove();
  }, 15000);
}

tutMove();