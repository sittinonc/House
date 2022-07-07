import classes from "./MobilePagesNavbar.module.scss";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { faHouseChimney } from "react-icons/fa";
const MobilePagesNavbar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.contentBox}>
        <div className={classes.dashDashDash}>
          <GoThreeBars
            onClick={() => {
              if (!props.navMobileOverlay) {
                props.setNavMobileOverlay(true);
              }
            }}
          />
        </div>
        <div className={classes.brand}>
          <faHouseChimney />
          <span>QHouse</span>
        </div>
        <div className={classes.user}>
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};

export default MobilePagesNavbar;
