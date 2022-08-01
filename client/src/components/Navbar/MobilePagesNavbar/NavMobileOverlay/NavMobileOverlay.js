import classes from "./NavMobileOverlay.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { GoPrimitiveDot } from "react-icons/go";
import ReactDOM from "react-dom";

const NavMobileOverlay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.page}>
          <div className={classes.box}>
            <div className={classes.content}>
              <div className={classes.menu}>
                <div className={classes.item}>
                  <span>หน้าแรก</span>
                  <GoPrimitiveDot
                    className={
                      props.currentPage === "home"
                        ? classes.showIcon
                        : classes.hideIcon
                    }
                  />
                </div>
                <div className={classes.item}>
                  <span>โครงการ</span>
                  <GoPrimitiveDot
                    className={
                      props.currentPage === "allProjects"
                        ? classes.showIcon
                        : classes.hideIcon
                    }
                  />
                </div>
                <div className={classes.item}>
                  <span>ข่าวสาร</span>
                  <GoPrimitiveDot
                    className={
                      props.currentPage === "news"
                        ? classes.showIcon
                        : classes.hideIcon
                    }
                  />
                </div>
                <div className={classes.item}>
                  <span>ติดต่อเรา</span>
                  <GoPrimitiveDot
                    className={
                      props.currentPage === "contact"
                        ? classes.showIcon
                        : classes.hideIcon
                    }
                  />
                </div>
              </div>
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
          </div>
        </div>,
        document.getElementById("mobileNavOverlay")
      )}
    </>
  );
};

export default NavMobileOverlay;
