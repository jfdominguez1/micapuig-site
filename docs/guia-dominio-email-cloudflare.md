# Guía completa — micaelapuig.com con Cloudflare Pages + Email

> Fecha: 2026-05-25  
> Objetivo: sitio en `micaelapuig.com` + mail `mp@micaelapuig.com` funcionando  
> Tiempo estimado: 45–60 minutos  
> Necesitás: acceso a Cloudflare, GoDaddy, GitHub, Brevo y Gmail de Mica

---

## Antes de empezar — tené a mano

- Usuario y contraseña de **Cloudflare** (donde ya está micaelapuig.com importado)
- Usuario y contraseña de **GoDaddy** (donde está registrado el dominio)
- Acceso a **github.com/jfdominguez1** (o que lo haga JFD)
- Gmail de Mica: `micaela.puig@gmail.com`
- Los nameservers de Cloudflare (te los da Cloudflare en el panel — dos líneas que terminan en `.ns.cloudflare.com`)

---

## PARTE 1 — Limpiar DNS en Cloudflare (5 min)

El dominio ya fue importado a Cloudflare con registros viejos de GoDaddy que hay que borrar.

1. Ir a **cloudflare.com** → loguearte
2. En la lista de dominios → clic en **micaelapuig.com**
3. En el menú lateral izquierdo → clic en **DNS** → **Records**
4. Vas a ver una tabla con los registros actuales. Hacer lo siguiente con cada uno:

---

**Borrar estos 4 registros** (clic en los tres puntitos o el botón "Delete" de cada uno y confirmar):

| Tipo | Nombre | Contenido | Acción |
|------|--------|-----------|--------|
| A | micaelapuig.com | `13.248.243.5` | **BORRAR** |
| A | micaelapuig.com | `76.223.105.230` | **BORRAR** |
| CNAME | _domainconnect | `_domainconnect.gd.domaincontrol.com` | **BORRAR** |
| CNAME | www | `micaelapuig.com` | **BORRAR** |

**Dejar sin tocar este registro:**

| Tipo | Nombre | Contenido | Acción |
|------|--------|-----------|--------|
| TXT | _dmarc | `"v=DMARC1; p=quarantine..."` | **DEJAR** |

---

Al terminar, la tabla de DNS debería tener **solo 1 registro**: el TXT de _dmarc.

---

## PARTE 2 — Crear proyecto en Cloudflare Pages (10 min)

1. En el menú lateral izquierdo de Cloudflare (el panel general, no el de micaelapuig.com) → clic en **Workers & Pages**
2. Clic en el botón **Create**
3. Hacer clic en la pestaña **Pages**
4. Clic en **Connect to Git**

### Conectar GitHub

5. Clic en **Connect GitHub**
6. Se abre una ventana de GitHub pidiendo autorización → clic en **Authorize Cloudflare Pages**
7. GitHub pregunta a qué repositorios dar acceso:
   - Elegir **Only select repositories**
   - Buscar y seleccionar `micapuig-site`
   - Clic en **Install & Authorize**
8. Volvés al panel de Cloudflare → vas a ver el repo `jfdominguez1/micapuig-site` en la lista → clic en **Begin setup**

### Configurar el build

9. Completar los campos así:

| Campo | Valor |
|-------|-------|
| Project name | `micapuig-site` |
| Production branch | `main` |
| Framework preset | Elegir **Astro** del dropdown |
| Build command | `npm run build` |
| Build output directory | `dist` |

10. Bajar hasta la sección **Environment variables (advanced)** → clic para expandirla → clic en **Add variable**:

| Variable | Valor |
|----------|-------|
| `NODE_VERSION` | `20` |

11. Clic en **Save and Deploy**

### Esperar el primer deploy

12. Cloudflare empieza a buildear el sitio. Se ve un log en tiempo real. Tarda 2–4 minutos.
13. Cuando aparece **"Success"** con tilde verde → el sitio está vivo en una URL tipo `micapuig-site-abc.pages.dev`
14. Hacer clic en esa URL para verificar que el sitio carga correctamente

