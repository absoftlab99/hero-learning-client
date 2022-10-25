import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shaerd/Header/Header';
import Footer from '../Pages/Shaerd/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;