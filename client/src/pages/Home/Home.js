import TopSection from "../../components/TopSection/TopSection";
import MiddleSection from "../../components/MiddleSection/MiddleSection";
const Home = (props) => {
  return (
    <>
      <TopSection username={props.username} setUsername={props.setUsername} />
      <MiddleSection />
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "white",
        }}
      ></div>
    </>
  );
};
export default Home;