> Si hay error en el build → avisarle a DevStudio con el mensaje de error exacto antes de continuar.

---

## PARTE 3 — Conectar el dominio micaelapuig.com (5 min)

1. Estás dentro del proyecto Pages recién creado → clic en la pestaña **Custom domains**
2. Clic en **Set up a custom domain**
3. Escribir `micaelapuig.com` → clic en **Continue**
4. Cloudflare detecta automáticamente que el dominio está en tu cuenta y ofrece agregar el registro DNS solo → clic en **Activate domain**
5. Esperar que el estado cambie a **Active** (puede tardar 1–2 min)

### Agregar también el www

6. Clic en **Set up a custom domain** de nuevo
7. Escribir `www.micaelapuig.com` → clic en **Continue**
8. Clic en **Activate domain**
9. Esperar que cambie a **Active**

### Verificar SSL

10. Ir a la pestaña **Custom domains** → los dos dominios deben mostrar un candado o estado **Active**
11. Abrir `https://micaelapuig.com` en el browser → debería cargar el sitio (puede tardar unos minutos más si los nameservers aún no propagaron)

---

## PARTE 4 — Cambiar nameservers en GoDaddy (5 min)

Este es el único paso en GoDaddy. Primero necesitás los nameservers de Cloudflare.

### Encontrar los nameservers de Cloudflare

1. En Cloudflare → volver al dominio `micaelapuig.com` → menú lateral → **DNS** → **Records**
2. Hacer scroll hasta arriba o buscar la sección **Cloudflare nameservers** — muestra dos líneas tipo:
   ```
   xxx.ns.cloudflare.com
   yyy.ns.cloudflare.com
   ```
   Copiarlos o tenerlos visibles.

   > También podés ir a **Overview** del dominio → ahí también aparecen los nameservers.

### Cambiar en GoDaddy

3. Abrir otra pestaña → ir a **godaddy.com** → loguearte
4. Clic en tu nombre/avatar arriba a la derecha → **My Products**
5. Buscar `micaelapuig.com` → clic en el botón **DNS** (o en los tres puntitos → "Manage DNS")
6. En la página de DNS de GoDaddy → hacer scroll hasta la sección **Nameservers**
7. Clic en **Change** (o "Manage")
8. Seleccionar la opción **"I'll use my own nameservers"** (o "Enter my own nameservers")
9. Aparecen dos campos vacíos:
   - Pegar el primer nameserver de Cloudflare en el campo 1
   - Pegar el segundo nameserver de Cloudflare en el campo 2
10. Clic en **Save** (o "Continue")
11. GoDaddy muestra un warning diciendo que vas a perder servicios de GoDaddy → clic en **Yes, I consent** o similar → confirmar

### Esperar la propagación

12. Cloudflare manda un mail a la dirección de la cuenta cuando detecta el cambio (puede tardar entre 5 minutos y 2 horas, generalmente es rápido)
13. Podés verificar en Cloudflare → Overview del dominio → si dice **"Active"** en verde, ya propagó

---

## PARTE 5 — Email Routing: mp@micaelapuig.com → Gmail (10 min)

1. En Cloudflare → dominio `micaelapuig.com` → menú lateral → **Email** → **Email Routing**
2. Si aparece un botón **Enable Email Routing** → clic en él
3. Cloudflare agrega automáticamente los registros MX necesarios al DNS → clic en **Add records and enable** si lo pide

### Crear la dirección de reenvío

4. Dentro de Email Routing → sección **Routing rules** → pestaña **Custom addresses**
5. Clic en **Create address**
6. Completar:
   - **Custom address**: escribir `mp` (el sistema agrega `@micaelapuig.com` solo)
   - **Action**: Send to → escribir `micaela.puig@gmail.com`
7. Clic en **Save**

### Verificar el Gmail de destino

8. Cloudflare manda un mail de verificación a `micaela.puig@gmail.com`
9. Mica abre su Gmail → busca el mail de Cloudflare → clic en el link de verificación
10. Volver a Cloudflare → la dirección `mp@micaelapuig.com` debería aparecer como **Active**

