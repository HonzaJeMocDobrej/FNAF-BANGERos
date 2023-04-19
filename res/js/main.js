const button = document.getElementById("button");
const text = document.getElementById("text");
const video4 = document.getElementById("backgroundvideo4");
const indexBackgroundMusic = document.getElementById("indexBackgroundMusic");
const tutorial = document.getElementById("tutorial");

button.onclick = () => {
    text.style.display = "none";
    button.style.display = "none";
    wantToPlay.style.display = "block";
    video4.play();
    indexBackgroundMusic.play();
  };

tutorial.onclik = () => {



}
