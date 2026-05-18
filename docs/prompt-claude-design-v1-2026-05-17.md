# Prompt Claude Design — v1

> **Uso**: pegar en https://claude.ai/design para generar la primera versión del sitio.
> Después de obtener v1, refinar con la UI de Claude Design (knobs, comentarios inline) e iterar por secciones (portada → modal → bio → toggles).
> Cuando esté listo, exportar **handoff bundle** y pasarlo a Claude Code para materializar sobre el scaffold Astro existente.

Fecha: 2026-05-17
Brief base: Pliego de Especificaciones Técnicas v3.0 (Mesa de Taller Trilingüe)
Repo destino: https://github.com/jfdominguez1/micapuig-site
Deploy actual: https://jfdominguez1.github.io/micapuig-site/

---

## Defaults aplicados donde el brief tenía huecos

| Hueco | Default aplicado | Cambiar después si: |
|---|---|---|
| Disciplina explícita | "Fotografía analógica, instalación y rastro matérico" (deducido del brief) | Mica trabaja en otro medio principal |
| Qué trata cada serie | Descripción estructural (no temática) — sólo decir que existen 3 series filtrables | Querés que Claude Design lo refleje en la copy de la sección |
| Statement/bio | Lorem editorial de 3 párrafos de longitud realista | Tengas el texto real |
| Cantidad y mix de proporciones de las 20 obras placeholder | 8 verticales 4:5 + 7 horizontales 5:4 + 5 cuadradas 1:1 | La distribución real de obras es distinta |
| Acento cromático por defecto | Rojo alizarina (mencionado como predeterminado en brief) | — |

---

## Prompt (copy-paste a claude.ai/design)

