import React from "react";

import SectionTitle from "./SectionTitle";

export const Skill = ({ name, level }:any) => (
  <li>
    <span className="font-bold">{name}</span> - {level}
  </li>
);

export const Skills = ({ children, title }:any) => (
  <section className="dont-page-break">
    <SectionTitle>{title}</SectionTitle>

    <ul className="list-disc list-outside">{children}</ul>
  </section>
);