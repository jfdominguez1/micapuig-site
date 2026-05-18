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

## Próximos pasos

1. Mica/JFD pegan prompt v1 en claude.ai/design
2. Iterar v1 con knobs y comentarios inline (portada → modal → bio)
3. Exportar handoff bundle → pasarme acá
4. Materializar en Astro:
   - Tailwind se evalúa cuando llegue el bundle (si el diseño usa muchas utilities, conviene)
   - Implementar i18n ES/EN/PT (sistema data-i18n + localStorage)
   - Schema JSON trilingüe de obras
   - Lazy loading + WebP/AVIF
5. Commit + push → redeploy automático
