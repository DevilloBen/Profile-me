import React from "react";
import { DegreeProps, EducationRootObject, SchoolPropsTwo } from "../../modules/ProfileModule";
import SectionTitle from "../resume/SectionTitle";

const School = ({ children, name, href, where, when }: SchoolPropsTwo) => (
  <div className="mb-2">
    <a href={href} target="_blank" rel="noreferrer" className="link mr-1">
      {name}
    </a>

    <p className="small">
      {where} | {when}
    </p>

    {children && <p className="small">{children}</p>}
  </div>
);

const Degree = ({ children, title }: DegreeProps) => (
  <li className="mb-5 dont-page-break">
    <div>
      <h5 className="font-medium">{title}</h5>
      {children}
    </div>
  </li>
);

const Education = ({ education }: EducationRootObject) => (
  <section>
    <SectionTitle>Academic Education</SectionTitle>

    <ul className="list-disc list-outside">
      {education.education.map((data, index) => {
        return (
          <Degree key={`education ${index + 1}`} title={data.degree}>
            <School
              name={data.school}
              href="https://ufsc.br"
              where={data.country}
              when={data.rangework} children={undefined} />
          </Degree>
        );
      })}
    </ul>
  </section>
);

export default Education;