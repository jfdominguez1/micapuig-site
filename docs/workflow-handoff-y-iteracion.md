# Workflow Claude Design ↔ Claude Code — Handoff e iteración

> Cómo pasa el diseño de Claude Design al repo, y cómo se itera después.

Fecha: 2026-05-17

---

## 1. El handoff (Claude Design → Claude Code)

### Opción A — Handoff bundle nativo *(la oficial)*

Claude Design tiene una feature explícita de **handoff bundle** que empaqueta todo (HTML + CSS + assets + intent) para pasarlo a Claude Code con una sola instrucción. Es el camino preferido.

Pasos:
1. En claude.ai/design, con el diseño v1 OK, buscar botón "Export" / "Hand off to Claude Code" / "Generate handoff bundle"
2. Si descarga archivo → ponerlo en `~/IA_share/`
3. Si copia payload → pegarlo directo en el chat con Claude Code
4. Si da un comando → ejecutarlo desde la consola

### Opción B — Export HTML standalone *(fallback robusto)*

Si la opción A no aparece clara:
1. `Export → HTML standalone`
2. Bajar el archivo, ponerlo en `~/IA_share/` (ej. `micapuig-design-v1.html`)
3. Avisar a Claude Code el nombre del archivo

### Opción C — Copy/paste manual *(último recurso)*

1. Abrir el "code view" del diseño en Claude Design
2. Copiar HTML + CSS
3. Pegar directo en el chat

---

## 2. Imágenes reales de obra

Si Mica subió fotos de obra a Claude Design, idealmente:
- Bajarlas (Claude Design las debería incluir en el bundle/export)
- Si no, descargar manual una por una
- Subirlas a `~/IA_share/micapuig-obras/` con nombres limpios (`infancia-ausentes-2024.jpg`, etc.)

Claude Code las mueve a `public/obras/` del repo y arma el JSON de metadata trilingüe.

---

## 3. Iteración post-handoff — decisión clave

### Enfoque 1 (default): Iteración en código

Para el **grueso de cambios**: pedirlos directo a Claude Code en lenguaje natural.

Ejemplos:
- "Subí 2rem el header"
- "Cambiá el acento default a cianotipo"
- "Hacé el modal 10% más chico"
- "Agregá serie nueva: Memoria"
- "Reordená el dropdown alfabéticamente"

Ciclo: edición → commit → push → GitHub Actions deploy (~30 seg) → URL actualizada.

**Por qué es mejor para el grueso**:
- Más rápido (sin abrir otra app)
- Versionado git real (rollback a cualquier estado)
- Permite cambios estructurales (lógica, no solo visual)
- Cada cambio queda como commit auditable

### Enfoque 2 (excepción): Volver a Claude Design

Para **redesigns mayores** (no ajustes), volver a claude.ai/design con el estado actual cargado, iterar ahí, exportar nuevo bundle, materializar de nuevo.

Casos típicos:
- "No me convence el tono general, probemos algo menos editorial"
- "Quiero ver una variante asimétrica tipo manifesto"
- Redesigns que afecten todas las secciones a la vez

---

## 4. Dev loop concreto

### Ver cambios en vivo (cualquier persona, sin tocar nada)

```
URL pública: https://jfdominguez1.github.io/micapuig-site/
```

### Cada cambio pedido a Claude Code

1. Edita código en `/home/jfdominguez/CLAUDE/IALAB/projects/micapuig-site/`
2. `git commit -m "..."` + `git push`
3. GitHub Actions corre deploy (~30 seg)
4. Refrescar la URL

### Preview local (Mica/JFD, sin esperar deploy)

```bash
cd /home/jfdominguez/CLAUDE/IALAB/projects/micapuig-site/
npm run dev
# http://localhost:4321 con hot reload
```

---

## 5. Qué hacer si Claude Design "ablandó" alguna regla dura

El brief v3.0 tiene 3 reglas no negociables:
1. Hover estático (sin scale, sin movimiento, sin sombra)
2. Tinte multiply (única transformación al hover)
3. Proporción nativa (sin recortes forzados)

Si la exportación de Claude Design las "suaviza" (genera CSS con scale-transform en hover, o crops a aspect-ratio fijo), Claude Code las corrige durante el porteo. Avisar siempre los detalles al recibir el bundle.

---

## 6. Sistema de localización ES/EN/PT

Claude Design probablemente sólo entrega ES (es lo que se le pide en el prompt v1). El sistema i18n con `data-i18n` + diccionario centralizado + persistencia en localStorage lo implementa Claude Code al materializar. No esperar que Claude Design entregue las 3 versiones.

Diccionario inicial sale del JSON ejemplo del brief v3.0 (sección 5). Se completa pieza por pieza al recibir el contenido real.

---

## 7. Versionado de iteraciones

Cada iteración mayor desde Claude Design queda como:
- Branch o commit etiquetado en git (`v1`, `v2`, etc.)
- Bundle/HTML original guardado en `docs/disenos/` del repo
- Anotación en `contexto.md` con fecha y qué cambió

Así si en v3 se rompe algo se puede comparar con v1/v2 directamente.
