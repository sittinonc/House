import TopSection from "../../components/TopSection/TopSection";
import MiddleSection from "../../components/MiddleSection/MiddleSection";
import BottomSection from "../../components/BottomSection/BottomSection";
import classes from "./Home.module.scss";
const Home = (props) => {
  return (
    <div className={classes.page}>
      <TopSection username={props.username} setUsername={props.setUsername} />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};
export default Home;
