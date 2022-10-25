import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shaerd/Header/Header';
import Footer from '../Pages/Shaerd/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='mt-5 pt-3'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;