```
Diseñá la v1 de un sitio portfolio para una artista visual contemporánea.
Audiencia: curadores, galeristas y jurados de residencias.

Estética: minimalismo extremo tipo "cubo blanco" / interfaz invisible.
Espacio negativo dominante, ritmo silencioso y contemplativo,
ningún elemento decorativo. Mobile-first. Una sola página scrolleable
con secciones; el modal de obra abre encima.

═══════════════════════════════════════════════════════════════════
1 · ARTISTA
═══════════════════════════════════════════════════════════════════
Nombre: Micaela Puig
Disciplina: fotografía analógica, instalación y rastro matérico.
3 series filtrables (sólo nombres visibles en el dropdown del header):
  · Infancia
  · Naturaleza
  · Aranka
Tono editorial: institucional, sobrio, sin retórica vendedora ni
adjetivos publicitarios.

═══════════════════════════════════════════════════════════════════
2 · PALETA Y TIPOGRAFÍA
═══════════════════════════════════════════════════════════════════
Paleta global:
  · Fondo de galería cálido    #faf9f6
  · Tinta negra profunda       #111111
  · Acento principal (tinte multiply en hover):
      ROJO ALIZARINA   rgba(141, 23, 44, 0.48)
  · Variantes alternas seleccionables desde un control en el header:
      ÁMBAR DE TALLER  rgba(212, 143, 56, 0.45)
      AZUL CIANOTIPO   rgba(26, 122, 122, 0.45)

Tipografía:
  · Títulos, datos de obra y UI:
      sans-serif liviana — Inter o Helvetica Neue, pesos 300–400
  · Statement y bio:
      serif editorial con ritmo pausado — Playfair Display, peso 400–500
  · Cuerpo de la ficha técnica del modal:
      sans regular liviana, line-height generoso

═══════════════════════════════════════════════════════════════════
3 · REGLAS DE INTERACCIÓN NO NEGOCIABLES
═══════════════════════════════════════════════════════════════════
Estas reglas son la firma del proyecto. No las relajes en favor de
"mejor UX percibida" — son intencionales.

a) HOVER ESTÁTICO EN LA GRILLA:
   Al pasar el cursor sobre una obra de la portada, la imagen
   NO se mueve, NO escala, NO se desplaza, NO genera sombra
   proyectada. La estructura espacial queda absolutamente quieta.

b) TINTE MULTIPLY:
   El único cambio en hover es la aparición suave (fade de opacidad)
   de una capa del color de acento sobre la obra, en modo de mezcla
   "multiply". Como si una gelatina coloreada cubriera la pieza.

c) PROPORCIÓN NATIVA:
   PROHIBIDO recortar las obras a un cuadrado uniforme. Cada pieza
   se muestra en su proporción real (vertical, horizontal o cuadrada),
   emulando pliegos sueltos sobre una mesa de dibujo limpia.

═══════════════════════════════════════════════════════════════════
4 · HEADER (en todas las vistas)
═══════════════════════════════════════════════════════════════════
Sticky, ultra discreto, una sola línea, alineación generosa con el
contenido. Sin fondo coloreado, sin sombra, sin separador grueso.

Distribución de izquierda a derecha:

  MICAELA PUIG ............ Series▼   Bio / Statement   Contacto   ES · EN · PT

Comportamientos:
  · Click en "MICAELA PUIG" → resetea filtros, cierra modal si está
    abierto, vuelve al estado por defecto de la portada (20 obras
    mezcladas).
  · "Series▼" abre un dropdown limpio (sin caja con sombra fuerte,
    solo un panel del mismo fondo con leve borde inferior) con:
        Infancia · Naturaleza · Aranka
    Al elegir una serie, la grilla se refiltra en sitio sin saltar
    de scroll.
  · "ES · EN · PT" es un grupo de 3 marcadores: el activo en tinta
    plena, los otros con opacidad 0.4. Click cambia el idioma de
    toda la interfaz al instante, sin recargar.

═══════════════════════════════════════════════════════════════════
5 · PORTADA — MESA DE TALLER
═══════════════════════════════════════════════════════════════════
La portada es la sección dominante del sitio. Es lo primero que se ve.

Estructura:
  · Grilla de columnas fluidas, altura orgánica vertical:
       Mobile     → 2 columnas
       Tablet     → 3 columnas
       Desktop    → 4 columnas
  · Separación uniforme entre piezas (margen amplio pero no exagerado).
  · 20 obras placeholder con MIX DE PROPORCIONES:
       8 verticales 4:5
       7 horizontales 5:4
       5 cuadradas 1:1
  · Las obras NO llevan título visible en la grilla. La información
    aparece sólo al abrir el modal.
  · El primer fold debe leerse como una composición editorial, no
    como una "galería de productos".

Sin paginación, sin botón "ver más" — las 20 obras viven en scroll
continuo de la portada.

═══════════════════════════════════════════════════════════════════
6 · MODAL DE OBRA (LIGHTBOX)
═══════════════════════════════════════════════════════════════════
Único contenedor autorizado para mostrar ficha técnica.

Apertura:
  · Click en cualquier obra de la grilla.

Estructura visual:
  · Fondo: negro #0a0a0a al 98% de opacidad con desenfoque sutil
    del contenido detrás.
  · La obra al centro, gran formato, en su proporción nativa,
    con generoso margen alrededor.
  · Header del modal (línea fina arriba):
        Izquierda: nombre de la serie en versalitas chicas
        Derecha:   botón toggle "Filtro: ON | OFF"
                   (controla si la capa multiply está aplicada
                   sobre la obra en el modal, para evaluar el
                   registro analógico con sus colores reales)
  · Debajo de la obra, ficha técnica alineada al ancho de la pieza:
        TÍTULO DE LA OBRA     (sans mayúsculas, peso medio)
        Técnica y materialidad (sans italic, color tinta soft)
        Medidas — Año         (sans regular liviana)

Navegación:
  · Flecha izquierda en el lateral izquierdo del modal: obra anterior.
  · Flecha derecha en el lateral derecho: obra siguiente.
  · Teclado: ← anterior, → siguiente, Esc cerrar.
  · El carrusel respeta el filtro activo: si la portada está filtrada
    a la serie Aranka, el modal sólo recorre obras de Aranka.

Cierre:
  · Click fuera de la obra (en el fondo negro).
  · Esc.
  · Click en una X discreta arriba a la derecha.

═══════════════════════════════════════════════════════════════════
7 · SECCIÓN BIO / STATEMENT
═══════════════════════════════════════════════════════════════════
Acceso: click en "Bio / Statement" del header → scroll a la sección.
NO se abre en modal, vive como sección de la página.

Layout:
  · Una columna estrecha (~38rem max-width) centrada.
  · Generoso aire arriba y abajo (al menos 8rem).

Contenido vertical:
  1. Statement de artista — 3 párrafos en serif editorial, ritmo de
     lectura pausado. (Usar lorem editorial extendido en placeholder,
     no lorem ipsum genérico — texto que parezca prosa real.)
  2. Línea fina horizontal a 50% de ancho.
  3. CV resumido — lista limpia en sans regular liviana, agrupada en:
        Exposiciones individuales
        Exposiciones colectivas
        Residencias
        Premios
     Cada entrada en formato: Año · Título · Institución · Ciudad

═══════════════════════════════════════════════════════════════════
8 · SECCIÓN CONTACTO
═══════════════════════════════════════════════════════════════════
Acceso: click en "Contacto" del header → scroll a la sección.

Mínima. Una columna centrada con:
  · Mail institucional (visible en plano, no botón)
  · Ciudad · País
  · Link a descarga de dossier (PDF)
  · Links a redes profesionales si las hay (sin íconos cargados —
    texto plano: "Instagram", "Are.na", etc.)

═══════════════════════════════════════════════════════════════════
9 · FOOTER
═══════════════════════════════════════════════════════════════════
Una sola línea al final del scroll:
  © 2026 Micaela Puig · [Ciudad]

Sin redes acá (ya están en Contacto). Sin newsletter signup.

═══════════════════════════════════════════════════════════════════
10 · QUÉ EVITAR (igual de importante que el resto)
═══════════════════════════════════════════════════════════════════
- NO estética "startup SaaS": nada de cards con sombra, CTAs en
  gradiente, hero con mockup de producto, botones muy redondeados.
- NO estética "wedding photographer": nada de scripts cursivas,
  pasteles, marquesinas decorativas, frases en itálica suelta.
- NO estética "Wix portfolio": nada de patrones geométricos de fondo,
  animaciones scroll-reveal exageradas, parallax, transitions largas.
- NO iconos decorativos: sólo los funcionales mínimos (flechas del
  modal, X de cierre, eventual ícono de descarga para el dossier).
- NO microcopy publicitario: ni "Descubrí mi obra", ni "Bienvenida
  a mi mundo", ni "Una mirada única sobre…". La copy es seca,
  institucional, factual.
- NO emojis en ninguna parte de la interfaz.

═══════════════════════════════════════════════════════════════════
ENTREGABLE V1
═══════════════════════════════════════════════════════════════════
Quiero ver:
  · Estado por defecto de la portada (20 obras mezcladas)
  · Hover sobre una obra (con el tinte alizarina activo)
  · Modal abierto con una obra vertical
  · Sección Bio/Statement scrolleada
  · Sección Contacto scrolleada

Sólo idioma ES en esta v1. EN y PT los activamos en iteraciones
siguientes con sólo cambiar el contenido (la estructura no varía).
```

