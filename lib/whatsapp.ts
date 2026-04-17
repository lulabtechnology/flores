// Número de WhatsApp de AMORNFLOR.
// Para cambiar el número, edita este valor manteniendo el código de país.
export const WHATSAPP_NUMBER = "50760598292";

// Instagram oficial que se muestra en la página.
export const INSTAGRAM_HANDLE = "@amornflor";

// Esta función crea un enlace de WhatsApp con un mensaje listo para enviar.
export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
