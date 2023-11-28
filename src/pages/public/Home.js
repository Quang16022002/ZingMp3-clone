import { Header, Slider } from '../../component';
import classNames from 'classnames/bind';
import styles from './public.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div>
            <Slider />
        </div>
    );
}

export default Home;
