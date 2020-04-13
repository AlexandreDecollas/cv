import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HeaderModule} from "./sections/header/header.module";
import {AboutSectionModule} from "./pages/welcome-page/sections/about-section/about-section.module";
import {WelcomePageModuleModule} from "./pages/welcome-page/welcome-page.module";
import {APP_BASE_HREF} from "@angular/common";
import {NavbarModule} from "./sections/navbar/navbar.module";
import {ContactModule} from "./sections/contact/contact.module";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {IntroductionModule} from "./sections/introduction/introduction.module";
import {JourneyModule} from "./sections/journey/journey.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    ContactModule,
    HeaderModule,
    AboutSectionModule,
    WelcomePageModuleModule,
    NavbarModule,
    IntroductionModule,
    JourneyModule,

    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: "/"},
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
