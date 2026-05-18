// Alt A — Línea (productivo + Tweaks de diseño)
// Header limpio: Micaela Puig · Obra · Bio · Contacto · ES EN PT
// Acento, tipografía, densidad y captions se deciden en Tweaks (no visibles al visitante).

const { useState, useEffect } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "alizarin",
  "headerStyle": "single",
  "maxColumns": 5,
  "cellCaption": "off",
  "sansFamily": "Inter",
  "serifFamily": "Playfair Display",
  "gridGap": 22,
  "fadeBetweenTabs": true
}/*EDITMODE-END*/;

function AHeader({ g }) {
  return (
    <header className="a-header">
      <button className="a-brand a-link" onClick={g.reset}>Micaela Puig</button>
      <span className="a-sep">·</span>

      <button
        className={`a-link ${g.view === 'works' ? 'is-active' : ''}`}
        onClick={() => g.setView('works')}
      >{g.t.tabs.works}</button>
      <span className="a-sep">·</span>

      <button
        className={`a-link ${g.view === 'bio' ? 'is-active' : ''}`}
        onClick={() => g.setView('bio')}
      >{g.t.tabs.bio}</button>
      <span className="a-sep">·</span>

      <button
        className={`a-link ${g.view === 'contact' ? 'is-active' : ''}`}
        onClick={() => g.setView('contact')}
      >{g.t.tabs.contact}</button>

      <div className="a-langs">
        {['ES','EN','PT'].map((l, i) => (
          <React.Fragment key={l}>
            {i > 0 && <span className="a-lang-sep">·</span>}
            <button
              className={`a-lang ${g.lang === l ? 'is-active' : ''}`}
              onClick={() => g.setLang(l)}
            >{l}</button>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}

function AFilterBar({ g }) {
  return (
    <div className="a-works__sub">
      <button
        className={g.series === 'all' ? 'is-active' : ''}
        onClick={() => g.setSeries('all')}
      >{g.t.allLabel} <span className="a-works__sub-n">({window.WORKS.length})</span></button>
      <span className="a-works__sub-sep">·</span>
      {window.SERIES.map((s, i) => {
        const count = window.WORKS.filter(w => w.series === s.id).length;
        return (
          <React.Fragment key={s.id}>
            {i > 0 && <span className="a-works__sub-sep">·</span>}
            <button
              className={g.series === s.id ? 'is-active' : ''}
              onClick={() => g.setSeries(s.id)}
            >{s.label} <span className="a-works__sub-n">({count})</span></button>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function AWorks({ g, tweaks }) {
  return (
    <section className="a-works" data-screen-label="01 Obra">
      <AFilterBar g={g} />
      <div className="a-grid">
        {g.filtered.map((w, idx) => (
          <button
            key={w.id}
            className="mica-cell a-cell"
            onClick={() => g.openModal(idx)}
            aria-label={`${w.title}, ${w.year}`}
          >
            <div className="mica-cell__sheet" data-aspect={w.aspect}>
              <PhotoPlaceholder work={w} />
              <div className="mica-cell__tint" style={{ background: g.accentRgba }} />
            </div>
            {tweaks.cellCaption !== 'off' && (
              <div className="a-cell__caption">
                <span className="a-cell__num">{String(idx + 1).padStart(2, '0')}</span>
                {tweaks.cellCaption === 'numyear' && <span className="a-cell__year">{w.year}</span>}
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

function ABio({ g }) {
  const { t } = g;
  return (
    <section className="a-bio" data-screen-label="02 Bio">
      <h2 className="a-bio__label">{t.bioTitle}</h2>
      {t.statement.map((p, i) => <p key={i} className="a-bio__p">{p}</p>)}
      <hr className="a-rule" />
      <h2 className="a-bio__label">{t.cvTitle}</h2>
      {Object.entries(t.cv).map(([key, entries]) => (
        <div className="a-cv__group" key={key}>
          <h3 className="a-cv__heading">{t.groups[key]}</h3>
          <ul>
            {entries.map(([y, title, inst, city], i) => (
              <li key={i} className="a-cv__row">
                <span className="a-cv__year">{y}</span>
                <span className="a-cv__title">{title}</span>
                <span className="a-cv__sep">·</span>
                <span className="a-cv__inst">{inst}</span>
                <span className="a-cv__sep">·</span>
                <span className="a-cv__city">{city}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

function AContact({ g }) {
  const { t } = g;
  return (
    <section className="a-contact" data-screen-label="03 Contacto">
      <p className="a-contact__mail">
        <a href={`mailto:${t.contact.mail}`} onClick={e => e.preventDefault()}>{t.contact.mail}</a>
      </p>
      <p className="a-contact__city">{t.contact.city}</p>
      <p className="a-contact__row">
        <a href="#" onClick={e => e.preventDefault()}>{t.contact.dossier}</a>
      </p>
      <p className="a-contact__row">
        <a href="#" onClick={e => e.preventDefault()}>Instagram</a>
        <span style={{ color: 'var(--ink-3)', padding: '0 0.5em' }}>·</span>
        <a href="#" onClick={e => e.preventDefault()}>Are.na</a>
      </p>
    </section>
  );
}

// ─── Tweaks: control de acento custom (swatches + nombre) ──────────────
function AccentSwatches({ accent, onChange }) {
  return (
    <div className="a-tw-accent">
      {Object.values(window.ACCENTS).map(a => (
        <button
          key={a.id}
          className={`a-tw-accent__opt ${accent === a.id ? 'is-active' : ''}`}
          onClick={() => onChange(a.id)}
          aria-pressed={accent === a.id}
        >
          <span className="a-tw-accent__sw" style={{ background: a.swatch }} />
          <span className="a-tw-accent__label">{a.label}</span>
        </button>
      ))}
    </div>
  );
}

function AApp() {
  const g = window.useGallery();
  const [tweaks, setTweak] = window.useTweaks(DEFAULTS);

  // Sincronizo el acento elegido en Tweaks con el estado de galería
  useEffect(() => { g.setAccent(tweaks.accent); }, [tweaks.accent]);

  const [viewKey, setViewKey] = useState(g.view);
  useEffect(() => { setViewKey(g.view); }, [g.view]);

  return (
    <div
      className={`a-app a-header--${tweaks.headerStyle} a-caption--${tweaks.cellCaption}`}
      data-max-cols={tweaks.maxColumns}
      style={{
        '--accent-rgba':   g.accentRgba,
        '--accent-swatch': g.accentSwatch,
        '--sans':  `'${tweaks.sansFamily}', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
        '--serif': `'${tweaks.serifFamily}', 'Cormorant Garamond', Georgia, serif`,
        '--grid-gap': `${tweaks.gridGap}px`,
      }}>
      <GrainDefs />
      <AHeader g={g} />
      <main className={tweaks.fadeBetweenTabs ? 'a-fade' : ''} key={viewKey}>
        {g.view === 'works'   && <AWorks   g={g} tweaks={tweaks} />}
        {g.view === 'bio'     && <ABio     g={g} />}
        {g.view === 'contact' && <AContact g={g} />}
      </main>
      <footer className="a-footer">{g.t.footer}</footer>
      <window.MicaModal gallery={g} />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="Acento">
          <AccentSwatches accent={tweaks.accent} onChange={v => setTweak('accent', v)} />
        </window.TweakSection>
        <window.TweakSection title="Header">
          <window.TweakRadio
            label="Disposición"
            value={tweaks.headerStyle}
            onChange={v => setTweak('headerStyle', v)}
            options={[
              { value: 'single',  label: 'Línea' },
              { value: 'split',   label: '2 niveles' },
            ]}
          />
        </window.TweakSection>
        <window.TweakSection title="Grilla">
          <window.TweakSlider
            label="Máx. columnas"
            value={tweaks.maxColumns}
            onChange={v => setTweak('maxColumns', v)}
            min={3} max={6} step={1}
          />
          <window.TweakSlider
            label="Separación"
            value={tweaks.gridGap}
            onChange={v => setTweak('gridGap', v)}
            min={8} max={56} step={2}
            suffix="px"
          />
          <window.TweakSelect
            label="Caption"
            value={tweaks.cellCaption}
            onChange={v => setTweak('cellCaption', v)}
            options={[
              { value: 'off',     label: 'Sin caption' },
              { value: 'num',     label: 'Sólo número' },
              { value: 'numyear', label: 'Número + año' },
            ]}
          />
        </window.TweakSection>
        <window.TweakSection title="Tipografía">
          <window.TweakSelect
            label="Sans"
            value={tweaks.sansFamily}
            onChange={v => setTweak('sansFamily', v)}
            options={['Inter', 'Helvetica Neue', 'IBM Plex Sans', 'Söhne']}
          />
          <window.TweakSelect
            label="Serif"
            value={tweaks.serifFamily}
            onChange={v => setTweak('serifFamily', v)}
            options={['Playfair Display', 'Cormorant Garamond', 'EB Garamond', 'Lora', 'GT Sectra']}
          />
        </window.TweakSection>
        <window.TweakSection title="Movimiento">
          <window.TweakToggle
            label="Fade entre tabs"
            value={tweaks.fadeBetweenTabs}
            onChange={v => setTweak('fadeBetweenTabs', v)}
          />
        </window.TweakSection>
        <window.TweakSection title="Saltos">
          <window.TweakButton onClick={() => g.setView('works')}>Obra</window.TweakButton>
          <window.TweakButton onClick={() => g.setView('bio')}>Bio</window.TweakButton>
          <window.TweakButton onClick={() => g.setView('contact')}>Contacto</window.TweakButton>
          <window.TweakButton onClick={() => g.openModal(0)}>Abrir modal</window.TweakButton>
        </window.TweakSection>
      </window.TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AApp />);
