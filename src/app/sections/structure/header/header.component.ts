import {Component, Inject, OnInit} from '@angular/core';
import {I_SCROLL_SERVICE, IScrollService} from "../../services/scroll/scroll.service.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    @Inject(I_SCROLL_SERVICE) private readonly _scrollService: IScrollService
  ) {
  }

  public scrollToKnowIntroductionSection(): void {
    this._scrollService.smoothScrollToAnchor("introduction");
  }


}
