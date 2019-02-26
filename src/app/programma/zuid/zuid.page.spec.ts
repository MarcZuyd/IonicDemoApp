import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuidPage } from './zuid.page';

describe('ZuidPage', () => {
  let component: ZuidPage;
  let fixture: ComponentFixture<ZuidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZuidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
