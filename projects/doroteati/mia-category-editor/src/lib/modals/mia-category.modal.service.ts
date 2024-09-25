import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MiaOrganizeCategoryModalConfig,
  OrganizeCategoryModalComponent,
} from './organize-category-modal/organize-category-modal.component';
import { MiaCategory, MiaCategoryService } from '@doroteati/mia-category-core';
import {
  MiaField,
  MiaFormConfig,
  MiaFormModalComponent,
  MiaFormModalConfig,
} from '@doroteati/mia-form';

@Injectable({
  providedIn: 'root',
})
export class MiaCategoryModalService {
  constructor(
    protected categoryService: MiaCategoryService,
    protected dialog: MatDialog
  ) {}

  open(category: MiaCategory) {
    let data = new MiaFormModalConfig();
    data.item = category;
    data.service = this.categoryService;
    data.titleNew = 'New Category';
    data.titleEdit = 'Edit Category';

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = [
      { key: 'title', type: MiaField.TYPE_STRING, label: 'Name Category' },
    ];
    config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' },
    ];
    data.config = config;
    return this.dialog
      .open(MiaFormModalComponent, {
        width: '520px',
        panelClass: 'modal-full-width-mobile',
        data: data,
      })
      .afterClosed();
  }

  openWithType(category: MiaCategory, type: number) {
    category.type = type;
    return this.open(category);
  }

  openOrganize(typeOfCategory: number): OrganizeCategoryModalComponent {
    let config = new MiaOrganizeCategoryModalConfig();
    config.idCategoryDefault = typeOfCategory;
    return this.openOrganizeWithConfig(config);
  }

  openOrganizeWithConfig(
    config: MiaOrganizeCategoryModalConfig
  ): OrganizeCategoryModalComponent {
    let dailogRef = this.dialog.open(OrganizeCategoryModalComponent, {
      width: '520px',
      panelClass: 'modal-full-width-mobile',
      data: config,
    });

    return dailogRef.componentInstance;
  }
}
