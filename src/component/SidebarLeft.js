import React from 'react';
import className from 'classnames/bind';
import logo from '../assets/img/ZingMP3logo.svg.png';
import { NavLink } from 'react-router-dom';
import styles from './component.module.scss';
import { sidebarMenu } from '../utils/menu';
import { useNavigate } from 'react-router-dom';
import path from '../utils/path';
const cx = className.bind(styles);

const SidebarLeft = () => {
    const navigate = useNavigate();
    return (
        <div className={cx('container')}>
            <div onClick={() => navigate(path.HOME)} className={cx('header-logo')}>
                <img src={logo} alt="logo"></img>
            </div>
            <div className={cx('SidebarLeft')}>
                {sidebarMenu.map((item) => (
                    <NavLink className={cx('active')} to={item.path} key={item.path}>
                        {item.icons}
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarLeft;
