import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';
import {HeaderModule} from './components/header/header.module';

@NgModule({
  declarations: [AppComponent, WelcomePageComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
