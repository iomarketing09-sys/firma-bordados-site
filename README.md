# Firma Bordados — staging Cloudflare Pages

Este repositorio privado contiene una copia estática de staging para Firma Bordados. Está administrado temporalmente por Io Marketing hasta que el cliente reciba o controle las cuentas de GitHub, Cloudflare y el dominio.

## Alcance

El sitio se publica únicamente en una URL `*.pages.dev` de staging. No autoriza cambiar el DNS, los nameservers, Wix ni `firmabordados.com`.

## Build

```bash
pnpm install
pnpm exec vite build
```

Cloudflare Pages debe usar `pnpm exec vite build` como comando y `dist/public` como directorio de salida.

## Flujo de cambios

Cloudflare Pages sirve la rama `main` en la URL pública de staging. Los cambios se preparan en una rama de trabajo o en `staging`, pasan por `pnpm check` y `pnpm exec vite build`, y solo después se promueven a `main`. GitHub Actions ejecuta esas dos validaciones en Pull Requests y pushes a `main` o `staging`.

### Regla operativa para `main`

El repositorio privado actual no permite reglas de protección ni rulesets en el plan disponible de GitHub. Por ello se aplica esta regla operativa obligatoria mientras siga siendo privado y sin cambio de plan: **no se hace push directo a `main`**. Todo cambio debe seguir `rama de trabajo → Pull Request a staging → CI correcto → promoción explícita de staging a main → CI correcto → Cloudflare Pages`.

Una excepción de emergencia debe tener autorización escrita del responsable de la cuenta y dejarse documentada en el Pull Request o en la guía de staging. La protección técnica nativa de `main` se activará cuando la cuenta disponga de GitHub Pro/Team o se tome una decisión explícita de visibilidad; no se hará público el repositorio para desbloquear esa función porque contiene activos y catálogos de cliente.

No se asocia un dominio personalizado, no se cambia Wix ni se modifica DNS mediante este flujo.

## Transferencia

Antes de un corte de dominio, transferir o dar al cliente propiedad de este repositorio y del proyecto Cloudflare Pages; entregar también los activos, catálogos y accesos asociados.
