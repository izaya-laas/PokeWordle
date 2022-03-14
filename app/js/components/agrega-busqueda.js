const d= document;

export function agregaBusqueda(pokemon){
 const {pokeName, pokeUrl} = pokemon;
 const $form = d.querySelector(".form");

 $form.insertAdjacentHTML("afterend",`
 <div>
   <p>Pokemon: ${pokeName}</p>
   <p>URL: ${pokeUrl}</p>
 </div>
 `)
}