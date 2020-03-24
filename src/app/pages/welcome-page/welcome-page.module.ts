import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomePageComponent} from './welcome-page.component';
import {AboutSectionModule} from './sections/about-section/about-section.module';


@NgModule({
  declarations: [WelcomePageComponent],
  exports: [WelcomePageComponent],
  imports: [
    CommonModule,
    AboutSectionModule
  ]
})
export class WelcomePageModuleModule {
}
