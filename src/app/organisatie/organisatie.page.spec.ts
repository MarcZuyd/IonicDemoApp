import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisatiePage } from './organisatie.page';

describe('OrganisatiePage', () => {
  let component: OrganisatiePage;
  let fixture: ComponentFixture<OrganisatiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisatiePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisatiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
