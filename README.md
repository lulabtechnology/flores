# AMORNFLOR Landing Page

Landing page premium para la floristería boutique **AMORNFLOR**.

La página está pensada para mostrar la marca, sus arreglos florales reales y llevar al visitante a cotizar por WhatsApp.

## Qué incluye

- Header elegante con logo y botón de WhatsApp.
- Hero principal con fotografía real de AMORNFLOR.
- Sección editorial con el concepto de marca.
- Sección de ocasiones: cumpleaños, aniversarios, graduaciones, bodas y eventos.
- Galería con fotografías reales.
- Sección de experiencia premium.
- Formulario funcional que abre WhatsApp con los datos escritos.
- CTA final y footer.

## Tecnología usada

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Proyecto listo para GitHub Web y Vercel

## Cómo subirlo a GitHub Web

1. Entra a GitHub.
2. Crea un repositorio nuevo.
3. Sube todos los archivos de este proyecto.
4. Asegúrate de subir también la carpeta `public/images`, porque ahí están el logo y las fotos.
5. Guarda los cambios en la rama principal, normalmente llamada `main`.

## Cómo desplegarlo en Vercel

1. Entra a Vercel.
2. Haz clic en **Add New Project**.
3. Selecciona el repositorio de GitHub donde subiste este proyecto.
4. Vercel detectará Next.js automáticamente.
5. Haz clic en **Deploy**.
6. Cuando termine, Vercel mostrará el enlace de la página.

## Cómo cambiar el número de WhatsApp

Abre este archivo:

```txt
lib/whatsapp.ts
```

Busca esta línea:

```ts
export const WHATSAPP_NUMBER = "50760598292";
```

Cambia el número, dejando el código de país y sin espacios.

Ejemplo:

```ts
export const WHATSAPP_NUMBER = "50760000000";
```

## Cómo cambiar el Instagram

Abre este archivo:

```txt
lib/whatsapp.ts
```

Busca esta línea:

```ts
export const INSTAGRAM_HANDLE = "@amornflor";
```

Cambia el usuario por el nuevo Instagram.

## Cómo cambiar textos

Cada sección está separada en un archivo dentro de la carpeta `components`.

- Header: `components/Header.tsx`
- Hero principal: `components/Hero.tsx`
- Concepto: `components/Concept.tsx`
- Ocasiones: `components/Occasions.tsx`
- Galería: `components/Gallery.tsx`
- Experiencia premium: `components/PremiumExperience.tsx`
- Formulario: `components/ContactForm.tsx`
- Footer: `components/Footer.tsx`

Dentro de cada archivo hay comentarios en español que explican qué hace cada parte.

## Cómo cambiar colores

Los colores principales están en este archivo:

```txt
tailwind.config.ts
```

También hay colores base en:

```txt
app/globals.css
```

Colores principales usados:

- Marfil: `#fffaf3`
- Rosa suave: `#f7cdd8`
- Rosa empolvado: `#d98aa0`
- Verde salvia: `#9caf88`
- Dorado suave: `#c4a05f`
- Vino: `#7a2941`
- Tierra/café: `#5d453a`

## Cómo reemplazar imágenes

Las imágenes están organizadas así:

```txt
public/images/logo/
public/images/hero/
public/images/gallery/
```

Para cambiar una foto:

1. Sube la nueva imagen en la misma carpeta.
2. Copia el nombre exacto del archivo.
3. Abre el componente donde aparece esa imagen.
4. Cambia la ruta.

Ejemplo:

```tsx
src="/images/gallery/corazon-rosas-fucsia.jpg"
```

Si subes una imagen llamada `nuevo-arreglo.jpg`, la ruta sería:

```tsx
src="/images/gallery/nuevo-arreglo.jpg"
```

## Cómo funciona el formulario

El formulario no envía correos.

Cuando la persona llena los datos y toca **Enviar por WhatsApp**, se abre WhatsApp con un mensaje armado automáticamente.

El archivo del formulario es:

```txt
components/ContactForm.tsx
```

## Recomendación

Para que la página se vea siempre bien:

- Usar fotos verticales y claras.
- Evitar imágenes borrosas.
- Mantener textos cortos y elegantes.
- Revisar la página en celular después de cada cambio.
