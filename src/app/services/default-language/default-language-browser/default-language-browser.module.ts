import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultLanguageBrowserService} from "./default-language-browser.service";
import {I_DEFAULT_LANGUAGE_SERVICE} from "../default-language.service.interface";


@NgModule({
  providers: [
    {provide: I_DEFAULT_LANGUAGE_SERVICE, useClass: DefaultLanguageBrowserService}
  ],
  imports: [
    CommonModule
  ]
})
export class DefaultLanguageBrowserModule {
}
