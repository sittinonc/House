import { Spin } from "react-loading-io";
const SpinLoad = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Spin color="rgba(95,22,22,1)" size={"220"} speed={0.95} width={"4"} />
    </div>
  );
};

export default SpinLoad;
