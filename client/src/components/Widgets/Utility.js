import classes from "./Utility.module.scss";
import Options from "../../UI/SideWidget/Options/Options";
const Utility = () => {
  const config = {
    head: "คุณสมบัตร",
    each: [
      { label: "ห้องนอน", val: ["ห้องนอน", 1, 2, 3, 4] },
      { label: "ห้องน้ำ", val: ["ห้องน้ำ", 1, 2, 3, 4] },
      { label: "ลานจอดรถ", val: ["ลานจอดรถ", "1 คัน", "2 คัน", "3 คัน"] },
      { label: "อำเภอ", val: ["อำเภอ", "บาง1", "บาง2", "บาง3"] },
    ],
  };
  return <Options config={config} />;
};

export default Utility;
