import {
 getPokeProperty
} from "../helpers/pokemon.js"
import {
 winning
} from "./winning.js";
import {
 defeat
} from "./defeat.js";

const d = document;
let num = 0;
let now = 0;

export function keyboard() {
 d.addEventListener("keydown", e => {
  if (localStorage.getItem("play") === "false") return 0;
  if ((e.keyCode < 65 || e.keyCode > 90) && e.keyCode !== 8 && e.keyCode !== 13) return 0;
  agregaTecla(e);
 })
}

//Ojo con mr-mime (agregar el -)

const agregaTecla = (e) => {

 console.log(now);
 
 const $containers = d.querySelectorAll(".container"),
  $containerNow = $containers[now];

 let keyCode = e.keyCode,
  pokemonLength = $containerNow.children.length;

 if (keyCode === 8) {
  if (num !== 0) num--;
  $containerNow.children[num].textContent = "";
 } else if (keyCode === 13 && num === pokemonLength) {
  let inputName = "";
  for (let i = 0; i < $containerNow.children.length; i++) {
   inputName += $containerNow.children[i].textContent;
  }
  pintaCasillas(inputName, $containerNow)
 } else if (keyCode === 13 && num !== pokemonLength) alert(`El pokemon posee ${pokemonLength} caracteres`)
 else if (num === pokemonLength) return;
 else if ((keyCode !== 8 || keyCode !== 13) && num !== pokemonLength) {
  $containerNow.children[num].textContent = `${e.key}`.toUpperCase();
  num++;
 }
}



const pintaCasillas = (inputName, $containerNow) => {
 let pokemonName = getPokeProperty("name").toUpperCase();
 console.log(now)

 const pokemonNameLetters = pokemonName.split("");
 const inputNameLetters = inputName.split("");

 inputNameLetters.forEach((el, index) => {
  if (el === pokemonNameLetters[index]) $containerNow.children[index].style.backgroundColor = "#6aaa64";
  else if (pokemonNameLetters.includes(el)) $containerNow.children[index].style.backgroundColor = "#c9b458";
  else $containerNow.children[index].style.backgroundColor = "#787c7e";
 })
 num = 0;
 now++;

 if (pokemonName === inputName){
  now = 0;
  winning();
 }
 if (now > 5){
  now = 0;
  defeat();
 }
}