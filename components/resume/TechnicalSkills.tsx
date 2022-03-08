import React from "react";
import { SkillProps } from "../../modules/ProfileModule";

import { Skills, Skill } from "./Skills";

const TechnicalSkills = ({ skill }: SkillProps) => (
  <Skills title="Skills">
      {skill.skill.map((data, index) => {
        return (
          <Skill key= {`Skills ${index+1}`} name={`${data.type}`} level={`${data.list}`} />
        );
      })}

  </Skills>
);

export default TechnicalSkills;