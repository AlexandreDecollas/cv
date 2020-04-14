import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import ScrollService from "./scroll.service";
import {I_SCROLL_SERVICE} from "./scroll.service.interface";


@NgModule({
  providers: [
    {
      provide: I_SCROLL_SERVICE,
      useClass: ScrollService
    }
  ],
  imports: [
    CommonModule
  ]
})
export class ScrollServiceModule {
}
