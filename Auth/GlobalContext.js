import React, { createContext, useState } from "react";
const GlobalContext = createContext();

const GlobalData = (props) => {
  // ----------------------------------------------------------------------------------------------------

  const [status, setStatus] = useState(true);
  const [patient, setPatientId] = useState("");

  // ----------------------------------------------------------------------------------------------------

  return (
    <GlobalContext.Provider
      value={{
        status,
        setStatus,
        patient,
        setPatientId,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalData, GlobalContext };
