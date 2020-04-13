import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyComponent } from './journey.component';
import {TranslateModule} from "@ngx-translate/core";
import { ExperienceComponent } from './experience/experience.component';



@NgModule({
  declarations: [JourneyComponent, ExperienceComponent],
  exports: [
    JourneyComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class JourneyModule { }
