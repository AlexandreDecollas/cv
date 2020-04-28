import {InjectionToken} from "@angular/core";

export const I_DEFAULT_LANGUAGE_SERVICE = new InjectionToken<IDefaultLanguageService>('IDefaultLanguageService');

export default interface IDefaultLanguageService {
  getDefaultLanguage();
}
