// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []

function agregarAmigo(){
   // let entrada = document.getElementById("amigo");
    let entrada = document.querySelector("#amigo")
    let nombre = entrada.value.trim();
    alert(nombre)
    if(nombre == ""){
        alert("Ingrese un nombre para agregarlo");
    }else{
        nombres.push(nombre);
        document.getElementById("amigo").value = "";
    }
}