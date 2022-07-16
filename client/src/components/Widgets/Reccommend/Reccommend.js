import { useState } from "react";

import classes from "./Reccommend.module.scss";
import SideWidget from "../../../UI/SideWidget/SideWidget";

import EachReccommend from "./EachReccommend/EachReccommend";

const Reccommend = () => {
  //API
  const [recHouses, setRecHouses] = useState([
    {
      label: "บ้านเดี่ยว นนทบุรี อำเภอเมือง",
      photo:
        "https://content.mediastg.net/dyna_images/agents/225/121921/20140217040930.jpg",
      price: 4900000,
    },
    {
      label: "บ้าน2",
      photo:
        "https://ddajb7q31joyp.cloudfront.net/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiIzMDg2OGRiMy03NTNhLTRiNGUtOWFlMi04NTAzNGI2MDFjYmUvMzA4NjhkYjMtNzUzYS00YjRlLTlhZTItODUwMzRiNjAxY2JlXzc4ODEzMTczNzVkY2QwOGI4NWI5NGYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDkwLCJoZWlnaHQiOjMyNSwiZml0IjoiY292ZXIifX19",
      price: 6200000,
    },
    {
      label: "บ้าน3",
      photo:
        "http://d2kcmk0r62r1qk.cloudfront.net/imageSponsors/xlarge/2020_10_22_02_17_53_victorygreen_remingtonhomes_rendering_exterior3.jpg",
      price: 5700000,
    },
  ]);
  return (
    <SideWidget>
      <div className={classes.reccommend}>
        <div className={classes.head}>
          <span>โครงการแนะนำ</span>
        </div>
        <div className={classes.box}>
          {recHouses.map((e, i) => {
            return <EachReccommend key={i} data={e} />;
          })}
        </div>
      </div>
    </SideWidget>
  );
};

export default Reccommend;
