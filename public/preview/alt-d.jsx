// Alt D — Índice editorial (libro de artista)
// Cabecera tipográfica de portada. Tabs como índice. Captions visibles bajo cada pieza.

function DCover({ g }) {
  return (
    <header className="d-cover">
      <div className="d-cover__inner">
        <h1 className="d-cover__title" onClick={g.reset}>
          <span className="small">Estudio · Buenos Aires</span>
          Micaela Puig
        </h1>
        <div className="d-cover__meta">
          <div className="d-cover__meta-item">
            <span className="d-cover__meta-key">Período</span>
            <span className="d-cover__meta-val">2021 – 2025</span>
          </div>
          <div className="d-cover__meta-item">
            <span className="d-cover__meta-key">Tinte</span>
            <span className="d-cover__meta-val">
              {Object.values(window.ACCENTS).map((a, i) => (
                <React.Fragment key={a.id}>
                  {i > 0 && <span style={{ color: 'var(--ink-4)' }}>·</span>}
                  <button
                    className={g.accent === a.id ? 'is-active' : ''}
                    onClick={() => g.setAccent(a.id)}
                    title={a.label}
                  >{a.label.split(' ')[0]}</button>
                </React.Fragment>
              ))}
            </span>
          </div>
          <div className="d-cover__meta-item">
            <span className="d-cover__meta-key">Idioma</span>
            <span className="d-cover__meta-val">
              {['ES','EN','PT'].map((l, i) => (
                <React.Fragment key={l}>
                  {i > 0 && <span style={{ color: 'var(--ink-4)' }}>·</span>}
                  <button
                    className={g.lang === l ? 'is-active' : ''}
                    onClick={() => g.setLang(l)}
                  >{l}</button>
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function DTabs({ g }) {
  return (
    <nav className="d-tabs">
      <div className="d-tabs__inner">
        {[
          { id: 'works',   label: g.t.tabs.works,   roman: 'i' },
          { id: 'bio',     label: g.t.tabs.bio,     roman: 'ii' },
          { id: 'contact', label: g.t.tabs.contact, roman: 'iii' },
        ].map(tab => (
          <button
            key={tab.id}
            className={`d-tab ${g.view === tab.id ? 'is-active' : ''}`}
            onClick={() => g.setView(tab.id)}
          >
            <span className="d-tab__roman">{tab.roman}</span>
            {tab.label}
          </button>
        ))}
        <span className="d-tabs__right">
          {g.view === 'works' && 'Mesa de taller'}
          {g.view === 'bio' && 'Statement & cv'}
          {g.view === 'contact' && 'Colofón'}
        </span>
      </div>
    </nav>
  );
}

function DWorks({ g }) {
  return (
    <>
      <div className="d-chapter">
        <span className="d-chapter__num">i.</span>
        <div className="d-chapter__list">
          <button
            className={g.series === 'all' ? 'is-active' : ''}
            onClick={() => g.setSeries('all')}
          >Todas</button>
          {window.SERIES.map(s => (
            <React.Fragment key={s.id}>
              <span className="d-sep">·</span>
              <button
                className={g.series === s.id ? 'is-active' : ''}
                onClick={() => g.setSeries(s.id)}
              >{s.label}</button>
            </React.Fragment>
          ))}
        </div>
        <span className="d-chapter__count">{String(g.filtered.length).padStart(2,'0')} piezas</span>
      </div>

      <section className="d-works" data-screen-label="01 Obra">
        <div className="d-grid">
          {g.filtered.map((w, idx) => (
            <button
              key={w.id}
              className="mica-cell d-cell"
              onClick={() => g.openModal(idx)}
              aria-label={`${w.title}, ${w.year}`}
            >
              <div className="mica-cell__sheet d-cell__sheet" data-aspect={w.aspect}>
                <PhotoPlaceholder work={w} />
                <div className="mica-cell__tint" style={{ background: g.accentRgba }} />
              </div>
              <div className="d-cell__caption">
                <span className="d-cell__num">{String(idx + 1).padStart(2, '0')}</span>
                <span>
                  <span className="d-cell__title">{w.title}</span>
                  <span className="d-cell__sub">{w.year}</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function DBio({ g }) {
  const { t } = g;
  // Marginalia: tomar años clave de las exposiciones
  const margin = [
    ['2025', 'Aranka'],
    ['2024', 'Premio Itaú'],
    ['2023', 'Mesa de taller'],
    ['2022', 'Trazos de plata'],
    ['2021', 'Patio interior'],
  ];
  return (
    <section className="d-bio" data-screen-label="02 Bio">
      <aside className="d-bio__margin">
        {margin.map(([y, t]) => (
          <div className="d-bio__margin-row" key={y}>
            <span>{y}</span><br/>
            <span style={{ color: 'var(--ink-4)' }}>{t}</span>
          </div>
        ))}
      </aside>
      <div className="d-bio__main">
        <h2 className="d-bio__head">ii. {t.bioTitle}</h2>
        {t.statement.map((p, i) => <p key={i} className="d-bio__p">{p}</p>)}
        <hr className="d-rule" />
        <h2 className="d-bio__head">{t.cvTitle}</h2>
        {Object.entries(t.cv).map(([key, entries]) => (
          <div className="d-cv__group" key={key}>
            <h3 className="d-cv__heading">{t.groups[key]}</h3>
            <ul>
              {entries.map(([y, title, inst, city], i) => (
                <li key={i} className="d-cv__row">
                  <span className="d-cv__year">{y}</span>
                  <span className="d-cv__detail">
                    <span className="d-cv__title">{title}</span>
                    <span className="d-cv__sep">·</span>
                    <span className="d-cv__inst">{inst}</span>
                    <span className="d-cv__sep">·</span>
                    <span className="d-cv__city">{city}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function DContact({ g }) {
  const c = g.t.contact;
  const L = c.labels;
  return (
    <section className="d-contact" data-screen-label="03 Contacto">
      <h2 className="d-contact__head">iii. Colofón</h2>
      <p className="d-contact__mail">
        <a href={`mailto:${c.mail}`} onClick={e => e.preventDefault()}>{c.mail}</a>
      </p>
      <p className="d-contact__city">{c.city}</p>
      <dl className="d-contact__list">
        <div>
          <dt>{L.rep}</dt>
          <dd>{c.rep}</dd>
        </div>
        <div>
          <dt>{L.dossier}</dt>
          <dd><a href="#" onClick={e => e.preventDefault()}>{c.dossier}</a></dd>
        </div>
        <div>
          <dt>{L.social}</dt>
          <dd>
            <a href="#" onClick={e => e.preventDefault()}>Instagram</a>
            <span style={{ color: 'var(--ink-3)', padding: '0 0.5em' }}>·</span>
            <a href="#" onClick={e => e.preventDefault()}>Are.na</a>
          </dd>
        </div>
        <div>
          <dt>Sitio</dt>
          <dd>micaelapuig.com</dd>
        </div>
      </dl>
    </section>
  );
}

function DApp() {
  const g = window.useGallery();
  return (
    <div className="d-app" style={{
      '--accent-rgba':   g.accentRgba,
      '--accent-swatch': g.accentSwatch,
    }}>
      <GrainDefs />
      <DCover g={g} />
      <DTabs g={g} />
      <main>
        {g.view === 'works'   && <DWorks   g={g} />}
        {g.view === 'bio'     && <DBio     g={g} />}
        {g.view === 'contact' && <DContact g={g} />}
      </main>
      <footer className="d-footer">{g.t.footer}</footer>
      <window.MicaModal gallery={g} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DApp />);
