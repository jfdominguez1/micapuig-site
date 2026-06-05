// Data layer: obras + muestras + CV + videos.
// UI strings multilingües viven en ./copy.ts

export type Aspect = 'vertical' | 'horizontal' | 'square';

export const SERIES = [
  { id: 'infancia',   label: 'Infancia' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'aranka',     label: 'Aranka' },
] as const;

export type SeriesId = typeof SERIES[number]['id'];

export interface Work {
  id: number;
  title: string;
  series: SeriesId;
  year: number;
  technique: string;
  dimensions: string;
  aspect: Aspect;
  image: string;
}

export const WORKS: Work[] = [
  // Set inicial (2026-05-18)
  { id: 1,  image: 'aranka-dialogo-en-rojo.jpg',    series: 'aranka',     title: 'Diálogo en rojo',         year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 2,  image: 'aranka-dialogo-en-blanco.jpg',  series: 'aranka',     title: 'Diálogo en blanco',       year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 3,  image: 'aranka-hermanas-1.jpg',         series: 'aranka',     title: 'Hermanas I',              year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 4,  image: 'aranka-hermanas-2.jpg',         series: 'aranka',     title: 'Hermanas II',             year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 5,  image: 'aranka-aurelia-xilo.jpg',       series: 'aranka',     title: 'Aurelia Aranka',          year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 6,  image: 'aranka-cuello-ellas.jpg',       series: 'aranka',     title: 'Cuello ellas',            year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 7,  image: 'aranka-madre-e-hija.jpg',       series: 'aranka',     title: 'Madre e hija',            year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 8,  image: 'infancia-tabula.jpg',           series: 'infancia',   title: 'Tabula. Tabula. Tabula',  year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 9,  image: 'infancia-ausentes.jpg',         series: 'infancia',   title: 'Ausentes',                year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 10, image: 'infancia-barro-ii.jpg',         series: 'infancia',   title: 'Barro II',                year: 2024, technique: '', dimensions: '', aspect: 'square'   },
  { id: 11, image: 'infancia-la-cueva.jpg',         series: 'infancia',   title: 'La cueva',                year: 2024, technique: '', dimensions: '', aspect: 'square'   },
  { id: 12, image: 'infancia-pincha-el-coral.jpg',  series: 'infancia',   title: 'Pincha el coral',         year: 2024, technique: '', dimensions: '', aspect: 'square'   },
  { id: 13, image: 'infancia-maia.jpg',             series: 'infancia',   title: 'Maia',                    year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 14, image: 'infancia-triciclo.jpg',         series: 'infancia',   title: 'Triciclo',                year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 15, image: 'naturaleza-entramado.jpg',      series: 'naturaleza', title: 'Entramado',               year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 16, image: 'naturaleza-rodeada-2.jpg',      series: 'naturaleza', title: 'Rodeada 2',               year: 2024, technique: '', dimensions: '', aspect: 'vertical' },
  { id: 17, image: 'naturaleza-sin-titulo.jpg',     series: 'naturaleza', title: 'Sin título',              year: 2024, technique: '', dimensions: '', aspect: 'horizontal' },

  // 2026-05-24 (sprint 2)
  { id: 18, image: 'aranka-te-veo.jpg',             series: 'aranka',     title: 'Te veo I, II, III',       year: 2024, technique: '', dimensions: '', aspect: 'horizontal' },
  { id: 19, image: 'aranka-hermanas.jpg',           series: 'aranka',     title: 'Hermanas',                year: 2024, technique: '', dimensions: '', aspect: 'horizontal' },
  { id: 20, image: 'aranka-diptico-blanco-rojo.jpg',series: 'aranka',     title: 'Díptico en blanco y rojo',year: 2024, technique: '', dimensions: '', aspect: 'horizontal' },
  { id: 21, image: 'aranka-ronda-redonda.jpg',      series: 'aranka',     title: 'La ronda redonda',        year: 2024, technique: '', dimensions: '', aspect: 'square'   },
  { id: 22, image: 'aranka-diptico-aurelia.jpg',    series: 'aranka',     title: 'Díptico Aurelia Aranka',  year: 2024, technique: '', dimensions: '', aspect: 'horizontal' },
  { id: 23, image: 'infancia-escuela.jpg',          series: 'infancia',   title: 'Escuela',                 year: 2024, technique: '', dimensions: '', aspect: 'horizontal' },
  { id: 24, image: 'infancia-juega.jpg',            series: 'infancia',   title: 'Juega I y II',            year: 2024, technique: '', dimensions: '', aspect: 'horizontal' },
  { id: 25, image: 'infancia-nube.jpg',             series: 'infancia',   title: 'Nube',                    year: 2024, technique: '', dimensions: '', aspect: 'square'   },
  { id: 26, image: 'naturaleza-hoja.jpg',           series: 'naturaleza', title: 'Hoja',                    year: 2024, technique: '', dimensions: '', aspect: 'horizontal' },
];

// CV — datos compartidos entre idiomas. Los labels de grupo (cv.indiv, etc.)
// se traducen en copy.ts; las filas son nombres propios y se dejan tal cual.
export const CV_DATA: Record<string, string[][]> = {
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
};

// Nota: EXHIBITIONS y VIDEOS se removieron (2026-06-05) — Mica quitó las secciones
// Muestras y Videos del sitio. Las fotos en public/exhibitions/ quedan pendientes de
// borrado (requiere confirmación). Si vuelven las secciones, recuperar de git history.
