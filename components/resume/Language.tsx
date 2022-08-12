import React from "react";
import { Skills, Skill } from "./Skills";
import { LanguagePropsType } from "../../type";

const Language = ({ languages }: any) => (
  <Skills title="Languages">
    {languages.map((data: LanguagePropsType, index: number) => {
      return (
        <Skill
          key={`languages ${index + 1}`}
          name={`${data.lang}`}
          level={`${data.rank}`}
        />
      );
    })}
  </Skills>
);

export default Language;
