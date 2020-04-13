import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";



@NgModule({
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class NavbarModule { }
