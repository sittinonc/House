import Section from "../../UI/Section/Section";
import classes from "./MiddleSection.module.scss";
import SuggestedHouse from "../SuggestedHouse/SuggestedHouse";
import SubscribeBanner from "../SubscribeBanner/SubscribeBanner";
const MiddleSection = (props) => {
  return (
    <Section>
      <div className={classes.container}>
        <SuggestedHouse />
        <SubscribeBanner />
      </div>
    </Section>
  );
};
export default MiddleSection;
