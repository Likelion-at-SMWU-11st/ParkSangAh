var buttons = document.getElementsByClassName("round-button");

function play1() {
  var audio = new Audio("/audio/policecar.mp3");
  audio.play();
}

function play2() {
  var audio = new Audio("/audio/firetruck.mp3");
  audio.play();
}

function play3() {
  var audio = new Audio("/audio/ambulance.mp3");
  audio.play();
}

function play4() {
  var audio = new Audio("/audio/whistle.mp3");
  audio.play();
}

/* 
var selectedButton = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (selectedButton !== null) {
      selectedButton.classList.remove("selected");
    }

    selectedButton = this;
    selectedButton.classList.add("selected");
  });
}
 */
