const letters = "abcdefjhigklmnopqrstuvwxyz";
let letters_arr = Array.from(letters);

//select letters container
let letters_container = document.querySelector(".letters");
//generate letters
letters_arr.forEach((letter) => {
  let span = document.createElement("span");
  let letter_text = document.createTextNode(letter);
  span.appendChild(letter_text);
  span.className = "letter-box";
  letters_container.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

//get random key
let all_keys = Object.keys(words);
let key_num = Math.floor(Math.random() * all_keys.length);
let key_name = all_keys[key_num];
let key_values = words[key_name];

//get random value from certain key
let value_num = Math.floor(Math.random() * key_values.length);
let value = key_values[value_num];

//add value into category info
document.querySelector(".category span").innerHTML = key_name;

//select letters guess container
let guess_container = document.querySelector(".letters-guess");

let value_arr = Array.from(value);

//create spans
value_arr.forEach((letter) => {
  let empty_span = document.createElement("span");
  //if letter is space
  if (letter === "") {
    empty_span.className = "with-space";
  }
  guess_container.appendChild(empty_span); 
});
