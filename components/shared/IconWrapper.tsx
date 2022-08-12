import React, { PropsWithChildren } from "react";

type IconWrapperPropsType = PropsWithChildren<{
  className?: string;
  width?: number;
}>;

const IconWrapper = ({
  children,
  className,
  width = 15,
}: IconWrapperPropsType) => {
  const margin = (24 - width) / 2;

  return (
    <div className={`${className} inline-block`}>
      <div style={{ marginRight: margin, marginLeft: margin }}>
        <div style={{ width }}>{children}</div>
      </div>
    </div>
  );
};

export default IconWrapper;
