import React from "react";
import Link from "next/link";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconWrapper from "../shared/IconWrapper";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const BackToHomepage = ({ text = "Back to homepage" } = {}) => (
  <div className="hide-when-printing">
    <Link href="/">
      <a className="btn btn-light inline-flex items-center pr-5">
        <IconWrapper className="mr-2">
          <FontAwesomeIcon icon={faArrowLeft as IconProp} />
        </IconWrapper>
        {text}
      </a>
    </Link>
  </div>
);

export default BackToHomepage;
