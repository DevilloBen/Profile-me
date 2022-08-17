import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCloudMoon,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconWrapper from "../shared/IconWrapper";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type MainSocialPropsType = {
  checked: boolean;
  handleThame: () => void;
};

type ProfileButtonPropsType = PropsWithChildren<{
  href: string;
  className?: string;
  external?: boolean;
  color: string;
}>;

const externalProps = { target: "_blank", rel: "noreferrer" };

function ProfileButton({
  href,
  className,
  external,
  children,
  color,
}: ProfileButtonPropsType) {
  const link = (
    <a
      href={href}
      className={`${className} btn btn-block ${color} flex justify-between items-center`}
      {...(external ? externalProps : {})}
    >
      <div className="flex items-center">{children}</div>
      {external && (
        <IconWrapper>
          <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
        </IconWrapper>
      )}
    </a>
  );

  return external ? link : <Link href={href}>{link}</Link>;
}

const MainSocial = ({ handleThame, checked }: MainSocialPropsType) => (
  <div className="grid gap-1">
    <ProfileButton
      href="https://github.com/DevilloBen"
      color="btn-light"
      external
    >
      <IconWrapper className="mr-1">
        <FontAwesomeIcon icon={faGithub as IconProp} />
      </IconWrapper>
      GitHub
    </ProfileButton>

    <ProfileButton
      href="https://linkedin.com/in/benchapon"
      color="btn-light"
      external
    >
      <IconWrapper className="mr-1">
        <FontAwesomeIcon icon={faLinkedin as IconProp} />
      </IconWrapper>
      LinkedIn
    </ProfileButton>

    <ProfileButton href="/Resume" color="btn-resume">
      <IconWrapper width={12} className="mr-1">
        <FontAwesomeIcon icon={faFileAlt as IconProp} />
      </IconWrapper>
      Full resume
    </ProfileButton>

    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <IconWrapper className="mr-1">
          <FontAwesomeIcon icon={faCloudMoon as IconProp} />
        </IconWrapper>
        Theme
      </div>

      <label className="switch">
        <input type="checkbox" onChange={handleThame} checked={checked} />
        <span className="slider round" />
      </label>
    </div>
  </div>
);

export default MainSocial;
