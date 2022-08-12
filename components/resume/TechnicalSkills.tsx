import React from "react";
import { SkillObject, SkillProps } from "../../type/resume.type";

import { Skills, Skill } from "./Skills";

const TechnicalSkills = ({ skill }: any) => (
  <Skills title="Skills">
    {skill.map((data: SkillObject, index: number) => {
      return (
        <Skill
          key={`Skills ${index + 1}`}
          name={`${data.type}`}
          level={`${data.list}`}
        />
      );
    })}
  </Skills>
);

export default TechnicalSkills;
