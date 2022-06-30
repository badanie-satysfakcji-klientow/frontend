import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentScaleComponent } from './content-scale.component';

describe('ContentScaleComponent', () => {
  let component: ContentScaleComponent;
  let fixture: ComponentFixture<ContentScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
