import {Injectable} from '@angular/core';
import IDefaultLanguageService from "../default-language.service.interface";
import {CookieService} from "ngx-cookie-service";
import {LANGAGE_COOKIE_NAME, LANGAGE_EN, LANGAGE_FR} from "../../../constants/global.constants";

@Injectable()
export class DefaultLanguageBrowserService implements IDefaultLanguageService {

  constructor(
    private readonly _cookieService: CookieService,
  ) {
  }

  public getDefaultLanguage(): string {
    // const cookies: string[] = this.request.headers.cookie.split(';');
    // cookies.forEach((cookie: string) => {
    //   if (cookie.indexOf('lang=') != -1) {
    //     const lang = cookie.substring(5, 7);
    //     console.log('lang : ', lang);
    //   }
    // })
    let langageSet: string = this._cookieService.get(LANGAGE_COOKIE_NAME);
    if (langageSet !== LANGAGE_FR && langageSet !== LANGAGE_EN) {
      langageSet = LANGAGE_FR;
    }

    return langageSet;
  }
}
