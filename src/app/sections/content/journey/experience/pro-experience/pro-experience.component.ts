import {Component, Input} from '@angular/core';
import IProfessionnalExperience from "../../domain/professionnal-experience.interface";

@Component({
  selector: 'app-experience',
  templateUrl: './pro-experience.component.html',
  styleUrls: ['./pro-experience.component.css']
})
export class ProExperienceComponent {
  @Input() public experience:  IProfessionnalExperience;
}
