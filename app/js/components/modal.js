import { ajax } from "../helpers/ajax.js";
import { getPokeProperty } from "../helpers/pokemon.js";
import api from "../helpers/wp_api.js";
import { tableGame } from "./keyboard.js";

const d = document;

export async function modal(win) {
  const $modalContainer = d.querySelector(".modal-container"),
    $modal = d.querySelector(".modal"),
    $title = d.querySelector(".modal-title"),
    $paragraph = d.querySelector(".modal-paragraph"),
    $image = d.querySelector(".modal-image"),
    $shareButton = d.querySelector(".share-btn");

  let pokemonName = getPokeProperty("name");

  const twitValues = Object.values(tableGame).join("%0A");
  const twit = `https://twitter.com/intent/tweet?text=PokeWordle%0A${twitValues} %0A¡Juega%20en%20http%3A%2F%2Fpokewordle.netlify.app!`;

  ajax({
    url: `${api.POKE_RANDOM}/${pokemonName}`,
    success(json) {
      $image.src = json.sprites.front_default;
    },
  });

  if (win) {
    $title.textContent = "Has ganado!";
    $paragraph.textContent = `Enhorabuena el pokemon era ${pokemonName}, felicidades!!`;
    $modal.classList.remove("defeat");
    $modal.classList.add("win");
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
    $modal.classList.remove("win");
    $modal.classList.add("defeat");
  }

  $shareButton.setAttribute("href", twit);
  $modalContainer.classList.remove("transparent");
  $modal.classList.remove("active");
}
