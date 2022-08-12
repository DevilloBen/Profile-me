import React from "react";
import {
  DegreeProps,
  EducationObject,
  SchoolPropsTwo,
} from "../../type/resume.type";
import SectionTitle from "../resume/SectionTitle";

const School = ({  name, href, where, when }: SchoolPropsTwo) => (
  <div className="mb-2">
    <a href={href} target="_blank" rel="noreferrer" className="link mr-1">
      {name}
    </a>
    <p className="small">
      {where} | {when}
    </p>
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

const Education = ({ education }: any) => (
  <section>
    <SectionTitle>Academic Education</SectionTitle>
    <ul className="list-disc list-outside">
      {education.map((data: EducationObject, index: number) => {
        return (
          <Degree key={`education ${index + 1}`} title={data.degree}>
            <School
              name={data.school}
              href={data.link}
              where={data.country}
              when={data.rangework}
            />
          </Degree>
        )
      })}
    </ul>
  </section>
);

export default Education;
