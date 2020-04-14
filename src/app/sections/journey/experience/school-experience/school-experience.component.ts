import {Component, Input, OnInit} from '@angular/core';
import ISchoolExperience from "../../domain/school-experience.interface";

@Component({
  selector: 'app-school-experience',
  templateUrl: './school-experience.component.html',
  styleUrls: ['./school-experience.component.css']
})
export class SchoolExperienceComponent {
  @Input() public experience:  ISchoolExperience;
}
