import { useState, useEffect } from "react";
import projectsData from "../data/projects.json";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return projects;
};
