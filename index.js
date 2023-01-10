
let keyEvent = document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

let buttonList = document.getElementsByClassName("drum");
for (let i = 0; i < buttonList.length; i++) {
    var buttonEvent = buttonList[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

function playSound(key){
let audio = new Audio();
switch (key) {
    case "w":
        audio.src = "sounds/crash.mp3";
        break;
    case "a":
        audio.src = "sounds/kick-bass.mp3";
        break;
    case "s":
        audio.src = "sounds/snare.mp3";
        break;
    case "d":
        audio.src = "sounds/tom-1.mp3";
        break;
    case "j":
        audio.src = "sounds/tom-2.mp3";
        break;
    case "k":
        audio.src = "sounds/tom-3.mp3";
        break;
    case "l":
        audio.src = "sounds/tom-4.mp3";
        break;
    default: console.log(key);
        break;
}
audio.play();
}


function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("drum-pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("drum-pressed");
    }, 100);
  
  }