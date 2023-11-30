import './App.css';
import { Home, Public, Login, Personal, Album } from './pages/public';
import { Route, Routes } from 'react-router-dom';
import Path from './utils/path';
import { useEffect } from 'react';
import * as actions from './store/actions';
import { useDispatch } from 'react-redux';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getHome());
    }, []);

    return (
        <Routes>
            <Route path={Path.PUBLIC} element={<Public />}>
                <Route path={Path.HOME} element={<Home />}></Route>
                <Route path={Path.LOGIN} element={<Login />}></Route>
                <Route path={Path.MY_MUSIC} element={<Personal />}></Route>
                <Route path={Path.ALBUM__TITLE__PID} element={<Album />}></Route>
                <Route path={Path.PLAYLIST__TITLE__PID} element={<Album />}></Route>

                <Route path={Path.STAR} element={<Home />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
