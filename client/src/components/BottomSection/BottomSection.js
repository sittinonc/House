import classes from './BottomSection.module.scss';
import Section from '../../UI/Section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faPhoneFlip,
  faAt,
} from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';
const BottomSection = () => {
  return (
    <Section>
      <div className={classes.container}>
        <div className={classes.separateLeft}>
          <div className={classes.right}>
            <span className={classes.head}>
              <FontAwesomeIcon id={classes.logo} icon={faHouseChimney} />
              EngEach House
            </span>
            <span className={classes.text}>
              All of our products developed by high experiences team.
            </span>
          </div>
        </div>
        <div className={classes.separateRight}>
          <div className={classes.item}>
            <span className={classes.head}>โครงการ</span>
            <div className={classes.subGroup}>
              <span className={classes.sub}>โครงการแนะนำ</span>
              <span className={classes.sub}>ดูโครงการทั้งหมด</span>
            </div>
          </div>
          <div className={classes.item}>
            <span className={classes.head}>เสนอขายที่ดิน</span>
            <div className={classes.subGroup}>
              <span className={classes.sub}>กรอกแบบฟอร์ม</span>
              <span className={classes.sub}>ติดต่อ</span>
            </div>
          </div>
          <div className={classes.item}>
            <span className={classes.head}>ติดต่อเรา</span>
            <div className={classes.subGroup}>
              <span className={classes.sub}>
                <FontAwesomeIcon className={classes.logo} icon={faPhoneFlip} />
                {process.env.REACT_APP_PHONE_NUMBER}
              </span>
              <span className={classes.sub}>househouseproperty@gmail.com</span>
              <span className={classes.sub}>
                <FontAwesomeIcon className={classes.logo} icon={faLine} />
                engeachhouse
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default BottomSection;
