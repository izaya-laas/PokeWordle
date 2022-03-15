const d = document;
let num = 0;

export function keyboard(pokemonName){
 d.addEventListener("keydown",e =>{
  if(localStorage.getItem("play") === "false") return 0;
  if((e.keyCode < 65 || e.keyCode > 90) && e.keyCode !== 8 && e.keyCode !== 13) return 0;
  console.log(e.key)
  agregaTecla(e, pokemonName);
 })
}



const agregaTecla = (e, pokemonName) =>{
 
 const $containers = d.querySelectorAll(".container"),
 $containerNow = $containers[0];

 let keyCode = e.keyCode,
 pokemonLength = $containerNow.children.length;
 
 if(keyCode === 8){
  if(num !== 0) num--;
  $containerNow.children[num].textContent = "";
 }
 else if(keyCode === 13 && num === pokemonLength) pintaCasillas();
 else if(keyCode === 13 && num !== pokemonLength) alert(`El pokemon posee ${pokemonLength} caracteres`)
 else if(num === pokemonLength) return;
 else if((keyCode !== 8 || keyCode !== 13) && num !== pokemonLength){
  $containerNow.children[num].textContent = e.key;
  num++;
 }
}



const pintaCasillas = () =>{
 console.log(pintaCasillas)
}