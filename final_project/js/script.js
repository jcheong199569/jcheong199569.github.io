function darkMode() {
    //toggling darkmode//
    var element = document.body;
    element.classList.toggle("dark-mode");

    //when changing, logos need to change its color too//

    //changing logo color//
    var logo = document.getElementById("logo");
    var logoColor = logo.getAttribute("src");

    if (logoColor == "asset/SVG/logo-darkpurple.svg") {
        logo.src="asset/SVG/logo-yellow.SVG";
    } else {
        logo.src="asset/SVG/logo-darkpurple.svg";
    };

    //changing button text//

    var buttonText = document.getElementById("darkmode");
    var buttonTextText = buttonText.innerHTML;

    if (buttonTextText == "Dark") {
        buttonText.innerHTML = "Light";
    } else {
        buttonText.innerHTML = "Dark";
    };

    
}

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});


typewriter.typeString("Hi, I am Junwoo.")
    .start()
    .pauseFor(10000);

$(document).ready(function(){
    $("#flip").click(function(){
    $("#panel").slideToggle("slow");
});
});

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter2() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
