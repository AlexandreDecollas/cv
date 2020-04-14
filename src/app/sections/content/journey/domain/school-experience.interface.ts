import IExperienceContent from "./experience-content.interface";

export default interface ISchoolExperience {
  place: string;
  years: string;
  grade: string;
  iconeUrl: string;
  content: IExperienceContent;
}
