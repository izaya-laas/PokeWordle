import { keyboard } from "./components/keyboard.js";
import { validaFormulario } from "./components/valida-formulario.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
   validaFormulario();
   keyboard();
   console.log(localStorage.getItem("play"))
});

window.addEventListener("beforeunload", (e)=>{
   e.preventDefault() 
   localStorage.setItem("play", false);
   document.querySelector(".answer").value = "";
})