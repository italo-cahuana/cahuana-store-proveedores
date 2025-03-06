// Importamos las funciones desde los otros archivos
import { ocultar, mostrarServicio } from './services.js';
import { redirigirAWhatsApp } from './whatsapp.js';
import { instagram } from './social.js';
import { obtenerDatosDeGoogleSheets, mostrarSaldos } from './googleSheets.js';
import { mostarPrecio2 } from './hideOrShowPrices.js';


//************************ Funcion para ocultar los precios2, 3, 4 y luego mostrarlos. Activar SOLO SI *NO* ESTAN OCULTOS POR DEFECTO EN CSS. en este caso si estan ocultos en CSS por eso no se activa**************************************************************************************************//
//function ocularPrecio2() {
    // const divs = document.querySelectorAll('.precios'); // seleccionamos todos los div o elementos que ingresemos en el parametro
    // divs.forEach(div => div.style.display = 'none'); // luego los ocultamos 
    
    // Seleccionamos el div. Y llamamos a la funcion monstrarPrecio2 si el usuario hace click.
    //document.getElementById('contenido-spo').addEventListener('click',() => mostarPrecio2('precios'));    
//}
//************************************************************************************************************************************************//


// Logíca para mostrar los precios2, 3, 4. SOLO *SI* ESTAN OCULTOS POR DEFECTO EN CSS. en este caso si estan ocultos en CSS
document.getElementById('contenido-spo').addEventListener('click',() => mostarPrecio2('preciosspo')); 
document.getElementById('contenido-disney').addEventListener('click',() => mostarPrecio2('preciosdis'));
document.getElementById('contenido-youtube').addEventListener('click',() => mostarPrecio2('preciosyou'));
document.getElementById('contenido-netflix').addEventListener('click',() => mostarPrecio2('preciosnet'));// Llamamos a la funcion mostrarPrecio2

// variable global para mensaje de whatsapp
let mensajeServicio = "en adquirir una cuenta";

// Lógica para el input de búsqueda
const inputOpcion = document.getElementById('opccionusuario');
inputOpcion.addEventListener('input', function () {
    const opcion = inputOpcion.value.toLowerCase();

    const opcionesNetflix = ["netflix", "n", "ne", "net", "netf", "netfl", "netfli", "netflix "];
    const opcionesAmazon = ["amazon", "a", "am", "ama", "amaz", "amazo", "amazon "];
    const opcionesHbo = ["hbo", "h", "hb", "hbo "];
    const opcionesSpotify = ["spotify", "s", "sp", "spo", "spot", "spoti", "aspotif", "spotify "];
    const opcionesDisney = ["disney", "d", "di", "dis", "disn", "disne", "disney ", "disney+", "disney+ "];
    const opcionesYoutube = ["youtube","youtube premium", "y", "yo", "you", "yout", "youtu", "youtub", "youtube ", "youtube p", "youtube pr", "youtube pre", "youtube prem", "youtube premi", "youtube premiu", "youtube premium", "youtube premium "];
    const opcionesCrunchyroll = ["crunchyroll", "c", "cr", "cru", "crun", "crunc", "crunch", "crunchy", "crunchy ", "crunchyr", "crunchyro", "crunchyrol", "crunchyroll "];
    const opcionesParamount = ["paramount", "p", "pa", "par", "para", "param", "paramo", "paramou", "paramoun", "paramount ", "paramount+", "paramount+ "];

    if (opcionesNetflix.includes(opcion)) {
        mostrarServicio('netflix');
        mensajeServicio = "en el servicio de Netflix";
    } else if (opcionesAmazon.includes(opcion)) {
        mostrarServicio('amazon');
        mensajeServicio = "en el servicio de Amazon";
    } else if (opcionesHbo.includes(opcion)) {
        mostrarServicio('hbo');
        mensajeServicio = "en el servicio de HBO";
    } else if (opcionesSpotify.includes(opcion)) {
        mostrarServicio('spo');
        mensajeServicio = "en el servicio de Spotify";
    } else if (opcionesDisney.includes(opcion)) {
        mostrarServicio('disney');
        mensajeServicio = "en el servicio de Disney";
    } else if (opcionesYoutube.includes(opcion)) {
        mostrarServicio('youtube');
        mensajeServicio = "en el servicio de Youtube Premium";
    } else if (opcionesCrunchyroll.includes(opcion)) {
        mostrarServicio('crunchyroll');
        mensajeServicio = "en el servicio de Crunchyroll";
    } else if (opcionesParamount.includes(opcion)) {
        mostrarServicio('paramount');
        mensajeServicio = "en el servicio de Paramount";
    } else {
        const divs = document.querySelectorAll('.contenido');
        divs.forEach(div => div.style.display = 'block');
        mensajeServicio = "en adquirir una cuenta"
    }
});

// Lógica para redirigir a WhatsApp al hacer clic en las imágenes
document.getElementById('net-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Netflix"));
document.getElementById('ama-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Amazon"));
document.getElementById('hbo-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de HBO"));
document.getElementById('spo-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Spotify"));
document.getElementById('dis-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Disney"));
document.getElementById('you-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de YouTube Premium"));
document.getElementById('cru-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Crunchyroll"));
document.getElementById('para-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Paramount+"));// con la funcion flecha se puede llamar a la funcion con los paretisis sin preocupacion a que se ejecute inmediante, porque la funcion flecha (=>), hace que se ejecute extrictamente cuando ser haga el click

// Lógica para redirigir a redes sociales
document.getElementById('insta').addEventListener('click', instagram);
// document.getElementById('linkedin').addEventListener('click', linkedin);// Aquí no se llama a la funcion directamente(porque si no se ejecutaría), aquí se hace "refenrencía" a al funcio, ya que no estamos poniendole los "()" y por ende solo se llama si se hace click al elemento "insta y linkedin"

// Lógica para redirigir a whatsapp al hacer clic en el boton
document.getElementById('botonWhatsApp').addEventListener('click', () => redirigirAWhatsApp(mensajeServicio));

// Inicializar la obtención de datos cuando la página cargue
window.onload = function () {
    obtenerDatosDeGoogleSheets();
    setInterval(obtenerDatosDeGoogleSheets, 60000); // Actualiza los datos cada 60 segundos


    //****** Llamar SOLO SI LOS PRECIOS *NO* ESTAN OCULTOS POR DEFECTO EN CSS. en este caso si estan ocultos en CSS por eso no se activa******//
    // ocularPrecio2(); 
};