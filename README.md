# Mia Category Angular (Angular 21)

Workspace de librerias:
- `@doroteati/mia-category-core`
- `@doroteati/mia-category-editor`

Incluye proyecto `example` para validar:
- SPA
- SSR (`@angular/ssr`)

## Requisitos

- Node `^20.19.0 || ^22.12.0 || >=24`
- npm 8+

## Comandos principales

- `npm run build:core`: build de `@doroteati/mia-category-core`
- `npm run build:editor`: build de `@doroteati/mia-category-editor` (flujo recomendado)
- `npm run build2`: publica `core`
- `npm run build3`: publica `editor`
- `npm run build:ssr`: build browser + server del proyecto `example`
- `npm run dev:ssr`: correr `example` con SSR en desarrollo

## Nota de build editor

En este workspace, `build:editor` usa `ng-packagr` con instalacion local temporal de `core` para resolver dependencias internas de forma estable en Angular 21.

