// funcion para ocultar servicios de streaming
export function ocultar() {
    const divs = document.querySelectorAll('.contenido'); // seleccionamos todos los div
    divs.forEach(div => div.style.display = 'none'); // luego hacemos un recorido y los ocultamos
}

// Función para mostrar el servicio seleccionado
export function mostrarServicio(servicio) {
    ocultar(); // Primero ocultamos todos los divs, llamando a la funcion ocular, que ya se definida arriba acá mismo
    
    document.querySelector(`.${servicio}`).style.display = 'block'; // Luego mostramos el div del servicio seleccionado
} 



// como ya llamamos a la funcion ocultar dentro de la funcion mostrarServicio...
// solamente habría que llamar a la funcion mostrarServicio para que 1ero oculte y despues mustre el servico que escriban...
// así nos ahorramos 1ero de llamar a la funcion ocultar y despues tener que mostrar el servicio que escriban...
// en vez de eso llamamos a mostarServico y listo, ella se encarga de ocultar y mostar los servicos....
// porque tiene a ocultar dentro de ella.