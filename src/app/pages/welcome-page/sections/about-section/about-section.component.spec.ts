import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutSectionComponent} from './about-section.component';
import * as moment from 'moment';
import {AboutSectionModule} from './about-section.module';

describe('AboutSectionComponent', () => {
  let component: AboutSectionComponent;
  let fixture: ComponentFixture<AboutSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AboutSectionModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct age at init', () => {

    const today = moment('2019-01-02').toDate();
    jasmine.clock().mockDate(today);
    component.ngOnInit();
    fixture.detectChanges();

    const textShown = fixture.nativeElement.textContent;

    expect(textShown).toContain('32');
  });
});
