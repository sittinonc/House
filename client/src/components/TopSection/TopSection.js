import Hero from "../Hero/Hero";
import Section from "../../UI/Section/Section";
const TopSection = (props) => {
  return (
    <Section style={{ height: "100vh" }}>
      <Hero username={props.username} setUsername={props.setUsername} />
    </Section>
  );
};
export default TopSection;
