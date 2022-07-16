import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";

import classes from "./HouseHead.module.scss";
import functions from "../../../function";

const HouseHead = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.group}>
          <div className={classes.each}>{"พร้อมอยู่"}</div>
          <div className={classes.each}>{"นนทบุรี"}</div>
        </div>
        <div className={classes.name}>
          <h1>บ้านเดี่ยว นครปฐม...</h1>
        </div>
        <div className={classes.address}>
          <MdLocationPin className={classes.icon} />
          <span>11/25 ซอยxx ถนนxx นครปฐม ตำบล อำเภอ 102931</span>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.price}>
          {functions.priceFormat(5000000)} THB
        </div>
        <div className={classes.functionGroup}>
          <div className={classes.each}>
            <BsShareFill className={classes.icon} />
            <span>แชร์</span>
          </div>
          <div className={classes.each}>
            <IoIosCopy className={classes.icon} />
            <span>คัดลอกลิงก์</span>
          </div>
          <div className={classes.each}>
            <AiOutlineDownload className={classes.icon} />
            <span>ดาวน์โหลด</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseHead;
