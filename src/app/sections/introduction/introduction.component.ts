import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  @Input() public alternateColor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
