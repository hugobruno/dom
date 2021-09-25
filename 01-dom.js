/* document.write('Hola desde javascript'); */

//Devuelve un arreglo de los elementos que tengan esta etiqueta

const title = document.getElementsByTagName('h1');
title[0].innerHTML = 'Titulo cambiado desde Javascript';
console.log(title);

//Obtiene los elementos por id
document.getElementById()
//Obtiene todos los elementos de una clase y devuelve un arreglo
document.getElementsByClassName()
//Obtiene todos los elementos por nombre y devuelve un arreglo
document.getElementsByName()

//Crear elementos html
const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);