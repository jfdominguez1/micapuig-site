# HANDOFF — micapuig-site

**Última sesión**: 2026-06-10
**Agente**: DevStudio
**Estado**: live en https://micaelapuig.com (Cloudflare Workers, auto-deploy desde GitHub `main`). Set de obra definitivo. SEO Capa 2 mayormente cerrada.

---

## Goal
Portfolio de Micaela Puig (artista visual / grabadora, São Paulo). Sitio Astro 5 vanilla, trilingüe ES/EN/PT, mobile-first. Objetivo actual: contenido definitivo + SEO para que curadores/galeristas la encuentren.

## Arquitectura (sin cambios)
- **Stack**: Astro 5 + adapter Cloudflare. Deploy automático en cada push a `main`.
- **Datos**: `src/data/works.ts` (obra + CV) · `src/data/copy.ts` (UI strings + textos por idioma) · `src/data/image-dimensions.ts` (px de cada foto, para CLS).
- **UI**: `src/components/Portfolio.astro` (parametrizado por `lang`) · `src/layouts/Base.astro` (head/SEO/JSON-LD). Las 3 páginas (`/`, `/en/`, `/pt/`) son triviales (4 líneas).
- Submodule git dentro de DEVSTUDIO. **Al commitear, bumpear DEVSTUDIO y la raíz `claude-config`.**

---

## Lo que se hizo esta sesión (2026-06-10)

1. **Set definitivo de 18 obras** (reemplazó las 26 anteriores). Fuente: `~/IA_share/Fotos WEB/` + `Info cuadros web.xlsx` (metadata de Mica). Cada obra ahora tiene **título + técnica + medidas + año** (antes técnica/medidas vacías). 15 se mantuvieron, 3 nuevas (Burbuja, Simbiosis, Sos un seis), 11 eliminadas.
2. **Grilla plana — se eliminó el concepto de series** (Aranka/Infancia/Naturaleza). Mica no asignó colección. Se limpió todo el código muerto asociado (`data-series`, `setSeries`, modal serie, poem-callout, campos `series`/`allLabel`/`poemContext` en copy.ts quedaron sin uso).
3. **Imágenes optimizadas**: 63MB → **4.9MB** (máx 2000px, JPEG q82, EXIF aplicado). `burbuja.png`→`burbuja.jpg`. Originales intactos en IA_share.
4. **SEO i18n fix** (commit `d873048`): `keywords` + `og:image:alt` movidos a `copy.ts` (por idioma). Se eliminó el `og:image:alt` obsoleto que mencionaba la "serie Aranka".
5. **Cloudflare Web Analytics**: activo (auto, sin código, por estar el sitio proxied). Core Web Vitals 100% Good (LCP P75 1,9s). Decisión: descartado Plausible/GA4.
6. **Google Search Console**: propiedad Dominio verificada (auto vía integración Cloudflare) + sitemap enviado + indexación solicitada.
7. **Bio Instagram**: Mica agregó `micaelapuig.com` en @micapuig.
8. **Inventario de traducción**: `docs/inventario-traduccion-micapuig-2026-06-10.pdf` (+ copia en IA_share) con qué falta traducir y recomendaciones.

## What worked
- Mapear imágenes nuevas a slugs limpios y reescribir `works.ts` de cero (en vez de matchear slugs viejos).
- Optimizar con PIL + `ImageOps.exif_transpose` antes de servir. Validar aspectos contra ratio de píxeles real.
- Verificar deploy con `until curl ... grep` contra micaelapuig.com tras cada push.

## What didn't work / ojo
- `astro check` quiere instalar `@astrojs/check` (prompt interactivo) → no corre headless. El `npm run build` ya valida los entrypoints, alcanza.
- `/schedule` (recordatorio en la nube) falló: claude.ai desconectado el 2026-06-10. **Fallback**: recordatorio anclado en `docs/hilos-activos.md` (se relee al inicio de sesión). **Reintentar /schedule.**
- En GSC propiedad tipo Dominio, el sitemap requiere la **URL completa** (`https://micaelapuig.com/sitemap-index.xml`), no la ruta relativa.

---

## Next steps

### Pendiente Mica (contenido de autora — decisiones en el PDF de inventario)
- **Decisión 1**: ¿traducir las 18 **técnicas** a EN/PT? (recomendado: sí, DevStudio las genera + Mica valida).
- **Decisión 2-4**: títulos, poema "Te veo", texto "Aurélia" → recomendación: dejar en idioma original. Definir con Mica.
- **Bio + statement reales en EN/PT** (hoy son traducciones nuestras).
- **Años faltantes**: "Hermanas" y "La cueva" no tienen año en el Excel.
- **Backlinks** (#3 Capa 2): mail a Alê / Kentler / ISSA / Move pidiendo link.

### Monitoreo SEO (recordatorio semanal en hilos-activos, próximo: 2026-06-17)
- **Google Search Console** → Inspección de URLs de `/`, `/en/`, `/pt/` (¿"La URL está en Google"?). La indexación tarda 3-7 días.
- **Cloudflare Web Analytics** → visitas, países, Referrers (¿tráfico de Instagram?).

### Técnico (DevStudio, cuando se decida)
- Para traducir título/técnica: cambiar esos campos en `works.ts` de `string` a `{ es; en; pt }` y que `Portfolio.astro` use `w.technique[lang]`. Cambio acotado, sin tocar render.
- WebP con `<picture>` (menos urgente: ya optimizadas, LCP "Good").
- Limpiar `public/preview/` (mockups viejos sin uso).
- Brevo SMTP partes 5-7 (para ENVIAR desde `mp@micaelapuig.com`; hoy solo forwarding).

---

## Cómo continuar
```bash
cd /home/jfdominguez/CLAUDE/DEVSTUDIO/projects/micapuig-site/
git fetch && git status        # Mica pushea desde Firebase Studio → fetch SIEMPRE antes de tocar
npm run dev                    # local
npm run build                  # prod (valida tipos)
git push origin main           # deploy auto vía Cloudflare; luego bumpear DEVSTUDIO + raíz
```
- Live: https://micaelapuig.com · /en/ · /pt/ · /sitemap-index.xml
- Repo: https://github.com/jfdominguez1/micapuig-site
- Docs: `docs/seo-plan.md` · `docs/inventario-traduccion-micapuig-2026-06-10.pdf` · `../../docs/hilos-activos.md`
- Fuente de imágenes definitivas: `~/IA_share/Fotos WEB/`
