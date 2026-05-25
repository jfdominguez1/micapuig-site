# Infraestructura Email y Dominio — Micaela Puig

> Creado: 2026-05-25

---

## Dominio

| Item | Detalle |
|------|---------|
| Dominio | **micaelapuig.com** |
| Registrador | GoDaddy |
| DNS | Cloudflare (free) — a migrar desde GoDaddy |
| Plan Cloudflare | Free |

---

## Arquitectura de Email

### Recibir emails: Cloudflare Email Routing (gratis)

```
[alguien envía a mp@micaelapuig.com]
        ↓
Cloudflare Email Routing (MX records en micaelapuig.com)
        ↓
Reenvío a → micaela.puig@gmail.com
```

### Enviar emails: Brevo SMTP (gratis, 300 mails/día)

```
[Gmail → "Send as" mp@micaelapuig.com]
        ↓
Brevo SMTP relay (smtp-relay.brevo.com:587)
        ↓
[destinatario recibe mail desde mp@micaelapuig.com]
```

### Flujo completo

```
RECIBIR:  mundo → micaelapuig.com (Cloudflare) → micaela.puig@gmail.com
ENVIAR:   Gmail → Brevo SMTP → mundo (aparece como mp@micaelapuig.com)
```

---

## Configuración paso a paso

### PASO 1 — Mover DNS a Cloudflare (15 min)

1. Ir a **cloudflare.com** → crear cuenta gratis (o usar una existente)
2. **Add a domain** → ingresar `micaelapuig.com`
3. Elegir plan **Free**
4. Cloudflare escanea y muestra los registros DNS actuales de GoDaddy → revisar que estén todos → **Continue**
5. Cloudflare da dos **nameservers**, algo como:
   - `ada.ns.cloudflare.com`
   - `stan.ns.cloudflare.com`
6. Ir a **GoDaddy → My Products → micaelapuig.com → DNS → Nameservers**
   - Cambiar de "GoDaddy" a "Custom" y pegar los dos nameservers de Cloudflare
   - Guardar
7. Propagación: 5 min – 2 h (Cloudflare avisa por mail cuando activa)

---

### PASO 2 — DNS del sitio en Cloudflare (5 min)

Una vez activo Cloudflare, agregar los registros para GitHub Pages:

**4 registros A** (para `micaelapuig.com`):

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| A | `@` | `185.199.108.153` | Auto |
| A | `@` | `185.199.109.153` | Auto |
| A | `@` | `185.199.110.153` | Auto |
| A | `@` | `185.199.111.153` | Auto |

**1 registro CNAME** (para `www`):

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| CNAME | `www` | `jfdominguez1.github.io` | Auto |

> **Importante**: asegurarse de que los registros tengan el proxy de Cloudflare (nube naranja) en **OFF** (solo DNS, nube gris). GitHub Pages + Cloudflare proxy pueden dar conflicto con SSL.

---

### PASO 3 — Configurar GitHub Pages con dominio propio (5 min)

1. Ir al repo: **github.com/jfdominguez1/micapuig-site → Settings → Pages**
2. En "Custom domain" → escribir `micaelapuig.com` → Save
3. Tildar **Enforce HTTPS**
4. GitHub crea automáticamente el archivo `CNAME` en el repo

Luego en el código (DevStudio lo hace):
- `astro.config.mjs` → `site: 'https://micaelapuig.com'` + quitar `base: '/micapuig-site'`
- Rebuild + push → GitHub Actions redeploya

---

### PASO 4 — Cloudflare Email Routing (10 min)

1. En Cloudflare → tu dominio `micaelapuig.com` → **Email** → **Email Routing**
2. Activar Email Routing → Cloudflare agrega los MX records automáticamente
3. En **Routing Rules → Custom Address**:
   - Address: `mp@micaelapuig.com`
   - Action: Send to → `micaela.puig@gmail.com`
   - Save
4. Cloudflare manda un mail de verificación a `micaela.puig@gmail.com` → confirmar

