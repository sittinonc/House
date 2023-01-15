import { useState } from 'react';
import classes from './Interest.module.scss';
import SideWidget from '../../../UI/SideWidget/SideWidget';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';
import Swal from 'sweetalert2';

const Interest = (props) => {
  const { palette } = createTheme();
  const theme = createTheme({
    palette: {
      myAwesomeColor: palette.augmentColor({
        color: {
          main: 'rgb(142, 86, 86)',
        },
      }),
    },
  });
  const [checkStatus, setCheckStatus] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [detail, setDetail] = useState(`สนใจโครงการ ${props.data.name}`);

  const call = () => {
    var phoneNumber = `'tel:${process.env.REACT_APP_PHONE_NUMBER}`;
    // eslint-disable-next-line no-restricted-globals
    location.href = phoneNumber;
  };

  const handleSubmit = () => {
    Axios.post(
      `${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/api/interest`,
      {
        name: name,
        email: 'dummy@email.com',
        phone: phone,
        details: detail,
        _id: props.data._id,
      }
    )
      .then((res) => {
        if (res.status === 200)
          Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent',
            icon: 'success',
            confirmButtonText: 'OK',
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'All fields in the form are required',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };
  return (
    <SideWidget>
      <div className={classes.interest}>
        <div className={classes.head}>
          <span>ติดต่อ</span>
        </div>
        <div className={classes.form}>
          <input
            className={classes.input}
            type="text"
            placeholder="ชื่อ"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className={classes.input}
            type="text"
            placeholder="เบอร์โทรศัพท์"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <textarea
            className={classes.input}
            type="text"
            placeholder="รายละเอียด..."
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />
        </div>
        <div className={classes.policy}>
          {checkStatus ? (
            <MdOutlineCheckBox
              className={classes.icon}
              onClick={() => {
                setCheckStatus(false);
              }}
            />
          ) : (
            <MdOutlineCheckBoxOutlineBlank
              className={classes.icon}
              onClick={() => {
                setCheckStatus(true);
              }}
            />
          )}
          <div className={classes.box}>
            ฉันยอมรับ<div className={classes.text}>เงื่อนไขและข้อกำหนด</div>
          </div>
        </div>
        <div className={classes.buttonBox}>
          <ThemeProvider theme={theme}>
            <div className={classes.whole}>
              <Button
                onClick={handleSubmit}
                style={{ width: '100%' }}
                variant="contained"
                size="medium"
                color="myAwesomeColor"
              >
                ส่งข้อมูล
              </Button>
            </div>
            <div className={classes.half}>
              <Button
                style={{ width: '100%' }}
                variant="outlined"
                size="medium"
                color="myAwesomeColor"
              >
                <div className={classes.icon}>
                  <FontAwesomeIcon style={{ fontSize: '16px' }} icon={faLine} />
                  Line
                </div>
              </Button>
              <Button
                style={{ width: '100%' }}
                variant="outlined"
                size="medium"
                color="myAwesomeColor"
              >
                <div className={classes.icon} onClick={call}>
                  <FontAwesomeIcon icon={faPhone} />
                  โทร
                </div>
              </Button>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </SideWidget>
  );
};

export default Interest;
