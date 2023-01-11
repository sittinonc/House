import classes from './MobilePagesNavbar.module.scss';
import { GoThreeBars } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon icon={faHouseChimney} className={classes.icon} />
          <span>EngEach House</span>
        </div>
        <div className={classes.user}>
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};

export default MobilePagesNavbar;
