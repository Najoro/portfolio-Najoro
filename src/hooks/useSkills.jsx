import { useState, useEffect } from "react";
import skillsData from "../data/Skills.json";

export const useSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return skills;
};
