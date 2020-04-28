import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultLanguageServerService} from "./default-language-server.service";
import {I_DEFAULT_LANGUAGE_SERVICE} from "../default-language.service.interface";


@NgModule({
  providers: [
    {provide: I_DEFAULT_LANGUAGE_SERVICE, useClass: DefaultLanguageServerService}
  ],
  imports: [
    CommonModule
  ]
})
export class DefaultLanguageServerModule {
}
