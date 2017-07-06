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
  imageSaturation();

  if (position[0] == 1) {
    myImage.src = "http://www.noonco.com/rc/java_art/cat_01.jpg";
  } else {
    myImage.src = "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";
  }
};

function imageSaturation() {
  if (score >= 3 && score < 6) {
    myImage.classList.remove("img--hundred");
    myImage.classList.add("img--eighty");
  } else if (score >= 6 && score < 9 ) {
    myImage.classList.remove("img--eighty");
    myImage.classList.add("img--sixty");
  } else if (score >= 9 && score < 12 ) {
    myImage.classList.remove("img--sixty");
    myImage.classList.add("img--forty");
  } else if (score >= 12 && score < 15 ) {
    myImage.classList.remove("img--forty");
    myImage.classList.add("img--twenty");
  } else if (score >= 15) {
    myImage.classList.remove("img--twenty");
  } else {
    return;
  }
};

})();
