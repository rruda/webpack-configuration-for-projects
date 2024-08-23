import { Link, Outlet } from 'react-router-dom';
import '@/styles/styles.scss';
import img from '@/assets/1.jpeg'
// import * as styles from './app.module.scss';

const App = () => {
    let num = 1;
    return (
        <>
            <Link to={'about'}>about</Link>
            <div className={'styles.app'}>
                Hi world lol
            </div>
            <Outlet/>
            <img src={img} alt="null" />
        </>
     );
}

export default App;