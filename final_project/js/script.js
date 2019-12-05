function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var logo = document.getElementById("logo");
    logo.src="asset/SVG/logo-yellow.SVG";
    var navItem = document.getElementsByClassName("nav-link");
    // navItem.
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
