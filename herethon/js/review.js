/* // 라디오 버튼 요소 가져오기 */
const radioButton = document.getElementById("radioButton");

/* // 라디오 버튼 상태 변경 이벤트 핸들러 등록 */
radioButton.addEventListener("change", function () {
  if (this.checked) {
    /*     // 버튼이 선택되었을 때 수행할 동작 처리 */
    const label = this.nextElementSibling;
    const image = label.querySelector("/img/good_click.png");
    /*     // 이미지에 원하는 효과를 적용하세요 */
  } else {
    /*     // 버튼이 선택 해제되었을 때 수행할 동작 처리 */
  }
});

function changeButtonColor(elementId) {
  var button = document.getElementById(elementId);
  button.style.backgroundColor = "#D3C3F7"; /* 변경할 색상 */
}

function changeButtonColor1(elementId) {
  var button = document.getElementById(elementId);
  button.style.backgroundColor = "#D3C3F7"; /* 변경할 색상 */
}
/* const radio_value = 0;

function changeRadio1() {
  var radios = document.getElementsByClassName("myRadio");
  radios[0].src = "/img/bad_click.png";
  radios[1].src = "/img/soso.png";
  radios[2].src = "/img/good.png";

  radio_value = 1;
}

function changeRadio2() {
  var radios = document.getElementsByClassName("myRadio");
  radios[0].src = "/img/bad.png";
  radios[1].src = "/img/soso_click.png";
  radios[2].src = "/img/good.png";

  radio_value = 2;
}

function changeRadio3() {
  var radios = document.getElementsByClassName("myRadio");
  radios[0].src = "/img/bad.png";
  radios[1].src = "/img/soso.png";
  radios[2].src = "/img/good_click.png";

  radio_value = 3;
}
 */
/* 안전 캔디 기능 구현 */

const candy_value = 0;

function changeImages1() {
  var images = document.getElementsByClassName("myImage");
  for (var i = 0; i < images.length; i++) {
    images[i].src = "/img/candy_grey.png";
  }
  for (var i = 0; i < 1; i++) {
    images[i].src = "/img/candy_purple.png";
  }
  candy_value = 1;
}

function changeImages2() {
  var images = document.getElementsByClassName("myImage");
  for (var i = 0; i < images.length; i++) {
    images[i].src = "/img/candy_grey.png";
  }
  for (var i = 0; i < 2; i++) {
    images[i].src = "/img/candy_purple.png";
  }
  candy_value = 2;
}

function changeImages3() {
  var images = document.getElementsByClassName("myImage");
  for (var i = 0; i < images.length; i++) {
    images[i].src = "/img/candy_grey.png";
  }
  for (var i = 0; i < 3; i++) {
    images[i].src = "/img/candy_purple.png";
  }
  candy_value = 3;
}

function changeImages4() {
  var images = document.getElementsByClassName("myImage");
  for (var i = 0; i < images.length; i++) {
    images[i].src = "/img/candy_grey.png";
  }
  for (var i = 0; i < 4; i++) {
    images[i].src = "/img/candy_purple.png";
  }
  candy_value = 4;
}

function changeImages5() {
  var images = document.getElementsByClassName("myImage");
  for (var i = 0; i < 5; i++) {
    images[i].src = "/img/candy_purple.png";
  }
  candy_value = 5;
}
