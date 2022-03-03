import Head from 'next/head';
import React, { useEffect, useState } from "react";
import apis from "./api/GetProfileData";
import BackToHomepage from "../components/resume/BackToHomepage";
import Education from "../components/resume/Education";
import Header from "../components/resume/Header";
import Interests from "../components/resume/Interests";
import Language from "../components/resume/Language";
import Professional from "../components/resume/Professional";
import TechnicalSkills from "../components/resume/TechnicalSkills";
import { EducationObject, ExperienceObject, InterestsObject, LanguagesObject, SkillObject, TypeExp } from "../modules/ProfileModule";

function ResumePage() {
  const [interests, setInterests] = useState<InterestsObject[]>();
  const [languages, setLanguages] = useState<LanguagesObject[]>();
  const [experience, setExperience] = useState<ExperienceObject[]>();
  const [education, setEducation] = useState<EducationObject[]>();
  const [skill, setSkill] = useState<SkillObject[]>();
  const [response, setResponse] = useState<TypeExp | null>();

  useEffect(() => {
    async function getData() {
      const res = await apis.getDataProfile('professional');
      setResponse(res)
    }
    getData()
    return () => {
      setExperience
    }
  }, [])

  useEffect(() => {
    setJson()
    return () => {
      setResponse
    }
  }, [response])

  const setJson = () => {
    if (response) {
      var jsonGood = JSON.parse(response.resume)
      setExperience(JSON.parse(jsonGood.experience))
      setEducation(JSON.parse(jsonGood.education))
      setLanguages(JSON.parse(jsonGood.languages))
      setInterests(JSON.parse(jsonGood.interests))
      setSkill(JSON.parse(jsonGood.skill))
    }
  }

  return (
    <>
      <Head>
        <title>Benchapon Sakhonkam - Full stack developer</title>
      </Head>
      <main className="container mx-auto p-5 my-8">
        <div className="grid gap-20">
          <BackToHomepage />

          <Header />
          {
            experience && <Professional />
          }
          {
            education && <Education />
          }
          {
            skill && <TechnicalSkills />
          }
          {
            languages && <Language />
          }
          {
            interests && <Interests />
          }

          <BackToHomepage />
        </div>
      </main>


    </>
  );
}

export default ResumePage;