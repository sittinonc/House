import classes from "./TopSection.module.scss";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
const TopSection = () => {
  return (
    <div className={classes.TopSection}>
      <Hero />
    </div>
  );
};
export default TopSection;
