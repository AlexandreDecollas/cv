import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetProjectsComponent } from './pet-projects.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PetProjectsComponent],
  exports: [PetProjectsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class PetProjectsModule { }
