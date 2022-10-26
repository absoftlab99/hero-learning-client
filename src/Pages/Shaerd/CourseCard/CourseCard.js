import React from "react";
import { Card, Image } from "react-bootstrap";
import tailwind from '../../../assets/images/tailwind.jpg';
import instructor from '../../../assets/images/photo.png';

import './CourseCard.css';
import { FaCalendar, FaThumbsUp } from "react-icons/fa";

const CourseCard = () => {
    return (
        <div>
        <Card className='border border-success border-opacity-25 course'>
            <div className="p-3 pb-0">
                <Card.Img className="rounded" variant="top" src={tailwind} />
            </div>
            <Card.Body className="pt-0">
            <div className="row p-3 d-flex justify-content-center align-items-center">
                <div className="col-2 p-0">
                    <Image className="border border-success" style={{height:'40px'}} roundedCircle src={instructor}></Image>
                </div>
                <div className="col-7 p-0">
                    <p className="text-success text-start mb-0">Abdullah Al Mahmud</p>
                </div>
                <div className="col-3 p-0">
                    <small className="p-2 text-success bg-success bg-opacity-25 rounded">Tailwind</small>
                </div>
            </div>
            <Card.Title className="text-start ff-poppins">Culture & Leadership: Strategies for a Successful Business</Card.Title>
            <div className="d-flex">
                <button className="btn btn-outline-success">Details</button>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <div className="release bg-success bg-opacity-25 p-2 rounded">
                    <small className="mb-0 text-success"><FaCalendar></FaCalendar> 12-10-2022</small>
                </div>
                <div className="fevorate bg-success bg-opacity-25 p-2 rounded">
                    <small className="mb-0 text-success"><FaThumbsUp></FaThumbsUp> 2304+</small>
                </div>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default CourseCard;
