import {Component, Input} from '@angular/core';
import IProfessionnalExperience from "../domain/professionnal-experience.interface";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() public experience:  IProfessionnalExperience;
}
