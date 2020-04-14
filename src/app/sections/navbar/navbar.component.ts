import {Component, EventEmitter, HostListener, Inject, OnInit, Output} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {I_SCROLL_SERVICE, IScrollService} from "../services/scroll/scroll.service.interface";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public isScrolling: boolean = false;

  public currentLang: 'fr' | 'en' = 'fr';

  @Output() public scrollTo: EventEmitter<string> = new EventEmitter<string>();
  public toogleMenu: boolean = false;

  constructor(
    @Inject(I_SCROLL_SERVICE) private readonly _scrollService: IScrollService,
    private readonly _translateService: TranslateService,
  ) {
  }

  @HostListener("window:scroll", ["$event"])
  public onScroll(_event: any): any {
    this.isScrolling = window.pageYOffset > 300;
  }

  public ngOnInit(): void {
  }

  public switchLang() {
    this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
    this._translateService.use(this.currentLang);
  }

  public scrollToJourney() {
    this.toogleMenu = false;
    this._scrollService.smoothScrollToAnchor("journey");
  }

  public smoothlyScrollToTop() {
    this._scrollService.smoothScrollToTop();
  }

  public toogleMenuVisibility() {
    this.toogleMenu = !this.toogleMenu;
  }
}
