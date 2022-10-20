import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";
import { FaFacebook, FaLine, FaTwitter, FaTelegram } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";

import classes from "./HouseHead.module.scss";
import functions from "../../../function";

const HouseHead = (props) => {
  const [drop, setDrop] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.group}>
          <div className={classes.each}>{"พร้อมอยู่"}</div>
          <div className={classes.each}>{"นนทบุรี"}</div>
        </div>
        <div className={classes.name}>
          <h1>{props.data.name}</h1>
        </div>
        <div className={classes.address}>
          <MdLocationPin className={classes.icon} />
          <span>
            {props.data.location.road +
              " " +
              props.data.location.subDistrict.name +
              " " +
              props.data.location.district.name +
              " " +
              props.data.location.province.name +
              " " +
              props.data.location.moreDetails}
          </span>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.price}>
          {functions.priceFormat(5000000)} THB
        </div>
        <div className={classes.functionGroup}>
          <div id={classes.shareSocials} className={classes.each}>
            <div
              className={classes.text}
              onClick={() => {
                setDrop((prev) => {
                  return !prev;
                });
              }}
            >
              <BsShareFill className={classes.icon} />
              <span>แชร์</span>
            </div>

            <div
              className={
                classes.dropDown +
                " " +
                (drop ? classes.dropActive : classes.dropUnactive)
              }
            >
              <FacebookShareButton
                url="www.google.com"
                quote="บ้านดี ราคาเหมาะสม"
                hashtag="#QHouse"
              >
                <div className={classes.item}>
                  <FaFacebook className={classes.icon} />
                  Facebook
                </div>
              </FacebookShareButton>

              <LineShareButton
                url="www.google.com"
                quote="บ้านดี ราคาเหมาะสม"
                hashtag="#QHouse"
              >
                <div className={classes.item}>
                  <FaLine className={classes.icon} />
                  Line
                </div>
              </LineShareButton>

              <TwitterShareButton
                url="www.google.com"
                quote="บ้านดี ราคาเหมาะสม"
                hashtag="#QHouse"
              >
                <div className={classes.item}>
                  <FaTwitter className={classes.icon} />
                  Twitter
                </div>
              </TwitterShareButton>

              <TelegramShareButton
                url="www.google.com"
                quote="บ้านดี ราคาเหมาะสม"
                hashtag="#QHouse"
              >
                <div className={classes.item}>
                  <FaTelegram className={classes.icon} />
                  Telegram
                </div>
              </TelegramShareButton>
            </div>
          </div>
          <div className={classes.each}>
            <div className={classes.text}>
              <IoIosCopy className={classes.icon} />
              <span>คัดลอกลิงก์</span>
            </div>
          </div>
          <div className={classes.each}>
            <div className={classes.text}>
              <AiOutlineDownload className={classes.icon} />
              <span>ดาวน์โหลด</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseHead;
