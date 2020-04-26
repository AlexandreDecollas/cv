import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CookieService} from "ngx-cookie-service";
import {LANGAGE_COOKIE_NAME, LANGAGE_EN, LANGAGE_FR} from "./constants/global.constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private readonly _translate: TranslateService,
    private readonly _cookieService: CookieService
  ) {
    _translate.addLangs([LANGAGE_FR, LANGAGE_EN]);
    let langageSet: string = this._cookieService.get(LANGAGE_COOKIE_NAME);
    if (langageSet !== LANGAGE_FR && langageSet !== LANGAGE_EN) {
      langageSet = LANGAGE_FR;
    }
    _translate.use(langageSet);
    this._cookieService.set(LANGAGE_COOKIE_NAME, langageSet);
  }
}
