# HANDOFF — micapuig-site

**Última sesión**: 2026-05-24
**Agente**: DevStudio
**Estado**: deployado, esperando contenido + decisiones de Mica

---

## Lo que pasó esta sesión

1. **Movido a DevStudio**: el proyecto vivía en `IALAB/projects/micapuig-site/`, lo migré a `DEVSTUDIO/projects/micapuig-site/`. Mantiene su propio git y remote, deploy GitHub Pages sigue funcionando.

2. **Recibí material de Mica vía Drive** (`~/IA_share/WEB/`): CV ES/PT real, bio corta + larga real, poema "Te veo", texto residencia Aurelia, 21 fotos de obra + 2 videos, 17 fotos de muestras pasadas.

3. **9 commits**:
   - Sprint 1 (`c38d0ea`): bio + CV reales reemplazan ficción, poema "Te veo" central, contacto SP
   - Sprint 2 (`3050d8f`): 9 obras nuevas, total 17→26
   - Sprint 3 (`49a210d`): header rediseñado (nombre hero) + sección Videos placeholder
   - `ed56afb`: link IG real
   - Sprint 4 (`53ade6a`): sección Muestras (12 entradas) + fix modal full-image + sin Are.na
   - `6a96785`: favicon MP
   - Sprint 5 (`837f984`): SEO Capa 1 completa + refactor i18n indexable
   - `8d3b561`: doc de estado en repo + Drive

---

## Decisiones tomadas

- **Estructura i18n**: 3 páginas estáticas separadas (`/`, `/en/`, `/pt/`) en lugar de toggle JS. Cada idioma indexable por Google como página independiente. Toggle de idioma ahora redirige a URL en lugar de re-renderizar.
- **Componente compartido `Portfolio.astro`** parametrizado por `lang`. Las 3 páginas son triviales (4 líneas cada una).
- **Refactor de datos**: `copy.ts` (UI strings multilingües) separado de `works.ts` (data layer puro). El CV se mantiene como nombres propios sin traducir; solo los labels se traducen.
- **Dominio `micaelapuig.com`** comprado pero no migrado. `astro.config.mjs` tiene comentario con qué cambiar cuando se migre. Mientras tanto vive en `jfdominguez1.github.io/micapuig-site/`.
- **Reemplazos de obras**: dejé las 26 conviviendo. No borré las viejas porque no podía decidir sin verlas yo (díptico nuevo vs 2 individuales viejos, hermanas unificada vs I/II, díptico Aurelia vs xilo). Pendiente del ojo de Mica.
- **Videos**: solo placeholders. No subí los videos al repo (uno pesa 2.1 GB). Pendiente decidir Vimeo o YouTube.
- **OG image**: generada con PIL desde el díptico blanco/rojo + texto serif superpuesto. 207 KB.
- **JSON-LD Person schema**: con `birthDate: 1976`, `address: SP`, `sameAs: IG`, `jobTitle` traducido por idioma. Le da a Google entity context para knowledge panel.
- **Poema "Te veo"**: solo en español en las 3 versiones del sitio (es la voz propia de Mica, no se traduce).

---

## Lo que quedó pendiente

### Contenido (lo da Mica)

- **Metadata por obra**: técnica + medidas + año real. Hoy todas dicen "2024" con `technique` y `dimensions` vacíos. El modal muestra líneas vacías por esto.
- **`naturaleza-sin-titulo.jpg`**: confirmar si es la misma foto que la nueva `naturaleza-hoja.jpg`. Si sí, borrar la duplicada.
- **Reemplazos de obras** (decidir cuál de cada par dejar):
  - Díptico "Blanco y rojo" vs los 2 individuales "Diálogo en blanco" + "Diálogo en rojo"
  - "Hermanas" unificada vs "Hermanas I" + "Hermanas II"
  - "Díptico Aurelia Aranka" vs "Aurelia Aranka xilo"
- **PDF del dossier** para que el botón "Descargar dossier" funcione
- **Confirmar mail** (hoy `estudio@micaelapuig.com`)
- **Hosting de videos**: Vimeo (~€10/mes sin ads, mejor para portfolio) o YouTube (gratis con ads)
- **Bio + statement EN reales** (hoy la traducción al inglés es mía, queda más fuerte que la haga Mica)

### Técnico (lo hago yo cuando se decida)

- **Migración a `micaelapuig.com`**: pasos exactos en `docs/seo-plan.md` y `docs/estado-2026-05-24.md`. Cambio en `astro.config.mjs` + `public/CNAME` + DNS A records → GitHub Pages IPs + GitHub Pages custom domain settings.
- **SEO Capa 2** (lo arranca Mica/JFD, no requiere código):
  - Verificar `micaelapuig.com` en Google Search Console + submit sitemap
  - Backlinks: pedir a Move Arte, Alê, Kentler que linkeen el sitio
  - Agregar link al sitio en bio de Instagram `@micapuig`
  - Decidir analytics: Plausible Cloud (€9/mes sin cookies/banner) vs GA4 (gratis con banner GDPR)
- **SEO Capa 3** (constante, largo plazo): Are.na, Artsy, Behance, prensa con cada nota nueva
- **Cleanup**: borrar `public/preview/` (216 KB de mockups exploratorios de Claude Design que ya no se usan)
- **WebP**: convertir imágenes (~30% menos peso, soporte universal hoy)

---

## Cosas que intenté y no funcionaron / decisiones a futuro

- **Submodule formal**: `projects/micapuig-site/` está como directorio con `.git` propio dentro de DEVSTUDIO. Para registrarlo formalmente como submodule de DEVSTUDIO, agregar a `.gitmodules` con `git submodule add`. Lo dejé para después porque DEVSTUDIO tiene otros sub-repos en `projects/` (manila-hub/v2 ya es submodule) y conviene seguir la misma convención. **Ver paso al final si no se hizo en este cierre**.
- **Aspect ratios del modal**: el sistema viejo categorizaba en vertical/horizontal/square y forzaba aspect-ratio del sheet → recortaba o agregaba bandas. Lo arreglé sacando el aspect categórico y usando max-width/max-height con la imagen `object-fit: contain` a ratio nativo. Eso resolvió "obras cortadas o con menos espacio" que reportó Mica.

---

## Cómo continuar

```bash
cd /home/jfdominguez/CLAUDE/DEVSTUDIO/projects/micapuig-site/

# Ver estado
git status
git log --oneline -10

# Local dev con hot reload
npm run dev  # http://localhost:4321/micapuig-site/

# Build de prod
npm run build  # genera dist/

# Deploy: push a main, GitHub Actions hace lo demás
git push origin main
```

URLs:
- Live ES: https://jfdominguez1.github.io/micapuig-site/
- Live EN: https://jfdominguez1.github.io/micapuig-site/en/
- Live PT: https://jfdominguez1.github.io/micapuig-site/pt/
- Sitemap: https://jfdominguez1.github.io/micapuig-site/sitemap-index.xml
- Repo: https://github.com/jfdominguez1/micapuig-site

Material fuente vivo: `~/IA_share/WEB/` (Drive compartido por Mica).

Docs largos:
- `docs/seo-plan.md` — plan SEO completo Capa 1/2/3 + migración dominio
- `docs/estado-2026-05-24.md` — estado de avance (dos capas: para Mica y técnico)
- `contexto.md` — historial de decisiones desde el inicio del proyecto
