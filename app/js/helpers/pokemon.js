let pokemon = {};

export function setPokeProperty(property, value){
 pokemon[property] = value;
}

export function getPokeProperty(property){
 return pokemon[property];
}