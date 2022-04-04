import { reset } from "./reset.js";
import { getPokeProperty } from "../helpers/pokemon.js";
import { modal } from "./modal.js";

export function defeat() {
  modal(false);
  reset();
}