---

### PASO 5 — Brevo SMTP (15 min)

1. Ir a **brevo.com** → crear cuenta gratis (con `micaela.puig@gmail.com` o `mp@micaelapuig.com`)
2. En **Settings → Senders, Domains & Dedicated IPs → Senders**:
   - Add a sender → Name: "Micaela Puig" / Email: `mp@micaelapuig.com`
   - Confirmar código de verificación (llega al Gmail de Mica por el Email Routing)
3. En **Settings → Senders, Domains & Dedicated IPs → Domains**:
   - Add a domain → `micaelapuig.com`
   - Brevo da registros DNS (TXT para DKIM y SPF) → agregarlos en Cloudflare
   - Volver a Brevo → Verify
4. En **Settings → SMTP & API → SMTP**:
   - Anotar: SMTP server, Login (email de la cuenta Brevo), y generar una **SMTP key**

---

### PASO 6 — Gmail "Send as" (5 min)

En Gmail de Mica (`micaela.puig@gmail.com`):

1. **Settings (⚙️) → See all settings → Accounts and Import**
2. **Send mail as** → "Add another email address"
   - Name: `Micaela Puig`
   - Email: `mp@micaelapuig.com`
   - Desmarcar "Treat as alias"
3. SMTP Server: `smtp-relay.brevo.com` / Port: `587` / TLS: sí
4. Username: el login de Brevo (el mail de la cuenta)
5. Password: la SMTP key de Brevo
6. Confirmar el código que llega a `mp@micaelapuig.com` (pasa por Cloudflare → llega a Gmail)
7. En Gmail → **Send mail as** → hacer `mp@micaelapuig.com` el **default**

---

## Checklist de estado

### Paso 1 — DNS a Cloudflare
- [ ] Cuenta Cloudflare creada
- [ ] Dominio `micaelapuig.com` agregado a Cloudflare
- [ ] Nameservers cambiados en GoDaddy
- [ ] Cloudflare confirmó activación

### Paso 2 — DNS del sitio
- [ ] 4 registros A de GitHub Pages en Cloudflare
- [ ] CNAME `www` en Cloudflare
- [ ] Proxy OFF (nube gris) en registros A y CNAME

### Paso 3 — GitHub Pages
- [ ] Custom domain `micaelapuig.com` en repo Settings
- [ ] HTTPS enforced
- [ ] `astro.config.mjs` actualizado (DevStudio)
- [ ] Build + push OK, sitio live en `micaelapuig.com`

### Paso 4 — Email Routing
- [ ] Email Routing activado en Cloudflare
- [ ] Regla `mp@micaelapuig.com` → `micaela.puig@gmail.com`
- [ ] Mail de prueba recibido en Gmail ✓

### Paso 5 — Brevo
- [ ] Cuenta Brevo creada
- [ ] Sender `mp@micaelapuig.com` verificado
- [ ] Dominio `micaelapuig.com` verificado (DKIM + SPF en Cloudflare)
- [ ] SMTP server + login + key anotados

### Paso 6 — Gmail Send as
- [ ] "Send as mp@micaelapuig.com" configurado en Gmail de Mica
- [ ] Mail de prueba enviado desde `mp@micaelapuig.com` ✓
- [ ] `mp@micaelapuig.com` puesto como default en Gmail

---

## Alertas y renovaciones

| Qué | Cuándo | Acción |
|-----|--------|--------|
| Dominio micaelapuig.com | Ver GoDaddy | Renovar en GoDaddy (o transferir a Cloudflare si se quiere centralizar) |
| Brevo free tier | Permanente | 300 mails/día, sin vencimiento |
| Cloudflare Email Routing | Permanente | Gratis, sin vencimiento |

---

## Escalamiento futuro

Si en algún momento se necesita más:
- **Google Workspace** ($7/mes) — buzón completo, Calendar, Drive con dominio propio
- Transferir el dominio de GoDaddy a Cloudflare Registrar → centraliza todo en un lugar y suele ser más barato
