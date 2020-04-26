import {Component, OnDestroy, OnInit} from '@angular/core';
import IJourney from "./domain/journey.interface";
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit, OnDestroy {
  public journey: IJourney = null;
  public showMore: boolean = false;
  public nbShownExperiences: number = 6;

  private _onLangChangeObserver: Subscription;

  constructor(
    private readonly _translate: TranslateService
  ) {
  }

  public ngOnInit(): void {
    this._onLangChangeObserver = this._translate.onLangChange
      .subscribe(() => {
        this._translate
          .get('cv')
          .pipe(first())
          .subscribe((completeJourney: IJourney) => {
            this.journey = completeJourney;
          });
      })
  }

  public ngOnDestroy(): void {
    this._onLangChangeObserver.unsubscribe();
  }

  public trackByFn(index, _item): number {
    return index;
  }

  public doShowMore(): void {
    this.showMore = true;
    this.nbShownExperiences = this.journey.professionnalJourney.length;
  }
}
