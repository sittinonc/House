import classes from "./SelectedPhoto.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

const SelectedPhoto = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.page}>
          <div className={classes.content}>
            <div className={classes.imgBox}>
              <img
                className={classes.img}
                src={`${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/image/view/${props.selectedPhoto}`}
              />
            </div>
            <div
              className={classes.quit}
              onClick={() => {
                props.setSelected(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} className={classes.icon} />
            </div>
          </div>
        </div>,
        document.getElementById("selectedPhotoOverlay")
      )}
    </>
  );
};

export default SelectedPhoto;
