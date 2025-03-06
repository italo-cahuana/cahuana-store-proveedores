// Función para redirigir a WhatsApp con un mensaje personalizado
export function redirigirAWhatsApp(mensajeServicio) {
    const mensaje = `Hola, estoy interesado ${mensajeServicio}. ¿Me puedes brindar más información?`;
    const urlWhatsApp = `https://wa.me/573042453303?text=${encodeURIComponent(mensaje)}`;
    
    window.open(urlWhatsApp); // Abre una nueva pestaña con el enlace de WhatsApp
}