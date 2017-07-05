(function () {
var north=0;
var south=0;
var west=0;
var east=0;
var worldsize=3;
var score=0;

var northbutton = document.getElementById("northbutton");
var westbutton = document.getElementById("westbutton");
var eastbutton = document.getElementById("eastbutton");
var southbutton = document.getElementById("southbutton");

var myImage = document.getElementById("myImage");

northbutton.addEventListener('click', function(event) {
  if (north > worldsize) {
    return;
  }
  if (south < 1) {
    north = north + 1;
    score = score + 1;
  } else {
    south = south - 1;
    score = score + 1;
  }
  myPosition();
});

westbutton.addEventListener('click', function(event) {
  if (west > worldsize) {
    return;
  }
  if (east < 1) {
    west = west + 1;
    score = score + 1;
  } else {
    east = east - 1;
    score = score + 1;
  }
  myPosition();
});

eastbutton.addEventListener('click', function(event) {
  if (east > worldsize) {
    return;
  }
  if (west < 1) {
    east = east + 1;
    score = score + 1;
  } else {
    west = west - 1;
    score = score + 1;
  }
  myPosition();
});

southbutton.addEventListener('click', function(event) {
  if (south > worldsize) {
  return;
  }
  if (north > 0) {
    north = north - 1;
    score = score + 1;
  } else {
  south = south + 1;
  score = score + 1;
  }
  myPosition();
});

function myPosition() {
  var position = [north, south, east, west];
  // console.log("North: " + north +"   South: " + south+"   East: " + east + "   West: " + west);
  console.log(position);
  console.log(score);
  if (score > 3) {
    myImage.classList.remove("img--fifty");
  }
};

})();
