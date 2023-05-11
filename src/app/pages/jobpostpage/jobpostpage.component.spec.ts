import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostpageComponent } from './jobpostpage.component';

describe('JobpostpageComponent', () => {
  let component: JobpostpageComponent;
  let fixture: ComponentFixture<JobpostpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobpostpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobpostpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
