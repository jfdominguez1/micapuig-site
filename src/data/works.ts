// Data layer: obras + muestras + CV + videos.
// UI strings multilingües viven en ./copy.ts

export type Aspect = 'vertical' | 'horizontal' | 'square';

export interface Work {
  id: number;
  title: string;
  year?: number;        // opcional: algunas obras no tienen año confirmado
  technique: string;
  dimensions: string;
  aspect: Aspect;       // forma de la FOTO (no de la obra) — define el layout en la grilla
  image: string;
}

// Set definitivo de obra (2026-06-10). Metadata de Mica: "Info cuadros web.xlsx".
// Sin series/colecciones (Mica no las asignó) → grilla plana, orden del Excel.
// aspect calculado del ratio de píxeles de cada foto.
export const WORKS: Work[] = [
  { id: 1,  image: 'al-cuello.jpg',                   title: 'Al cuello',         year: 2022, technique: 'Cuello de camisa antiguo y pintura acrílica',                                                              dimensions: '14 cm x 14 cm',         aspect: 'vertical'   },
  { id: 2,  image: 'aurelia-aranka.jpg',              title: 'Aurelia/Aranka',    year: 2022, technique: 'Xilografía sobre papel de algodón 300gr.',                                                                  dimensions: '61 cm x 35,5 cm',       aspect: 'vertical'   },
  { id: 3,  image: 'ausente.jpg',                     title: 'Ausente',           year: 2020, technique: 'Punta seca, calado, collage sobre hoja de algodón',                                                         dimensions: '70 cm x 50 cm',         aspect: 'vertical'   },
  { id: 4,  image: 'burbuja.jpg',                     title: 'Burbuja',           year: 2024, technique: 'Dibujo en papel y objetos en caja de madera',                                                              dimensions: '15 cm x 15 cm',         aspect: 'square'     },
  { id: 5,  image: 'hermanas.jpg',                    title: 'Hermanas',                      technique: 'Dibujo en papel y objetos',                                                                                 dimensions: '12 cm x 24 cm x 3 cm',  aspect: 'horizontal' },
  { id: 6,  image: 'juega-i-y-ii.jpg',                title: 'Juega I y Juega II',year: 2024, technique: 'Grafito sobre papel y madera',                                                                               dimensions: '12 cm x 10 cm',         aspect: 'horizontal' },
  { id: 7,  image: 'vueltas.jpg',                     title: 'Vueltas',           year: 2022, technique: 'Díptico, monocopia y gofrado en papel de algodón',                                                         dimensions: '26 cm x 36 cm',         aspect: 'square'     },
  { id: 8,  image: 'madre-e-hija.jpg',                title: 'Madre e hija',      year: 2026, technique: 'Dibujo con lápiz de color y relieve en papel de algodón',                                                  dimensions: '36 cm x 26 cm',         aspect: 'vertical'   },
  { id: 9,  image: 'sin-titulo-diptico-blanco-rojo.jpg', title: 'sin título',     year: 2022, technique: 'Díptico, monocopia en Gelliplate',                                                                          dimensions: '36 cm x 52 cm',         aspect: 'horizontal' },
  { id: 10, image: 'tabula-rasa-ii.jpg',              title: 'Tabula rasa II',    year: 2018, technique: 'Collage de fotograbado y punta seca',                                                                       dimensions: '38 cm x 28,5 cm',       aspect: 'vertical'   },
  { id: 11, image: 'barro.jpg',                       title: 'Barro',             year: 2026, technique: 'Dibujo en papel y objetos',                                                                                 dimensions: '10 cm x 10 cm x 3 cm',  aspect: 'square'     },
  { id: 12, image: 'la-cueva.jpg',                    title: 'La cueva',                      technique: 'Dibujo en papel y objetos',                                                                                 dimensions: '10 cm x 10 cm x 3 cm',  aspect: 'square'     },
  { id: 13, image: 'pincha-el-coral.jpg',             title: 'Pincha el coral',   year: 2024, technique: 'Dibujo en papel y objetos',                                                                                 dimensions: '12 cm x 12 cm x 3 cm',  aspect: 'square'     },
  { id: 14, image: 'simbiosis.jpg',                   title: 'Simbiosis',         year: 2021, technique: 'Collage, grabado en punta seca en Tetrapak y dibujo con lápices de colores sobre papel de algodón',     dimensions: '56 cm x 76 cm',         aspect: 'horizontal' },
  { id: 15, image: 'rodeada.jpg',                     title: 'Rodeada',           year: 2021, technique: 'Punta seca con Tetrapak',                                                                                   dimensions: '38 cm x 29 cm',         aspect: 'vertical'   },
  { id: 16, image: 'sos-un-seis.jpg',                 title: 'Sos un seis',       year: 2018, technique: 'Fotograbado y relieve sobre papel de algodón',                                                            dimensions: '35 cm x 46 cm',         aspect: 'horizontal' },
  { id: 17, image: 'tramado.jpg',                     title: 'Tramado',           year: 2021, technique: 'Monocopia y lápiz de color sobre papel',                                                                   dimensions: '57,5 cm x 38 cm',       aspect: 'vertical'   },
  { id: 18, image: 'revelo.jpg',                      title: 'Revelo',            year: 2022, technique: 'Tríptico, monocopia sobre papel de algodón con grafito',                                                  dimensions: '10 cm x 22,5 cm',       aspect: 'horizontal' },
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
