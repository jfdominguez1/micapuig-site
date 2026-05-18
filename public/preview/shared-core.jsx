// Core compartido entre alternativas A / B / C / D.
// Expone: COPY (texto ES), useGallery() para estado, <Modal/> para lightbox.
// La PhotoPlaceholder y WORKS/SERIES/ACCENTS vienen de works-data.js + placeholders.jsx.

const { useState, useEffect, useMemo, useCallback } = React;

window.MICA_COPY = {
  ES: {
    tabs: { works: "Obra", bio: "Bio", contact: "Contacto" },
    tabsEN: { works: "Work", bio: "Bio", contact: "Contact" }, // para Alt B (bilingüe)
    filtersTitle: "Series",
    allLabel: "Todas",
    accentLabel: "Acento",
    filterOn: "Filtro · ON",
    filterOff: "Filtro · OFF",
    bioTitle: "Statement",
    cvTitle: "Currículum",
    sectionCount: (n) => `${String(n).padStart(2,"0")} piezas`,
    yearRange: "2021 – 2025",
    groups: {
      indiv: "Exposiciones individuales",
      colec: "Exposiciones colectivas",
      resid: "Residencias",
      premios: "Premios",
    },
    contact: {
      city: "Buenos Aires · Argentina",
      mail: "estudio@micaelapuig.com",
      dossier: "Descargar dossier (PDF)",
      labels: {
        mail:   "Correo",
        city:   "Estudio",
        dossier:"Dossier",
        social: "Redes",
        rep:    "Representación",
      },
      rep: "Galería Pasaje 17 · Buenos Aires",
    },
    footer: "© 2026 Micaela Puig · Buenos Aires",
    statement: [
      "Mi trabajo se sostiene en un registro analógico paciente. La cámara entra en una habitación, en un patio, en la sombra de un árbol, y permanece ahí el tiempo que haga falta. No estoy buscando una imagen: estoy esperando que un objeto, una superficie o un cuerpo deje su rastro propio sobre la película.",
      "Las series Infancia, Naturaleza y Aranka funcionan como tres modos de la misma escucha. Infancia trabaja con casas, objetos y luces que ya estaban antes que yo. Naturaleza se ocupa de lo que crece, se seca y se mueve sin pedir permiso. Aranka es un cuerpo y una presencia que sostienen el ejercicio del retrato a lo largo del tiempo.",
      "Reviso cada copia como un pliego suelto. La materialidad del papel, el virado, la mancha que aparece sin haber sido convocada, todo eso forma parte del trabajo. Una fotografía no termina cuando se dispara el obturador; termina, si termina, cuando alguien la sostiene en la mano.",
    ],
    cv: {
      indiv: [
        ["2025", "Aranka", "Galería Pasaje 17", "Buenos Aires"],
        ["2023", "Mesa de taller", "Centro Cultural Recoleta", "Buenos Aires"],
        ["2021", "Patio interior", "Espacio Tucumán", "Rosario"],
      ],
      colec: [
        ["2024", "Cinco fotógrafas analógicas", "MACBA", "Buenos Aires"],
        ["2024", "Procesos", "Fundación Klemm", "Buenos Aires"],
        ["2022", "Trazos de plata", "Galería Vasari", "Buenos Aires"],
        ["2021", "Bienal de Fotografía", "Centro de Arte Contemporáneo", "Quito"],
      ],
      resid: [
        ["2025", "Residencia Aranka", "URRA", "Buenos Aires"],
        ["2023", "FAAP — Programa Sur", "FAAP", "São Paulo"],
        ["2022", "Casa Tres Patios", "C3P", "Medellín"],
      ],
      premios: [
        ["2024", "Premio Itaú Cultural — Fotografía", "Itaú Cultural", "Buenos Aires"],
        ["2022", "Mención Bienal de Arte Joven", "BAJBA", "Buenos Aires"],
      ],
    },
  },
};

