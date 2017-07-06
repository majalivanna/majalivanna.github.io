(function () {
var north=0;
var south=0;
var west=0;
var east=0;
var worldsize=3;
var exploreScore=0;
var catchScore=0;
var totalScore=0;

var northbutton = document.getElementById("northbutton");
var westbutton = document.getElementById("westbutton");
var eastbutton = document.getElementById("eastbutton");
var southbutton = document.getElementById("southbutton");

var myImage = document.getElementById("myImage");
var myScore = document.getElementById("myScore");
var mouse = document.getElementById("mouse");

northbutton.addEventListener('click', function(event) {
  if (north >= worldsize) {
    myImage.src = "https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";
    northbutton.disabled = true;
    return;
  }
  if (south < 1) {
    north = north + 1;
    exploreScore = exploreScore + 1;
    southbutton.disabled = false;
  } else {
    south = south - 1;
    exploreScore = exploreScore + 1;
    southbutton.disabled = false;
  }
  myPosition();
});

westbutton.addEventListener('click', function(event) {
  if (west >= worldsize) {
    myImage.src = "https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";
    westbutton.disabled = true;
    return;
  }
  if (east < 1) {
    west = west + 1;
    exploreScore = exploreScore + 1;
    eastbutton.disabled = false;
  } else {
    east = east - 1;
    exploreScore = exploreScore + 1;
    eastbutton.disabled = false;
  }
  myPosition();
});

eastbutton.addEventListener('click', function(event) {
  if (east >= worldsize) {
    myImage.src = "https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";
    eastbutton.disabled = true;
    return;
  }
  if (west < 1) {
    east = east + 1;
    exploreScore = exploreScore + 1;
    westbutton.disabled = false;
  } else {
    west = west - 1;
    exploreScore = exploreScore + 1;
    westbutton.disabled = false;
  }
  myPosition();
});

southbutton.addEventListener('click', function(event) {
  if (south >= worldsize) {
    myImage.src = "https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";
    southbutton.disabled = true;
  return;
  }
  if (north > 0) {
    north = north - 1;
    exploreScore = exploreScore + 1;
    northbutton.disabled = false;
  } else {
    south = south + 1;
    exploreScore = exploreScore + 1;
    northbutton.disabled = false;
  }
  myPosition();
});

mouse.addEventListener('click', function(event) {
  catchScore = catchScore + 10;
  setScore();
  mouse.classList.add("is-hidden");

});

function myPosition() {
  var position = [north, west, east, south];
  console.log(position);
  imageSaturation();
  setScore();
  myImage.src = "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";

  if (position[0] == 1) {
    myImage.src = "http://www.noonco.com/rc/java_art/cat_01.jpg";
  } else if (position[2] == 2 || position[3] == 1) {
    mouse.classList.remove("is-hidden");
  } else {
    return;
  }
};

function imageSaturation() {
  if (exploreScore >= 3 && exploreScore < 6) {
    myImage.classList.remove("img--hundred");
    myImage.classList.add("img--eighty");
  } else if (exploreScore >= 6 && exploreScore < 9 ) {
    myImage.classList.remove("img--eighty");
    myImage.classList.add("img--sixty");
  } else if (exploreScore >= 9 && exploreScore < 12 ) {
    myImage.classList.remove("img--sixty");
    myImage.classList.add("img--forty");
  } else if (exploreScore >= 12 && exploreScore < 15 ) {
    myImage.classList.remove("img--forty");
    myImage.classList.add("img--twenty");
  } else if (exploreScore >= 15) {
    myImage.classList.remove("img--twenty");
  } else {
    return;
  }
};

function setScore() {
  totalScore = catchScore + exploreScore;
  myScore.innerHTML = "Score: " + totalScore;
};

})();
