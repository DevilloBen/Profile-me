import { faFile } from "@fortawesome/free-regular-svg-icons";
import {
  faFireFlameCurved,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { PropsWithChildren } from "react";
import IconWrapper from "../shared/IconWrapper";
import SectionTitle from "./SectionTitle";

type ProjectPropsType = PropsWithChildren<{
  name: string;
  href: string;
  icon: React.ReactNode;
}>;

const Project = ({ children, name, href, icon }: ProjectPropsType) => (
  <div className="mb-2 md:mb-0">
    <span className="inline-flex items-center">
      {icon}&nbsp;
      <a target="_blank" rel="noreferrer" href={href} className="link">
        {name}
      </a>
      ,&nbsp;
    </span>
    <span className="inline-block">{children}.</span>
  </div>
);

const Projects = () => (
  <section>
    <SectionTitle>Projects</SectionTitle>
    <Project
      name="Ezygas"
      href="https://ezygas.co/"
      icon={
        <IconWrapper>
          <FontAwesomeIcon icon={faFireFlameCurved} className="text-red-500" />
        </IconWrapper>
      }
    >
      a wizard to make managing your gas shop. It's easy in one website.
    </Project>
    <Project
      name="PTT Product"
      href="https://www.pttplc.com/th/Home.aspx"
      icon={
        <IconWrapper>
          <FontAwesomeIcon icon={faLaptopCode} className="text-black-500" />
        </IconWrapper>
      }
    >
      Many projects developed by me
    </Project>

    <Project
      name="Resume"
      href="https://github.com/DevilloBen/Profile-me"
      icon={
        <IconWrapper>
          <FontAwesomeIcon icon={faFile} width={14} className="text-gray-700" />
        </IconWrapper>
      }
    >
      personal website, built using Next.js, Typescript and Tailwind CSS
    </Project>

    <div>
      <i aria-hidden className="fas fa-fw mr-1 fa-hourglass-half"></i>
      More soon..
    </div>
  </section>
);

export default Projects;
