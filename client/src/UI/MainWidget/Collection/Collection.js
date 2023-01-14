import { useState } from 'react';
import classes from './Collection.module.scss';
import MainWidget from '../MainWidget';
import { BsCircleFill } from 'react-icons/bs';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
const Collection = (props) => {
  const [controll, setControll] = useState(0);
  console.log('brooo123123');
  console.log(props.config.collection);
  return (
    <MainWidget>
      <div className={classes.container}>
        <div className={classes.head}>
          <span>{props.config.head}</span>
        </div>
        <div className={classes.imgBox}>
          <AiFillLeftCircle
            className={
              controll === 0
                ? classes.left + ' ' + classes.unable
                : classes.left + ' ' + classes.controller
            }
            onClick={() => {
              if (controll === 0) {
              } else {
                setControll((prev) => {
                  return prev - 1;
                });
              }
            }}
          />
          <img
            src={`${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/image/view/${props.config.collection[controll]}`}
            onClick={() => {
              props.setSelectedPhoto(props.config.collection[controll]);
              props.setSelected(true);
            }}
          />
          <AiFillRightCircle
            className={
              controll === props.config.collection.length - 1
                ? classes.right + ' ' + classes.unable
                : classes.right + ' ' + classes.controller
            }
            onClick={() => {
              if (controll === props.config.collection.length - 1) {
              } else {
                setControll((prev) => {
                  return prev + 1;
                });
              }
            }}
          />
        </div>
        <div className={classes.buttonBox}>
          {props.config.collection.map((e, i) => {
            return (
              <BsCircleFill
                key={i}
                className={
                  i === controll
                    ? classes.icon + ' ' + classes.active
                    : classes.icon + ' ' + classes.inActive
                }
              />
            );
          })}
        </div>
      </div>
    </MainWidget>
  );
};

export default Collection;
