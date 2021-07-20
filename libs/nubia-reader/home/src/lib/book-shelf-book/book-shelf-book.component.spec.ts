import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShelfBookComponent } from './book-shelf-book.component';

describe('BookShelfBookComponent', () => {
  let component: BookShelfBookComponent;
  let fixture: ComponentFixture<BookShelfBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookShelfBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShelfBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
