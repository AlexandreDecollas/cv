import IExperienceContent from "./experience-content.interface";

export default interface ISchoolExperience {
  place: string;
  years: string;
  grade: string;
  content: IExperienceContent;
}
