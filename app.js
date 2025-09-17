// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []

function agregarAmigo(){
   //Diferentes formas para tomar el elemto del imput
   // let entrada = document.getElementById("amigo");
    let entrada = document.querySelector("#amigo")
    let nombre = entrada.value.trim();
    if(nombre == ""){
        alert("Ingrese un nombre para agregarlo");
    }else{
        nombres.push(nombre);
        document.getElementById("amigo").value = "";
        listarNombres();
    }
}

function listarNombres(){
let lista = document.getElementById("listaAmigos");
lista.innerHTML="";
let tamanioLista = nombres.length;
let i=0;
for(i=0; i<tamanioLista; i++){
    const li = document.createElement("li");
    li.textContent = nombres[i];
    lista.appendChild(li);
}

}

