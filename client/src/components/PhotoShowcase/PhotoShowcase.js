import { useState, useEffect } from "react";

import classes from "./PhotoShowcase.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const img0 =
  "https://i.pinimg.com/originals/53/64/1f/53641fb65cedc116e2d1b14509bb9e4f.jpg";
const img1 =
  "https://cdn.vox-cdn.com/thumbor/teCEQIxlj9RbCj6P_vlwMopAptQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11545893/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.jpg";
const img2 =
  "https://static.wixstatic.com/media/4b725e_b3470990cd394866ab87baebfc609f5c~mv2.jpg/v1/crop/x_119,y_0,w_962,h_1200/fill/w_440,h_548,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Virginia-USA-mansion-Fireplace-Lounge-de.jpg";
const img3 =
  "https://www.168tobedesign.co.th/wp-content/uploads/2022/02/modern19.webp";
const img4 =
  "https://archello.com/thumbs/images/2019/01/07/Interior-Design-of-Luxury-Modern-Residence-6.1546900319.0638.jpg?fit=crop&w=414&h=518";

const PhotoShowcase = (props) => {
  const [photo, setPhoto] = useState([img0, img1, img2, img3, img4]);
  const [photoSet, setPhotoSet] = useState([
    "img0",
    "img1",
    "img2",
    "img3",
    "img4",
  ]);
  //img0, img1, img2, img3, img4
  //img4, img3, img2, img0, img1,
  const reportWindowSize = () => {
    console.log(window.innerWidth);
  };
  useEffect(() => {}, window.addEventListener("resize", reportWindowSize));

  if (photo) {
    return (
      <div className={classes.container}>
        <div className={classes.photoBox}>
          {photo.map((e, i) => {
            return (
              <div className={classes.each}>
                <img className={classes.img} src={photo[i]} />
              </div>
            );
          })}

          <div className={classes.controll}>
            <div
              className={classes.left}
              onClick={() => {
                let i = 0;
                let array = [];
                let last = photo[photo.length - 1];
                while (i < photo.length) {
                  if (i === 0) {
                    console.log("first");
                    console.log(last);
                    array.push(last);
                    array.push(photo[i]);
                  } else if (i === photo.length - 1) {
                    console.log("last position, skip it");
                  } else {
                    console.log("normal case");
                    array.push(photo[i]);
                  }
                  i++;
                }
                console.log(array);
                setPhoto(array);
              }}
            >
              <BsChevronLeft className={classes.icon} />
            </div>
            <div
              className={classes.right}
              onClick={() => {
                let i = 0;
                let array = [];
                let first = 0;
                while (i < photo.length) {
                  console.log(i);
                  if (i === 0) {
                    first = photo[i];
                    console.log("First:", first);
                  } else {
                    array.push(photo[i]);
                  }
                  i++;
                }
                array.push(first);
                console.log(array);
                setPhoto(array);
              }}
            >
              <BsChevronRight className={classes.icon} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PhotoShowcase;
