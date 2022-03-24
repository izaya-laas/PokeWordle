import { reset } from "./reset.js";
import { getPokeProperty } from "../helpers/pokemon.js";

export function defeat(){
 
 //ventana modal con cruz, al cerrar la cruz te lleva al inicio.
 alert(`Perdiste, el pokemon era: ${getPokeProperty("name")}`);
 
 reset();
}