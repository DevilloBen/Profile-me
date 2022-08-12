import React from "react";

import Headings from "../profile/Headings";

interface HeaderResumeProps {
  headings: {};
  site: boolean;
  github: boolean;
  linkedin: boolean;
  location: boolean;
  phone: boolean;
  email: boolean;
}

const Header = ({
  headings,
  site,
  github,
  linkedin,
  location,
  phone,
  email,
}: HeaderResumeProps) => (
  <header className="text-right dont-page-break">
    <Headings {...headings} />

    {site && (
      <p className="text-base">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://devillo.vercel.app/"
          className="link"
        >
          devillo.vercel.app
        </a>
      </p>
    )}

    {github && (
      <p className="text-base">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DevilloBen"
          className="link"
        >
          github.com/DevilloBen
        </a>
      </p>
    )}

    {linkedin && (
      <p className="text-base">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/benchapon"
          className="link"
        >
          linkedin.com/in/benchapon
        </a>
      </p>
    )}

    {location && (
      <p className="text-muted text-base">Thailand, Bangkok (UTC-7)</p>
    )}

    {phone && <p className="text-muted text-base">+66 93 1787-157</p>}

    {email && <p className="text-muted text-base">sakhonkam_b@gmail.com</p>}
  </header>
);

Header.defaultProps = {
  headings: {},
  site: true,
  github: true,
  linkedin: true,
  location: true,
  phone: true,
  email: true,
};

export default Header;
