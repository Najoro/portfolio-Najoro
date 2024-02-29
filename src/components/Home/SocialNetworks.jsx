import {TiSocialFacebook , TiSocialLinkedin} from "react-icons/ti";
import {VscGithub} from "react-icons/vsc";
import LinkBouton from '../Other/LinkBouton';


const SocialNetworks = () => {
  return (
    <>
      <LinkBouton
        link="https://www.facebook.com/profile.php?id=100008176270921"
        delaitAnimation="800"
      >
        <TiSocialFacebook />
      </LinkBouton>
      <LinkBouton
        link="https://www.linkedin.com/in/najo-fanantenana-7594a9234/"
        delaitAnimation="700"
      >
        <TiSocialLinkedin />
      </LinkBouton>
      <LinkBouton link="https://github.com/Najoro" delaitAnimation="600">
        <VscGithub />
      </LinkBouton>
    </>
  );
};

export default SocialNetworks;