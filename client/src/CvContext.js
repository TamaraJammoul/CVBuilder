import React, {useState, useEffect} from "react";
import axios from "axios";
export const CvContext = React.createContext();

export function CvProvider(Props) {
  const [courses, setCourses] = useState([]);

  return (
    <CvContext.Provider
      value={{
        courses,
      }}
    >
      {Props.children}
    </CvContext.Provider>
  );
}
