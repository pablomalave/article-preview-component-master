// Añadir eventos
var elemento = document.querySelector(".shareIconBox");
elemento.addEventListener("click", manejoShareBox);

//Funcion que muestra o esconde la shareBox
function manejoShareBox() {
    document.querySelector(".shareBox").classList.toggle("hiding");
}