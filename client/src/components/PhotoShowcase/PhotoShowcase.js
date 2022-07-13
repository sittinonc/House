import { useState, useEffect } from "react";

import classes from "./PhotoShowcase.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PhotoShowcase = (props) => {
  const [photo, setPhoto] = useState(props.photo);

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
                <img
                  className={classes.img}
                  src={photo[i]}
                  onClick={() => {
                    props.setSelectedPhoto(photo[i]);
                    props.setSelected(true);
                  }}
                />
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
