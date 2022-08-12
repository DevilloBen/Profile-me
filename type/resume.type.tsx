export interface GetDataTest {
  id: string;
  node: string;
}

export interface SchoolProps {
  children: React.ReactNode;
  href: string;
  name: string;
  detail: string;
}

export interface TypeExp {
  resume: string;
}

export interface ExperienceObject {
  role: string;
  company: string;
  country: string;
  rangework: string;
  detailwork: string;
  link: string;
}

export type ProfilePropsType = {
  experience: string;
  education: string;
  languages: string;
  interests: string;
  skill: string;
};

export interface UseExpObject {
  worked: ExperienceObject[];
}

export interface ProfessionalProps {
  exp: UseExpObject;
}

export interface EducationObject {
  school: string;
  degree: string;
  country: string;
  rangework: string;
  link: string;
}

export interface LanguagesObject {
  lang: string;
  rank: string;
}

export interface InterestsObject {
  list: string;
}

export interface SkillObject {
  type: string;
  list: string;
}

export interface ExpProps {
  children: React.ReactNode;
  title: string;
  link: string;
  company: string;
  where: string;
  when: string;
}

export interface Education {
  school: string;
  degree: string;
  country: string;
  rangework: string;
  link: string;
}

export interface EducationArray {
  education: Education[];
}
export interface EducationRootObject {
  education: EducationArray;
}

export interface SchoolPropsTwo {
  children: React.ReactNode | undefined;
  name: string;
  href: string;
  where: string;
  when: string;
}
export interface DegreeProps {
  children: React.ReactNode;
  title: string;
}

export interface Skill {
  type: string;
  list: string;
}

export interface SkillObjectUse {
  skill: Skill[];
}

export interface SkillProps {
  skill: SkillObjectUse;
}

export interface LanguagePropsType {
  lang: string;
  rank: string;
}

export interface LangObject {
  languages: LanguagePropsType[];
}

export interface LanguageProps {
  languages: LangObject;
}

export interface Interest {
  list: string;
}

export interface InterestObject {
  interests: Interest[];
}

export interface InterestsProps {
  interests: InterestObject;
}
