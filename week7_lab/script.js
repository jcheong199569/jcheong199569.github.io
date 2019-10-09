function Homo_sapiens(name, age) {
  this.name = name;
  this.age = age;
  this.type = “Homo_sapiens”;
  this.image = “Homo_Sapiens.jpg”;
}

function Homo_erectus(name, age) {
  this.name = name;
  this.age = age;
  this.type = “Homo_erectus”;
  this.image = “Homo_erectus.jpg”;
}

function Homo_something(name, age) {
  this.name = name;
  this.age = age;
  this.type = “Homo_something”;
  this.image = “Homo_something.jpg”;
}

var animals=[new Homo_sapiens(), new Homo_erectus(), new Homo_something()];

var names=[Griffin, Manjun, Junwoo, Sam, Smith, John, Kevin, Kyle, Bro]; 

function generateRandomIndex(3) {
    return Math.floor(Math.random() * 3);
}


function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Homo_sapiens) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Bird) 
  {
    return new Bird(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
function onLoad() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image)

};