import React from "react";
import Link from "next/link";
import { faGithub, faLinkedin, faAngellist, faGitlab, faHackerNewsSquare, faFreeCodeCamp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconWrapper from "../shared/IconWrapper";
import SectionTitle from "./SectionTitle";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Social = () => (
  <section>
    <SectionTitle>More about me</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faFileAlt} width={12} />
        </IconWrapper>

        <Link href="/resume">
          <a className="link">Full resume</a>
        </Link>
      </div>

      <div className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faGithub} />
        </IconWrapper>

        <a target="_blank" rel="noreferrer" href="https://github.com/DevilloBen/" className="link">
          GitHub
        </a>
      </div>

      <div className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-700"/>
        </IconWrapper>

        <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/benchapon" className="link">
          LinkedIn
        </a>
      </div>

      <div className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faCode} width={14} />
        </IconWrapper>

        <a target="_blank" rel="noreferrer" href="https://app.codesignal.com/profile/devilloben" className="link">
          Codesignal
        </a>
      </div>

      <div className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faGitlab} className="text-orange-700"/>
        </IconWrapper>

        <a target="_blank" rel="noreferrer" href="https://gitlab.com/BenchaponSakhonkam" className="link">
          GitLab
        </a>
      </div>

      <div className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faFacebook} className="text-blue-700"/>
        </IconWrapper>

        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/evilbenchapon/" className="link">
          Facebook
        </a>
      </div>
    </div>
  </section>
);

export default Social;