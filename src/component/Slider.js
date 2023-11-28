import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from './component.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Slider = () => {
    const { banner } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    // console.log(banner);

    const navigate = useNavigate();

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setCurSongId(item.encodeId));
            dispatch(actions.play(true));
        } else if (item?.type === 4) {
            const albumPath = item?.link?.split('.')[0];

            navigate(albumPath);
        }
    };
    return (
        <div className={cx('banner')}>
            {banner?.map((item) => (
                <img
                    src={item.banner}
                    onClick={() => handleClickBanner(item)}
                    className={cx('slide-item')}
                    key={item.encodeID}
                />
            ))}
        </div>
    );
};

export default Slider;
