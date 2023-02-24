import React from 'react';
import IconeGenerate from '../components/IconeGenerate';
import {GrStackOverflow} from "react-icons/gr";

const Services = () => {
      return (
            <div>
                  <h1>Ici le SERVICES</h1>
                  <IconeGenerate iconeBg="red" iconeColor="#fff">
                        <GrStackOverflow />
                  </IconeGenerate>
            </div>
      );
};

export default Services;