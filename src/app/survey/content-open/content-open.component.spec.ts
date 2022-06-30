import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOpenComponent } from './content-open.component';

describe('ContentOpenComponent', () => {
  let component: ContentOpenComponent;
  let fixture: ComponentFixture<ContentOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
