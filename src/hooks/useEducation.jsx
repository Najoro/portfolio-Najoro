import { useState, useEffect } from "react";
import educationData from "../data/Education.json";

export const useEducation = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setEducation(educationData);
  }, []);

  return education;
};
