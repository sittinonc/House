import Section from "../../UI/Section/Section";
import classes from "./MiddleSection.module.scss";
import SuggestedHouse from "../SuggestedHouse/SuggestedHouse";
import SubscribeBanner from "../SubscribeBanner/SubscribeBanner";
const MiddleSection = () => {
  return (
    <Section style={{ height: "500px", backgroundColor: "green" }}>
      <div className={classes.MiddleSection}>
        <div className={classes.container}>
          <SuggestedHouse />
          <SubscribeBanner />
        </div>
      </div>
    </Section>
  );
};
export default MiddleSection;
