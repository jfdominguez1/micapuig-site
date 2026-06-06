# Micaela Puig — Sitio

Portfolio web de **Micaela Puig**, artista visual y grabadora (Argentina, 1976 · radicada en São Paulo).
Sitio de una sola página, trilingüe (ES/EN/PT), minimalista. **En producción: https://micaelapuig.com**

---

## 🚨 LEER ANTES DE EDITAR (vos, IA o persona)

Este sitio lo edita más de una persona/herramienta (DevStudio + Mica desde Firebase Studio).
Para no romper la arquitectura, respetá estas reglas **siempre**:

1. **NO hardcodear strings de texto en los componentes.** Todo texto visible vive en `src/data/copy.ts`, traducido en los 3 idiomas. Si agregás un texto, agregalo en `es`, `en` y `pt`.
2. **NO hardcodear colores.** Usá las CSS variables de `:root` en `src/styles/global.css` (`var(--ink)`, `var(--bg)`, `var(--accent-swatch)`, etc.). En SVG inline usá `stroke="currentColor"`, no un hex.
3. **NO subir imágenes pesadas.** Antes de subir, redimensionar a máx **1800px** de lado largo y comprimir a **<500KB** (las fotos de obra) o **<400KB** (fondos). Nombres de archivo **sin espacios ni acentos** (`fondo-contacto.jpg`, no `fondo contacto.jpg`).
4. **NO dejar cruft de debug.** Nada de números de commit, banners "DIAG", `console.log`, ni versiones visibles en el footer o el HTML de producción.
5. **NO borrar data sin entender el acoplamiento.** Si quitás una sección (ej. el filtro de series), borrá también su CSS, su JS y los `data-*` que quedan huérfanos. Dejar mitades rotas genera bugs silenciosos (ver "Gotchas").
6. **Después de cualquier cambio: `npm run build` tiene que pasar en verde.** Si no buildea local, no se mergea.
7. **Las 3 reglas no negociables del diseño** (del pliego original): hover **estático** sobre las obras (sin scale, sin sombra; solo tinte multiply), **proporciones nativas** de cada imagen (4:5 / 5:4 / 1:1, sin recortes forzados), y **interfaz invisible** (cubo blanco, sin decoración que compita con la obra).

> Cualquier push va **directo a `main` → deploy automático en producción**. No hay staging. Pensá dos veces antes de pushear.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | **Astro 5** vanilla (sin React/Tailwind en producción; CSS hand-crafted) |
| Estilos | CSS plano con design tokens en `:root` (`global.css`) |
| Tipografía | Nunito Sans (Google Fonts) |
| Hosting | **Cloudflare Workers** (Static Assets) vía `@astrojs/cloudflare` |
| Dominio | `micaelapuig.com` (DNS + email routing en Cloudflare) |
| CI/CD | Push a `main` → build + deploy automático en Cloudflare |

Output **estático** (todas las páginas se prerenderan; no hay SSR). El adapter de Cloudflare genera `dist/_worker.js` que sirve los assets.

---

