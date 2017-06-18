(function () {


  var menuBar = document.getElementById("menuBar");
  var burgerMenu = document.getElementById("burgerMenu");
  var mainMessage = document.getElementById("mainMessage");

  if (document.body.clientWidth > 550) {
    menuBar.classList.remove("is-hidden");
    burgerMenu.classList.add("is-hidden");
  } else {
    burgerMenu.classList.remove("is-hidden");
    menuBar.classList.add("is-hidden");
  };

  window.addEventListener("resize", function(event){
    if (document.body.clientWidth > 550) {
      menuBar.classList.remove("is-hidden");
      burgerMenu.classList.add("is-hidden");
    } else {
      burgerMenu.classList.remove("is-hidden");
      menuBar.classList.add("is-hidden");
    };

  });
})();
