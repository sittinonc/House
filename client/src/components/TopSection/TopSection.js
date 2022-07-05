import { useEffect, useState } from "react";

import Hero from "../Hero/Hero";
import MobileHero from "../MobileHero/MobileHero";
import Section from "../../UI/Section/Section";
const TopSection = (props) => {
  const [screenStatus, setScreenStatus] = useState(
    window.innerWidth < 1024 ? "mobile" : "desktop"
  );
  const reportWindowSize = (e) => {
    console.log(e.target.innerWidth);
    if (e.target.innerWidth < 1024) {
      setScreenStatus("mobile");
    } else {
      setScreenStatus("desktop");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
  }, []);

  return (
    <Section>
      {screenStatus === "desktop" ? (
        <Hero username={props.username} setUsername={props.setUsername} />
      ) : (
        <MobileHero />
      )}
    </Section>
  );
};
export default TopSection;
