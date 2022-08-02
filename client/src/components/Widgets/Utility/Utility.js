import Options from "../../../UI/SideWidget/Options/Options";
import Button from "@mui/material/Button";
import { useState } from "react";
const Utility = () => {
  const [bedroom, setBedroom] = useState();
  const [restroom, setRestroom] = useState();
  const [parklot, setParklot] = useState();
  const [district, setDistrict] = useState();

  const config = {
    head: "คุณสมบัตร",
    each: [
      { label: "ห้องนอน", val: ["ห้องนอน", 1, 2, 3, 4] },
      { label: "ห้องน้ำ", val: ["ห้องน้ำ", 1, 2, 3, 4] },
      { label: "ลานจอดรถ", val: ["ลานจอดรถ", "1 คัน", "2 คัน", "3 คัน"] },
      { label: "อำเภอ", val: ["อำเภอ", "บาง1", "บาง2", "บาง3"] },
    ],
  };

  return (
    <Options
      config={config}
      setBedroom={setBedroom}
      setRestroom={setRestroom}
      setParklot={setParklot}
      setDistrict={setDistrict}
    />
  );
};

export default Utility;
