import {Component, Inject, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CookieService} from "ngx-cookie-service";
import {LANGAGE_COOKIE_NAME, LANGAGE_EN, LANGAGE_FR} from "./constants/global.constants";
import IDefaultLanguageService, {I_DEFAULT_LANGUAGE_SERVICE} from "./services/default-language/default-language.service.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(I_DEFAULT_LANGUAGE_SERVICE) private readonly _defaultLanguageService: IDefaultLanguageService,
    private readonly _translate: TranslateService,
    private readonly _cookieService: CookieService
  ) {
  }

  public ngOnInit(): void {
    this._translate.addLangs([LANGAGE_FR, LANGAGE_EN]);
    const langageSet: string = this._defaultLanguageService.getDefaultLanguage();
    this._translate.use(langageSet);
    this._cookieService.set(LANGAGE_COOKIE_NAME, langageSet);
  }
}
