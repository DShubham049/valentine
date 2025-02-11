"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);


noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
    //   var yy = document.getElementById("myAudiono");
    //   yy.play();
       play = false;
     }
  }
});

function handleYesClick() {
  swal("Thank You!", "I love Uhh!", "success");
  // swal({
  //     title: "I love Uhh!",
  //     text: '<img src="img/love.jpg" style="display:block;">',
  //     html: true,
  // });
  // var options = {
  //     title: 'I Love uhh !',
  //     text: '<img width="250" height="200" src="img/download.jpg">',
  //     html: true
  // };
  // swal(options);
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  var yy = document.getElementById("myAudiono");
  yy.pause();
  var x = document.getElementById("myAudioyes");
  x.play();
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  //catImg.src = `img/cat-${image}.jpg`;
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
  if(generateMessage(noCount)=="I'm gonna cry..."){
    var yy = document.getElementById("myAudiono");
    yy.pause();
    var x1 = document.getElementById("myAudioCry");
    x1.play();
  }
}
 