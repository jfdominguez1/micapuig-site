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

---

## Estado al 2026-05-24 (sesión grande — 9 commits)

### Movido a DevStudio
- Proyecto migrado de `IALAB/projects/micapuig-site` → `DEVSTUDIO/projects/micapuig-site`. Ahora es proyecto de desarrollo formal de DevStudio.

### Material recibido de Mica
- Carpeta de Drive `~/IA_share/WEB/` (compartida por Mica): CV ES/PT, "Sobre Micaela Puig", "Sobre:About", "Textos" (poema "Te veo" + texto Aurelia), 21 fotos de obra + 2 videos, 17 fotos de muestras y otros.

### Sprints ejecutados
- **Sprint 1** (`c38d0ea`): Bio + CV reales (reemplazado texto inventado), poema "Te veo" central + callout en serie Aranka, contacto SP, dead code limpiado.
- **Sprint 2** (`3050d8f`): 9 obras nuevas procesadas a 1800px/85q. Total 17 → 26 obras.
- **Sprint 3** (`49a210d`): Header rediseñado (nombre hero Playfair 34px), sección Videos placeholder.
- Patch (`ed56afb`): link real de IG `@micapuig`.
- **Sprint 4** (`53ade6a`): sección Muestras (12 entradas, 17 fotos a 1400px/85q), fix modal full-image, sin Are.na.
- Patch (`6a96785`): favicon "MP" serif italic.
- **Sprint 5** (`837f984`): SEO Capa 1 completa — i18n indexable (`/`, `/en/`, `/pt/`), title con keywords, meta description multilingüe, OG image 1200×630 generada, JSON-LD Person schema, sitemap.xml automático con cross-hreflang, robots.txt, alt text rico, width/height en imágenes (CLS), H1 SEO oculto, toggle de idioma vía URL en lugar de JS re-render.
- Patch (`8d3b561`): doc de estado en repo + Drive.

### Refactor estructural (Sprint 5)
- `src/data/copy.ts`: strings UI multilingües centralizados
- `src/data/works.ts`: data layer puro (sin palette/layout/LayoutId que eran dead code)
- `src/components/Portfolio.astro`: componente parametrizado por `lang`
- 3 páginas estáticas: `pages/{index, en/index, pt/index}.astro`

### Pendiente próxima sesión
**Contenido (Mica)**:
- Metadata real por obra (técnica, medidas, año)
- Confirmar `naturaleza-sin-titulo.jpg` vs `naturaleza-hoja.jpg` (¿borrar duplicada?)
- Reemplazos: díptico blanco/rojo vs los 2 individuales "Diálogo", hermanas unificada vs Hermanas I/II, díptico Aurelia vs Aurelia xilo
- PDF del dossier para botón "Descargar dossier"
- Confirmar mail `estudio@micaelapuig.com`
- Decidir hosting de videos (Vimeo €10/mes sin ads vs YouTube gratis con ads)
- Bio + statement EN reales (hoy traducción mía)

**Técnico**:
- Migración a `micaelapuig.com` (pasos exactos en `seo-plan.md` + `estado-2026-05-24.md`)
- SEO Capa 2: Search Console, backlinks (Move, Alê, Kentler), bio IG con link
- SEO Capa 3 (largo plazo): Are.na, Artsy, Behance, prensa
- Limpiar `public/preview/` (216 KB de mockups históricos)
- WebP (~30% reducción de peso)

### Docs nuevos
- `docs/seo-plan.md` — plan SEO completo Capa 1/2/3 + pasos migración dominio
- `docs/estado-2026-05-24.md` — cierre de sesión (capa Mica + capa técnica)
- Copias en `~/IA_share/WEB/` (Drive de Mica): `Avance sitio web - 2026-05-24.md` + `Plan SEO - 2026-05-24.md`
