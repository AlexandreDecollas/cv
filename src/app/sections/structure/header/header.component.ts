import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {I_SCROLL_SERVICE, IScrollService} from "../../services/scroll/scroll.service.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    @Inject(I_SCROLL_SERVICE) private readonly _scrollService: IScrollService,
    @Inject(PLATFORM_ID) private platform: Object
  ) {
  }

  public scrollToKnowIntroductionSection(): void {
    this._scrollService.smoothScrollToAnchor("introduction");
  }
}
