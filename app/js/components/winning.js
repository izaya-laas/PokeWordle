// import { ajax } from "../helpers/ajax.js";
// import { getPokeProperty } from "../helpers/pokemon.js";

import { reset } from "./reset.js";

export function winning(){

 import("https://cdn.skypack.dev/canvas-confetti")
 .then(({default: canvasConfetti}) => {
  canvasConfetti();
  setTimeout(canvasConfetti, 333)
  setTimeout(canvasConfetti, 750)
 });

 // ajax({
 //  url: getPokeProperty("api"),
 //  success(json){
 //   console.log(json);
 //   console.log(getPokeProperty("api"))
 //  }
 // })

 //ventana modal con cruz, al cerrar la cruz te lleva al inicio.
 alert("Has ganado");

 reset();
}