import React from 'react';
import { FaReact } from 'react-icons/fa';
import './LeftSideNav.css';

const LeftSideNav = () => {
    return (
        <div>
            <h4 className='ff-poppins fw-bolder'>Course List</h4>
            <div className="category2 border rounded border-success border-opacity-50 p-3">
                <div className='px-4 pt-4'>
                    <button className='btn btn-outline-success w-100 cate fw-bolder text-start py-2'><FaReact className="me-3"></FaReact> React</button>
                </div>
                <div className='px-4 pt-3'>
                    <button className='btn btn-outline-success w-100 cate fw-bolder text-start py-2'><FaReact className="me-3"></FaReact> React</button>
                </div>
                <div className='px-4 pt-3'>
                    <button className='btn btn-outline-success w-100 cate fw-bolder text-start py-2'><FaReact className="me-3"></FaReact> React</button>
                </div>
                    <div className='px-4 pt-3'>
                        <button className='btn btn-outline-success w-100 cate fw-bolder text-start py-2'><FaReact className="me-3"></FaReact> React</button>
                    </div>
                    <div className='px-4 pt-3'>
                        <button className='btn btn-outline-success w-100 cate fw-bolder text-start py-2'><FaReact className="me-3"></FaReact> React</button>
                    </div>
                    <div className='px-4 pt-3 pb-4'>
                        <button className='btn btn-outline-success w-100 cate fw-bolder text-start py-2'><FaReact className="me-3"></FaReact> React</button>
                    </div>
            </div>  
        </div>
    );
};

export default LeftSideNav;