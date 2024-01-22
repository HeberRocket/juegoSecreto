let numeroSecreto = generarNumeroSecretos();
let numeroIntentos =1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos == 1) ? 'vez.': 'veces.'}`);
    }else{
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero es menor');
        }else{
            asignarTextoElemento('p','el numero es mayor');
        }
        numeroIntentos++;
    }
    return;
}

function generarNumeroSecretos() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    if (listaNumerosSorteados.lenght == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumerosSorteados.push(numeroGenerado)) {
            return generarNumeroSecretos();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecretos();
    numeroIntentos++;

}


  