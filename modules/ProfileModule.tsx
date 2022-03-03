export interface GetDataTest {
  id: string
  node: string
}

export interface SchoolProps {
  children: React.ReactNode,
  href: string,
  name: string,
  detail: string
}

export interface TypeExp {
  resume: string
}

export interface ExperienceObject {
  role: string;
  company: string;
  country: string;
  rangework: string;
  detailwork: string;
}

export interface EducationObject {
  school: string;
  degree: string;
  country: string;
  rangework: string;
}

export interface LanguagesObject {
  lang: string;
  rank: string;
}

export interface InterestsObject {
  list: string;
}

export interface SkillObject {
  type: string
  list: string;
}
