import {InjectionToken} from "@angular/core";

export const I_SCROLL_SERVICE: InjectionToken<IScrollService> = new InjectionToken<IScrollService>('IScrollService');

export interface IScrollService {
  smoothScrollToAnchor(anchor: string);
  smoothScrollToTop();
}

