const d = document;

export function reset() {
  const $rendered = d.getElementById("rendered"),
    $type = d.getElementById("type"),
    $move = d.getElementById("move"),
    $style = d.getElementById("style"),
    $inputGeneration = d.querySelector(".form-generation"),
    $keyboard = d.getElementById("keyboard");

  $style.innerHTML = "";

  $rendered.innerHTML = `
  <div class="poke">
      <div class="cubo correct">P</div>
      <div class="cubo incorrect">O</div>
      <div class="cubo correct">K</div>
      <div class="cubo incorrect-position">E</div>
  </div>
  <div class="wordle">
      <div class="cubo incorrect-position">W</div>
      <div class="cubo correct">O</div>
      <div class="cubo correct">R</div>
      <div class="cubo incorrect-position">D</div>
      <div class="cubo incorrect">L</div>
      <div class="cubo correct">E</div>
  </div>
 `;

  $type.innerHTML = "";
  $move.innerHTML = "";

  $inputGeneration.style.display = "flex";
  $keyboard.classList.add("none");

  localStorage.setItem("play", false);
}
