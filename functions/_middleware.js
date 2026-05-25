// Redirige visitantes según país de origen al idioma más probable.
// Solo actúa sobre la raíz "/"; cualquier otra ruta pasa sin tocar.

const PT = new Set(['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL']);
const ES = new Set([
  'AR', 'MX', 'ES', 'CO', 'CL', 'PE', 'VE', 'EC',
  'BO', 'PY', 'UY', 'CR', 'PA', 'DO', 'GT', 'HN',
  'SV', 'NI', 'CU', 'PR', 'GQ',
]);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);

  if (url.pathname !== '/') return next();

  const country = request.headers.get('CF-IPCountry') ?? request.cf?.country ?? '';

  if (PT.has(country)) {
    return Response.redirect(new URL('/pt/', request.url).toString(), 302);
  }
  if (ES.has(country)) {
    return next(); // raíz ya es ES
  }
  return Response.redirect(new URL('/en/', request.url).toString(), 302);
}
