// import { ajax } from "../helpers/ajax.js";
// import { getPokeProperty } from "../helpers/pokemon.js";

import { modal } from "./modal.js";
import { reset } from "./reset.js";

export function winning() {
  modal(true);
  reset();
}
