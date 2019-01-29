import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningResourceComponent } from './learning-resource.component';

describe('LearningResourceComponent', () => {
  let component: LearningResourceComponent;
  let fixture: ComponentFixture<LearningResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
