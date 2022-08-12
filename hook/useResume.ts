import { useContext, useEffect, useMemo } from "react";
import { getDataProfile } from "../apis/resume.api";
import { ResumeContext } from "../contexts";
import {
  EducationPropsType,
  InterestPropsType,
  LanguagesPropsType,
  SkillsPropsType,
  WorkedPropsType,
} from "../type";

const useResume = () => {
  const { resume, toggleApi, appendResume, cencelApi } =
    useContext(ResumeContext);

  useEffect(() => {
    if (toggleApi) return;
    getDataProfile()
      .then((data) => {
        appendResume(data);
      })
      .catch((error) => {
        console.log(error);
      });

    cencelApi(false);
  }, []);

  const worked = useMemo<WorkedPropsType>(() => {
    return resume.worked;
  }, [resume]);

  const education = useMemo<EducationPropsType>(() => {
    return resume.education;
  }, [resume]);

  const interest = useMemo<InterestPropsType>(() => {
    return resume.interests;
  }, [resume]);

  const languages = useMemo<LanguagesPropsType>(() => {
    return resume.language;
  }, [resume]);

  const skills = useMemo<SkillsPropsType>(() => {
    return resume.skills;
  }, [resume]);

  return {
    worked,
    education,
    skills,
    languages,
    interest,
  };
};

export default useResume;
