import logo from "./logo.svg";
import "./App.css";
//--
import TopSection from "./components/TopSection/TopSection";
import MiddleSection from "./components/MiddleSection/MiddleSection";
function App() {
  return (
    <>
      <TopSection />
      <MiddleSection />
      <div
        style={{ width: "100%", height: "500px", backgroundColor: "grey" }}
      ></div>
    </>
  );
}

export default App;
