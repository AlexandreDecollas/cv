import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HeaderModule} from "./sections/structure/header/header.module";
import {APP_BASE_HREF} from "@angular/common";
import {NavbarModule} from "./sections/structure/navbar/navbar.module";
import {ContactModule} from "./sections/content/contact/contact.module";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {IntroductionModule} from "./sections/content/introduction/introduction.module";
import {JourneyModule} from "./sections/content/journey/journey.module";
import {FooterModule} from "./sections/structure/footer/footer.module";
import {PetProjectsModule} from "./sections/content/pet-projects/pet-projects.module";
import {DefaultLanguageBrowserModule} from "./services/default-language/default-language-browser/default-language-browser.module";
import {environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ContactModule,
    HeaderModule,
    NavbarModule,
    IntroductionModule,
    JourneyModule,
    PetProjectsModule,
    FooterModule,

    AppRoutingModule,
    HttpClientModule,
    DefaultLanguageBrowserModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactoryClientSide,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: environment.baseHref},
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
}

export function HttpLoaderFactoryClientSide(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
