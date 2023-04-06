import { getPokeProperty } from "../helpers/pokemon.js";
import { winning } from "./winning.js";
import { defeat } from "./defeat.js";

const d = document;
export const tableGame = {};
let num = 0;
let now = 0;

export function keyboard() {
  d.addEventListener("keydown", (e) => {
    if (localStorage.getItem("play") === "false") return 0;

    if (
      (e.keyCode < 65 || e.keyCode > 90) &&
      e.keyCode !== 8 &&
      e.keyCode !== 13 &&
      e.keyCode !== 173
    )
      return 0;
    agregaTecla(e.key);
  });
}

export const agregaTecla = (key) => {
  const $containers = d.querySelectorAll(".container"),
    $containerNow = $containers[now];

  let pokemonLength = $containerNow.children.length;

  if (key === "Backspace") {
    if (num !== 0) num--;
    $containerNow.children[num].textContent = "";
  } else if (key === "Enter" && num === pokemonLength) {
    let inputName = "";
    for (let i = 0; i < $containerNow.children.length; i++) {
      inputName += $containerNow.children[i].textContent;
    }
    pintaCasillas(inputName, $containerNow);
  } else if (key === "Enter" && num !== pokemonLength) {
    // alert(`El pokemon posee ${pokemonLength} caracteres`);
    return;
  } else if (num === pokemonLength) return;
  else {
    $containerNow.children[num].textContent = `${key}`.toUpperCase();
    num++;
  }
};

export const pintaCasillas = (inputName, $containerNow) => {
  let pokemonName = getPokeProperty("name").toUpperCase();

  const pokemonNameLetters = pokemonName.split("");
  const inputNameLetters = inputName.split("");

  if (!tableGame[now]) tableGame[now] = "";

  inputNameLetters.forEach((el, index) => {
    if (el === pokemonNameLetters[index]) {
      $containerNow.children[index].style.backgroundColor = "#ade8a5";
      tableGame[now] += "🟩";
    } else if (pokemonNameLetters.includes(el)) {
      $containerNow.children[index].style.backgroundColor = "#faeba7";
      tableGame[now] += "🟨";
    } else {
      $containerNow.children[index].style.backgroundColor = "#a4b6bf";
      tableGame[now] += "⬜";
    }
  });
  num = 0;
  now++;

  if (pokemonName === inputName) {
    now = 0;
    winning();
  }
  if (now > 5) {
    now = 0;
    defeat();
  }
};
