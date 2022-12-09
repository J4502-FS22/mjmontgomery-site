"use strict";

var pics = document.getElementsByClassName("gallery-image");
var nextButton = document.getElementById("button_next");
var previousButton = document.getElementById("button-previous");
var photoNumber = document.getElementById("stepper");
var currentPhotoNumber = 0;

pics[currentPhotoNumber].classList.remove('hideThis');
photoNumber.innerHTML = (currentPhotoNumber + 1) + " out of " + pics.length;

nextButton.addEventListener('click,' function() {
  pics[currentPhotoNumber].classList.add("hideThis");
  currentPhotoNumber = currentPhotoNumber + 1;
  if (currentPhotoNumber === pics.length) {
    currentPhotoNumber=0;
  }

  pics[currentPhotoNumber].classList.remove('hideThis');
  photoNumber.innerHTML = (currentPhotoNumber + 1) + " out of " + pics.length;

});

previousButton.addEventListener('click,' function() {
  pics[currentPhotoNumber].classList.add("hideThis");
  currentPhotoNumber = currentPhotoNumber - 1;
  if (currentPhotoNumber < 0) {
    currentPhotoNumber= pics.length - 1;
  }

  pics[currentPhotoNumber].classList.remove('hideThis');
  photoNumber.innerHTML = (currentPhotoNumber + 1) + " out of " + pics.length;

});
