import {NgModule} from '@angular/core';
import {AboutSectionComponent} from './about-section.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AboutSectionComponent],
  exports: [AboutSectionComponent],
  imports: [
    CommonModule
  ]
})
export class AboutSectionModule {}
