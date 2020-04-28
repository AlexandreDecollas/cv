import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';

import {AppBrowserModule} from './app-browser.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TranslateInterceptor} from "./interceptors/TranslateInterceptor";
import {DefaultLanguageServerModule} from "./services/default-language/default-language-server/default-language-server.module";

@NgModule({
  imports: [
    AppBrowserModule,
    ServerModule,
    DefaultLanguageServerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TranslateInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
