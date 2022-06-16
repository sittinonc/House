import TopSection from "../../components/TopSection/TopSection";
import MiddleSection from "../../components/MiddleSection/MiddleSection";
import BottomSection from "../../components/BottomSection/BottomSection";
const Home = (props) => {
  return (
    <>
      <TopSection username={props.username} setUsername={props.setUsername} />
      <MiddleSection />
      <BottomSection />
    </>
  );
};
export default Home;
