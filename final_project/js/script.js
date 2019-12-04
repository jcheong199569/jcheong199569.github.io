function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hi, I am Junwoo.')
    .start()
    .pauseFor(2500)
    .deleteAll()
    .start();