// 20 obras placeholder — 8 verticales 4:5 · 7 horizontales 5:4 · 5 cuadradas 1:1
// Distribución por serie: Infancia 7 · Naturaleza 7 · Aranka 6
// La metadata es plausible para fotografía analógica; la artista la
// sobreescribirá con datos reales cuando llegue el contenido definitivo.

export type Aspect = 'vertical' | 'horizontal' | 'square';
export type SeriesId = 'infancia' | 'naturaleza' | 'aranka';
export type LayoutId =
  | 'vsoft'
  | 'horizon'
  | 'radial'
  | 'diag'
  | 'vignette'
  | 'halflight'
  | 'spine';

export interface Work {
  id: number;
  title: string;
  series: SeriesId;
  year: number;
  technique: string;
  dimensions: string;
  aspect: Aspect;
  palette: [string, string];
  layout: LayoutId;
}

export const WORKS: Work[] = [
  { id: 1,  title: 'Cuarto interior',         series: 'infancia',   year: 2022, technique: 'Gelatina de plata sobre papel baritado',    dimensions: '40 × 50 cm', aspect: 'vertical',   palette: ['#d6c4ad', '#2e2820'], layout: 'vsoft' },
  { id: 2,  title: 'Mediodía en la quinta',   series: 'naturaleza', year: 2023, technique: 'Cianotipo sobre algodón',                    dimensions: '35 × 28 cm', aspect: 'horizontal', palette: ['#aebfc4', '#1f3036'], layout: 'horizon' },
  { id: 3,  title: 'Aranka I',                series: 'aranka',     year: 2024, technique: 'Copia química al gelatino-bromuro',          dimensions: '30 × 40 cm', aspect: 'vertical',   palette: ['#bdb6ad', '#1e1d1c'], layout: 'vignette' },
  { id: 4,  title: 'Sombra del durazno',      series: 'naturaleza', year: 2023, technique: 'Polaroid 600, copia única',                  dimensions: '20 × 20 cm', aspect: 'square',     palette: ['#cdbfa6', '#3c2f22'], layout: 'radial' },
  { id: 5,  title: 'Pieza de tela, primera',  series: 'infancia',   year: 2021, technique: "Negativo 4×5'', copia por contacto",         dimensions: '45 × 36 cm', aspect: 'horizontal', palette: ['#c4b6a0', '#2a2218'], layout: 'diag' },
  { id: 6,  title: 'Aranka, ventana',         series: 'aranka',     year: 2024, technique: 'Gelatina de plata, virado al selenio',       dimensions: '30 × 40 cm', aspect: 'vertical',   palette: ['#cfcac3', '#272422'], layout: 'halflight' },
  { id: 7,  title: 'Marca del agua',          series: 'naturaleza', year: 2022, technique: 'Cianotipo sobre papel arches',               dimensions: '25 × 25 cm', aspect: 'square',     palette: ['#9caeb4', '#1c2a30'], layout: 'vsoft' },
  { id: 8,  title: 'Niños del verano',        series: 'infancia',   year: 2022, technique: 'Gelatina de plata sobre papel rc',           dimensions: '50 × 40 cm', aspect: 'horizontal', palette: ['#cabba2', '#2d2519'], layout: 'horizon' },
  { id: 9,  title: 'Helecho en mesa',         series: 'naturaleza', year: 2024, technique: 'Cianotipo sobre algodón crudo',              dimensions: '40 × 50 cm', aspect: 'vertical',   palette: ['#9badab', '#1a2624'], layout: 'spine' },
  { id: 10, title: 'Aranka III',              series: 'aranka',     year: 2025, technique: 'Copia química, papel baritado',              dimensions: '30 × 40 cm', aspect: 'vertical',   palette: ['#bcb6b1', '#181614'], layout: 'vignette' },
  { id: 11, title: 'Casa, lado norte',        series: 'infancia',   year: 2023, technique: 'Negativo de medio formato, copia analógica', dimensions: '50 × 40 cm', aspect: 'horizontal', palette: ['#c8baa3', '#2b2519'], layout: 'horizon' },
  { id: 12, title: 'Ramas, tarde',            series: 'naturaleza', year: 2024, technique: 'Gelatina de plata virada al selenio',        dimensions: '30 × 30 cm', aspect: 'square',     palette: ['#b0ada4', '#1d1c1a'], layout: 'diag' },
  { id: 13, title: 'Aranka, espalda',         series: 'aranka',     year: 2025, technique: 'Polaroid 600, copia única',                  dimensions: '20 × 25 cm', aspect: 'vertical',   palette: ['#cdc4b4', '#262220'], layout: 'halflight' },
  { id: 14, title: 'Patio, lluvia reciente',  series: 'infancia',   year: 2021, technique: 'Cianotipo sobre algodón',                    dimensions: '45 × 36 cm', aspect: 'horizontal', palette: ['#a8b8be', '#1c2b32'], layout: 'vsoft' },
  { id: 15, title: 'Hoja seca, mesa',         series: 'naturaleza', year: 2023, technique: 'Gelatina de plata sobre papel baritado',     dimensions: '30 × 30 cm', aspect: 'square',     palette: ['#c2b6a0', '#241d14'], layout: 'radial' },
  { id: 16, title: 'Aranka, manos',           series: 'aranka',     year: 2024, technique: 'Gelatina de plata sobre papel rc',           dimensions: '30 × 30 cm', aspect: 'square',     palette: ['#c6bfb6', '#1e1c1a'], layout: 'vignette' },
  { id: 17, title: 'Cama deshecha',           series: 'infancia',   year: 2022, technique: 'Negativo de medio formato, copia analógica', dimensions: '50 × 40 cm', aspect: 'horizontal', palette: ['#cdbfa8', '#2e2618'], layout: 'horizon' },
  { id: 18, title: 'Río chico',               series: 'naturaleza', year: 2025, technique: 'Calotipo, copia por contacto',               dimensions: '40 × 50 cm', aspect: 'vertical',   palette: ['#b9a787', '#2c2113'], layout: 'spine' },
  { id: 19, title: 'Aranka, retrato frontal', series: 'aranka',     year: 2025, technique: 'Copia única, gelatina de plata',             dimensions: '30 × 40 cm', aspect: 'vertical',   palette: ['#c2bbb1', '#1c1a18'], layout: 'vsoft' },
  { id: 20, title: 'Lluvia sobre cuaderno',   series: 'infancia',   year: 2024, technique: 'Gelatina de plata sobre papel baritado',     dimensions: '50 × 40 cm', aspect: 'horizontal', palette: ['#cabea9', '#28211a'], layout: 'diag' },
];

