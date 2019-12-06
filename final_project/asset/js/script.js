$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

function darkMode() {
    //toggling darkmode//
    var element = document.body;
    element.classList.toggle("dark-mode");

    //when changing, logos need to change its color too//

    //changing logo color//
    var logo = document.getElementById("logo");
    var logoColor = logo.getAttribute("src");

    if (logoColor == "asset/image/SVG/logo-darkpurple.svg") {
        logo.src="asset/image/SVG/logo-yellow.SVG";
    } else {
        logo.src="asset/image/SVG/logo-darkpurple.svg";
    };

    //changing nav link color//
    var navLink = document.getElementById("navlink");
    var navLinkColor = navLink.classList[7];

    if (navLinkColor == "navbar-light") {
        navLink.classList.replace('navbar-light','navbar-dark');
    } else {
        navLink.classList.replace('navbar-dark','navbar-light');
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


typewriter.typeString("Junwoo")
    .start()
    .pauseFor(15000);





