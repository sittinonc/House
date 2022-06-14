import { Link } from "react-router-dom";
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
            <h2>โครงการ</h2>
            <h2>ซื้อ</h2>
            <h2>ติดต่อเรา</h2>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.userStatus}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/admin"
            >
              <div>Admin</div>
            </Link>
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
