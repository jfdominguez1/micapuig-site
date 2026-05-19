// 17 obras reales — imágenes en public/images/
// Distribución: Aranka 7 · Infancia 7 · Naturaleza 3
// Metadata de técnica, medidas y año pendiente de completar por la artista.

export type Aspect = 'vertical' | 'horizontal' | 'square';
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
  image?: string;
  palette: [string, string];
  layout: LayoutId;
}

const P: [string, string] = ['#d6c4ad', '#2e2820'];

export const WORKS: Work[] = [
  { id: 1,  image: 'aranka-dialogo-en-rojo.jpg',   series: 'aranka',    title: 'Diálogo en rojo',       year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 2,  image: 'aranka-dialogo-en-blanco.jpg',  series: 'aranka',    title: 'Diálogo en blanco',     year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 3,  image: 'aranka-hermanas-1.jpg',         series: 'aranka',    title: 'Hermanas I',            year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 4,  image: 'aranka-hermanas-2.jpg',         series: 'aranka',    title: 'Hermanas II',           year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 5,  image: 'aranka-aurelia-xilo.jpg',       series: 'aranka',    title: 'Aurelia Aranka',        year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 6,  image: 'aranka-cuello-ellas.jpg',       series: 'aranka',    title: 'Cuello ellas',          year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 7,  image: 'aranka-madre-e-hija.jpg',       series: 'aranka',    title: 'Madre e hija',          year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 8,  image: 'infancia-tabula.jpg',           series: 'infancia',  title: 'Tabula. Tabula. Tabula', year: 2024, technique: '', dimensions: '', aspect: 'vertical',  palette: P, layout: 'vsoft' },
  { id: 9,  image: 'infancia-ausentes.jpg',         series: 'infancia',  title: 'Ausentes',              year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 10, image: 'infancia-barro-ii.jpg',         series: 'infancia',  title: 'Barro II',              year: 2024, technique: '', dimensions: '', aspect: 'square',     palette: P, layout: 'vsoft' },
  { id: 11, image: 'infancia-la-cueva.jpg',         series: 'infancia',  title: 'La cueva',              year: 2024, technique: '', dimensions: '', aspect: 'square',     palette: P, layout: 'vsoft' },
  { id: 12, image: 'infancia-pincha-el-coral.jpg',  series: 'infancia',  title: 'Pincha el coral',       year: 2024, technique: '', dimensions: '', aspect: 'square',     palette: P, layout: 'vsoft' },
  { id: 13, image: 'infancia-maia.jpg',             series: 'infancia',  title: 'Maia',                  year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 14, image: 'infancia-triciclo.jpg',         series: 'infancia',  title: 'Triciclo',              year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 15, image: 'naturaleza-entramado.jpg',      series: 'naturaleza', title: 'Entramado',            year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 16, image: 'naturaleza-rodeada-2.jpg',      series: 'naturaleza', title: 'Rodeada 2',            year: 2024, technique: '', dimensions: '', aspect: 'vertical',   palette: P, layout: 'vsoft' },
  { id: 17, image: 'naturaleza-sin-titulo.jpg',     series: 'naturaleza', title: 'Sin título',           year: 2024, technique: '', dimensions: '', aspect: 'horizontal', palette: P, layout: 'vsoft' },
];

export const SERIES = [
  { id: 'infancia',   label: 'Infancia' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'aranka',     label: 'Aranka' },
] as const;

export type SeriesId = typeof SERIES[number]['id'];

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
