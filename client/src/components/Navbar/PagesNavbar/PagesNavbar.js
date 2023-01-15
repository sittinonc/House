import { Link } from 'react-router-dom';
import classes from './PagesNavbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const PagesNavbar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.flexNav}>
          <div className={classes.left}>
            <div className={classes.brand}>
              <FontAwesomeIcon id={classes.logo} icon={faHouseChimney} />
              <h2>EngEach House</h2>
            </div>
          </div>
          <div className={classes.mid}>
            <div className={classes.menu}>
              <Link className={classes.navLink} to="/home">
                หน้าแรก
              </Link>
              <Link className={classes.navLink} to="/allprojects">
                โครงการ
              </Link>
              <Link className={classes.navLink} to="/allprojects">
                ติดต่อเรา
              </Link>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.content}>
              <BsFillTelephoneFill
                className={classes.icon}
                style={{ fontSize: '16px' }}
              />
              <span>{process.env.REACT_APP_PHONE_NUMBER}</span>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginTop: '7px',
                }}
                to="/admin"
              >
                <FaUserCircle
                  className={classes.icon}
                  style={{ marginLeft: '18px' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesNavbar;
