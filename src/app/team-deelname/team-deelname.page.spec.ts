import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDeelnamePage } from './team-deelname.page';

describe('TeamDeelnamePage', () => {
  let component: TeamDeelnamePage;
  let fixture: ComponentFixture<TeamDeelnamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDeelnamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDeelnamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
