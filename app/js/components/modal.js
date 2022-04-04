import { ajax } from "../helpers/ajax.js";
import { getPokeProperty } from "../helpers/pokemon.js";
import api from "../helpers/wp_api.js";

const d = document;

export async function modal(win) {
  const $modalContainer = d.querySelector(".modal-container"),
    $modal = d.querySelector(".modal"),
    $title = d.querySelector(".modal-title"),
    $paragraph = d.querySelector(".modal-paragraph"),
    $image = d.querySelector(".modal-image");

  let pokemonName = getPokeProperty("name");

  ajax({
    url: `${api.POKE_RANDOM}/${pokemonName}`,
    success(json) {
      $image.src = json.sprites.front_default;
    },
  });

  $modalContainer.classList.remove("transparent");
  $modal.classList.remove("active");

  if (win) {
    $title.textContent = "Has ganado!";
    $paragraph.textContent = `Enhorabuena el pokemon era ${pokemonName}, felicidades!!`;

    import("https://cdn.skypack.dev/canvas-confetti").then(
      ({ default: canvasConfetti }) => {
        canvasConfetti();
        setTimeout(canvasConfetti, 333);
        setTimeout(canvasConfetti, 750);
      }
    );
  } else {
    $title.textContent = "Has perdido!";
    $paragraph.textContent = `El pokemon era ${pokemonName}, suerte en la proxima partida!!`;
  }
}
