import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdetailspageComponent } from './jobdetailspage.component';

describe('JobdetailspageComponent', () => {
  let component: JobdetailspageComponent;
  let fixture: ComponentFixture<JobdetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobdetailspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
