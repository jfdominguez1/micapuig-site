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
  tabs: { works: string; bio: string; texts: string; contact: string };
  bioShort: string;
  bioTitle: string;
  cvTitle: string;
  textsTitle: string;
  allLabel: string;
  groups: { indiv: string; colec: string; resid: string; premios: string; colab: string; form: string; comp: string };
  series: { aranka: string; infancia: string; naturaleza: string };
  poemContext: string;
  modal: { close: string; prev: string; next: string };
  contact: { city: string; mail: string };
  footer: string;
  statement: string[];
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

export const ALE_TEXT = {
  title: 'Aurélia',
  subtitle: 'Apresentação de Micaela Puig artista residente 2022 · Ateliê Alê',
  paragraphs: [
    'O projeto de residência artística, do Espaço de Arte Ateliê Alê, tem como objetivo proporcionar aos artistas a oportunidade de expandir sua pesquisa, assumir riscos, compartilhar e concretizar novas ideias.',
    'Durante o período de residência, Micaela trabalhou em seu projeto intitulado Aurélia. Uma pesquisa que transpassa a memória afetiva e se expande pelas vidas de todas nós, mulheres.',
    '"O projeto em que estou trabalhando surge de um curso de foto-livro onde apresento uma narrativa fotográfica da história da minha avó materna, que deixou poucos registros de sua vida. Nesse processo novas perguntas começaram a surgir e descubro semelhanças no passado das mulheres da minha família. Padrões que se repetem por gerações que me surpreendem até hoje. Na tentativa de reconstruir o passado, procuro fotografias, documentos, histórias de pessoas que tiveram contato com o círculo familiar para preencher os espaços vazios. Quero tentar entender e me colocar no lugar das mulheres do meu passado que percorreram longos e difíceis caminhos para que eu esteja aqui. Mulheres que viveram em diferentes momentos históricos e mesmo que cercadas por um contexto totalmente diferente, suas histórias de amor, família, resiliência, são repetidas por gerações. São feridas não cicatrizadas que precisam de um corte para que drenem e se recuperem. Quero projetar através do meu trabalho com o foto-livro \'Aurélia\' outras dimensões e técnicas que me levem a abrir novos caminhos. A residência me ofereceu a oportunidade de focar nesse projeto que eu comecei no ano passado. O ambiente, a troca com outros artistas e curadores me ajudaram a continuar explorando, questionando e me desafiando para enriquecer minha pesquisa artística."',
  ],
  signature: 'M. Micaela Puig',
};

export const COPY: Record<Lang, LangCopy> = {
  es: {
    htmlLang: 'es',
    metaTitle: 'Micaela Puig — Artista visual y grabadora · São Paulo',
    metaDescription: 'Portfolio de Micaela Puig: artista visual y profesora de arte con especialidad en grabado. Obra, muestras, statement y CV. São Paulo, Brasil.',
    tabs: { works: 'Obra', bio: 'Bio', texts: 'Textos', contact: 'Contacto' },
    bioShort: 'Artista visual y profesora de arte con especialidad en grabado.',
    bioTitle: '',
    cvTitle: 'Currículum',
    textsTitle: 'Textos',
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
    modal: { close: 'Cerrar', prev: 'Anterior', next: 'Siguiente' },
    contact: { city: 'São Paulo · Brasil', mail: 'mp@micaelapuig.com' },
    footer: '© 2026 Micaela Puig · São Paulo',
    statement: [
      'Micaela Puig (Argentina, 1976. Radicada en São Paulo desde 2020) es artista visual y profesora de arte con especialidad en grabado. Estudió en el Instituto Superior Santa Ana (ISSA), en Buenos Aires, Argentina.',
      'Atravesada por un interés en las conductas humanas y su relación con el territorio, su producción artística actúa como un dispositivo de memoria: rescata las marcas y cicatrices del pasado, utilizando las fotografías como materia prima de estudio, para traerlas al presente exponiéndolas como un espacio activo de pensamiento, diálogo y reparación.',
      'Artista contemporánea que trabaja en múltiples soportes como el dibujo, el grabado, la pintura, los objetos, el collage y el video, vencedora de varios premios en pintura y grabado en su país, participó en varias exposiciones colectivas en Argentina y Brasil.',
    ],
  },

  en: {
    htmlLang: 'en',
    metaTitle: 'Micaela Puig — Visual artist & printmaker · São Paulo',
    metaDescription: 'Portfolio of Micaela Puig: visual artist and art teacher specialized in printmaking. Works, exhibitions, statement and CV. Based in São Paulo, Brazil.',
    tabs: { works: 'Works', bio: 'Bio', texts: 'Texts', contact: 'Contact' },
    bioShort: 'Visual artist and art teacher, specialized in printmaking.',
    bioTitle: '',
    cvTitle: 'CV',
    textsTitle: 'Texts',
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
    modal: { close: 'Close', prev: 'Previous', next: 'Next' },
    contact: { city: 'São Paulo · Brazil', mail: 'mp@micaelapuig.com' },
    footer: '© 2026 Micaela Puig · São Paulo',
    statement: [
      'Micaela Puig (Argentina, 1976. Based in São Paulo since 2020) is a visual artist and art teacher specialized in printmaking. She studied at the Instituto Superior Santa Ana (ISSA), Buenos Aires, Argentina.',
      'Driven by an interest in human behaviors and their relationship with the territory, her artistic production acts as a memory device: it rescues the marks and scars of the past, using photographs as raw material for study, to bring them to the present, exposing them as an active space for thought, dialogue, and reparation.',
      'A contemporary artist working across drawing, printmaking, painting, objects, collage and video, she has won several awards in painting and printmaking in Argentina and has participated in collective exhibitions in Argentina and Brazil.',
    ],
  },

  pt: {
    htmlLang: 'pt-BR',
    metaTitle: 'Micaela Puig — Artista visual e gravadora · São Paulo',
    metaDescription: 'Portfólio de Micaela Puig: artista visual e professora de arte com especialidade em gravura. Obra, mostras, statement e currículo. São Paulo, Brasil.',
    tabs: { works: 'Obra', bio: 'Bio', texts: 'Textos', contact: 'Contato' },
    bioShort: 'Artista visual e professora de arte com especialidade em gravura.',
    bioTitle: '',
    cvTitle: 'Currículo',
    textsTitle: 'Textos',
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
    modal: { close: 'Fechar', prev: 'Anterior', next: 'Seguinte' },
    contact: { city: 'São Paulo · Brasil', mail: 'mp@micaelapuig.com' },
    footer: '© 2026 Micaela Puig · São Paulo',
    statement: [
      'Micaela Puig (Argentina, 1976. Radicada em São Paulo desde 2020) é artista visual e professora de arte com especialidade em gravura. Estudou no Instituto Superior Santa Ana (ISSA), em Buenos Aires, Argentina.',
      'Atravessada por um interesse nos comportamentos humanos e sua relação com o território, sua produção artística atua como um dispositivo de memória: resgata as marcas e cicatrizes do passado, utilizando as fotografias como matéria-prima de estudo, para trazê-las ao presente, expondo-as como um espaço ativo de pensamento, diálogo e reparação.',
      'Artista contemporânea que trabalha em múltiplos suportes como o desenho, a gravura, a pintura, os objetos, a colagem e o vídeo, vencedora de vários prêmios em pintura e gravura em seu país, participou de diversas exposições coletivas na Argentina e no Brasil.',
    ],
  },
};
