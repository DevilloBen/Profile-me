import React, { PropsWithChildren } from "react";
import SectionTitle from "./SectionTitle";

type SkillPropsType = {
  name: string;
  level: string;
};

type SkillsPropsType = PropsWithChildren<{
  title: string;
}>;

export const Skill = ({ name, level }: SkillPropsType) => (
  <li>
    <span className="font-bold">{name}</span> - {level}
  </li>
);

export const Skills = ({ children, title }: SkillsPropsType) => (
  <section className="dont-page-break">
    <SectionTitle>{title}</SectionTitle>

    <ul className="list-disc list-outside">{children}</ul>
  </section>
);
