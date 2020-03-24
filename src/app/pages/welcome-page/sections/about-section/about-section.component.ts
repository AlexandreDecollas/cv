import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-about-section",
  templateUrl: "./about-section.component.html",
  styleUrls: ["./about-section.component.css"]
})
export class AboutSectionComponent implements OnInit {

  public age: number;

  public ngOnInit(): void {
    const birthdate = moment(new Date(1986,9,25));
    const now = moment();
    this.age = moment.duration(now.diff(birthdate)).years();
  }
}
