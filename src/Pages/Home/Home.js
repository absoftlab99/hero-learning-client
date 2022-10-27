import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../../Pages/Shaerd/CourseCard/CourseCard';
import './Home.css';
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaPython, FaReact } from 'react-icons/fa';


const Home = () => {
    const courses = useLoaderData();
    const courses2 = courses.slice(2, 5);
    return (
        <>
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
        <div className="container pt-5">
            <h2 className='ff-poppins fw-bolder'>Top Categories</h2>
            <div className='row d-flex justify-content-center gap-5 mt-4 text-success px-2'>
                <div className="col-3 bg-success bg-opacity-25 rounded category py-lg-3">
                    <FaReact className='display-3 p-lg-3 p-2 bg-success bg-opacity-50 rounded-5 mt-2'/>
                    <p className='mt-2 mb-1'>React</p>
                </div>
                <div className="col-3 bg-success bg-opacity-25 rounded category py-lg-3">
                    <FaHtml5 className='display-3 p-lg-3 p-2 bg-success bg-opacity-25 rounded-5 mt-2'/>
                    <p className='mt-2 mb-1'>HTML 5</p>
                </div>
                <div className="col-3 bg-success bg-opacity-25 rounded category py-lg-3">
                    <FaCss3 className='display-3 p-lg-3 p-2 bg-success bg-opacity-25 rounded-5 mt-2'/>
                    <p className='mt-2 mb-1'>CSS 3</p>
                </div>
                <div className="col-3 bg-success bg-opacity-25 rounded category py-lg-3">
                    <FaBootstrap className='display-3 p-lg-3 p-2 bg-success bg-opacity-25 rounded-5 mt-2'/>
                    <p className='mt-2 mb-1'>Bootstrap</p>
                </div>
                <div className="col-3 bg-success bg-opacity-25 rounded category py-lg-3">
                    <FaPython className='display-3 p-lg-3 p-2 bg-success bg-opacity-25 rounded-5 mt-2'/>
                    <p className='mt-2 mb-1'>Python</p>
                </div>
                <div className="col-3 bg-success bg-opacity-25 rounded category py-lg-3">
                    <FaJava className='display-3 p-lg-3 p-2 bg-success bg-opacity-25 rounded-5 mt-2'/>
                    <p className='mt-2 mb-1'>Java</p>
                </div>
            </div>

            <div className="row mt-5">
                <h2 className='ff-poppins fw-bolder'>Top Courses</h2>
                {
                    courses2.map(course =>
                    <div className="col-lg-4 col-sm-12" key={course.course_id}>
                        <CourseCard
                        course = {course}
                        ></CourseCard>
                    </div>    
                    )
                }
            </div>
        </div>
        </>
    );
};

export default Home;