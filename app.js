let numeroSecreto= 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    //Si ya estan sorteados todos los numeros
    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles");
    }else{
        //Si el numero generado esta en la lista, sino se hace otra
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("numeroIngresado").value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero, acertaste en ${intentos} ${(intentos==1)?"vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if(numeroDeUsuario >numeroSecreto){
        //El usuario no acerto
        asignarTextoElemento("p","El numero secreto es menor");
        intentos++;
    }else{
        asignarTextoElemento("p","El numero secreto es mayor");
        intentos++;
        limpiarCaja();
    }
}
function limpiarCaja(){
    document.querySelector("#numeroIngresado").value = "";
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica 1 numero de 1 a ${numeroMax}`);    
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function bloquearNuevoJuego(){
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Reiniciar el mensaje de 1 a 10
    //Generar un nuevo numero secreto
    //Reiniciar contador
    condicionesIniciales();
    //bloquear el boton de nuevo juego
    bloquearNuevoJuego();
}





condicionesIniciales();
