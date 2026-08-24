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

No se asocia un dominio personalizado, no se cambia Wix ni se modifica DNS mediante este flujo.

## Transferencia

Antes de un corte de dominio, transferir o dar al cliente propiedad de este repositorio y del proyecto Cloudflare Pages; entregar también los activos, catálogos y accesos asociados.