### Probar

11. Desde cualquier mail → enviar un mensaje a `mp@micaelapuig.com`
12. Verificar que llega en el Gmail de Mica (`micaela.puig@gmail.com`)

---

## PARTE 6 — Brevo: cuenta y SMTP para enviar (15 min)

Brevo es el servicio que permite que Mica envíe mails *desde* `mp@micaelapuig.com` usando Gmail.

### Crear cuenta en Brevo

1. Ir a **brevo.com**
2. Clic en **Sign up free**
3. Completar con el mail `micaela.puig@gmail.com` y una contraseña
4. Confirmar la cuenta desde el mail de verificación que manda Brevo

### Agregar el sender

5. Una vez dentro → ir a **Settings** (ícono de engranaje arriba a la derecha)
6. Menú lateral → **Senders, Domains & Dedicated IPs** → pestaña **Senders**
7. Clic en **Add a new sender**
8. Completar:
   - **Sender name**: `Micaela Puig`
   - **Sender email**: `mp@micaelapuig.com`
9. Clic en **Save**
10. Brevo manda un mail de verificación a `mp@micaelapuig.com` → ese mail llega al Gmail de Mica (gracias al Email Routing del Paso 5) → Mica lo abre → clic en el link de verificación

### Verificar el dominio

11. Volver a Brevo → **Settings → Senders, Domains & Dedicated IPs** → pestaña **Domains**
12. Clic en **Add a new domain**
13. Escribir `micaelapuig.com` → clic en **Save**
14. Brevo muestra una tabla con registros DNS que hay que agregar:
    - Un registro **TXT** para SPF
    - Uno o dos registros **TXT** o **CNAME** para DKIM

15. Abrir Cloudflare en otra pestaña → dominio `micaelapuig.com` → **DNS → Records**
16. Agregar cada registro que pide Brevo:
    - Clic en **Add record**
    - Tipo: según lo que pide Brevo (TXT o CNAME)
    - Nombre: copiar exactamente el "Host" o "Name" que indica Brevo
    - Contenido: copiar exactamente el "Value" que indica Brevo
    - Proxy: **DNS only** (nube gris)
    - Clic en **Save**
17. Repetir para cada registro que pide Brevo

18. Volver a Brevo → en la tabla del dominio → clic en **Verify** (o "Check DNS records")
19. Cuando todos los checks estén en verde → el dominio está verificado

### Obtener la SMTP key

20. Ir a **Settings → SMTP & API** → pestaña **SMTP**
21. Anotar:
    - **SMTP server**: `smtp-relay.brevo.com`
    - **Port**: `587`
    - **Login**: el mail con el que creaste la cuenta Brevo (`micaela.puig@gmail.com`)
22. Clic en **Generate a new SMTP key** → copiar la key y guardarla en un lugar seguro (se muestra una sola vez)

---

## PARTE 7 — Gmail "Send as": enviar desde mp@micaelapuig.com (5 min)

Este paso lo hace Mica en su Gmail.

1. Abrir **gmail.com** con la cuenta `micaela.puig@gmail.com`
2. Clic en el ícono de engranaje **⚙️** arriba a la derecha → **See all settings**
3. Clic en la pestaña **Accounts and Import**
4. Buscar la sección **Send mail as** → clic en **Add another email address**
5. Se abre una ventana emergente. Completar:
   - **Name**: `Micaela Puig`
   - **Email address**: `mp@micaelapuig.com`
   - **Desmarcar** la opción "Treat as an alias"
6. Clic en **Next Step**
7. Completar los datos SMTP:
   - **SMTP Server**: `smtp-relay.brevo.com`
   - **Port**: `587`
   - **Username**: `micaela.puig@gmail.com` (el login de Brevo)
   - **Password**: la SMTP key que copiaste en el Paso 6
   - Seleccionar **TLS**