// Hook: estado completo de galería (vista activa, filtros, modal, acento, idioma)
window.useGallery = function useGallery() {
  const [view, setView] = useState("works");          // "works" | "bio" | "contact"
  const [series, setSeries] = useState("all");        // "all" | "infancia" | ...
  const [accent, setAccent] = useState("alizarin");
  const [lang, setLang] = useState("ES");
  const [modalIndex, setModalIndex] = useState(null);
  const [filterOn, setFilterOn] = useState(false);

  const filtered = useMemo(
    () => series === "all" ? window.WORKS : window.WORKS.filter(w => w.series === series),
    [series]
  );

  const closeModal = useCallback(() => setModalIndex(null), []);
  const prev = useCallback(() => setModalIndex(i => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const next = useCallback(() => setModalIndex(i => (i + 1) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (modalIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape")     closeModal();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalIndex, prev, next, closeModal]);

  useEffect(() => { if (modalIndex !== null) setModalIndex(null); }, [series, view]);
  useEffect(() => { document.body.style.overflow = modalIndex !== null ? "hidden" : ""; }, [modalIndex]);

  const reset = useCallback(() => {
    setView("works"); setSeries("all"); setModalIndex(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const accentRgba = window.ACCENTS[accent].rgba;
  const accentSwatch = window.ACCENTS[accent].swatch;
  const t = window.MICA_COPY[lang] || window.MICA_COPY.ES;

  return {
    view, setView,
    series, setSeries,
    accent, setAccent, accentRgba, accentSwatch,
    lang, setLang,
    modalIndex, openModal: setModalIndex, closeModal, prev, next,
    filterOn, setFilterOn,
    filtered, reset, t,
  };
};

// Lightbox modal — idéntico para A/B/C/D, sólo cambia presentación de chrome.
window.MicaModal = function MicaModal({ gallery, variant = "default" }) {
  const { filtered, modalIndex, closeModal, prev, next, accentRgba, filterOn, setFilterOn, t } = gallery;
  if (modalIndex === null || !filtered[modalIndex]) return null;
  const work = filtered[modalIndex];
  const seriesLabel = window.SERIES.find(s => s.id === work.series).label;

  return (
    <div className={`mica-modal mica-modal--${variant}`} role="dialog" aria-modal="true" onClick={closeModal}>
      <div className="mica-modal__topbar" onClick={e => e.stopPropagation()}>
        <span className="mica-modal__serie">{seriesLabel}</span>
        <div className="mica-modal__topright">
          <button
            className="mica-modal__filter"
            onClick={() => setFilterOn(v => !v)}
            aria-pressed={filterOn}
          >
            {filterOn ? t.filterOn : t.filterOff}
          </button>
          <button className="mica-modal__close" onClick={closeModal} aria-label="Cerrar">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M1 1 L13 13 M13 1 L1 13" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </button>
        </div>
      </div>

      <button className="mica-modal__arrow mica-modal__arrow--left"
              onClick={e => { e.stopPropagation(); prev(); }} aria-label="Anterior">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path d="M14 4 L7 11 L14 18" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </button>
      <button className="mica-modal__arrow mica-modal__arrow--right"
              onClick={e => { e.stopPropagation(); next(); }} aria-label="Siguiente">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path d="M8 4 L15 11 L8 18" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </button>

      <div className="mica-modal__stage" onClick={e => e.stopPropagation()}>
        <div className="mica-modal__sheet" data-aspect={work.aspect}>
          <PhotoPlaceholder work={work} />
          {filterOn && <div className="mica-cell__tint is-on" style={{ background: accentRgba }} />}
        </div>
        <div className="mica-modal__caption" data-aspect={work.aspect}>
          <h2 className="mica-cap__title">{work.title.toUpperCase()}</h2>
          <p className="mica-cap__tech">{work.technique}</p>
          <p className="mica-cap__meta">{work.dimensions} — {work.year}</p>
        </div>
        <div className="mica-modal__counter">
          {String(modalIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};
