import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {AboutSectionModule} from './pages/welcome-page/sections/about-section/about-section.module';
import {WelcomePageModuleModule} from './pages/welcome-page/welcome-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, AboutSectionModule, WelcomePageModuleModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
