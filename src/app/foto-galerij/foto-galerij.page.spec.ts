import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoGalerijPage } from './foto-galerij.page';

describe('FotoGalerijPage', () => {
  let component: FotoGalerijPage;
  let fixture: ComponentFixture<FotoGalerijPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoGalerijPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoGalerijPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
