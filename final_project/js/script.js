function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString(JSON.stringify(app))
    .start()
    .pauseFor(2500)
    .deleteAll()
    .start();