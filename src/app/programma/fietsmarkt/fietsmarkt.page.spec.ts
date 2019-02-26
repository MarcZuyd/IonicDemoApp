import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FietsmarktPage } from './fietsmarkt.page';

describe('FietsmarktPage', () => {
  let component: FietsmarktPage;
  let fixture: ComponentFixture<FietsmarktPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FietsmarktPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FietsmarktPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
