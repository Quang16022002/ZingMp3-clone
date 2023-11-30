import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from './component.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import { useNavigate } from 'react-router-dom';
import { getArrSlider } from '../utils/fn';
const cx = classNames.bind(styles);

const Slider = () => {
    const { banner } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ainimation for banner
    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item');
        let min = 0;
        let max = 2;
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1);
            for (let i = 0; i < sliderEls.length; i++) {
                // Delete classnames (css)
                sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20');
                sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10');
                sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10');

                // Hide or Show images
                if (list.some((item) => item === i)) {
                    sliderEls[i].style.cssText = `display: block`;
                } else {
                    sliderEls[i].style.cssText = `display: none`;
                }
            }
            // Add animation by adding classnames
            list.forEach((item) => {
                if (item === max) {
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20');
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10');
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10');
                }
            });
            min = min === sliderEls.length - 1 ? 0 : min + 1;
            max = max === sliderEls.length - 1 ? 0 : max + 1;
        }, 4000);
        return () => {
            intervalId && clearInterval(intervalId);
        };
    }, []);

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setCurSongId(item.encodeId));
            dispatch(actions.play(true));
        } else if (item?.type === 3) {
            const albumPath = item?.link?.split('.')[0];
            navigate(albumPath);
        } else if (item?.type === 4) {
            const playlistPath = item?.link?.split('.')[0];
            navigate(playlistPath);
        }
    };

    return (
        <div className={cx('banner')}>
            {banner?.map((item, index) => (
                <img
                    src={item.banner}
                    onClick={() => handleClickBanner(item)}
                    className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${
                        index <= 2 ? 'block' : 'hidden'
                    }`}
                    key={item.encodeID}
                />
            ))}
        </div>
    );
};

export default Slider;
