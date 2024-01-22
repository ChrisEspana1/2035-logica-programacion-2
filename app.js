function HolaMundo(){
    console.log("HolaMundo");
}

function HolaNombre(nombre){
    console.log(`Hola, ${nombre}!`)
}
function DobleNumero(numero){
    return parseInt(numero * 2);
}

/*
function promedio(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3)/3;
    }*/

    function calcularPromedio(a, b, c) {
        return (a + b + c) / 3;
      }

function numeroMayor(numero1, numero2){
    if(numero1>numero2){
        return numero1;
    }else if(numero2> numero1){
        return numero2;
    }
}

function numeroPorElMismo(numero){
let resultado = parseInt(numero*numero);
return resultado;
}


HolaMundo();
HolaNombre("Jorge");
console.log(DobleNumero("5"));
let promedio = calcularPromedio(1, 3, 4);
console.log(promedio);
console.log(numeroMayor("5","6"));
console.log(numeroPorElMismo("4"));