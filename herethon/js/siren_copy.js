/* var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");
var isPlaying = false;

playButton.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
    playButton.innerText = "Play Audio";
  } else {
    audio.play();
    playButton.innerText = "Pause Audio";
  }

  isPlaying = !isPlaying;
}); */

/* var playButton = document.getElementById("playButton");
var isPlaying = false;

function play1() {
  var audio = new Audio("/audio/policecar.mp3");
  {
    playButton.addEventListener("click", function () {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      isPlaying = !isPlaying;
    });
  }
}

function play2() {
  var audio = new Audio("/audio/firetruck.mp3");
  audio.play();
}

function play3() {
  var audio = new Audio("/audio/ambulance.mp3");
  playButton.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    isPlaying = !isPlaying;
  });
}

function play4() {
  var audio = new Audio("/audio/whistle.mp3");
  playButton.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    isPlaying = !isPlaying;
  });
}
 */

var soundButtons = document.querySelectorAll(".round-button");

soundButtons.forEach(function (button) {
  var audio = button.querySelector(".myAudio audio");
  var img = button.querySelector("img");

  button.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      img.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXG0NioyFKt5dJIdIzCE_zRkcSNLQLDUc4w&usqp=CAU";
    } else {
      audio.pause();
      audio.currentTime = 0;
      img.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QGljp-uJNq0mwKUDSh-fGLVqP28G8-seQA&usqp=CAU";
    }
  });
});
