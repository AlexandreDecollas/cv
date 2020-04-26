import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
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
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pet-projects',
  templateUrl: './pet-projects.component.html',
  styleUrls: ['./pet-projects.component.css']
})
export class PetProjectsComponent implements OnInit, OnDestroy {

  public petProjects: IPetProject[];

  private _onLangChangeObserver: Subscription;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private readonly _translate: TranslateService
  ) {
  }

  public ngOnInit(): void {
    this._onLangChangeObserver = this._translate.onLangChange.subscribe(() => {
      this._translate
        .get(SECTION_NAME_PET_PROJECTS)
        .pipe(
          first()
        ).subscribe((data: IPetProject[]) => {
        this.petProjects = data;
      });
    });
  }

  public ngOnDestroy(): void {
    this._onLangChangeObserver.unsubscribe();
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
