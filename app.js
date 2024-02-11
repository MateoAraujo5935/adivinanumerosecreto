const readlyneSync = require('readline-sync'); 
const {GenerarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlyneSync.question('Ingresar un numero: '); 
}; 

const juegoAdivinanza = () => {
    const numeroSecreto = GenerarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n')

    while (numeroAdivinado!==numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
}

juegoAdivinanza();