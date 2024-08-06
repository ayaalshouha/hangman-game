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
console.log(value);
//add value into category info
document.querySelector(".category span").innerHTML = key_name;

//select letters guess container
let guess_container = document.querySelector(".letters-guess");

let value_arr = Array.from(value.toLowerCase());

// console.log(value);

//create guess spans
value_arr.forEach((letter) => {
  let empty_span = document.createElement("span");
  //if letter is space
  if (letter === " ") {
    empty_span.className = "with-space";
  }
  guess_container.appendChild(empty_span);
});

let spans = document.querySelectorAll(".letters-guess span");
let span_arr = Array.from(spans);

//set guess status
let guess_status = false;

// handle click on letters
document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let clicked_letter = e.target.innerHTML.toLowerCase();

    value_arr.forEach((char, index) => {
      if (char == clicked_letter) {
        guess_status = true;
        span_arr.forEach((span, i) => {
          if (i === index) {
            span.innerHTML = clicked_letter;
          }
        });
        console.log(guess_status);
      }
    });
  }
});
