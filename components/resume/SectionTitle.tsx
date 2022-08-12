import React, { PropsWithChildren } from "react";

type SectionTitlePropsType = PropsWithChildren<{}>;
const SectionTitle = ({ children }: SectionTitlePropsType) => (
  <h4 className="text-3xl font-medium mb-2">{children}</h4>
);

export default SectionTitle;
