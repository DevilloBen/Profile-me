import React from "react";
import { ExpProps, ExperienceObject, ProfessionalProps } from "../../modules/ProfileModule";
import SectionTitle from "../resume/SectionTitle";

const Experience = ({ children, title, href, company, where, when }: ExpProps) => (
  <li className="mb-5 dont-page-break">
    <div>
      <h5 className="font-medium">{title}</h5>
      <div className="small">
        <a href={href} target="_blank" rel="noreferrer" className="link mr-1">
          {company}
        </a>
        - {where} | {when}
      </div>
      <div>{children}</div>
    </div>
  </li>
);

const Professional = ({ exp }: ProfessionalProps) => (
  <section>
    <SectionTitle>Professional Experience</SectionTitle>
    <ul className="list-disc list-outside">
      {exp.experience.map((data, index) => {
        return (
          <Experience
            key={`Experience ${index + 1}`}
            company={data.company}
            href="https://railsware.com/"
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