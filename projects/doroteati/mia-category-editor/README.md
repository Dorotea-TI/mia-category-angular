# @doroteati/mia-category-editor

Libreria editor para categorias (Angular 21).

## Compatibilidad

- Apps `NgModule`
- Apps `standalone`
- SSR (Angular Universal / `@angular/ssr`)

## Uso en apps standalone

Importa el componente standalone cuando lo necesites:

```ts
import { OrganizeCategoryModalComponent } from '@doroteati/mia-category-editor';
```

Servicio:

```ts
import { MiaCategoryModalService } from '@doroteati/mia-category-editor';
```

## Uso en apps con modulos

```ts
import { MiaCategoryEditorModule } from '@doroteati/mia-category-editor';

@NgModule({
  imports: [MiaCategoryEditorModule]
})
export class AppModule {}
```

## Build local

Desde la raiz del workspace:

```bash
npm run build:editor
```

