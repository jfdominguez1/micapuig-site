// UI strings multilingües. Datos compartidos viven en works.ts.

export type Lang = 'es' | 'en' | 'pt';
export const LANGS: Lang[] = ['es', 'en', 'pt'];
export const DEFAULT_LANG: Lang = 'es';

// Rutas por idioma — el default no usa prefijo
export const langPath = (lang: Lang): string => (lang === DEFAULT_LANG ? '/' : `/${lang}/`);

// Códigos hreflang válidos para Google
export const HREFLANG: Record<Lang, string> = {
  es: 'es',
  en: 'en',
  pt: 'pt-BR',
};

export interface LangCopy {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  tabs: { works: string; bio: string; exhibitions: string; videos: string; contact: string };
  bioShort: string;
  bioTitle: string;
  cvTitle: string;
  exhibitionsTitle: string;
  videosTitle: string;
  allLabel: string;
  groups: { indiv: string; colec: string; resid: string; premios: string; colab: string; form: string; comp: string };
  series: { aranka: string; infancia: string; naturaleza: string };
  poemContext: string;
  videoSoon: string;
  modal: { close: string; prev: string; next: string };
  contact: { city: string; mail: string; dossier: string };
  footer: string;
  statement: string[];
  // Poema "Te veo" — mantengo solo en ES (voz propia de la artista).
}

const POEM_TITLE = 'Te veo';
const POEM_LINES = [
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
];

export const POEM = {
  title: POEM_TITLE,
  lines: POEM_LINES,
  signature: 'Micaela Puig',
};

