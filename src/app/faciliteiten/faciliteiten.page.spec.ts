import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaciliteitenPage } from './faciliteiten.page';

describe('FaciliteitenPage', () => {
  let component: FaciliteitenPage;
  let fixture: ComponentFixture<FaciliteitenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaciliteitenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaciliteitenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
