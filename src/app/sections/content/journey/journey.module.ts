import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyComponent } from './journey.component';
import {TranslateModule} from "@ngx-translate/core";
import { ProExperienceComponent } from './experience/pro-experience/pro-experience.component';
import {SchoolExperienceComponent} from "./experience/school-experience/school-experience.component";



@NgModule({
  declarations: [
    JourneyComponent,
    ProExperienceComponent,
    SchoolExperienceComponent
  ],
  exports: [
    JourneyComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class JourneyModule { }
