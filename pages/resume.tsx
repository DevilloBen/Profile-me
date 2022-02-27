import React from "react";
import Head from 'next/head'
import BackToHomepage from "../components/resume/BackToHomepage";
import Education from "../components/resume/Education";
import Header from "../components/resume/Header";
import Interests from "../components/resume/Interests";
import Language from "../components/resume/Language";
import Professional from "../components/resume/Professional";
import TechnicalSkills from "../components/resume/TechnicalSkills";

function ResumePage() {
  return (
    <>
    <Head>
      <title>Benchapon Sakhonkam - Full stack developer</title>
    </Head>
    <main className="container mx-auto p-5 my-8">
      <div className="grid gap-20">
        <BackToHomepage />

        <Header />
        <Professional />
        <Education />
        <TechnicalSkills />
        <Language />
        <Interests />

        <BackToHomepage />
      </div>
    </main>
    </>
  );
}

export default ResumePage;