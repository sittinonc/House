import { useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { BsShareFill } from 'react-icons/bs';
import { IoIosCopy } from 'react-icons/io';
import { FaFacebook, FaLine, FaTwitter, FaTelegram } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';

import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from 'react-share';

import classes from './HouseHead.module.scss';
import functions from '../../../function';

const HouseHead = (props) => {
  const url = window.location.href;
  const [drop, setDrop] = useState(false);
  const getUrl = () => {
    navigator.clipboard.writeText(url);
  };

  const download = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Download HTML of this page?')) {
      return;
    }
    var html = document.documentElement.outerHTML;
    var blob = new Blob([html], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'page.html';
    a.click();
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.group}>
          <div className={classes.each}>{'พร้อมอยู่'}</div>
          <div className={classes.each}>{'นนทบุรี'}</div>
        </div>
        <div className={classes.name}>
          <h1>{props.data.name}</h1>
        </div>
        <div className={classes.address}>
          <MdLocationPin className={classes.icon} />
          <span>
            {props.data.location.road +
              ' ' +
              props.data.location.subDistrict.name +
              ' ' +
              props.data.location.district.name +
              ' ' +
              props.data.location.province.name +
              ' ' +
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
                ' ' +
                (drop ? classes.dropActive : classes.dropUnactive)
              }
            >
              <FacebookShareButton
                url={url}
                quote="EngEach House"
                hashtag="#EngEach House"
              >
                <div className={classes.item}>
                  <FaFacebook className={classes.icon} />
                  Facebook
                </div>
              </FacebookShareButton>

              <LineShareButton
                url={url}
                quote="บ้านดี ราคาเหมาะสม"
                hashtag="#EngEach House"
              >
                <div className={classes.item}>
                  <FaLine className={classes.icon} />
                  Line
                </div>
              </LineShareButton>

              <TwitterShareButton
                url={url}
                quote="บ้านดี ราคาเหมาะสม"
                hashtag="#EngEach House"
              >
                <div className={classes.item}>
                  <FaTwitter className={classes.icon} />
                  Twitter
                </div>
              </TwitterShareButton>

              <TelegramShareButton
                url={url}
                quote="บ้านดี ราคาเหมาะสม"
                hashtag="#EngEach House"
              >
                <div className={classes.item}>
                  <FaTelegram className={classes.icon} />
                  Telegram
                </div>
              </TelegramShareButton>
            </div>
          </div>
          <div className={classes.each}>
            <div className={classes.text} onClick={getUrl}>
              <IoIosCopy className={classes.icon} />
              <span>คัดลอกลิงก์</span>
            </div>
          </div>
          <div className={classes.each}>
            <div className={classes.text} onClick={download}>
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
