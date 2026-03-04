import { Injectable } from '@angular/core';
import {
  MiaOrganizeCategoryModalConfig,
  OrganizeCategoryModalComponent,
} from './organize-category-modal/organize-category-modal.component';
import { MiaCategory, MiaCategoryService } from '@doroteati/mia-category-core';
import { MatDialog } from '@angular/material/dialog';

declare const require: (module: string) => any;

@Injectable({
  providedIn: 'root',
})
export class MiaCategoryModalService {
  constructor(
    protected categoryService: MiaCategoryService,
    protected dialog: MatDialog
  ) {}

  open(category: MiaCategory) {
    // Delay mia-form resolution to runtime to avoid hard type coupling during library compilation.
    const miaFormLib: any = require('@doroteati/mia-form');
    let data = new miaFormLib.MiaFormModalConfig();
    data.item = category;
    data.service = this.categoryService;
    data.titleNew = 'New Category';
    data.titleEdit = 'Edit Category';

    let config = new miaFormLib.MiaFormConfig();
    config.hasSubmit = false;
    config.fields = [
      {
        key: 'title',
        type: miaFormLib.MiaField.TYPE_STRING,
        label: 'Name Category',
      },
    ];
    config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' },
    ];
    data.config = config;
    return this.dialog
      .open(miaFormLib.MiaFormModalComponent, {
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
