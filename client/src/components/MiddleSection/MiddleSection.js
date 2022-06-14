import Section from "../../UI/Section/Section";
import classes from "./MiddleSection.module.scss";
import SuggestedHouse from "../SuggestedHouse/SuggestedHouse";
import { FcHome } from "react-icons/fc";
const MiddleSection = () => {
  return (
    <Section style={{ height: "500px", backgroundColor: "green" }}>
      <div className={classes.MiddleSection}>
        <div className={classes.container}>
          <div className={classes.text}>
            <div className={classes.topic}>
              <div className={classes.bigCircle}>
                <div className={classes.smallCircle}>
                  <FcHome className={classes.icon} />
                </div>
              </div>
              <span>โครงการแนะนำ</span>
            </div>
            <div className={classes.detail}>
              <div className={classes.line} />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                excepturi consectetur mollitia quisquam sit aut veritatis
                voluptatibus numquam delectus.
              </p>
            </div>
          </div>
          <SuggestedHouse />
        </div>
        <div className={classes.buttonBox}>
          <div className={classes.button}>ดูโครงการทั้งหมด</div>
        </div>
      </div>
    </Section>
  );
};
export default MiddleSection;
