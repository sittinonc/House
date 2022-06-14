import TopSection from "../../components/TopSection/TopSection";
import MiddleSection from "../../components/MiddleSection/MiddleSection";
const Home = () => {
  return (
    <>
      <TopSection />
      <MiddleSection />
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "grey",
        }}
      ></div>
    </>
  );
};
export default Home;
