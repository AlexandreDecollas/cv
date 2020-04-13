import {Component, EventEmitter, HostListener, OnInit, Output} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public isScrolling: boolean = false;

  public currentLang: 'fr' | 'en' = 'fr';

  @Output() public scrollTo: EventEmitter<string> = new EventEmitter<string>();

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  public onScroll(_event: any): any {
    this.isScrolling = window.pageYOffset > 50;
    console.log('this.isScrolling : ', this.isScrolling);
  }

  constructor(private readonly _translateService: TranslateService) {
  }

  public ngOnInit(): void {
  }

  public switchLang() {
    this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
    this._translateService.use(this.currentLang);
  }

  public notifyScrollToJourney() {
    this.scrollTo.emit('journey');
  }

  public scrollToJourney() {
    const el: Element = document.querySelector("#journey");
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
