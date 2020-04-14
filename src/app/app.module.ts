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
