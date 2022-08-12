import {
  EducationObject,
  ExperienceObject,
  Interest,
  LanguagePropsType,
  SkillObject,
} from "./resume.type";

export type TypeResume =
  | "worked"
  | "skills"
  | "education"
  | "languages"
  | "interests";

export type ResumeHookType = {
  [field in TypeResume]: any;
};

export type WorkedPropsType = {
  worked: ExperienceObject[];
};

export type EducationPropsType = {
  education: EducationObject[];
};

export type SkillsPropsType = {
  skills: SkillObject[];
};

export type LanguagesPropsType = {
  languages: LanguagePropsType[];
};

export type InterestPropsType = {
  interests: Interest[];
};
