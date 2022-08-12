import React from "react";
import { Interest, InterestsProps } from "../../type/resume.type";

import SectionTitle from "./SectionTitle";

const Interests = ({ interests }: any) => (
  <section className="dont-page-break">
    <SectionTitle>Other Interests</SectionTitle>
    <ul className="list-disc list-outside">
      {interests.map((data: Interest, index: number) => {
        return <li key={`interests ${index + 1}`}>{data.list}</li>;
      })}
    </ul>
  </section>
);

export default Interests;
