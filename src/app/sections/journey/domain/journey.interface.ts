import ISchoolExperience from "./school-experience.interface";
import IProfessionnalExperience from "./professionnal-experience.interface";

export default interface IJourney {
  school: ISchoolExperience;
  professionnalJourney: IProfessionnalExperience[];
}
