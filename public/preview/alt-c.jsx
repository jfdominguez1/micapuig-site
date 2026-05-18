// Alt C — Pliego analógico
// Hoja de contactos: numeración, líneas verticales tipo carrete, alta densidad.

function CHeader({ g }) {
  return (
    <header className="c-header">
      <div className="c-header__inner">
        <button className="c-brand" onClick={g.reset}>Micaela Puig</button>
        <nav className="c-tabs">
          {[
            { id: 'works',   label: g.t.tabs.works,   num: '01' },
            { id: 'bio',     label: g.t.tabs.bio,     num: '02' },
            { id: 'contact', label: g.t.tabs.contact, num: '03' },
          ].map(tab => (
            <button
              key={tab.id}
              className={`c-tab ${g.view === tab.id ? 'is-active' : ''}`}
              onClick={() => g.setView(tab.id)}
            >
              <span className="c-tab__num">{tab.num}</span>
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="c-rightmeta">
          <div className="c-tinte">
            <span className="c-tinte__sw" aria-hidden="true" />
            <span>Tinte</span>
            <div className="c-tinte__opts">
              {Object.values(window.ACCENTS).map(a => (
                <button
                  key={a.id}
                  className={`c-tinte__btn ${g.accent === a.id ? 'is-active' : ''}`}
                  onClick={() => g.setAccent(a.id)}
                >{a.label.split(' ')[0]}</button>
              ))}
            </div>
          </div>
          <div className="c-lang">
            {['ES','EN','PT'].map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span style={{ color: 'var(--ink-4)' }}>/</span>}
                <button
                  className={g.lang === l ? 'is-active' : ''}
                  onClick={() => g.setLang(l)}
                >{l}</button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function CSub({ g }) {
  const total = g.filtered.length;
  return (
    <div className="c-sub">
      <div className="c-sub__label">
        Hoja de contactos
      </div>
      <div className="c-sub__filters">
        <button
          className={`c-sub__filter ${g.series === 'all' ? 'is-active' : ''}`}
          onClick={() => g.setSeries('all')}
        >Todas</button>
        {window.SERIES.map(s => (
          <button
            key={s.id}
            className={`c-sub__filter ${g.series === s.id ? 'is-active' : ''}`}
            onClick={() => g.setSeries(s.id)}
          >{s.label}</button>
        ))}
      </div>
      <div className="c-sub__count">{String(total).padStart(2,'0')} piezas · 2021–2025</div>
    </div>
  );
}

function CWorks({ g }) {
  return (
    <section className="c-sheet" data-screen-label="01 Obra">
      <div className="c-grid">
        {g.filtered.map((w, idx) => {
          const seriesLabel = window.SERIES.find(s => s.id === w.series).label;
          return (
            <button
              key={w.id}
              className="mica-cell c-cell"
              onClick={() => g.openModal(idx)}
              aria-label={`${w.title}, ${w.year}`}
            >
              <div className="mica-cell__sheet c-cell__sheet" data-aspect={w.aspect}>
                <PhotoPlaceholder work={w} />
                <div className="mica-cell__tint" style={{ background: g.accentRgba }} />
              </div>
              <div className="c-cell__caption">
                <span className="c-cell__num">{String(idx + 1).padStart(2, '0')}</span>
                <span className="c-cell__series">{seriesLabel}</span>
                <span className="c-cell__year">{w.year}</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function CBio({ g }) {
  const { t } = g;
  return (
    <section className="c-bio" data-screen-label="02 Bio">
      <div className="c-bio__head">
        <span className="c-bio__title">{t.bioTitle}</span>
        <span>Micaela Puig · 2026</span>
      </div>
      {t.statement.map((p, i) => <p key={i} className="c-bio__p">{p}</p>)}
      <hr className="c-rule" />
      <div className="c-bio__head">
        <span className="c-bio__title">{t.cvTitle}</span>
        <span>Selección</span>
      </div>
      {Object.entries(t.cv).map(([key, entries]) => (
        <div className="c-cv__group" key={key}>
          <h3 className="c-cv__heading">{t.groups[key]}</h3>
          <ul>
            {entries.map(([y, title, inst, city], i) => (
              <li key={i} className="c-cv__row">
                <span className="c-cv__year">{y}</span>
                <span className="c-cv__detail">
                  <span className="c-cv__title">{title}</span>
                  <span className="c-cv__sep">·</span>
                  <span className="c-cv__inst">{inst}</span>
                  <span className="c-cv__sep">·</span>
                  <span className="c-cv__city">{city}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

function CContact({ g }) {
  const c = g.t.contact;
  const L = c.labels;
  return (
    <section className="c-contact" data-screen-label="03 Contacto">
      <div className="c-contact__head">
        <span className="c-contact__title">Contacto</span>
        <span>Estudio · 2026</span>
      </div>
      <dl style={{ margin: 0 }}>
        <div className="c-contact__row">
          <dt>{L.mail}</dt>
          <dd><a href={`mailto:${c.mail}`} onClick={e => e.preventDefault()}>{c.mail}</a></dd>
        </div>
        <div className="c-contact__row">
          <dt>{L.city}</dt>
          <dd>{c.city}</dd>
        </div>
        <div className="c-contact__row">
          <dt>{L.rep}</dt>
          <dd>{c.rep}</dd>
        </div>
        <div className="c-contact__row">
          <dt>{L.dossier}</dt>
          <dd><a href="#" onClick={e => e.preventDefault()}>{c.dossier}</a></dd>
        </div>
        <div className="c-contact__row">
          <dt>{L.social}</dt>
          <dd>
            <a href="#" onClick={e => e.preventDefault()}>Instagram</a>
            <span style={{ color: 'var(--ink-3)', padding: '0 0.5em' }}>·</span>
            <a href="#" onClick={e => e.preventDefault()}>Are.na</a>
          </dd>
        </div>
      </dl>
    </section>
  );
}

function CApp() {
  const g = window.useGallery();
  return (
    <div className="c-app" style={{
      '--accent-rgba':   g.accentRgba,
      '--accent-swatch': g.accentSwatch,
    }}>
      <GrainDefs />
      <CHeader g={g} />
      {g.view === 'works' && <CSub g={g} />}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {g.view === 'works'   && <CWorks   g={g} />}
        {g.view === 'bio'     && <CBio     g={g} />}
        {g.view === 'contact' && <CContact g={g} />}
      </main>
      <footer className="c-footer">
        <span className="c-footer__cell">© 2026 Micaela Puig</span>
        <span className="c-footer__cell">Buenos Aires</span>
        <span className="c-footer__cell">{g.t.tabs[g.view] || ''}</span>
      </footer>
      <window.MicaModal gallery={g} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CApp />);
