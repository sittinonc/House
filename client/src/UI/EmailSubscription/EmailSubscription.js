import { useState } from 'react';
import classes from './EmailSubscription.module.scss';
import Button from '@mui/material/Button';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValid(emailRegex.test(email));
  };

  return (
    <div className={classes.EmailSubscription}>
      <div className={classes.container}>
        <div className={classes.input}>
          <input
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
            onClick={(e) => {
              setEmail('');
              alert('Email: ' + email);
              console.log('Click');
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