8. Clic en **Add Account**
9. Gmail manda un código de confirmación a `mp@micaelapuig.com` → ese mail llega al Gmail de Mica → buscar el mail de Gmail con el código → copiarlo → pegarlo en la ventana emergente → clic en **Verify**

### Poner mp@micaelapuig.com como default

10. Volver a **Settings → Accounts and Import → Send mail as**
11. Al lado de `mp@micaelapuig.com` → clic en **make default**
12. Desde ahora, cuando Mica escriba un mail nuevo en Gmail, el campo "From" va a mostrar `mp@micaelapuig.com` por defecto

### Probar el envío

13. Escribir un mail nuevo en Gmail → verificar que el "From" diga `Micaela Puig <mp@micaelapuig.com>` → enviarlo a cualquier dirección → confirmar que llega correctamente

---

## Checklist final

### Parte 1 — DNS limpio
- [ ] Borrados los 2 registros A de GoDaddy
- [ ] Borrado el CNAME _domainconnect
- [ ] Borrado el CNAME www viejo
- [ ] Solo queda el TXT _dmarc

### Parte 2 — Cloudflare Pages
- [ ] Proyecto `micapuig-site` creado en Cloudflare Pages
- [ ] Conectado al repo `jfdominguez1/micapuig-site`
- [ ] Build settings: Astro / `npm run build` / `dist` / NODE_VERSION=20
- [ ] Primer build exitoso ✓
- [ ] Sitio visible en URL `.pages.dev`

### Parte 3 — Dominio conectado
- [ ] `micaelapuig.com` conectado en Custom domains → Active
- [ ] `www.micaelapuig.com` conectado → Active
- [ ] SSL activo (candado en el browser)

### Parte 4 — GoDaddy
- [ ] Nameservers de Cloudflare pegados en GoDaddy
- [ ] Cloudflare confirma dominio **Active**

### Parte 5 — Email Routing
- [ ] Email Routing activado en Cloudflare
- [ ] Regla `mp@micaelapuig.com` → `micaela.puig@gmail.com` creada y Active
- [ ] Mail de prueba recibido en Gmail ✓

### Parte 6 — Brevo
- [ ] Cuenta Brevo creada
- [ ] Sender `mp@micaelapuig.com` verificado
- [ ] Dominio `micaelapuig.com` verificado (DKIM + SPF en Cloudflare)
- [ ] SMTP key copiada y guardada

### Parte 7 — Gmail Send as
- [ ] "Send as mp@micaelapuig.com" configurado en Gmail de Mica
- [ ] `mp@micaelapuig.com` puesto como default
- [ ] Mail de prueba enviado y recibido correctamente ✓

---

## Si algo falla

| Síntoma | Probable causa | Solución |
|---------|---------------|----------|
| El sitio no carga en micaelapuig.com | DNS aún no propagó | Esperar 1–2 h más |
| Error SSL / "Not secure" | SSL de Cloudflare Pages aún emitiendo | Esperar 5–10 min |
| Build falla en Cloudflare Pages | Error de código o NODE_VERSION | Copiar el error exacto y pasárselo a DevStudio |
| Mail de verificación de Brevo no llega | Email Routing aún no activo | Completar Parte 4 primero (nameservers) |
| Gmail "Send as" da error de autenticación | SMTP key incorrecta o username equivocado | Re-generar SMTP key en Brevo y repetir Parte 7 |
| Cloudflare Pages no encuentra el repo | Permisos de GitHub no otorgados | Ir a GitHub → Settings → Applications → Cloudflare Pages → dar acceso al repo |

---

## Datos de referencia

| Item | Valor |
|------|-------|
| Dominio | `micaelapuig.com` |
| Mail | `mp@micaelapuig.com` |
| Gmail de destino | `micaela.puig@gmail.com` |
| Repo | `github.com/jfdominguez1/micapuig-site` |
| SMTP server | `smtp-relay.brevo.com` |
| SMTP port | `587` |
| SMTP login | mail de la cuenta Brevo |
| URL provisional | `micapuig-site.pages.dev` (hasta que propague) |
| URL final | `https://micaelapuig.com` |
