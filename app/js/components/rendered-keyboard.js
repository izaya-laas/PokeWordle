const d = document;

export function renderedKeyboard(){
 const $aside = d.getElementById("aside")
 const $keyboard = `
  <section class="keyboard">
  <div>
   <div class="word">Q</div>
   <div class="word">W</div>
   <div class="word">E</div>
   <div class="word">R</div>
   <div class="word">T</div>
   <div class="word">Y</div>
   <div class="word">U</div>
   <div class="word">I</div>
   <div class="word">O</div>
   <div class="word">P</div>
  </div>
  <div>
   <div class="word">A</div>
   <div class="word">S</div>
   <div class="word">D</div>
   <div class="word">F</div>
   <div class="word">G</div>
   <div class="word">H</div>
   <div class="word">J</div>
   <div class="word">K</div>
   <div class="word">L</div>
   <div class="word">-</div>
  </div>
  <div>
   <div class="word">ENTER</div>
   <div class="word">Z</div>
   <div class="word">X</div>
   <div class="word">C</div>
   <div class="word">V</div>
   <div class="word">B</div>
   <div class="word">N</div>
   <div class="word">M</div>
   <div class="word">BackSpace</div>
  </div>
 </section>
 `
}