const d = document;

export function reset(){

 const $rendered = d.getElementById("rendered"),
  $clues = d.getElementById("clues"),
  $type = d.getElementById("type"),
  $move = d.getElementById("move"),
  $style = d.getElementById("style"),
  $inputGeneration = d.querySelector(".form-generation");
  
 $style.innerHTML = "";

 $rendered.innerHTML = `
   <div class="poke">
   <div class="cubo">P</div>
   <div class="cubo">O</div>
   <div class="cubo">K</div>
   <div class="cubo">E</div>
  </div>
  <div class="wordle">
   <div class="cubo">W</div>
   <div class="cubo">O</div>
   <div class="cubo">R</div>
   <div class="cubo">D</div>
   <div class="cubo">L</div>
   <div class="cubo">E</div>
  </div>
 `;

 $clues.innerHTML = ""
 $type.innerHTML = "";
 $move.innerHTML = "";

 $inputGeneration.style.display = "block";

 localStorage.setItem("play", false);
}