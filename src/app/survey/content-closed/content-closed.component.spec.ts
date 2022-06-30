import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentClosedComponent } from './content-closed.component';

describe('ContentClosedComponent', () => {
  let component: ContentClosedComponent;
  let fixture: ComponentFixture<ContentClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
