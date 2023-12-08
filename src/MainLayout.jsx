import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <div><Toaster/></div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;