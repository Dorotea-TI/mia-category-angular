import { NgModule } from '@angular/core';

// Modals
import { OrganizeCategoryModalComponent } from './modals/organize-category-modal/organize-category-modal.component';

@NgModule({
  imports: [OrganizeCategoryModalComponent],
  exports: [OrganizeCategoryModalComponent],
})
export class MiaCategoryEditorModule {}
