export async function ajax(props){
 const {url, success} = props;

 await fetch(url)
 .then(res => res.ok ? res.json() : Promise.reject(res))
 .then(json => success(json))
 .catch(err =>{
  console.log(err)
  let message = err.statusText || "Ocurrio un error al cargar el sitio, pruebe recargar";
  alert(`<div><p>Error ${err.status}: ${message}</p></div>`);
 })
}