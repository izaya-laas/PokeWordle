import { ajax } from "../helpers/ajax.js"
import randomNum from "../helpers/randomNum.js";
import api from "../helpers/wp_api.js";

const d = document;

export function pistas(name) {
 ajax({
  url: `${api.POKE_RANDOM}/${name}`,
  success(json) {
   let tipo = json.types[0].type.name,
    numHabilidad = randomNum(0, json.moves.length-1),
    habilidad = json.moves[numHabilidad].move.name;

    const $type = d.getElementById("type"),
     $move = d.getElementById("move");

    $type.innerHTML = `Type: ${tipo}`;
    $move.innerHTML = `Move: ${habilidad}`;
  }
 })
}