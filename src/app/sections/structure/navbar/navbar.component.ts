import {Component, EventEmitter, HostListener, Inject, OnInit, Output} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {I_SCROLL_SERVICE, IScrollService} from "../../services/scroll/scroll.service.interface";
import {
  LANGAGE_COOKIE_NAME, LANGAGE_EN, LANGAGE_FR,
  SECTION_NAME_CONTACT,
  SECTION_NAME_JOURNEY,
  SECTION_NAME_PET_PROJECTS
} from "../../../constants/global.constants";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public isScrolling: boolean = false;

  public currentLang: string;

  @Output() public scrollTo: EventEmitter<string> = new EventEmitter<string>();
  public toogleMenu: boolean = false;

  constructor(
    @Inject(I_SCROLL_SERVICE) private readonly _scrollService: IScrollService,
    private readonly _cookieService: CookieService,
    private readonly _translateService: TranslateService,
  ) {
  }

  @HostListener("window:scroll", ["$event"])
  public onScroll(_event: any): any {
    this.isScrolling = window.pageYOffset > 300;
  }

  public ngOnInit(): void {
    this.currentLang = this._cookieService.get(LANGAGE_COOKIE_NAME);
  }

  public switchLang() {
    this.currentLang = this.currentLang === LANGAGE_FR ? LANGAGE_EN : LANGAGE_FR;
    this._translateService.use(this.currentLang);
    this._cookieService.set(LANGAGE_COOKIE_NAME, this.currentLang);
    this._closeMenu();
  }

  public scrollToJourney() {
    this._scrollToSection(SECTION_NAME_JOURNEY);
    this._closeMenu();
  }

  public scrollToPetProjects() {
    this._scrollToSection(SECTION_NAME_PET_PROJECTS);
    this._closeMenu();
  }

  public scrollToContact() {
    this._scrollToSection(SECTION_NAME_CONTACT);
    this._closeMenu();
  }

  public smoothlyScrollToTop() {
    this._scrollService.smoothScrollToTop();
    this._closeMenu();
  }

  public toogleMenuVisibility() {
    this.toogleMenu = !this.toogleMenu;
  }

  private _scrollToSection(sectionId: string): void {
    this.toogleMenu = false;
    this._scrollService.smoothScrollToAnchor(sectionId);
  }

  private _closeMenu(): void {
    this.toogleMenu = false;
  }
}
