import classes from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.flexNav}>
        <div className={classes.left}>
          <div className={classes.brand}>
            <FontAwesomeIcon id={classes.logo} icon={faHouseChimney} />
            <h2>QHouse</h2>
          </div>
          <div className={classes.space}>
            <h2>|</h2>
          </div>
          <div className={classes.menu}>
            <h2>Properties</h2>
            <h2>Buy</h2>
            <h2>Contact us</h2>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.userStatus}>
            <div>
              <span>Admin</span>
            </div>
            <div className={classes.active}>
              <span>User</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
