import classes from "./NavMobileOverlay.module.scss";
import { ImCancelCircle } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

const NavMobileOverlay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.page}>
          <div className={classes.box}>
            <div className={classes.quit}>
              <FontAwesomeIcon
                icon={faXmark}
                className={classes.icon}
                onClick={() => {
                  props.setNavMobileOverlay(false);
                }}
              />
            </div>
          </div>
        </div>,
        document.getElementById("mobileNavOverlay")
      )}
    </>
  );
};

export default NavMobileOverlay;
