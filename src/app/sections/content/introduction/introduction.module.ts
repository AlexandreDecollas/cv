import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {IntroductionComponent} from "./introduction.component";



@NgModule({
  declarations: [IntroductionComponent],
  exports: [IntroductionComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class IntroductionModule { }
