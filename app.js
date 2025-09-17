// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []

function agregarAmigo(){
   //Diferentes formas para tomar el elemto del imput
   // let entrada = document.getElementById("amigo");
    //let tamanioLista = nombres.length;
    let entrada = document.querySelector("#amigo")
    let nombre = entrada.value.trim();
    if(nombre == ""){
        alert("Ingrese un nombre para agregarlo");
    }else{
        nombres.push(nombre);
        document.getElementById("amigo").value = "";
        listarNombres();
        /*if (tamanioLista > 1){
            document.getElementById("botonSortear").removeAttribute("disabled");
        }*/
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

function sortearAmigo(){
    let tamanioLista = nombres.length;
    amigoAleatorio = Math.floor(Math.random() * tamanioLista);
    if(tamanioLista<2){
        alert("No se han ingresado mas de un Nombre para la selección");
    }else{
        //document.getElementById("botonSortear").setAttribute("disabled", "true");
        document.getElementById("nombreAmigo").innerHTML=("Tu amigo secreto es "+ nombres[amigoAleatorio]);
    }
}
