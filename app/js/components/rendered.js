const d = document;
const $rendered = d.getElementById("rendered");
const $style = d.getElementById("style");
const $fragment = d.createDocumentFragment();

export function rendered(name) {

 $rendered.innerHTML = "";
 let words = name.length;

 for (let i = 0; i < 6; i++) {
  let $container = d.createElement("div");
  $container.classList.add("container");

  for (let j = 0; j < words; j++) {
   let $cubo = d.createElement("div")
   $cubo.classList.add("cubo");
   $container.appendChild($cubo);
  }

  $fragment.appendChild($container)
 }

 $style.innerHTML = `
 .container{
  display: flex;
  justify-content: center;
 }
`

 $rendered.appendChild($fragment)
}