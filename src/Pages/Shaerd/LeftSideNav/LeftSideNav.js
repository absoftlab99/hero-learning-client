import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [cate, setCate] = useState([])

    useEffect(() =>{
        fetch('https://hero-learning-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCate(data));
    })

    return (    
        <div>
            {
                cate.map(cat =>
                <div className='px-4 pt-3' key={cat.category_id}>
                    <Link to={`/category/${cat.category_id}`} className='btn btn-outline-success w-100 cate fw-bolder text-start py-2'><FaDotCircle className="me-3"></FaDotCircle> {cat.category_name}</Link>
                </div>
                )
            }
        </div>
    );
};

export default LeftSideNav;