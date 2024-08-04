//generate letters
const letters = "abcdefjhigklmnopqrstuvwxyz";
let letters_arr = Array.from(letters);

//select letters container
let letters_container = document.querySelector(".letters");
//generate letters
letters_arr.forEach((letter) => {
  let span = document.createElement("span");
  let letter_text = document.createTextNode(letter);
  span.appendChild(letter_text);
  span.className = "letter_box";

  letters_container.appendChild(span); 
});
