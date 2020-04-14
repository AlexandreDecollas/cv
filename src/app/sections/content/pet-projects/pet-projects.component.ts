import {Component, Inject, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {first} from "rxjs/operators";
import {DOCUMENT} from "@angular/common";
import {
  PET_PROJECT_CALCULATOR_BASE_N,
  PET_PROJECT_GSKN,
  PET_PROJECT_MONTY_HALL
} from "./constants/pet-projects.constant";
import {SECTION_NAME_PET_PROJECTS} from "../../../constants/global.constants";
import IPetProject from "./domain/pet-project.interface";

@Component({
  selector: 'app-pet-projects',
  templateUrl: './pet-projects.component.html',
  styleUrls: ['./pet-projects.component.css']
})
export class PetProjectsComponent implements OnInit {

  public petProjects: IPetProject[];

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private readonly _translate: TranslateService
  ) {
  }

  public ngOnInit(): void {
    this._translate
      .get(SECTION_NAME_PET_PROJECTS)
      .pipe(
        first()
      ).subscribe((data: IPetProject[]) => {
      this.petProjects = data;
    });
  }

  public gotoCalcBaseNGithub() {
    this._document.location.href = PET_PROJECT_CALCULATOR_BASE_N;
  }

  public gotoMontyHallGithub() {
    this._document.location.href = PET_PROJECT_MONTY_HALL;
  }

  public gotoGSKNGithub() {
    this._document.location.href = PET_PROJECT_GSKN;
  }
}
