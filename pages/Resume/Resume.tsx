import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import BackToHomepage from "../../components/resume/BackToHomepage";
import Education from "../../components/resume/Education";
import Header from "../../components/resume/Header";
import Interests from "../../components/resume/Interests";
import Language from "../../components/resume/Language";
import Professional from "../../components/resume/Professional";
import TechnicalSkills from "../../components/resume/TechnicalSkills";
import useResume from "../../hook/useResume";

const Resume: NextPage = () => {
  const { worked, education, skills, languages, interest } = useResume();

  return (
    <Fragment>
      <Head>
        <title>Benchapon Sakhonkam - Full stack developer</title>
      </Head>
      <main className="container mx-auto p-5 my-8">
        <div className="grid gap-20">
          <BackToHomepage />
          <Header />
          {worked && <Professional exp={worked} />}
          {education && <Education education={education} />}
          {skills && <TechnicalSkills skill={skills} />}
          {languages && <Language languages={languages} />}
          {interest && <Interests interests={interest} />}
          <BackToHomepage />
        </div>
      </main>
    </Fragment>
  );
};

export default Resume;
