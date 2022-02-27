import React, { ReactChild, ReactFragment, ReactPortal } from "react";

interface ChildrenProps{
    children : ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}

const SectionTitle = ({ children }:ChildrenProps) => <h4 className="font-medium mb-2">{children}</h4>;

export default SectionTitle;