export const COPY: Record<Lang, LangCopy> = {
  es: {
    htmlLang: 'es',
    metaTitle: 'Micaela Puig — Artista visual y grabadora · São Paulo',
    metaDescription: 'Portfolio de Micaela Puig: artista visual y profesora de arte con especialidad en grabado. Obra, muestras, statement y CV. São Paulo, Brasil.',
    tabs: { works: 'Obra', bio: 'Bio', exhibitions: 'Muestras', videos: 'Videos', contact: 'Contacto' },
    bioShort: 'Artista visual y profesora de arte con especialidad en grabado.',
    bioTitle: 'Statement',
    cvTitle: 'Currículum',
    exhibitionsTitle: 'Muestras',
    videosTitle: 'Videos',
    allLabel: 'Todas',
    groups: {
      indiv: 'Exposiciones individuales',
      colec: 'Exposiciones colectivas',
      resid: 'Residencias',
      premios: 'Premios',
      colab: 'Colaboraciones',
      form: 'Formación',
      comp: 'Complementarios',
    },
    series: { aranka: 'Aranka', infancia: 'Infancia', naturaleza: 'Naturaleza' },
    poemContext: 'Sobre la serie',
    videoSoon: 'Video — disponible próximamente',
    modal: { close: 'Cerrar', prev: 'Anterior', next: 'Siguiente' },
    contact: { city: 'São Paulo · Brasil', mail: 'mp@micaelapuig.com', dossier: 'Descargar dossier (PDF)' },
    footer: '© 2026 Micaela Puig · São Paulo',
    statement: [
      'Micaela Puig (Argentina, 1976. Radicada en São Paulo desde 2020) es artista visual y profesora de arte con especialidad en grabado.',
      'A través de un análisis de las relaciones humanas y su relación con el territorio, su producción artística actúa como un dispositivo de memoria: rescata las marcas y cicatrices del pasado para traerlas al presente, exponiéndolas como un espacio activo de pensamiento, diálogo y reparación.',
      'Artista multifacética que utiliza técnicas como el dibujo, el grabado, la pintura, los objetos, el collage y el video, prioriza el concepto por sobre la técnica y busca en el lenguaje artístico los recursos que dialoguen mejor con cada obra.',
      'En su obra puede observarse cómo decodifica el comportamiento humano con su entorno y con sus pares, trayendo el pasado al presente como recurso de comprensión, haciendo convivir las marcas que el pasado deja, exponiéndolas para reflexionarlas, denunciarlas o reescribirlas.',
    ],
  },

  en: {
    htmlLang: 'en',
    metaTitle: 'Micaela Puig — Visual artist & printmaker · São Paulo',
    metaDescription: 'Portfolio of Micaela Puig: visual artist and art teacher specialized in printmaking. Works, exhibitions, statement and CV. Based in São Paulo, Brazil.',
    tabs: { works: 'Works', bio: 'Bio', exhibitions: 'Exhibitions', videos: 'Videos', contact: 'Contact' },
    bioShort: 'Visual artist and art teacher, specialized in printmaking.',
    bioTitle: 'Statement',
    cvTitle: 'CV',
    exhibitionsTitle: 'Exhibitions',
    videosTitle: 'Videos',
    allLabel: 'All',
    groups: {
      indiv: 'Solo exhibitions',
      colec: 'Group exhibitions',
      resid: 'Residencies',
      premios: 'Awards',
      colab: 'Collaborations',
      form: 'Education',
      comp: 'Complementary studies',
    },
    series: { aranka: 'Aranka', infancia: 'Childhood', naturaleza: 'Nature' },
    poemContext: 'About the series',
    videoSoon: 'Video — coming soon',
    modal: { close: 'Close', prev: 'Previous', next: 'Next' },
    contact: { city: 'São Paulo · Brazil', mail: 'mp@micaelapuig.com', dossier: 'Download dossier (PDF)' },
    footer: '© 2026 Micaela Puig · São Paulo',
    statement: [
      'Micaela Puig (Argentina, 1976. Based in São Paulo since 2020) is a visual artist and art teacher specialized in printmaking.',
      'Through an analysis of human relationships and their connection to the territory, her artistic production operates as a memory device: it rescues the marks and scars of the past and brings them into the present, exposing them as an active space for thought, dialogue and repair.',
      'A multifaceted artist who works with drawing, printmaking, painting, objects, collage and video, she prioritizes concept over technique and seeks in artistic language the resources that best speak to each work.',
      'In her work one can see how she decodes human behavior in relation to its surroundings and peers, bringing the past into the present as a tool for understanding, allowing the marks left by the past to coexist — exposing them to reflect on, denounce or rewrite them.',
    ],
  },

  pt: {
    htmlLang: 'pt-BR',
    metaTitle: 'Micaela Puig — Artista visual e gravadora · São Paulo',
    metaDescription: 'Portfólio de Micaela Puig: artista visual e professora de arte com especialidade em gravura. Obra, mostras, statement e currículo. São Paulo, Brasil.',
    tabs: { works: 'Obra', bio: 'Bio', exhibitions: 'Mostras', videos: 'Vídeos', contact: 'Contato' },
    bioShort: 'Artista visual e professora de arte com especialidade em gravura.',
    bioTitle: 'Statement',
    cvTitle: 'Currículo',
    exhibitionsTitle: 'Mostras',
    videosTitle: 'Vídeos',
    allLabel: 'Todas',
    groups: {
      indiv: 'Exposições individuais',
      colec: 'Exposições coletivas',
      resid: 'Residências',
      premios: 'Prêmios',
      colab: 'Colaborações',
      form: 'Formação',
      comp: 'Complementares',
    },
    series: { aranka: 'Aranka', infancia: 'Infância', naturaleza: 'Natureza' },
    poemContext: 'Sobre a série',
    videoSoon: 'Vídeo — disponível em breve',
    modal: { close: 'Fechar', prev: 'Anterior', next: 'Seguinte' },
    contact: { city: 'São Paulo · Brasil', mail: 'mp@micaelapuig.com', dossier: 'Baixar dossiê (PDF)' },
    footer: '© 2026 Micaela Puig · São Paulo',
    statement: [
      'Micaela Puig (Argentina, 1976. Radicada em São Paulo desde 2020) é artista visual e professora de arte com especialidade em gravura.',
      'A partir de uma análise das relações humanas e sua relação com o território, sua produção artística atua como um dispositivo de memória: resgata as marcas e cicatrizes do passado para trazê-las ao presente, expondo-as como um espaço ativo de pensamento, diálogo e reparação.',
      'Artista multifacetada que utiliza técnicas como o desenho, a gravura, a pintura, os objetos, a colagem e o vídeo, prioriza o conceito sobre a técnica e busca na linguagem artística os recursos que dialoguem melhor com cada obra.',
      'Em sua obra pode-se observar como decodifica o comportamento humano com seu entorno e com seus pares, trazendo o passado ao presente como recurso de compreensão, fazendo conviver as marcas que o passado deixa, expondo-as para refletir, denunciar ou reescrevê-las.',
    ],
  },
};
