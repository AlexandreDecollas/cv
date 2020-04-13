import {Component, HostListener, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public isScrolling: boolean = false;

  public currentLang: 'fr' | 'en' = 'fr';

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
}
