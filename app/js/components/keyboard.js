const d = document;
let num = 0;

export function keyboard(){
 d.addEventListener("keydown",e =>{
  if(localStorage.getItem("play") === "false") return 0;
  if((e.keyCode < 65 || e.keyCode > 90) && e.keyCode !== 8) return 0;
  agregaTecla(e);
 console.log(num)
  
  // if(/[0-9{}\[\]\+\*\~´`\^\-_\.,;:<>|¬°]/.test(e.key)) return 0;
 })
}



const agregaTecla = (e) =>{
 const $containers = d.querySelectorAll(".container"),
 $containerNow = $containers[0];
 console.log("xd")
 if(e.keyCode === 8){
  if(num !== 0) num--; 
  $containerNow.children[num].textContent = "";
 }
 else if(num === $containerNow.children.length) return;
 else{
  $containerNow.children[num].textContent = e.key;
  num++;
 }
}

const pintaCasillas = () =>{

}