export const SERIES: { id: SeriesId; label: string }[] = [
  { id: 'infancia',   label: 'Infancia' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'aranka',     label: 'Aranka' },
];

export const ACCENT = {
  rgba: 'rgba(141, 23, 44, 0.48)',
  swatch: '#8d172c',
};

export const COPY = {
  tabs: { works: 'Obra', bio: 'Bio', contact: 'Contacto' },
  filterOn: 'Filtro · ON',
  filterOff: 'Filtro · OFF',
  allLabel: 'Todas',
  bioTitle: 'Statement',
  cvTitle: 'Currículum',
  groups: {
    indiv: 'Exposiciones individuales',
    colec: 'Exposiciones colectivas',
    resid: 'Residencias',
    premios: 'Premios',
  },
  contact: {
    city: 'Buenos Aires · Argentina',
    mail: 'estudio@micaelapuig.com',
    dossier: 'Descargar dossier (PDF)',
  },
  footer: '© 2026 Micaela Puig · Buenos Aires',
  statement: [
    'Mi trabajo se sostiene en un registro analógico paciente. La cámara entra en una habitación, en un patio, en la sombra de un árbol, y permanece ahí el tiempo que haga falta. No estoy buscando una imagen: estoy esperando que un objeto, una superficie o un cuerpo deje su rastro propio sobre la película.',
    'Las series Infancia, Naturaleza y Aranka funcionan como tres modos de la misma escucha. Infancia trabaja con casas, objetos y luces que ya estaban antes que yo. Naturaleza se ocupa de lo que crece, se seca y se mueve sin pedir permiso. Aranka es un cuerpo y una presencia que sostienen el ejercicio del retrato a lo largo del tiempo.',
    'Reviso cada copia como un pliego suelto. La materialidad del papel, el virado, la mancha que aparece sin haber sido convocada, todo eso forma parte del trabajo. Una fotografía no termina cuando se dispara el obturador; termina, si termina, cuando alguien la sostiene en la mano.',
  ],
  cv: {
    indiv: [
      ['2025', 'Aranka', 'Galería Pasaje 17', 'Buenos Aires'],
      ['2023', 'Mesa de taller', 'Centro Cultural Recoleta', 'Buenos Aires'],
      ['2021', 'Patio interior', 'Espacio Tucumán', 'Rosario'],
    ],
    colec: [
      ['2024', 'Cinco fotógrafas analógicas', 'MACBA', 'Buenos Aires'],
      ['2024', 'Procesos', 'Fundación Klemm', 'Buenos Aires'],
      ['2022', 'Trazos de plata', 'Galería Vasari', 'Buenos Aires'],
      ['2021', 'Bienal de Fotografía', 'Centro de Arte Contemporáneo', 'Quito'],
    ],
    resid: [
      ['2025', 'Residencia Aranka', 'URRA', 'Buenos Aires'],
      ['2023', 'FAAP — Programa Sur', 'FAAP', 'São Paulo'],
      ['2022', 'Casa Tres Patios', 'C3P', 'Medellín'],
    ],
    premios: [
      ['2024', 'Premio Itaú Cultural — Fotografía', 'Itaú Cultural', 'Buenos Aires'],
      ['2022', 'Mención Bienal de Arte Joven', 'BAJBA', 'Buenos Aires'],
    ],
  } as Record<string, string[][]>,
};
