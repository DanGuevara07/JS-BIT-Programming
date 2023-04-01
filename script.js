
function esPrimo(x){
    if(x == 1) return false;
    for(let i=2; i<=x/2; i++){
        if(x % 2 === 0) return false;
    }
    return true;
}
function siguientePrimo(x){
    for(let i=x+1; i<=(2*x); i++){
        for(let j=2; j<= Math.trunc(i/2); j++){
            if(j === Math.trunc(i/2)){
                return i;
            } 
            if(i % j === 0){
                break;
            }
        }
    }
}

let numeroUsuario = prompt("Ingrese un número");
if(!esPrimo(parseInt(numeroUsuario))){
    alert("El número ingresado no es primo, y el siguiente primo es " + siguientePrimo(parseInt(numeroUsuario)))
}
else{
    alert("Es primo y el siguiente primo es: "+ siguientePrimo(parseInt(numeroUsuario)));
}
