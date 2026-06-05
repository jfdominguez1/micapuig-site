// Mica Site — v1 según brief Pliego v3.0
// App principal: estado de filtros, modal, idioma, acento, tweaks.

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ─── Copy ES (única en v1; estructura preparada para EN/PT) ─────────────
const COPY = {
  ES: {
    seriesLabel: "Series",
    bioLabel:    "Bio / Statement",
    contactLabel:"Contacto",
    filterOn:    "Filtro: ON",
    filterOff:   "Filtro: OFF",
    bioTitle:    "Statement",
    cvTitle:     "Currículum",
    groups: {
      indiv:    "Exposiciones individuales",
      colec:    "Exposiciones colectivas",
      resid:    "Residencias",
      premios:  "Premios",
    },
    contact: {
      mail:     "estudio@micaelapuig.com",
      dossier:  "Descargar dossier (PDF)",
    },
    footer:   "© 2026 Micaela Puig · Buenos Aires",
    statement: [
      "Mi trabajo se sostiene en un registro analógico paciente. La cámara entra en una habitación, en un patio, en la sombra de un árbol, y permanece ahí el tiempo que haga falta. No estoy buscando una imagen: estoy esperando que un objeto, una superficie o un cuerpo deje su rastro propio sobre la película.",
      "Las series Infancia, Naturaleza y Aranka funcionan como tres modos de la misma escucha. Infancia trabaja con casas, objetos y luces que ya estaban antes que yo. Naturaleza se ocupa de lo que crece, se seca y se mueve sin pedir permiso. Aranka es un cuerpo y una presencia que sostienen el ejercicio del retrato a lo largo del tiempo.",
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

// ─── Header ─────────────────────────────────────────────────────────────
function Header({
  series, setSeries, seriesOpen, setSeriesOpen,
  accent, setAccent, lang, setLang, onBrandClick,
  scrollTo, t,
}) {
  return (
    <header className="mica-header">
      <div className="mica-header__inner">
        <button className="mica-brand" onClick={onBrandClick}>
          MICAELA PUIG
        </button>

        <div className="mica-nav">
          <div className="mica-dropdown">
            <button
              className={`mica-nav__item ${series !== 'all' ? 'is-active' : ''}`}
              onClick={() => setSeriesOpen(v => !v)}
              aria-expanded={seriesOpen}
            >
              {series === 'all' ? t.seriesLabel : window.SERIES.find(s => s.id === series).label}
              <span className="mica-caret" aria-hidden="true">▾</span>
            </button>
            {seriesOpen && (
              <div className="mica-dropdown__panel" onMouseLeave={() => setSeriesOpen(false)}>
                <button
                  className={`mica-dropdown__opt ${series === 'all' ? 'is-active' : ''}`}
                  onClick={() => { setSeries('all'); setSeriesOpen(false); }}
                >
                  Todas
                </button>
                {window.SERIES.map(s => (
                  <button
                    key={s.id}
                    className={`mica-dropdown__opt ${series === s.id ? 'is-active' : ''}`}
                    onClick={() => { setSeries(s.id); setSeriesOpen(false); }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="mica-nav__item" onClick={() => scrollTo('bio')}>
            {t.bioLabel}
          </button>
          <button className="mica-nav__item" onClick={() => scrollTo('contact')}>
            {t.contactLabel}
          </button>

          <div className="mica-accents" role="group" aria-label="Acento cromático">
            {Object.values(window.ACCENTS).map(a => (
              <button
                key={a.id}
                className={`mica-accent-dot ${accent === a.id ? 'is-active' : ''}`}
                style={{ '--swatch': a.swatch }}
                onClick={() => setAccent(a.id)}
                title={a.label}
                aria-label={a.label}
              />
            ))}
          </div>

          <div className="mica-langs" role="group" aria-label="Idioma">
            {['ES','EN','PT'].map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span className="mica-langs__sep">·</span>}
                <button
                  className={`mica-lang ${lang === l ? 'is-active' : ''}`}
                  onClick={() => setLang(l)}
                >
                  {l}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── Grilla (Mesa de taller) ─────────────────────────────────────────────
function Grid({ works, accentRgba, onOpen }) {
  return (
    <section className="mica-grid" id="grid" data-screen-label="01 Portada">
      <div className="mica-grid__columns">
        {works.map((w, idx) => (
          <button
            key={w.id}
            className="mica-cell"
            data-aspect={w.aspect}
            onClick={() => onOpen(idx)}
            aria-label={`${w.title}, ${w.year}`}
          >
            <div className="mica-cell__sheet" data-aspect={w.aspect}>
              <PhotoPlaceholder work={w} />
              <div
                className="mica-cell__tint"
                style={{ background: accentRgba }}
                aria-hidden="true"
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

// ─── Modal de obra ───────────────────────────────────────────────────────
function Modal({ work, list, index, onClose, onPrev, onNext, accentRgba, filterOn, setFilterOn, t }) {
  const seriesLabel = window.SERIES.find(s => s.id === work.series).label;

  return (
    <div className="mica-modal" role="dialog" aria-modal="true" onClick={onClose}>
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
          <button className="mica-modal__close" onClick={onClose} aria-label="Cerrar">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M1 1 L13 13 M13 1 L1 13" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </button>
        </div>
      </div>

      <button
        className="mica-modal__arrow mica-modal__arrow--left"
        onClick={e => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path d="M14 4 L7 11 L14 18" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </button>

      <button
        className="mica-modal__arrow mica-modal__arrow--right"
        onClick={e => { e.stopPropagation(); onNext(); }}
        aria-label="Siguiente"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path d="M8 4 L15 11 L8 18" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </button>

      <div className="mica-modal__stage" onClick={e => e.stopPropagation()}>
        <div className="mica-modal__sheet" data-aspect={work.aspect}>
          <PhotoPlaceholder work={work} />
          {filterOn && (
            <div className="mica-cell__tint is-on" style={{ background: accentRgba }} />
          )}
        </div>

        <div className="mica-modal__caption" data-aspect={work.aspect}>
          <h2 className="mica-cap__title">{work.title.toUpperCase()}</h2>
          <p className="mica-cap__tech">{work.technique}</p>
          <p className="mica-cap__meta">{work.dimensions} — {work.year}</p>
        </div>

        <div className="mica-modal__counter" aria-hidden="true">
          {String(index + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

// ─── Bio / Statement ─────────────────────────────────────────────────────
function BioSection({ t }) {
  return (
    <section className="mica-section" id="bio" data-screen-label="02 Bio / Statement">
      <div className="mica-bio">
        <h2 className="mica-section__label">{t.bioTitle}</h2>
        {t.statement.map((p, i) => (
          <p key={i} className="mica-bio__p">{p}</p>
        ))}

        <hr className="mica-rule" />

        <h2 className="mica-section__label">{t.cvTitle}</h2>
        <div className="mica-cv">
          {Object.entries(t.cv).map(([key, entries]) => (
            <div className="mica-cv__group" key={key}>
              <h3 className="mica-cv__heading">{t.groups[key]}</h3>
              <ul className="mica-cv__list">
                {entries.map(([y, title, inst, city], i) => (
                  <li key={i} className="mica-cv__row">
                    <span className="mica-cv__year">{y}</span>
                    <span className="mica-cv__title">{title}</span>
                    <span className="mica-cv__sep">·</span>
                    <span className="mica-cv__inst">{inst}</span>
                    <span className="mica-cv__sep">·</span>
                    <span className="mica-cv__city">{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contacto ─────────────────────────────────────────────────────────────
function ContactSection({ t }) {
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    fontSize: '1.1rem',
    textDecoration: 'none',
    color: 'var(--text-color, #000)'
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#555',
    width: '24px',
    height: '24px',
  };

  return (
    <section className="mica-section" id="contact" data-screen-label="03 Contacto">
      <div className="mica-contact">

        <a href={`mailto:${t.contact.mail}`} style={linkStyle}>
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>{t.contact.mail}</span>
        </a>

        <a href="#" onClick={e => e.preventDefault()} style={linkStyle}>
            <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
        </a>

        <p className="mica-contact__dossier" style={{marginTop: '2rem'}}>
          <a href="#" onClick={e => e.preventDefault()}>{t.contact.dossier}</a>
        </p>

      </div>
    </section>
  );
}


// ─── App raíz ─────────────────────────────────────────────────────────────
function App() {
  const [series, setSeries]         = useState('all');
  const [seriesOpen, setSeriesOpen] = useState(false);
  const [accent, setAccent]         = useState('alizarin');
  const [lang, setLang]             = useState('ES');
  const [modalIndex, setModalIndex] = useState(null);
  const [filterOn, setFilterOn]     = useState(false);

  // Tweaks — defaults persistidos
  const [tweaks, setTweak] = window.useTweaks(
    /*EDITMODE-BEGIN*/{
      "sansFamily": "Inter",
      "serifFamily": "Playfair Display",
      "gridGap": 64,
      "showAccentSelector": true
    }/*EDITMODE-END*/
  );

  const t = COPY[lang] || COPY.ES;
  const accentRgba = window.ACCENTS[accent].rgba;

  const filtered = useMemo(
    () => series === 'all' ? window.WORKS : window.WORKS.filter(w => w.series === series),
    [series]
  );

  const closeModal = useCallback(() => setModalIndex(null), []);
  const prev = useCallback(
    () => setModalIndex(i => (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );
  const next = useCallback(
    () => setModalIndex(i => (i + 1) % filtered.length),
    [filtered.length]
  );

  // Keyboard nav del modal
  useEffect(() => {
    if (modalIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     closeModal();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalIndex, prev, next, closeModal]);

  // Si cambia el filtro mientras hay modal abierto, lo cerramos.
  useEffect(() => { if (modalIndex !== null) setModalIndex(null); }, [series]);

  // Bloquear scroll del body cuando hay modal
  useEffect(() => {
    document.body.style.overflow = modalIndex !== null ? 'hidden' : '';
  }, [modalIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const onBrandClick = () => {
    setSeries('all');
    setSeriesOpen(false);
    setModalIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Variables CSS dependientes del estado
  const cssVars = {
    '--accent-rgba': accentRgba,
    '--accent-swatch': window.ACCENTS[accent].swatch,
    '--sans': `'${tweaks.sansFamily}', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    '--serif': `'${tweaks.serifFamily}', 'Cormorant Garamond', Georgia, serif`,
    '--grid-gap': `${tweaks.gridGap}px`,
  };

  return (
    <div className="mica-app" style={cssVars}>
      <GrainDefs />
      <Header
        series={series} setSeries={setSeries}
        seriesOpen={seriesOpen} setSeriesOpen={setSeriesOpen}
        accent={accent} setAccent={setAccent}
        lang={lang} setLang={setLang}
        onBrandClick={onBrandClick} scrollTo={scrollTo}
        t={t}
      />

      <main>
        <Grid
          works={filtered}
          accentRgba={accentRgba}
          onOpen={setModalIndex}
        />
        <BioSection t={t} />
        <ContactSection t={t} />
      </main>

      <footer className="mica-footer">{t.footer}</footer>

      {modalIndex !== null && filtered[modalIndex] && (
        <Modal
          work={filtered[modalIndex]}
          list={filtered}
          index={modalIndex}
          onClose={closeModal}
          onPrev={prev}
          onNext={next}
          accentRgba={accentRgba}
          filterOn={filterOn}
          setFilterOn={setFilterOn}
          t={t}
        />
      )}

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="Tipografía">
          <window.TweakSelect
            label="Sans"
            value={tweaks.sansFamily}
            onChange={v => setTweak('sansFamily', v)}
            options={['Inter', 'Helvetica Neue', 'Söhne', 'IBM Plex Sans']}
          />
          <window.TweakSelect
            label="Serif"
            value={tweaks.serifFamily}
            onChange={v => setTweak('serifFamily', v)}
            options={['Playfair Display', 'Cormorant Garamond', 'EB Garamond', 'Lora']}
          />
        </window.TweakSection>
        <window.TweakSection title="Grilla">
          <window.TweakSlider
            label="Separación"
            value={tweaks.gridGap}
            onChange={v => setTweak('gridGap', v)}
            min={24} max={120} step={4}
            suffix="px"
          />
        </window.TweakSection>
        <window.TweakSection title="Navegación rápida">
          <window.TweakButton onClick={() => scrollTo('grid')}>Portada</window.TweakButton>
          <window.TweakButton onClick={() => setModalIndex(0)}>Abrir modal (obra 1)</window.TweakButton>
          <window.TweakButton onClick={() => scrollTo('bio')}>Bio / Statement</window.TweakButton>
          <window.TweakButton onClick={() => scrollTo('contact')}>Contacto</window.TweakButton>
        </window.TweakSection>
      </window.TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
