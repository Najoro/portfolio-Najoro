import React , {useEffect}from "react";
import AOS from 'aos';
import { Identity, NavLi, NavBody , Biographie , Skills, Education} from "../fonctions/ResumeFunctions";
const Resume = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className="resume">
        <Identity />
      <div className="nav-container m-md-5 mt-5">
          <ul className="nav nav-pills mb-3 nav-ul" id="pills-tab" role="tablist">
              <NavLi  nom="biographie" label="BIOGRAPHIE - 01" active="active"/>
              <NavLi nom="skills" label="SKILLS - 02"/>
              <NavLi nom="education" label="EDUCATION - 03"/>
          </ul>
          <div className="tab-content nav-body" id="pills-tabContent">
            <NavBody  nom= "biographie" active="active"><Biographie /></NavBody>
            <NavBody nom= "skills"><Skills /></NavBody>
            <NavBody nom= "education"><Education /></NavBody>
          </div>
        </div>
    </div>
  );
};

export default Resume;
