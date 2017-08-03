import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBooksComponent } from './upload-books.component';

describe('UploadBooksComponent', () => {
  let component: UploadBooksComponent;
  let fixture: ComponentFixture<UploadBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
