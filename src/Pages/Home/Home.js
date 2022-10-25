import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='cover'>
            <div className="row m-0">
                <div className="col-md-6 col-sm-12 pt-5">
                    <h1 className='display-3 text-start px-4 px-md-5 fw-bolder text-light ff-poppins'>
                        Learning Like a <span className='text-warning'><u>Hero!</u></span>
                    </h1>
                    <Link to='/courses' className='btn btn-outline-warning mt-5 ms-md-5 mx-4 d-flex justify-content-start justify-content-sm-center explore w-25'>Explore Courses</Link>
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    );
};

export default Home;