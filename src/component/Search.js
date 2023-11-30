import React from 'react';
import classNames from 'classnames/bind';
import styles from './component.module.scss';
import icons from '../utils/icons';
const cx = classNames.bind(styles);
const { IoIosSearch } = icons;
const Search = () => {
    return (
        <div className={cx('search')}>
            <IoIosSearch className={cx('icon-search')} size={28} color="rgb(218,218,218)" />
            <input placeholder="Tìm kiếm tên bài hát, nghệ sĩ, lời bài hát..." />
        </div>
    );
};

export default Search;   
