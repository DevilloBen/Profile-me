import React from "react";
import { LanguageProps } from "../../modules/ProfileModule";
import { Skills, Skill } from "./Skills";

const Language = ({ languages }: LanguageProps) => (
  <Skills title="Languages">
    {languages.languages.map((data, index) => {
      return (
        <Skill key={`languages ${index + 1}`} name={`${data.lang}`} level={`${data.rank}`} />
      );
    })}
  </Skills>
);

export default Language;