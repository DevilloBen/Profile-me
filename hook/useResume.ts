import { useContext, useEffect, useMemo, useState } from "react";
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
  const [loader, serLoader] = useState<boolean>(toggleApi);

  useEffect(() => {
    if (toggleApi) return;
    getDataProfile()
      .then((data) => {
        appendResume(data);
        serLoader(true);
      })
      .catch((error) => {
        console.log(error);
      });

    cencelApi(true);
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
    loader,
  };
};

export default useResume;
