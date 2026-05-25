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

  // Nuevas (Sprint 2 — 2026-05-24). Decidir si reemplazan a algunas anteriores (díptico blanco/rojo vs los 2 diálogos individuales, etc.)
  { id: 18, image: 'aranka-te-veo.jpg',             series: 'aranka',     title: 'Te veo I, II, III',    year: 2024, technique: '', dimensions: '', aspect: 'horizontal', palette: P, layout: 'vsoft' },
  { id: 19, image: 'aranka-hermanas.jpg',           series: 'aranka',     title: 'Hermanas',             year: 2024, technique: '', dimensions: '', aspect: 'horizontal', palette: P, layout: 'vsoft' },
  { id: 20, image: 'aranka-diptico-blanco-rojo.jpg',series: 'aranka',     title: 'Díptico en blanco y rojo', year: 2024, technique: '', dimensions: '', aspect: 'horizontal', palette: P, layout: 'vsoft' },
  { id: 21, image: 'aranka-ronda-redonda.jpg',      series: 'aranka',     title: 'La ronda redonda',     year: 2024, technique: '', dimensions: '', aspect: 'square',     palette: P, layout: 'vsoft' },
  { id: 22, image: 'aranka-diptico-aurelia.jpg',    series: 'aranka',     title: 'Díptico Aurelia Aranka', year: 2024, technique: '', dimensions: '', aspect: 'horizontal', palette: P, layout: 'vsoft' },
  { id: 23, image: 'infancia-escuela.jpg',          series: 'infancia',   title: 'Escuela',              year: 2024, technique: '', dimensions: '', aspect: 'horizontal', palette: P, layout: 'vsoft' },
  { id: 24, image: 'infancia-juega.jpg',            series: 'infancia',   title: 'Juega I y II',         year: 2024, technique: '', dimensions: '', aspect: 'horizontal', palette: P, layout: 'vsoft' },
  { id: 25, image: 'infancia-nube.jpg',             series: 'infancia',   title: 'Nube',                 year: 2024, technique: '', dimensions: '', aspect: 'square',     palette: P, layout: 'vsoft' },
  { id: 26, image: 'naturaleza-hoja.jpg',           series: 'naturaleza', title: 'Hoja',                 year: 2024, technique: '', dimensions: '', aspect: 'horizontal', palette: P, layout: 'vsoft' },
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
  bioShort: 'Artista visual y profesora de arte con especialidad en grabado.',
  groups: {
    indiv: 'Exposiciones individuales',
    colec: 'Exposiciones colectivas',
    resid: 'Residencias',
    premios: 'Premios',
    colab: 'Colaboraciones',
    form: 'Formación',
    comp: 'Complementarios',
  },
  contact: {
    city: 'São Paulo · Brasil',
    mail: 'estudio@micaelapuig.com',
    dossier: 'Descargar dossier (PDF)',
  },
  footer: '© 2026 Micaela Puig · São Paulo',
  statement: [
    'Micaela Puig (Argentina, 1976. Radicada en São Paulo desde 2020) es artista visual y profesora de arte con especialidad en grabado.',
    'A través de un análisis de las relaciones humanas y su relación con el territorio, su producción artística actúa como un dispositivo de memoria: rescata las marcas y cicatrices del pasado para traerlas al presente, exponiéndolas como un espacio activo de pensamiento, diálogo y reparación.',
    'Artista multifacética que utiliza técnicas como el dibujo, el grabado, la pintura, los objetos, el collage y el video, prioriza el concepto por sobre la técnica y busca en el lenguaje artístico los recursos que dialoguen mejor con cada obra.',
    'En su obra puede observarse cómo decodifica el comportamiento humano con su entorno y con sus pares, trayendo el pasado al presente como recurso de comprensión, haciendo convivir las marcas que el pasado deja, exponiéndolas para reflexionarlas, denunciarlas o reescribirlas.',
  ],
  cv: {
    indiv: [
      ['2025', 'Aurelia', 'Alê Espacio de Arte', 'São Paulo'],
      ['2016', 'Soluciones Impresas', '—', 'Buenos Aires'],
    ],
    colec: [
      ['2026', 'Projeto Vitrine', 'Espacio Move Arte', 'São Paulo'],
      ['2025', 'Tarde de exposição e conversas sobre fotolivros e libros de artista', 'Espacio Move Arte', 'São Paulo'],
      ['2024', 'Experimentando um olhar de criança em nós', 'Espacio Move Arte', 'São Paulo'],
      ['2024', 'Desdobrando linhas', 'Espacio Move Arte', 'São Paulo'],
      ['2023', '100 works on paper benefit', 'Kentler International Drawing Space', 'Brooklyn, NY'],
      ['2023', 'Encontro de arte Villaggio', 'Condominio Villaggio Panamby', 'São Paulo'],
      ['2023', 'Roteiro de ateliês SP Arte', 'Atelier Lavandería', 'São Paulo'],
      ['2023', 'Roteiro de ateliês zona sul', 'Espacio Move Arte', 'São Paulo'],
      ['2018', 'III Bienal Internacional de Grabado REA', 'Escuela Superior de Bellas Artes Regina Pacis', 'Buenos Aires'],
      ['2010', 'Salón Nacional de Artes Visuales — Espacio Avon', 'Galería Isidro Miranda', 'Buenos Aires'],
      ['2009', 'Arte Joven', 'Espacio Darwin, Municipalidad de San Isidro', 'Buenos Aires'],
      ['2009', 'Feria Supermercado de Arte — Arte SI', '—', 'Buenos Aires'],
      ['2003', 'Encuentro de Manchas Primavera 2003', 'La Recova de Posadas', 'Buenos Aires'],
      ['2002', 'Encuentro de Manchas Primavera 2002', 'Centro Cultural Recoleta', 'Buenos Aires'],
    ],
    resid: [
      ['2026', 'Residencia artística', 'Universidad de Bellas Artes de São Paulo', 'São Paulo'],
      ['2022', 'Residencia artística', 'Alê Espacio de Arte', 'São Paulo'],
    ],
    premios: [
      ['2018', 'Segundo premio adquisición — III Bienal Internacional de Grabado REA', '—', 'Buenos Aires'],
      ['2017', 'Primer premio en grabado — Artvilo', 'Municipalidad de Vicente López', 'Buenos Aires'],
      ['2010', 'Preseleccionada en pintura — Salón Nacional de Artes Visuales Espacio Avon', '—', 'Buenos Aires'],
      ['2009', 'Primer premio en pintura — Arte Joven', 'Dirección de Juventud, Municipalidad de San Isidro', 'Buenos Aires'],
    ],
    colab: [
      ['', 'Libro Vademécum del grabado — Graciela Buratti', 'librodearte.com.ar', ''],
    ],
    form: [
      ['2021', 'Profesorado superior de artes visuales con orientación en grabado', 'Instituto Superior Santa Ana', 'Buenos Aires'],
      ['1999', 'Licenciatura en Diseño Gráfico', 'Universidad de Belgrano', 'Buenos Aires'],
    ],
    comp: [
      ['2010', 'Curso de grabado con Leonardo Gotleib', '—', ''],
      ['2006–2009', 'Taller de pintura con Juan Doffo', '—', ''],
      ['2001–2003', 'Taller de pintura con Marcela Boubeau de Secondigne', '—', ''],
      ['2006', 'Curso de orfebrería con María Medici', '—', ''],
      ['1998', 'Curso de fotografía con Baravino Deboto', '—', ''],
    ],
  } as Record<string, string[][]>,
  videosTitle: 'Videos',
  videos: [
    {
      id: 'te-veo',
      title: 'Te veo',
      poster: 'te-veo-poster.jpg',
      note: 'Video — disponible próximamente',
      relatedSeries: 'aranka' as const,
    },
    {
      id: 'natombresa',
      title: 'Natombresa',
      poster: '',
      note: 'Video — disponible próximamente',
      relatedSeries: 'naturaleza' as const,
    },
  ],
  poem: {
    title: 'Te veo',
    lines: [
      'Busco en el pasado',
      'No veo',
      'Como un cuarto oscuro',
      'Desespero',
      'Me tropiezo, rompo cosas',
      'Me detengo',
      'Dejo que mi vista se adapte',
      'Mis sentidos se expandan',
      'Veo',
      'Poco a poco vislumbro cosas',
      'Las traigo al presente',
      'No todo es claro',
      'No todo es luz',
      'Pero veo',
      'Percibo algunos detalles',
      'Creo que te entiendo',
      'Te veo',
    ],
    signature: 'Micaela Puig',
  },
};
