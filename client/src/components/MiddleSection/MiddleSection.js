import Section from "../../UI/Section/Section";
import classes from "./MiddleSection.module.scss";
import SuggestedHouse from "../SuggestedHouse/SuggestedHouse";
const MiddleSection = () => {
  return (
    <Section style={{ height: "500px", backgroundColor: "green" }}>
      <div className={classes.MiddleSection}>
        <div className={classes.container}>
          <SuggestedHouse />
        </div>
      </div>
    </Section>
  );
};
export default MiddleSection;
