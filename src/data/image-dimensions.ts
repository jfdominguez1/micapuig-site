// Dimensiones reales (px) de cada foto de obra — para reservar aspect-ratio
// y evitar layout shift. Clave 'images/<slug>'. Set definitivo 2026-06-10,
// optimizado a máx 2000px (JPEG q82).

export const IMG_DIMS: Record<string, { w: number; h: number }> = {
  'images/al-cuello.jpg': { w: 1500, h: 2000 },
  'images/aurelia-aranka.jpg': { w: 1136, h: 2000 },
  'images/ausente.jpg': { w: 1518, h: 2000 },
  'images/burbuja.jpg': { w: 2000, h: 1953 },
  'images/hermanas.jpg': { w: 717, h: 497 },
  'images/juega-i-y-ii.jpg': { w: 668, h: 454 },
  'images/vueltas.jpg': { w: 960, h: 1077 },
  'images/madre-e-hija.jpg': { w: 1500, h: 2000 },
  'images/sin-titulo-diptico-blanco-rojo.jpg': { w: 2000, h: 1354 },
  'images/tabula-rasa-ii.jpg': { w: 1443, h: 2000 },
  'images/barro.jpg': { w: 2000, h: 1951 },
  'images/la-cueva.jpg': { w: 768, h: 793 },
  'images/pincha-el-coral.jpg': { w: 1976, h: 2000 },
  'images/simbiosis.jpg': { w: 2000, h: 1518 },
  'images/rodeada.jpg': { w: 1504, h: 2000 },
  'images/sos-un-seis.jpg': { w: 2000, h: 1456 },
  'images/tramado.jpg': { w: 1431, h: 2000 },
  'images/revelo.jpg': { w: 850, h: 425 },
};
