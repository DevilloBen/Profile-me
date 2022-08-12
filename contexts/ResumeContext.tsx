import React, { PropsWithChildren, useState } from "react";

export type ResumeDTOType = {
  [field: string]: any;
};

type ResumeContextValueType = {
  resume: ResumeDTOType;
  toggleApi: boolean;
  appendResume: (resume: ResumeDTOType) => void;
  cencelApi: (cancel: boolean) => void;
};

const defaultContext: ResumeContextValueType = {
  resume: {},
  toggleApi: false,
  appendResume: () => {},
  cencelApi: () => {},
};

export const ResumeContext =
  React.createContext<ResumeContextValueType>(defaultContext);
ResumeContext.displayName = "Resume";

type ResumeProviderPropsType = PropsWithChildren<{}>;

export const ResumeProvider = ({ children }: ResumeProviderPropsType) => {
  const [resume, setResume] = useState<ResumeDTOType>({});
  const [toggleApi, setToggleApi] = useState<boolean>(false);

  const appendResume = (_resume: ResumeDTOType) => {
    setResume({ ..._resume });
  };

  const cencelApi = (cancel: boolean) => {
    setToggleApi(cancel);
  };

  return (
    <ResumeContext.Provider
      value={{
        resume,
        toggleApi,
        appendResume,
        cencelApi,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
