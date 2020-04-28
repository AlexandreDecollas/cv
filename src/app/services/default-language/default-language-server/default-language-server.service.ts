import {Inject, Injectable} from '@angular/core';
import IDefaultLanguageService from "../default-language.service.interface";
import {CookieService} from "ngx-cookie-service";
import {
  COOKIE_STRING_SEPARATOR,
  LANGAGE_COOKIE_PATTERN,
  LANGAGE_EN,
  LANGAGE_FR
} from "../../../constants/global.constants";
import {REQUEST} from "@nguniversal/express-engine/tokens";
import * as express from "express";
import isEmpty from 'lodash-es/isEmpty';

@Injectable()
export class DefaultLanguageServerService implements IDefaultLanguageService {

  constructor(
    private readonly _cookieService: CookieService,
    @Inject(REQUEST) private request?: express.Request
  ) {
  }

  public getDefaultLanguage(): string {
    let langageSet = LANGAGE_FR;
    const cookieString: string = this.request.headers.cookie;

    if (isEmpty(cookieString))
      return langageSet;

    const cookies: string[] = cookieString.split(COOKIE_STRING_SEPARATOR);
    cookies.forEach((cookie: string) => {
      if (DefaultLanguageServerService._isLanguageCookie(cookie)) {
        langageSet = DefaultLanguageServerService._getLanguageInCookie(cookie);
      }
    })

    return langageSet;
  }

  private static _getLanguageInCookie(cookieLangRaw: string): string {
    const langageSet = cookieLangRaw.substring(6, 8);

    if (langageSet === LANGAGE_FR || langageSet === LANGAGE_EN) {
      return langageSet;
    }
    return LANGAGE_FR;

  }

  private static _isLanguageCookie(cookie: string): boolean {
    return cookie.indexOf(LANGAGE_COOKIE_PATTERN) != -1;
  }
}
