import React from "react";

interface HeaderProps {
  name: boolean;
  title: boolean;
  description: boolean;
}

const Headings = ({ name, title, description }: HeaderProps) => (
  <>
    {name && (
      <h1 className="text-5xl font-bold leading-none tracking-tighter">
        Benchapon Sakhonkam
      </h1>
    )}

    {title && (
      <h2 className="text-3xl font-medium">
        <div className="inline-block">Product-minded&nbsp;</div>
        <div className="inline-block">software engineer.</div>
      </h2>
    )}

    {description && (
      <h3 className="text-base mb-5">
        Robust problem-solving skills, fast learner, responsible, eager to learn
        new technologies.
      </h3>
    )}
  </>
);

Headings.defaultProps = {
  name: true,
  title: true,
  description: true,
};

export default Headings;
