import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesInfoPage } from './routes-info.page';

describe('RoutesInfoPage', () => {
  let component: RoutesInfoPage;
  let fixture: ComponentFixture<RoutesInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
