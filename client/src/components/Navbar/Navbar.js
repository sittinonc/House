import { Link } from 'react-router-dom';
import classes from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import uri from '../config';

const Navbar = (props) => {
  const logout = () => {
    let url = uri + '/auth/logout';
    axios.defaults.withCredentials = true;
    axios.post(url).then(() => {
      props.setUsername(null);
    });
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.flexNav}>
        <div className={classes.left}>
          <div className={classes.brand}>
            <FontAwesomeIcon id={classes.logo} icon={faHouseChimney} />
            <h2>EngEach House</h2>
          </div>
          <div className={classes.space}>
            <h2>|</h2>
          </div>
          <div className={classes.menu}>
            <Link className={classes.navLink} to="/allprojects">
              โครงการ
            </Link>
            <Link className={classes.navLink} to="/">
              ติดต่อเรา
            </Link>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.userStatus}>
            {!props.username && (
              <div className={classes.active}>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to="/admin"
                >
                  <div>Admin</div>
                </Link>
              </div>
            )}
            {props.username && (
              <>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to="/edit"
                >
                  <div>Edit</div>
                </Link>
                <div
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
