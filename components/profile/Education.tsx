import React from "react";
import { SchoolProps } from "../../type/resume.type";

const School = ({ children, href, name, detail }: SchoolProps) => (
  <p className="mb-2 md:mb-0">
    <span className="inline-block mr-1">{children}</span>
    <span className="inline-block">
      <a target="_blank" rel="noreferrer" href={href} className="link">
        {name}
      </a>
      <em className="small text-muted ml-1">({detail})</em>
    </span>
  </p>
);

const Education = () => (
  <section>
    <School
      name="Silpakorn University"
      href="https://www.su.ac.th"
      detail="Thailand, 2018"
    >
      Bachelor’s Degree of Computer Science from
    </School>

    <School
      name="Samutsakhonwittayalai School"
      href="http://www.sksc.ac.th/"
      detail="Thailand, 2012"
    >
      Completed high school from
    </School>
  </section>
);

export default Education;
