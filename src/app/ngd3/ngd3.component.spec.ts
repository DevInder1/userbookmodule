import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngd3Component } from './ngd3.component';

describe('Ngd3Component', () => {
  let component: Ngd3Component;
  let fixture: ComponentFixture<Ngd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
