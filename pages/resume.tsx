import Head from 'next/head';
import React, { useEffect, useMemo, useState } from "react";
import BackToHomepage from "../components/resume/BackToHomepage";
import Education from "../components/resume/Education";
import Header from "../components/resume/Header";
import Interests from "../components/resume/Interests";
import Language from "../components/resume/Language";
import Professional from "../components/resume/Professional";
import TechnicalSkills from "../components/resume/TechnicalSkills";
import { EducationArray, InterestObject, LangObject, SkillObjectUse, TypeExp, UseExpObject } from "../modules";
import apis from "./api/GetProfileData";

function ResumePage() {
  const [interests, setInterests] = useState<InterestObject>();
  const [languages, setLanguages] = useState<LangObject>();
  const [experience, setExperience] = useState<UseExpObject>();
  const [education, setEducation] = useState<EducationArray>();
  const [skill, setSkill] = useState<SkillObjectUse>();
  const res = useMemo(async () => await apis.getDataProfile(`${process.env.NEXT_PUBLIC_COLLECT_FIREBASE}`), [process.env.NEXT_PUBLIC_COLLECT_FIREBASE]);

  useEffect(() => {
    async function getData() {
      setJson(await res)
    }
    getData()
    return () => {
      setExperience
      setInterests
      setLanguages
      setEducation
      setSkill
    }
  }, [res])


  const setJson = (response: TypeExp | null) => {
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
            experience && <Professional exp={experience} />
          }
          {
            education && <Education education={education} />
          }
          {
            skill && <TechnicalSkills skill={skill}/>
          }
          {
            languages && <Language languages={languages}/>
          }
          {
            interests && <Interests interests={interests}/>
          }

          <BackToHomepage />
        </div>
      </main>


    </>
  );
}


export default ResumePage;