## Cómo correr

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:4321)
npm run build    # build de producción → dist/  (SIEMPRE correr antes de pushear)
npm run preview  # build + wrangler dev (simula Cloudflare local)
npm run deploy   # build + wrangler deploy (deploy manual; normalmente NO hace falta, main auto-deploya)
```

Mica trabaja desde **Firebase Studio (Project IDX)** — config en `.idx/dev.nix`.

---

## Arquitectura

```
src/
├── pages/
│   ├── index.astro        # raíz ES  (/)        → renderiza <Base lang="es"> + <Portfolio lang="es">
│   ├── en/index.astro     # inglés   (/en/)
│   └── pt/index.astro     # portugués (/pt/)
│       └─ las 3 páginas son idénticas salvo el lang; NO duplicar lógica acá
├── layouts/
│   └── Base.astro         # <head> completo: SEO, meta, OG, hreflang, JSON-LD Person, fuentes
├── components/
│   └── Portfolio.astro    # TODO el sitio: header, grilla de obra, bio/CV, textos, contacto,
│                          # modal lightbox + el <script> con toda la interactividad (vanilla TS)
├── data/
│   ├── copy.ts            # ⭐ FUENTE DE TEXTOS — UI strings, bio/statement, CV labels, poema,
│   │                      #   texto Aurélia — los 3 idiomas (COPY.es / .en / .pt)
│   ├── works.ts           # ⭐ FUENTE DE DATOS — WORKS (26 obras: id, título, serie, año,
│   │                      #   técnica, medidas, aspecto, imagen) + CV_DATA + SERIES
│   └── image-dimensions.ts# width/height de cada imagen (evita layout shift / CLS). Generado.
└── styles/
    └── global.css         # design tokens (:root) + TODO el CSS del sitio

public/
├── images/        # 26 fotos de obra (las que se muestran en la grilla)
├── exhibitions/   # ⚠️ sin uso actual (se quitó la sección Muestras) — pendiente de borrar
├── preview/       # ⚠️ mockups históricos — pendiente de borrar
├── og-image.jpg   # imagen para compartir en redes (1200×630)
├── favicon.svg
└── robots.txt
```

**Regla de oro de la arquitectura**: el contenido (textos en `copy.ts`, datos en `works.ts`) está **separado** de la presentación (`Portfolio.astro`, `global.css`). Para cambiar un texto o agregar una obra, tocás los archivos de `data/`, **no** el componente.

### Cómo agregar una obra
1. Subir la foto optimizada a `public/images/` (máx 1800px, <500KB, nombre sin espacios).
2. Agregar la dimensión en `src/data/image-dimensions.ts`.
3. Agregar el objeto a `WORKS` en `src/data/works.ts` (con `series`, `aspect`, `title`, etc.).
4. `npm run build` y verificar.

### Cómo cambiar un texto / la bio
Editar `src/data/copy.ts` — y hacerlo en los **3 idiomas** (`es`, `en`, `pt`). El componente lee `COPY[lang]`.

---

## i18n y detección de idioma

- 3 rutas estáticas indexables: `/` (ES, default), `/en/`, `/pt/`. Cada una tiene su `<link hreflang>` y canonical (SEO).
- El selector ES·EN·PT del header son links normales (cambian de ruta, persisten la elección en `localStorage` con la clave `mica-lang`).
- **Redirección automática** (en `Portfolio.astro`, función `maybeRedirect()`): en la **primera visita a la raíz** `/`, si el idioma del navegador (`navigator.language`) es PT o EN, redirige a `/pt/` o `/en/`. Es **client-side** (corre en el browser). Si ya eligió idioma antes, no redirige.
  - ⚠️ No existe redirección server-side por país (se intentó con `functions/_middleware.js` pero era convención de Cloudflare *Pages* y el deploy es *Workers* → no corría; se eliminó). Si en el futuro se quiere detección por país real, hay que pasar la raíz a SSR + Astro middleware (`src/middleware.ts`).

---

## Gotchas conocidos (bugs / deuda)

- **🐛 #3 — el modal muestra el ID crudo de la serie.** Al quitarse el filtro de series, la función JS `seriesLabel()` (en `Portfolio.astro`) quedó leyendo un nodo que ya no existe y devuelve el id pelado ("aranka", "infancia") sin traducir. **Fix**: agregar `data-series-label={seriesLabel[w.series]}` a la celda en el template y que el JS lea `cell.dataset.seriesLabel`. Luego borrar la función `seriesLabel()` JS y el dead code de `setSeries()` / listeners `.a-works__sub`. Detalle completo en `contexto.md`.
- **El callout del poema "Te veo"** (`#poem-callout`) dependía del filtro Aranka eliminado → ya no aparece. El poema sigue accesible en la sección Textos.
- `image-dimensions.ts` dice "generado por script" pero el script no está versionado en este repo — al agregar imágenes, completar la dimensión a mano (`width`×`height` reales del archivo).

