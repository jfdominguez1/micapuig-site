// Genera placeholders SVG abstractos para cada obra.
// La idea: superficies tonales que evocan copia analógica (sin imágenes literales).
// Cada obra tiene `layout` + `palette` definidos en works-data.js.

function PhotoPlaceholder({ work }) {
  const [light, dark] = work.palette;
  const id = `w${work.id}`;

  const Layout = {
    // Gradiente vertical suave: cielo / sombra
    vsoft: (
      <>
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={light} />
            <stop offset="100%" stopColor={dark}  stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#g${id})`} />
      </>
    ),
    // Horizonte definido a ~62%
    horizon: (
      <>
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={light} />
            <stop offset="58%"  stopColor={light} />
            <stop offset="63%"  stopColor={dark} stopOpacity="0.55" />
            <stop offset="100%" stopColor={dark} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#g${id})`} />
      </>
    ),
    // Foco circular de luz
    radial: (
      <>
        <defs>
          <radialGradient id={`g${id}`} cx="0.42" cy="0.42" r="0.75">
            <stop offset="0%"   stopColor={light} />
            <stop offset="65%"  stopColor={light} stopOpacity="0.55" />
            <stop offset="100%" stopColor={dark} />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill={dark} />
        <rect width="100" height="100" fill={`url(#g${id})`} />
      </>
    ),
    // Gradiente diagonal
    diag: (
      <>
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor={light} />
            <stop offset="100%" stopColor={dark} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#g${id})`} />
      </>
    ),
    // Viñeta clásica retrato
    vignette: (
      <>
        <defs>
          <radialGradient id={`g${id}`} cx="0.5" cy="0.46" r="0.62">
            <stop offset="0%"   stopColor={light} />
            <stop offset="55%"  stopColor={light} stopOpacity="0.9" />
            <stop offset="100%" stopColor={dark} />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill={dark} />
        <rect width="100" height="100" fill={`url(#g${id})`} />
      </>
    ),
    // Luz lateral
    halflight: (
      <>
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor={light} />
            <stop offset="45%"  stopColor={light} stopOpacity="0.8" />
            <stop offset="100%" stopColor={dark} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#g${id})`} />
      </>
    ),
    // Columna central más oscura (tallo, pliegue)
    spine: (
      <>
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor={light} />
            <stop offset="42%"  stopColor={dark} stopOpacity="0.7" />
            <stop offset="58%"  stopColor={dark} stopOpacity="0.7" />
            <stop offset="100%" stopColor={light} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#g${id})`} />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    >
      {Layout[work.layout] || Layout.vsoft}
      {/* grano analógico compartido */}
      <rect width="100" height="100" fill="transparent" filter="url(#mica-grain)" opacity="0.55" />
    </svg>
  );
}

// Filtro de grano compartido — se monta una sola vez al cargar la página.
function GrainDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
    >
      <defs>
        <filter id="mica-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0.18 0"
          />
        </filter>
      </defs>
    </svg>
  );
}

window.PhotoPlaceholder = PhotoPlaceholder;
window.GrainDefs = GrainDefs;
