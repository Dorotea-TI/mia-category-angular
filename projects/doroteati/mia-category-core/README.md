# @doroteati/mia-category-core

Core de categorias para Angular 21.

## Compatibilidad

- Apps `NgModule`
- Apps `standalone`
- SSR

## Configuracion minima

```ts
import { MIA_CORE_PROVIDER } from '@doroteati/mia-core';

providers: [
  {
    provide: MIA_CORE_PROVIDER,
    useValue: {
      baseUrl: 'https://api.tu-dominio.com/'
    }
  }
]
```

## Build local

Desde la raiz del workspace:

```bash
npm run build:core
```

