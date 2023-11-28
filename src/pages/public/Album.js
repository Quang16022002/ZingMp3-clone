import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as apis from '../../apis';
import classNames from 'classnames/bind';
import styles from './public.module.scss';
import moment from 'moment';
const cx = classNames.bind(styles);
const Album = () => {
    const { title, pid } = useParams();
    const [playlistData, setPlaylistData] = useState({});
    useEffect(() => {
        const fetchDetailPlaylist = async () => {
            const response = await apis.apiGetDetaiPlaylist(pid);
            if (response.data.err === 0) {
                setPlaylistData(response.data.data);
                console.log(response);
            }
        };
        fetchDetailPlaylist();
    }, [pid]);

    return (
        <div className={cx('album')}>
            <div className={cx('album-left')}>
                <img src={playlistData.thumbnailM} alt="thumbnail" />
                <h3>{playlistData.title}</h3>
                <div className={cx('album-top')}>
                    <span>Cập nhật:</span>
                    <span> {moment.unix(playlistData.contentLastUpdate).format('MM/DD/YYYY')}</span>
                </div>

                <a href="">{playlistData.artistsNames}</a>
            </div>
            <div className={cx('album-right')}>right</div>
        </div>
    );
};

export default Album;
