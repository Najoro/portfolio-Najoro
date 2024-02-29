import React from 'react';

const LinkBouton = ({link , delaitAnimation ,  children}) => {
      return (
            <>
            <a href={link}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration = {delaitAnimation}
                  className="text-dark" style={{fontSize : "1.5rem"}}>
                  {children}
            </a>
            </>
      );
};

export default LinkBouton;