// Alt B — Archivo bilingüe (Rosângela Rennó)
// Labels ES + EN inline. Cabecera centrada. Filtros como barra inferior.

const { useState } = React;

function BHeader({ g }) {
  return (
    <header className="b-header">
      <div className="b-header__inner">
        <button className="b-brand" onClick={g.reset}>Micaela Puig</button>
        <nav className="b-nav">
          {[
            { id: 'works',   es: g.t.tabs.works,   en: g.t.tabsEN.works },
            { id: 'bio',     es: g.t.tabs.bio,     en: g.t.tabsEN.bio },
            { id: 'contact', es: g.t.tabs.contact, en: g.t.tabsEN.contact },
          ].map((tab, i) => (
            <React.Fragment key={tab.id}>
              {i > 0 && <span className="b-nav__sep">·</span>}
              <button
                className={`b-nav__item ${g.view === tab.id ? 'is-active' : ''}`}
                onClick={() => g.setView(tab.id)}
              >
                <span className="b-nav__primary">{tab.es}</span>
                <span className="b-nav__secondary">{tab.en}</span>
              </button>
            </React.Fragment>
          ))}
        </nav>
        <BMeta g={g} />
      </div>
    </header>
  );
}

function BMeta({ g }) {
  return (
    <div className="b-meta">
      <span>{window.MICA_COPY.ES.yearRange}</span>
      <span className="b-meta__sep">·</span>
      {['ES','EN','PT'].map((l, i) => (
        <React.Fragment key={l}>
          {i > 0 && <span style={{ color: 'var(--ink-4)', padding: '0 4px' }}>/</span>}
          <button
            className={g.lang === l ? 'is-active' : ''}
            onClick={() => g.setLang(l)}
          >{l}</button>
        </React.Fragment>
      ))}
      <span className="b-meta__sep">·</span>
      <span style={{ color: 'var(--ink-3)' }}>Acento</span>
      {Object.values(window.ACCENTS).map((a, i) => (
        <React.Fragment key={a.id}>
          <span style={{ padding: '0 4px', color: 'var(--ink-4)' }}>{i === 0 ? ' ' : '/'}</span>
          <button
            className={g.accent === a.id ? 'is-active' : ''}
            onClick={() => g.setAccent(a.id)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}
          >
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: a.swatch,
              opacity: g.accent === a.id ? 1 : 0.35,
            }}/>
            {a.label.split(' ')[0]}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

function BFilters({ g }) {
  const total = g.filtered.length;
  return (
    <div className="b-filters">
      <div className="b-filters__inner">
        <div className="b-filters__list">
          <button
            className={g.series === 'all' ? 'is-active' : ''}
            onClick={() => g.setSeries('all')}
          >{g.t.allLabel}</button>
          {window.SERIES.map(s => (
            <React.Fragment key={s.id}>
              <span className="b-filters__sep">·</span>
              <button
                className={g.series === s.id ? 'is-active' : ''}
                onClick={() => g.setSeries(s.id)}
              >{s.label}</button>
            </React.Fragment>
          ))}
        </div>
        <div className="b-filters__info">{g.t.sectionCount(total)}</div>
      </div>
    </div>
  );
}

function BWorks({ g }) {
  return (
    <section className="b-works" data-screen-label="01 Obra">
      <div className="b-grid">
        {g.filtered.map((w, idx) => (
          <button
            key={w.id}
            className="mica-cell b-cell"
            onClick={() => g.openModal(idx)}
            aria-label={`${w.title}, ${w.year}`}
          >
            <div className="mica-cell__sheet" data-aspect={w.aspect}>
              <PhotoPlaceholder work={w} />
              <div className="mica-cell__tint" style={{ background: g.accentRgba }} />
            </div>
            <div className="b-cell__caption">
              <span className="b-cell__num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="b-cell__year">{w.year}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function BBio({ g }) {
  const { t } = g;
  return (
    <section className="b-bio" data-screen-label="02 Bio">
      <h2 className="b-bio__label">
        {t.bioTitle}
        <span className="en">Statement</span>
      </h2>
      {t.statement.map((p, i) => <p key={i} className="b-bio__p">{p}</p>)}
      <hr className="b-rule" />
      <h2 className="b-bio__label">
        {t.cvTitle}
        <span className="en">Curriculum Vitae</span>
      </h2>
      {Object.entries(t.cv).map(([key, entries]) => (
        <div className="b-cv__group" key={key}>
          <h3 className="b-cv__heading">{t.groups[key]}</h3>
          <ul>
            {entries.map(([y, title, inst, city], i) => (
              <li key={i} className="b-cv__row">
                <span className="b-cv__year">{y}</span>
                <span className="b-cv__main">
                  <span className="b-cv__title">{title}</span>
                  <span className="b-cv__sep">·</span>
                  <span className="b-cv__inst">{inst}</span>
                </span>
                <span className="b-cv__city">{city}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

function BContact({ g }) {
  const c = g.t.contact;
  const L = c.labels;
  return (
    <section className="b-contact" data-screen-label="03 Contacto">
      <dl style={{ margin: 0 }}>
        <div className="b-contact__row">
          <dt>{L.mail}</dt>
          <dd><a href={`mailto:${c.mail}`} onClick={e => e.preventDefault()}>{c.mail}</a></dd>
        </div>
        <div className="b-contact__row">
          <dt>{L.city}</dt>
          <dd>{c.city}</dd>
        </div>
        <div className="b-contact__row">
          <dt>{L.rep}</dt>
          <dd>{c.rep}</dd>
        </div>
        <div className="b-contact__row">
          <dt>{L.dossier}</dt>
          <dd><a href="#" onClick={e => e.preventDefault()}>{c.dossier}</a></dd>
        </div>
        <div className="b-contact__row">
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

function BApp() {
  const g = window.useGallery();
  return (
    <div className="b-app" style={{
      '--accent-rgba':   g.accentRgba,
      '--accent-swatch': g.accentSwatch,
    }}>
      <GrainDefs />
      <BHeader g={g} />
      {g.view === 'works' && <BFilters g={g} />}
      <main>
        {g.view === 'works'   && <BWorks   g={g} />}
        {g.view === 'bio'     && <BBio     g={g} />}
        {g.view === 'contact' && <BContact g={g} />}
      </main>
      <footer className="b-footer">{g.t.footer}</footer>
      <window.MicaModal gallery={g} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BApp />);
