import React from "react";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconWrapper from "../shared/IconWrapper";

const externalProps = { target: "_blank", rel: "noreferrer" };

function ProfileButton({ href, className, external, children }:any) {
  const link = (
    <a
      href={href}
      className={`${className} btn btn-block btn-light flex justify-between items-center`}
      {...(external ? externalProps : {})}
    >
      <div className="flex items-center">{children}</div>

      {external && (
        <IconWrapper>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </IconWrapper>
      )}
    </a>
  );

  return external ? link : <Link href={href}>{link}</Link>;
}

const MainSocial = () => (
  <div className="grid gap-1">
    <ProfileButton href="https://github.com/DevilloBen" external>
      <IconWrapper className="mr-1">
        <FontAwesomeIcon icon={faGithub} />
      </IconWrapper>
      GitHub
    </ProfileButton>

    <ProfileButton href="https://linkedin.com/in/benchapon" external>
      <IconWrapper className="mr-1">
        <FontAwesomeIcon icon={faLinkedin} />
      </IconWrapper>
      LinkedIn
    </ProfileButton>

    <ProfileButton href="/resume" className="border-fake">
      <IconWrapper width={12} className="mr-1">
        <FontAwesomeIcon icon={faFileAlt} />
      </IconWrapper>
      Full resume
    </ProfileButton>
  </div>
);

export default MainSocial;