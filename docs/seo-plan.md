# Plan SEO — micapuig-site

Fecha: 2026-05-24
Estado: Capa 1 en ejecución (Sprint 5)
Dominio actual: jfdominguez1.github.io/micapuig-site/
Dominio destino: micaelapuig.com (comprado, pendiente migrar DNS)

---

## Objetivos

1. **Búsqueda por nombre**: que "Micaela Puig" en Google lleve directo al sitio (curadores, galeristas, jurados).
2. **Compartir limpio**: que el link en WhatsApp/IG/mail muestre preview con imagen.
3. **Búsqueda en portugués**: priorizar audiencia local de São Paulo (Move, Alê, etc.).
4. **Google Images**: que las obras aparezcan al buscar "grabado contemporáneo São Paulo" y similares.

---

## 🟢 Capa 1 — En código (Sprint 5)

Implementado en esta sesión:

- [ ] `<title>` parametrizado por idioma con keywords: "Micaela Puig — Artista visual y grabadora · São Paulo"
- [ ] Meta description multilingüe (ES/EN/PT) descriptiva y con keywords
- [ ] Open Graph image (1200×630 .jpg) generada
- [ ] Twitter card con la misma OG image
- [ ] JSON-LD `Person` schema en el `<head>`
- [ ] `sitemap.xml` automático con `@astrojs/sitemap`
- [ ] `robots.txt` apuntando al sitemap
- [ ] `alt` text enriquecido: "Hermanas — serie Aranka, Micaela Puig (2024)"
- [ ] `width` + `height` en `<img>` para Core Web Vitals (CLS)
- [ ] i18n indexable (`/`, `/en/`, `/pt/`) con Astro i18n routing
- [ ] `hreflang` tags entre versiones
- [ ] `canonical` por página

## 🟡 Capa 2 — Lo hace Mica / vos (1-2h, después)

- [ ] Verificar `micaelapuig.com` en Google Search Console
- [ ] Submit `sitemap.xml` desde Search Console
- [ ] Link al sitio en bio de Instagram (@micapuig)
- [ ] Pedir backlinks a Move Arte, Alê Espacio de Arte, Kentler (mail al curador con el link)
- [ ] Bio + statement reales en EN (hoy los traduje yo, mejor texto propio)
- [ ] Metadata por obra: técnica + medidas + año real (hoy todo 2024 / vacío)
- [ ] Decidir analytics: Plausible Cloud (€9/mes, sin cookies) o GA4 (gratis, con cookies + banner)

## 🔴 Capa 3 — Largo plazo (constante)

- [ ] Crear perfiles con link al sitio: Are.na, Artsy, Behance, Linktree
- [ ] Cada nota de prensa o catálogo nuevo → linkear al sitio
- [ ] Si hay coverage en prensa → página de Wikipedia

---

## Migración a `micaelapuig.com` (paso aparte cuando se decida)

1. Cambiar `astro.config.mjs`:
   - `site: 'https://micaelapuig.com'`
   - Quitar `base: '/micapuig-site'`
2. Crear `public/CNAME` con contenido `micaelapuig.com`
3. En GoDaddy/Namecheap (donde se compró):
   - 4 registros A apuntando a IPs de GitHub Pages: `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`
   - 1 registro CNAME para `www` → `jfdominguez1.github.io`
4. En GitHub repo settings → Pages → Custom domain → `micaelapuig.com` + enforce HTTPS
5. Esperar propagación DNS (5 min — 2 h)
6. Verificar SSL activo
7. GitHub Pages automáticamente sirve redirect 301 desde `jfdominguez1.github.io/micapuig-site/*` → no se rompen links viejos

**Nota**: ejecutar la migración **antes** de difundir el nuevo dominio. Google penaliza redirects masivos pero respeta 301 hechos correctamente.

---

## Métricas para revisar a los 90 días

- Posición en Google para "Micaela Puig" (debería ser #1)
- Posición para "artista grabado São Paulo", "Micaela Puig gravadora"
- Impresiones e clicks en Search Console
- Páginas indexadas (debería ser 3+: ES, EN, PT mínimo)
- Backlinks desde sites institucionales (Search Console > Links)
