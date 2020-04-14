import {Component, Inject, OnInit} from '@angular/core';
import IJourney from "./domain/journey.interface";
import {TranslateService} from "@ngx-translate/core";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  public journey: IJourney = null;
  public showMore: boolean = false;
  public nbShownExperiences: number = 6;

  constructor(
    private readonly _translate: TranslateService
  ) {}

  public ngOnInit(): void {
    this._translate
      .get('cv')
      .pipe(
        first()
      ).subscribe((all: IJourney) => {
      this.journey = all;
    });
  }

  public trackByFn(index, _item) {
    return index;
  }

  public doShowMore() {
    this.showMore = true;
    this.nbShownExperiences = this.journey.professionnalJourney.length;
  }
}
