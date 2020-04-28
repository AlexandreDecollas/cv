import {REQUEST} from '@nguniversal/express-engine/tokens';
import * as express from 'express';
import {Inject, Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {LANGAGE_COOKIE_NAME, LANGAGE_EN} from "../constants/global.constants";

@Injectable()
export class TranslateInterceptor implements HttpInterceptor {
  private readonly DEFAULT_PORT = 4200;
  private readonly PORT = process.env.PORT || this.DEFAULT_PORT;

  private _langInCookie: string = '';

  constructor(
    @Inject(REQUEST) private request: express.Request,
    private readonly _cookieService: CookieService
  ) {
    this._cookieService.set(LANGAGE_COOKIE_NAME, LANGAGE_EN);
    this._langInCookie = request.headers.cookie;
  }

  getBaseUrl(req: express.Request) {
    const {protocol, hostname} = req;
    return this.PORT ?
      `${protocol}://${hostname}:${this.PORT}` :
      `${protocol}://${hostname}`;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.url.startsWith('./assets')) {
      const baseUrl = this.getBaseUrl(this.request);
      request = request.clone({
        url: `${baseUrl}/${request.url.replace('./assets/', 'assets/')}`
      });
    }
    return next.handle(request);
  }
}
