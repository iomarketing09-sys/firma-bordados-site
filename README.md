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

## Transferencia

Antes de un corte de dominio, transferir o dar al cliente propiedad de este repositorio y del proyecto Cloudflare Pages; entregar también los activos, catálogos y accesos asociados.
