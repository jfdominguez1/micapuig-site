# Plan SEO — micapuig-site

Fecha actualización: 2026-06-10
Estado: **Capa 1 ✅ — Capa 2 en curso (GSC + Analytics + metadata + bio IG ✅; faltan backlinks + bio EN/PT)**
Dominio live: https://micaelapuig.com (Cloudflare Workers, auto-deploy desde GitHub)

---

## Objetivos

1. **Búsqueda por nombre**: que "Micaela Puig" en Google lleve directo al sitio (curadores, galeristas, jurados).
2. **Compartir limpio**: que el link en WhatsApp/IG/mail muestre preview con imagen.
3. **Búsqueda en portugués**: priorizar audiencia local de São Paulo (Move, Alê, etc.).
4. **Google Images**: que las obras aparezcan al buscar "grabado contemporáneo São Paulo" y similares.

---

## 🟢 Capa 1 — En código ✅ COMPLETA

- [x] `<title>` parametrizado por idioma con keywords: "Micaela Puig — Artista visual y grabadora · São Paulo"
- [x] Meta description multilingüe (ES/EN/PT) descriptiva y con keywords
- [x] Open Graph image (1200×630 .jpg) generada
- [x] Twitter card con la misma OG image
- [x] JSON-LD `Person` schema en el `<head>`
- [x] `sitemap.xml` automático con `@astrojs/sitemap`
- [x] `robots.txt` apuntando al sitemap
- [x] `alt` text enriquecido: "Hermanas — serie Aranka, Micaela Puig (2024)"
- [x] `width` + `height` en `<img>` para Core Web Vitals (CLS)
- [x] i18n indexable (`/`, `/en/`, `/pt/`) con Astro i18n routing
- [x] `hreflang` tags entre versiones
- [x] `canonical` por página
- [x] Country redirect vía CF-IPCountry header (BR/PT→/pt/, resto→/en/)

## 🟡 Capa 2 — Lo hace Mica / vos (próximas semanas)

- [x] **Google Search Console** ✅ 2026-06-10: propiedad tipo Dominio verificada (auto vía integración Cloudflare, TXT `google-site-verification=G40sH96…`) + sitemap enviado (`https://micaelapuig.com/sitemap-index.xml`, 3 URLs) + indexación solicitada. **Indexación efectiva: revisar a los ~3-7 días** (Inspección de URLs → "La URL está en Google").
- [x] **Bio Instagram** ✅ 2026-06-10: Mica agregó `micaelapuig.com` en la bio de @micapuig. Verificar tráfico en Cloudflare Analytics → Referrers.
- [ ] **Backlinks institucionales**: mail a Alê Espacio de Arte, Kentler International Drawing Space (Brooklyn), ISSA — pedir que la listan con link
- [ ] **Move Arte**: si tienen directorio de artistas, pedir inclusión
- [ ] Bio + statement reales en EN y PT (hoy son traducciones nuestras) — **pendiente Mica** (ver inventario de traducción `docs/inventario-traduccion-micapuig-2026-06-10.pdf`, decisión 4)
- [x] Metadata por obra: técnica + medidas + año ✅ 2026-06-10 (set definitivo 18 obras, datos del Excel de Mica en `works.ts`). Falta traducción técnica EN/PT (ver inventario, decisión 1).
- [x] Analytics ✅ 2026-06-10: **Cloudflare Web Analytics** (gratis, sin cookies, sin banner; ya activo por estar el sitio proxied). Descartado Plausible/GA4. Core Web Vitals 100% Good (LCP P75 1,9s).

## 🔴 Capa 3 — Largo plazo (constante)

- [ ] **Are.na**: crear perfil con link al portfolio (bien visto en mundo del arte contemporáneo)
- [ ] **Artsy**: crear perfil de artista (gratis, alta visibilidad en coleccionistas)
- [ ] **Behance**: si tiene cuenta, agregar link

### ❓ A definir con Mica

- [ ] **LinkedIn**: ¿tiene perfil o quiere crear uno? Artistas visuales lo usan cada vez más para curadores/galeristas internacionales. Un perfil completo con link al portfolio + lista de exposiciones es un backlink fuerte y aparece en búsquedas de nombre.

- [ ] **Wikipedia**: ¿ya hay cobertura en prensa/catálogos editados que justifique una entrada? Wikipedia requiere "notabilidad verificable" (artículos en medios, catálogos de instituciones). Si hay material publicado (Kentler, Bienal REA, notas en prensa), podría calificar. Una entrada de Wikipedia es el backlink con mayor impacto SEO posible para un artista. Revisar qué publicaciones existen antes de intentarlo.

## 🔵 Técnico pendiente

- [~] WebP: las 18 obras se optimizaron a máx 2000px / JPEG q82 (63MB→4.9MB, 2026-06-10). WebP con `<picture>` fallback queda como mejora futura (menos urgente ahora que LCP P75=1,9s "Good").
- [ ] Limpiar `public/preview/` legacy (~216KB no usados)
- [ ] PDF dossier para el botón de descarga en Contacto

---

---

## Métricas para revisar a los 90 días

- Posición en Google para "Micaela Puig" (debería ser #1)
- Posición para "artista grabado São Paulo", "Micaela Puig gravadora"
- Impresiones e clicks en Search Console
- Páginas indexadas (debería ser 3+: ES, EN, PT mínimo)
- Backlinks desde sites institucionales (Search Console > Links)
