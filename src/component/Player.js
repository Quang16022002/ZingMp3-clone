import React from 'react';
import classNames from 'classnames/bind';
import styles from './component.module.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as apis from '../apis';
import icons from '../utils/icons';

const { CiHeart, HiEllipsisHorizontal, IoMdSkipForward, IoMdSkipBackward, IoMdPlay, IoMdPause, TbRepeat, RxShuffle } =
    icons;
const cx = classNames.bind(styles);

const Player = () => {
    const audioEl = new Audio();
    const { curSongId, isPlaying } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    const [source, setSource] = useState(null);
    // console.log(isPlaying);
    useEffect(() => {
        const fetchDetaiSong = async () => {
            const [res1, res2] = await Promise.all([apis.apiGetDetailSong(curSongId), apis.apiGetSong(curSongId)]);

            if (res1.data.err === 0) {
                setSongInfo(res1.data.data);
            }
            if (res2.data.data === 0) {
                setSongInfo(res2.data.data['128']);
            }
        };
        fetchDetaiSong();
    }, [curSongId]);

    // useEffect(() => {
    //     audioEl.play();
    // }, [curSongId]);

    const handleToggleMusic = () => {
        // setisPlaying((prev) => !prev);
    };
    return (
        <div className={cx('player')}>
            <div className={cx('player-left')}>
                <div className={cx('player-left-img')}>
                    {/* <img src={songInfo?.thumbnail} alt="thumbnail" /> */}
                    <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/f/6/5/0f655e2c35fb542464660b3fddfd6ec7.jpg"></img>
                </div>
                <div className={cx('player-left-title')}>
                    {/* 14: 16:22 */}
                    <span className={cx('title-song')}>Ngày trái tim khóc</span>
                    <span className={cx('title-name')}>Nguyễn Đình Vũ</span>
                </div>
                <div className={cx('player-left-option')}>
                    <CiHeart className={cx('option')} size={20} style={{ marginRight: 15 }} />
                    <HiEllipsisHorizontal className={cx('option')} size={20} />
                </div>
            </div>
            <div className={cx('player-center')}>
                <div className={cx('player-center-option')}>
                    <i className={cx('player-center-option-a')}>
                        <RxShuffle size={18} />
                    </i>
                    <i className={cx('player-center-option-a')}>
                        <IoMdSkipBackward size={18} />
                    </i>
                    <div onClick={handleToggleMusic} className={cx('player-center-option-play')}>
                        {isPlaying ? (
                            <IoMdPause className={cx('play')} size={18} />
                        ) : (
                            <IoMdPlay className={cx('play')} size={18} style={{ marginLeft: 3 }} />
                        )}
                    </div>
                    <i className={cx('player-center-option-a')}>
                        <IoMdSkipForward size={18} />
                    </i>
                    <i className={cx('player-center-option-a')}>
                        <TbRepeat size={18} />
                    </i>
                </div>

                <div className={cx('player-center-loading')}>thanh phát nhạc</div>
            </div>
            <div className={cx('player-right')}>volum</div>
        </div>
    );
};

export default Player;
