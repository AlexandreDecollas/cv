import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {ScrollServiceModule} from "../../services/scroll/scroll.service.module";



@NgModule({
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ScrollServiceModule
  ]
})
export class NavbarModule { }
