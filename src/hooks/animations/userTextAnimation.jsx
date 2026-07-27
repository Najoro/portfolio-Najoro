import { useEffect } from "react";
import { gsap } from "gsap";
import TextType from './TextType';


function userTextAnimation() {
  useEffect(() => {
    gsap.to(".user-text", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });
  }, []);
  return (
    <TextType 
        text={["Text typing effect", "for your websites", "Happy coding!"]}
        typingSpeed={200}
        pauseDuration={1300}
        showCursor
        cursorCharacter="▎"
        texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
        deletingSpeed={50}
        variableSpeedEnabled={false}
        variableSpeedMin={60}
        variableSpeedMax={120}
        cursorBlinkDuration={2}
    />
  )
}

export default userTextAnimation