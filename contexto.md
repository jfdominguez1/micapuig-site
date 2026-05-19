# Contexto — micapuig-site

> Brief, decisiones y memoria del proyecto. Mantener actualizado.

## Quién

**Micaela Puig** — artista (disciplina por definir: pintura / escultura / fotografía / ilustración / mixed).

## Objetivo del sitio

_Por definir tras refinar el brief recogido en la conversación de Mica con la IA._

Hipótesis inicial: portfolio + carta de presentación profesional para galerías, curadores, prensa y posibles compradores.

## Audiencia

_Por definir._ Candidatos: galeristas, curadores, coleccionistas, prensa cultural, alumnos (si da clases), público general.

## Contenido mínimo (hipótesis)

- Home con obra destacada
- Bio / statement
- Obras (por serie o cronológico)
- Exposiciones / CV
- Contacto

## Decisiones tomadas

| Fecha | Decisión | Razón |
|---|---|---|
| 2026-05-17 | Repo `micapuig-site` (público) bajo `jfdominguez1` | Nombre neutral (no se ata a "portfolio"), migrable a user-site o dominio propio cuando haga falta |

## Decisiones pendientes

- Stack (Astro vs Next estático vs HTML+CSS)
- Deploy (GitHub Pages vs Vercel)
- Dominio propio (¿comprar `micaelapuig.com` / `micapuig.com`?)
- Idioma (ES / EN / bilingüe)
- Si se transfiere el repo a una cuenta GitHub propia de Mica más adelante

## Brief recibido

**Pliego de Especificaciones Técnicas v3.0 — Mesa de Taller Trilingüe** (2026-05-17). Brief detallado con:
- Filosofía: minimalismo extremo "cubo blanco" / interfaz invisible
- Audiencia: curadores, galeristas, jurados de residencias
- Reglas de interacción no negociables: hover estático, tinte multiply, proporción nativa
- Tokens: paleta papel/tinta + acentos alizarina/ámbar/cianotipo, sans (Inter) + serif (Playfair)
- Arquitectura: header trilingüe, portada mesa de taller, modal lightbox con filtro ON/OFF
- Trilingüe ES/EN/PT con data-i18n y persistencia

## Prompt Claude Design v1

Listo y guardado en `docs/prompt-claude-design-v1-2026-05-17.md`. Defaults aplicados donde había huecos (disciplina, mix de proporciones, statement placeholder). Pendiente: pegar en claude.ai/design, iterar, exportar handoff bundle.

## Stack y deploy

**Astro 5 vanilla** (sin Tailwind, CSS hand-crafted) deployado en **GitHub Pages** via `withastro/action@v3`. URL en vivo: https://jfdominguez1.github.io/micapuig-site/. Push a `main` → redeploy automático.

## Bundle de Claude Design recibido (2026-05-17)

Mica Site.zip (52 KB) contenía 4 alternativas + master + tweaks panel + works-data.

| Alt | Nombre | Densidad | Ref. |
|---|---|---|---|
| A | Línea | 5 col | Liliana Porter |
| B | Archivo bilingüe | 4 col | Rosângela Rennó |
| C | Pliego analógico | 6 col | Pliego v3.0 catálogo |
| D | Índice editorial | 4 col + caption | Libro de artista |

**Elegida: Alt A — Línea** (la más cercana al pliego, más minimalista).

Preview de las 4 alternativas (preserva el bundle React+Babel original) accesible en:
https://jfdominguez1.github.io/micapuig-site/preview/

## Implementación Alt A en Astro estático

Porteado desde alt-a.jsx + shared-core.jsx + placeholders.jsx + works-data.js → Astro vanilla:

- `src/data/works.ts` — 20 obras placeholder + SERIES + ACCENT + COPY (statement, CV, contacto)
- `src/components/PhotoPlaceholder.astro` — 7 layouts SVG (vsoft, horizon, radial, diag, vignette, halflight, spine)
- `src/pages/index.astro` — header línea, vistas Obra/Bio/Contacto, modal lightbox, vanilla TS para interactividad
- `src/styles/global.css` — shared-base + alt-a consolidados

**Decisiones tomadas en el porteo**:
- Sin tweaks panel (decisión confirmada: era concepto de exploración, no producción)
- Acento fijo alizarina (#8d172c, rgba 0.48)
- Sin toggle ON/OFF del filtro en modal (también era concepto)
- Solo ES por ahora — EN/PT visibles en header pero inactivos (esperan traducción)
- Bio y CV con texto plausible inventado por Claude Design — Mica los reemplaza
- 20 obras placeholder con SVG generativo (sin imágenes reales aún)
- Modal con keyboard nav (← → Esc) y click fuera para cerrar

**Respeta las 3 reglas no negociables del pliego v3.0**:
- Hover estático con tinte multiply (sin scale, sin sombra)
- Proporciones nativas (4:5 / 5:4 / 1:1)
- Sin recortes forzados

## Pendiente técnico — decidir con Mica

- **`<title>` del sitio**: actualmente "Micaela Puig". Opciones: "Micaela Puig — Fotografía analógica", "Micaela Puig — Obra", o lo que quiera poner ella. Requiere confirmar su disciplina y tono antes de definir.

## Estado al 2026-05-18 (noche)

### Completado en esta sesión
- **17 imágenes reales integradas** desde `~/IA_share/+BORRAR/`: 7 Aranka + 7 Infancia + 3 Naturaleza
- Procesadas a max 1800px JPEG 85q (~4.4MB total) con corrección de orientación EXIF
- **i18n ES/EN/PT completo**: tabs, filtros, series, statement (3 párrafos por idioma), CV headers, contacto, footer, modal
- Detección automática por `navigator.language` (pt→PT, en→EN, resto→ES) + persistencia localStorage
- **Fondo**: `#faf9f6` → `#f0f0f0` (gris neutro, separa obras del fondo)

### Imagen sin identificar
- `naturaleza-sin-titulo.jpg` (ex `Adobe Photoshop 2022...jpg`) — serie no confirmada, título desconocido

### Pendiente para próxima sesión
- Metadata real de cada obra: técnica, medidas, año (actualmente todo 2024 / vacío)
- Identificar `naturaleza-sin-titulo.jpg`
- Bio y statement reales de Mica (reemplazar texto inventado)
- CV real: exposiciones, residencias, premios
- Links reales: Instagram, Are.na, dossier PDF
- `<title>` del sitio: confirmar con Mica la descripción ("Fotografía analógica", "Obra", etc.)
