import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProExperienceComponent } from './pro-experience.component';

describe('ExperienceComponent', () => {
  let component: ProExperienceComponent;
  let fixture: ComponentFixture<ProExperienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
