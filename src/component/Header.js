import React from 'react';
import classNames from 'classnames/bind';
import styles from './component.module.scss';
import Search from './Search';
import icons from '../utils/icons';
const { GoArrowRight, GoArrowLeft, IoIosSearch, GoDesktopDownload, CiSettings, PiUserCircleLight } = icons;
const cx = classNames.bind(styles);
const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('header-left')}>
                <div className={cx('operation')}>
                    <GoArrowLeft size={25} color="#fff" style={{ marginRight: 20 }} />
                    <GoArrowRight size={25} color="rgb(218,218,218)" style={{ marginRight: 20 }} />
                </div>
                <div>
                    <Search />
                </div>
            </div>
            <div className={cx('header-right')}>
                <div className={cx('download')}>
                    <a>
                        <GoDesktopDownload size={18} />
                        <span>Tải bản MacOS</span>
                    </a>
                </div>
                <div className={cx('option')}>
                    <CiSettings size={22} color="rgb(218, 218, 218)" />
                </div>
                <div className={cx('option')}>
                    <img
                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.105/static/media/user-default.3ff115bb.png"
                        alt=" logo login"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Header;
