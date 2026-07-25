import { useState, useEffect } from "react";
import experienceData from "../data/experience.json";

export const useExperience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setExperience(experienceData);
  }, []);

  return experience;
};
