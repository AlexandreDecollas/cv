import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class NavbarModule { }
