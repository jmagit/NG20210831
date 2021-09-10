import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFuondComponent } from './page-not-fuond.component';

describe('PageNotFuondComponent', () => {
  let component: PageNotFuondComponent;
  let fixture: ComponentFixture<PageNotFuondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFuondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFuondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
