import { faJava, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IconWrapper from "../shared/IconWrapper";
import Headings from "./Headings";

const Header = () => (
  <header>
    <Headings />

    <div className="flex flex-wrap align-center">
      <span className="flex items-center mr-1">
        <IconWrapper width={15}>
          <FontAwesomeIcon icon={faJs} className="text-yellow-500" />
        </IconWrapper>
        <IconWrapper width={17}>
          <FontAwesomeIcon icon={faReact} className="text-blue-500" />
        </IconWrapper>
        <IconWrapper width={12}>
          <FontAwesomeIcon icon={faLightbulb} className="text-orange-500" />
        </IconWrapper>
      </span>

      <span className="inline-block">Mostly focused on Node.js, React and Product.</span>
    </div>

    <div className="flex flex-wrap align-center">
      <span className="flex items-center mr-1">
        <IconWrapper width={15}>
          <FontAwesomeIcon icon={faJava} className="text-red-900" />
        </IconWrapper>
        <IconWrapper width={18}>
          <FontAwesomeIcon icon={faPython} className="text-blue-500" />
        </IconWrapper>
        <IconWrapper width={14}>
          <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" />
        </IconWrapper>
      </span>

      <span className="inline-block">Also a Java, Python and UX enthusiast.</span>
    </div>
  </header>
);

export default Header;