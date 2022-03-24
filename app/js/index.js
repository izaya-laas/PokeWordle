import { rendered } from "./components/rendered.js";
import api from "./helpers/wp_api.js"
import { ajax } from "./helpers/ajax.js";
import { pistas } from "./components/pistas.js";
import randomNum from "./helpers/random-num.js";
import { keyboard } from "./components/keyboard.js";
import { getPokeProperty, setPokeProperty } from "./helpers/pokemon.js";

const d = document;
let pokemonName;

d.addEventListener("DOMContentLoaded", e =>{
   keyboard();
});

window.addEventListener("beforeunload", (e)=>{
   e.preventDefault() 
   localStorage.setItem("play", false);
   document.querySelector(".answer").value = "";
})


d.addEventListener("submit", e => {
   e.preventDefault();

   if (e.target.matches(".form-generation")) {
      let value = e.target.generation.value;

      if (!(/^[1-8]/g.test(value))) alert("El valor solicitado es un numero de 1 al 8");
      else {
         e.target.generation.value = "";

         ajax({
            url: `${api.POKE_GENERATION}/${value}`,
            success(json) {
               let cantidadPokemones = json.pokemon_species.length - 1;
               let numeroAleatorio = randomNum(0, cantidadPokemones);
               setPokeProperty("name",json.pokemon_species[numeroAleatorio].name);
               pokemonName = getPokeProperty("name");
               setPokeProperty("api", `${api.POKE_RANDOM}/${pokemonName}`)

               // console.log(pokemonName)

               localStorage.setItem("play", true);
               d.querySelector(".form-generation").style.display = "none";

               rendered(pokemonName);
               pistas(pokemonName);
            }
         })
      }
   }
})
