import classes from './NavMobileOverlay.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { GoPrimitiveDot } from 'react-icons/go';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const NavMobileOverlay = (props) => {
  let navigate = useNavigate();
  const target = (path) => {
    navigate(path);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.page}>
          <div className={classes.box}>
            <div className={classes.content}>
              <div className={classes.menu}>
                <div className={classes.item} onClick={target('/')}>
                  <Link to="/" className={classes.link}>
                    หน้าแรก
                  </Link>
                  <GoPrimitiveDot
                    className={
                      props.currentPage === 'home'
                        ? classes.showIcon
                        : classes.hideIcon
                    }
                  />
                </div>
                <div className={classes.item} onClick={target('/allprojects')}>
                  <Link to="/allprojects" className={classes.link}>
                    โครงการ
                  </Link>
                  <GoPrimitiveDot
                    className={
                      props.currentPage === 'allProjects'
                        ? classes.showIcon
                        : classes.hideIcon
                    }
                  />
                </div>
                <div className={classes.item} onClick={target('/')}>
                  <Link to="/" className={classes.link}>
                    ติดต่อเรา
                  </Link>
                  <GoPrimitiveDot
                    className={
                      props.currentPage === 'contact'
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
        document.getElementById('mobileNavOverlay')
      )}
    </>
  );
};

export default NavMobileOverlay;
