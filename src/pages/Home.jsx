import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Images, Welcome, LinksBouton } from '../fonctions/HomeFunctions';


const Home = () => {
      useEffect(() => {
            AOS.init();
            AOS.refresh();
          }, []);
      return (
            <div className=" home row h-100 w-100">
                  <div className="welcome col-md-5 d-flex flex-column justify-content-center "> 
                        <Welcome />
                  </div>
                  <div className="col-md-6">
                        <Images />
                  </div>
                  <div className="reseaux col-md-1 d-md-flex justify-content-center flex-column align-items-center">
                        <LinksBouton />
                  </div>
            </div>
      );
};

export default Home;