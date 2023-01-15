import { useState } from 'react';
import classes from './EmailSubscription.module.scss';
import Button from '@mui/material/Button';
import Axios from 'axios';
import Swal from 'sweetalert2';
import uri from '../../components/config';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValid(emailRegex.test(email));
  };

  const handleSubmit = () => {
    if (isValid)
      Axios.post(`${uri}/api/subscribe`, {
        email: email,
      })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            Swal.fire({
              title: 'Success!',
              text: 'You have successfully subscribed!',
              icon: 'success',
              confirmButtonText: 'OK',
            });
          }
        })
        .catch((error) => {
          if (error.response.status === 409) {
            Swal.fire({
              title: 'Error!',
              text: 'This email is already subscribed!',
              icon: 'error',
              confirmButtonText: 'OK',
            });
          }
        });
  };
  return (
    <div className={classes.EmailSubscription}>
      <div className={classes.container}>
        <div className={classes.input}>
          <input
            value={email}
            type="text"
            placeholder="email@mail.com"
            onChange={(e) => {
              validateEmail();
              setEmail(e.target.value);
            }}
          />

          {isValid ? <p></p> : <p>Email is not valid</p>}
        </div>
        <div className={classes.button}>
          <Button
            onClick={() => {
              setEmail('');
              handleSubmit();
            }}
            className={classes.button}
            variant="contained"
          >
            ตกลง
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EmailSubscription;
