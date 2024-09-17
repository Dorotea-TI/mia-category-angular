import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeCategoryModalComponent } from './organize-category-modal.component';

describe('OrganizeCategoryModalComponent', () => {
  let component: OrganizeCategoryModalComponent;
  let fixture: ComponentFixture<OrganizeCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizeCategoryModalComponent ]
    })
    .compileComponents();
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