---

## Backlog / pendientes

Prioridad: `!!!` urgente · `!!` importante · `!` normal · `-` algún día

### Contenido (depende de Mica)
- [ ] !! Metadata real por obra: **técnica, medidas, año** (hoy casi todo `2024` y vacío en `works.ts`)
- [ ] !! Bio + statement **EN/PT** revisados por Mica (hoy traducción nuestra)
- [ ] ! PDF del **dossier** para botón "Descargar dossier"
- [ ] ! Definir fotos finales (duplicados a depurar: `naturaleza-sin-titulo.jpg` vs `naturaleza-hoja.jpg`; díptico blanco/rojo vs individuales; Hermanas unificada vs I/II; Aurelia díptico vs xilo)

### Código / técnico
- [ ] 🟡 **#3** Modal muestra ID crudo de serie — ver "Gotchas" (incluye limpiar dead code del filtro + callout del poema #4)
- [ ] ! **Renombrar `public/images/fondo contacto.jpg` → `fondo-contacto.jpg`** (sacar el espacio del nombre) + actualizar la ref en `Portfolio.astro`
- [ ] ! **Borrar `public/exhibitions/`** (2.8MB sin uso desde que se quitó Muestras) y `public/preview/` (mockups históricos)
- [ ] ! **WebP** para las imágenes de obra (~30% menos peso vs JPEG)
- [ ] - Si vuelven las secciones Muestras/Videos, recuperar `EXHIBITIONS`/`VIDEOS` de git history (commit previo a `f82861b`)

### SEO (Capa 2 — pendiente)
- [ ] !! Alta en **Google Search Console** + verificar propiedad + enviar sitemap
- [ ] !! Link al sitio en la **bio de Instagram** de Mica
- [ ] ! Primer **backlink externo** (Alê / ISSA / Kentler / Move)
- [ ] - Capa 3: Are.na, Artsy, Behance, prensa cultural

### Email (dominio)
- [ ] ! Configurar **Brevo SMTP** para poder *enviar* desde `mp@micaelapuig.com` (hoy solo recibe; forwarding a Gmail OK). Partes 5-7 de `docs/guia-dominio-email-cloudflare.md`

### Hechas recientemente (2026-06-05)
- [x] Footer: sacado el hash de commit que quedaba visible en producción
- [x] `fondo contacto.jpg`: 4.3MB → 381KB (−91%)
- [x] #9: eliminado el middleware muerto (`functions/_middleware.js`)
- [x] Limpieza de dead data/code: `EXHIBITIONS`/`VIDEOS`/`ACCENT`, imports y `data-*` sin usar
- [x] Calidad: `bioTitle` vacío no renderiza `<h2>` hueco; SVG con `currentColor`

---

## Documentación adicional

| Doc | Qué tiene |
|---|---|
| `contexto.md` | Brief, decisiones de diseño, historial de sesiones, detalle técnico de bugs |
| `docs/seo-plan.md` | Plan SEO Capa 1/2/3 + pasos de migración de dominio |
| `docs/guia-dominio-email-cloudflare.md` | Cómo se configuró dominio + email; partes pendientes (Brevo) |
| `docs/guia-colaboracion-mica.md` | Flujo de colaboración pensado para Mica (GitHub Issues) |
| `docs/estado-2026-05-24.md` | Cierre de la sesión grande de mayo |

---

## Convención de versionado / colaboración

- Repo: `jfdominguez1/micapuig-site` (público). Rama de producción: **`main`**.
- DevStudio (desarrollo) y Mica (Firebase Studio) pushean a `main`. **Hacer `git fetch` antes de empezar** para no pisar cambios del otro.
- Commits descriptivos: qué se hizo y por qué.
