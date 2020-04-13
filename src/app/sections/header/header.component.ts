import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
  }
  scrollToElement($element): void {
    console.log('>>>', $element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


}
