import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { OrganizeCategoryModalComponent } from './organize-category-modal.component';
import { MiaCategoryService } from '@doroteati/mia-category-core';
import { MiaCategoryModalService } from '../mia-category.modal.service';

describe('OrganizeCategoryModalComponent', () => {
  let component: OrganizeCategoryModalComponent;
  let fixture: ComponentFixture<OrganizeCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizeCategoryModalComponent, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MiaCategoryService, useValue: {} },
        { provide: MiaCategoryModalService, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
