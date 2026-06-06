# Reglas para asistentes de IA — micapuig-site

Portfolio de Micaela Puig. **Antes de editar, leé `README.md`** (sección "LEER ANTES DE EDITAR") y `contexto.md`.

## Reglas no negociables

1. **Textos**: todo texto visible vive en `src/data/copy.ts`, en los 3 idiomas (`es`/`en`/`pt`). NUNCA hardcodear strings en los componentes. Si agregás texto, agregalo en los 3.
2. **Colores**: usar las CSS variables de `:root` en `src/styles/global.css` (`var(--ink)`, `var(--bg)`, `var(--accent-swatch)`). En SVG inline usar `stroke="currentColor"`. NUNCA un hex hardcodeado.
3. **Datos de obra**: las obras viven en `src/data/works.ts` (array `WORKS`) y sus dimensiones en `src/data/image-dimensions.ts`. Para agregar una obra se tocan esos archivos, NO el componente.
4. **Imágenes**: antes de subir a `public/`, redimensionar a máx 1800px de lado largo y comprimir (<500KB obra, <400KB fondos). Nombres SIN espacios ni acentos (`fondo-contacto.jpg`).
5. **Nada de cruft de debug** en producción: sin números de commit, sin banners "DIAG", sin `console.log`, sin versiones en el footer.
6. **Coherencia al quitar features**: si eliminás una sección, borrá también su CSS, su JS y los `data-*` huérfanos. No dejes mitades rotas.
7. **Build verde**: después de cualquier cambio, `npm run build` debe pasar. Si no buildea, no se mergea.
8. **Diseño**: hover estático sobre las obras (solo tinte, sin scale/sombra), proporciones nativas de cada imagen (sin recortes), estética minimalista "cubo blanco".

## Stack
Astro 5 vanilla (sin React/Tailwind en prod) · CSS plano con tokens · Cloudflare Workers · output estático · deploy automático al pushear a `main` (no hay staging).

## Estructura
- `src/pages/{index,en/index,pt/index}.astro` — 3 rutas idénticas salvo `lang`
- `src/layouts/Base.astro` — `<head>`, SEO, meta, JSON-LD
- `src/components/Portfolio.astro` — todo el sitio + el `<script>` de interactividad
- `src/data/copy.ts` — textos (3 idiomas)
- `src/data/works.ts` — datos de obra + CV
- `src/styles/global.css` — tokens + todo el CSS

El backlog y los bugs conocidos están en `README.md`.
