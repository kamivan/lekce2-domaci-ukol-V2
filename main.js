function onMouseOverLion() {
    console.log("on");
    let lion = document.querySelector(".lion");
    lion.style.fontWeight = "bold";
}

function onMouseLeaveLion() {
    console.log("leave");
    let lion = document.querySelector(".lion");
    lion.style.fontWeight = "normal";
}

function beRed() {
    let beRedButton = document.querySelector(".lion");
    beRedButton.classList.toggle("beRed");
}

function beBigger() {
    console.log("test ");
    let beBiggerButton = document.querySelector(".lion");
    let computedSize = window.getComputedStyle(beBiggerButton, null).getPropertyValue("font-size");
    beBiggerButton.style.fontSize = (parseFloat(computedSize) + 1) + "px";

}


function startAudio() {
    let music = document.querySelector(".music");
    music.play();
}

function pauseAudio() {
    let music = document.querySelector(".music");
    music.pause();
}

function volumeDown() {
    let music = document.querySelector(".music");
    music.volume = 0;
}

function volumeOK() {
    let music = document.querySelector(".music");
    music.volume = 0.5;
}

function volumeMax() {
    let music = document.querySelector(".music");
    music.volume = 1;
}

function audioBeggining() {
    let music = document.querySelector(".music");
    music.currentTime = 0;
}