import { useState, useEffect } from "react";
import classes from "./PhotoShowcase.module.scss";

const img1 =
  "https://i.pinimg.com/originals/53/64/1f/53641fb65cedc116e2d1b14509bb9e4f.jpg";
const img2 =
  "https://cdn.vox-cdn.com/thumbor/teCEQIxlj9RbCj6P_vlwMopAptQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11545893/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.jpg";
const img3 =
  "https://static.wixstatic.com/media/4b725e_b3470990cd394866ab87baebfc609f5c~mv2.jpg/v1/crop/x_119,y_0,w_962,h_1200/fill/w_440,h_548,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Virginia-USA-mansion-Fireplace-Lounge-de.jpg";
const img4 =
  "https://www.168tobedesign.co.th/wp-content/uploads/2022/02/modern19.webp";

const PhotoShowcase = (props) => {
  const [commander, setCommander] = useState();

  useEffect(() => {}, []);

  const [photo, setPhoto] = useState([img1, img2, img3, img4]);
  const parade = () => {};
  return (
    <div className={classes.container}>
      <div className={classes.photoBox}>
        {photo.map((e, i) => {
          return (
            <div className={classes.each}>
              <img className={classes.img} src={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoShowcase;
