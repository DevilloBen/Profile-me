import React from "react";
import { ExperienceObject, ExpProps } from "../../type/resume.type";
import SectionTitle from "../resume/SectionTitle";

const Experience = ({
  children,
  title,
  link,
  company,
  where,
  when,
}: ExpProps) => (
  <li className="mb-5 dont-page-break">
    <div>
      <h5 className="font-medium">{title}</h5>
      <div className="medium">
        <a href={link} target="_blank" rel="noreferrer" className="link mr-1">
          {company}
        </a>
        - {where} | {when}
      </div>
      <div className="small">{children}</div>
    </div>
  </li>
);

const Professional = ({ exp }: any) => (
  <section>
    <SectionTitle>Professional Experience</SectionTitle>
    <ul className="list-disc list-outside">
      {exp.map((data: ExperienceObject, index: number) => {
        return (
          <Experience
            key={`Experience ${index + 1}`}
            company={data.company}
            link={data.link}
            title={data.role}
            where={data.country}
            when={data.rangework}
          >
            {data.detailwork}
          </Experience>
        );
      })}
    </ul>
  </section>
);

export default Professional;
