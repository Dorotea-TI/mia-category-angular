import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Modals
import { OrganizeCategoryModalComponent } from './modals/organize-category-modal/organize-category-modal.component';



@NgModule({
  declarations: [
    OrganizeCategoryModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    DragDropModule
  ],
  exports: [
    OrganizeCategoryModalComponent
  ]
})
export class MiaCategoryEditorModule { }
