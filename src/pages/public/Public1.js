import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight, Player, Header } from '../../component';
import className from 'classnames/bind';
import styles from './public.module.scss';

const cx = className.bind(styles);
function Public() {
    return (
        <div className={cx('main')}>
            <div className={cx('main-top')}>
                <div className={cx('SidebarLeft')}>
                    <SidebarLeft />
                </div>

                <div className={cx('main-center')}>
                    <div className={cx('container')}>
                        <Header />
                    </div>
                    <Outlet />
                </div>
                <div className={cx('SidebarRight')}>
                    <SidebarRight />
                </div>
            </div>
            <div className={cx('player')}>
                <Player />
            </div>
        </div>
    );
}

export default Public;