---

## Cómo iterar después de la v1

1. **Portada primero** — validar grilla, paleta y tipografía antes de tocar nada más.
2. **Modal** — abrir una obra, confirmar ficha técnica, probar toggle del filtro multiply.
3. **Bio/Statement** — validar ritmo de lectura y peso de los párrafos.
4. **Variantes de acento** — pedir que muestre la misma portada con ámbar y con cianotipo (sólo entonces).
5. **Estado con filtro activo** — pedir vista de la portada filtrada a una sola serie.

Cuando todo esté OK → exportar **handoff bundle** → pasarlo a Claude Code.

---

## Lo que NO va al prompt (es tarea de implementación, no diseño)

Estos puntos del brief v3.0 los implemento yo cuando reciba el handoff bundle, no se le piden a Claude Design:

- Atributo `data-i18n` y diccionario centralizado
- Client-Side Rendering del cambio de idioma
- Persistencia del idioma en localStorage
- Schema JSON de las obras con metadatos trilingües
- `loading="lazy"` en imágenes fuera del primer viewport
- Servir imágenes en WebP/AVIF
- Sin video / sin iframes pesados
- Clases Tailwind concretas (`columns-2 sm:columns-3 md:columns-4`, `mix-blend-multiply`, `aspect-[1/1]`, etc.)
