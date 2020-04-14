import {Inject, Injectable} from '@angular/core';
import {IScrollService} from "./scroll.service.interface";
import {DOCUMENT} from "@angular/common";

@Injectable()
export default class ScrollService implements IScrollService {

  constructor(
    @Inject(DOCUMENT) private readonly _document: Document
  ) {
  }

  public smoothScrollToAnchor(anchor: string): void {
    const element: Element = this._document.getElementById(anchor);
    ScrollService._smoothScrollToElement(element);
  }

  public smoothScrollToTop(): void {
    const body: Element = this._document.getElementsByTagName('body')[0];
    ScrollService._smoothScrollToElement(body);
  }

  private static _smoothScrollToElement(element: Element): void {
    element.scrollIntoView(
      {
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      }
    );

  }
}
