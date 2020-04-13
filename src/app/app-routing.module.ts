import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component";
import {AboutSectionComponent} from './pages/welcome-page/sections/about-section/about-section.component';
import {ContactComponent} from './sections/contact/contact.component';

const routes: Routes = [
  { path: "", component: WelcomePageComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
