import { MiaQuery } from '@doroteati/mia-core';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MiaCategoryModalService } from '../mia-category.modal.service';
import { MiaCategory, MiaCategoryService } from '@doroteati/mia-category-core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export class MiaOrganizeCategoryModalConfig {
  hasNewCategory?: boolean = true;
  idCategoryDefault?: number;
  hasEditCategory?: boolean = true;
  hasRemoveCategory?: boolean = true;
  fieldCategoryId?: string = 'category_id';
  fieldTitleItem?: string = 'title';
}

export class MiaOrganizeCategoryModalInteraction {
  action: string = '';
  item: any;
  extras?: any;
}

@Component({
  selector: 'mia-organize-category-modal',
  templateUrl: './organize-category-modal.component.html',
  styleUrls: ['./organize-category-modal.component.css'],
})
export class OrganizeCategoryModalComponent implements OnInit {
  categories = new Array<MiaCategory | any>();
  items = new Array<any>();
  isSending = false;
  isLoading = true;

  dropListIds = new Array<string>();

  actions = new Subject<MiaOrganizeCategoryModalInteraction>();

  constructor(
    protected dialogRef: MatDialogRef<OrganizeCategoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public config: MiaOrganizeCategoryModalConfig,
    protected categoryService: MiaCategoryService,
    protected categoryModal: MiaCategoryModalService
  ) {}

  ngOnInit(): void {
    this.actions.next({ action: 'loaded', item: undefined });
  }

  onClickSave() {
    this.actions.next({ action: 'saving', item: this.categories });
    this.isSending = true;
  }

  onClickNewCategory() {
    let ob: Observable<MiaCategory>;
    if (this.config.idCategoryDefault) {
      ob = this.categoryModal.openWithType(
        new MiaCategory(),
        this.config.idCategoryDefault
      );
    } else {
      ob = this.categoryModal.open(new MiaCategory());
    }

    ob.subscribe((cat) => {
      if (cat) {
        this.categories.push(cat);
      }
    });
  }

  savedSuccess() {
    this.isSending = false;
    this.dialogRef.close();
  }

  savedFail() {
    this.isSending = false;
  }

  loadItems(items: Array<any>) {
    this.isLoading = true;
    this.dropListIds = new Array<string>();

    this.obCategories()
      .pipe(tap((res) => (this.categories = res.data)))
      .pipe(
        tap((res) =>
          this.categories.map((c) =>
            this.dropListIds.push('drop-category-' + c.id)
          )
        )
      )
      .pipe(
        map((res) =>
          this.categories.map(
            (c) =>
              (c.items = items.filter(
                (i) => i[this.config.fieldCategoryId!] == c.id
              ))
          )
        )
      )
      .subscribe((res) => (this.isLoading = false));
  }

  obCategories() {
    let query = new MiaQuery();
    if (this.config.idCategoryDefault) {
      query.addWhere('type', this.config.idCategoryDefault);
    }
    query.itemPerPage = 1000;
    return this.categoryService.listOb(query);
  }

  drop(event: CdkDragDrop<any[]>, isParent: boolean) {
    if (isParent) {
      console.log('Parent');
    } else {
      console.log('Child');
    }
    if (event.previousContainer === event.container) {
      console.log('Dentro del mismo Array');
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('Cambio de categoria');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
