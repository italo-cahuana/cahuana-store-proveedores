// Funcion para mostrar los precios
export function mostarPrecio2(accion) {
    const elementos = document.querySelectorAll(`.${accion}`); // Seleccionamos todos los elementos, segun el parametro

    elementos.forEach(elementos => {
        if (elementos.style.display === 'none' || elementos.style.display == '') { // Si esta oculto, lo mostramos y si esta visible lo ocultamos 
            elementos.style.display = 'block';
        } else {
            elementos.style.display = 'none';
        }  
    }); // Mostramos y ocultamos los elementos que queramos pasandolos con un parametro
}


// export function cambiarLetra(cambio) {
//     const letra = document.querySelectorAll(`.${cambio}`);

//     letra.forEach(letra => letra.style.display = 'block');
// }
