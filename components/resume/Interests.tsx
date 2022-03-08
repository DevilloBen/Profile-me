import React from "react";
import { InterestsProps } from "../../modules/ProfileModule";

import SectionTitle from "./SectionTitle";



const Interests = ({ interests }: InterestsProps) => (
  <section className="dont-page-break">
    <SectionTitle>Other Interests</SectionTitle>

    <ul className="list-disc list-outside">
      {interests.interests.map((data, index) => {
        return (
          <li key={`interests ${index + 1}`}>{data.list}</li>
        );
      })}
    </ul>
  </section>
);

export default Interests;