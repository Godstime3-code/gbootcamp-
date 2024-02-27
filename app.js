"use strict"

const userText = document.querySelector("#js-word");
const textChars = document.querySelector("#js-remaining");

userText.addEventListener("input", ()=>{
const userTextLength = userText.value.length; 

let remainingChars = 50 - userTextLength;
textChars.innerHTML = remainingChars

if(remainingChars <= 10){
  textChars.classList.add("text-danger")
}
});
