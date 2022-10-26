import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CourseCard.css';

const CourseCard = ({course}) => {
    const {course_id, course_name, full_img, instructor, price, ratings, category} = course;
    return (
        <div>
        <Card className='border border-success border-opacity-25 course mt-3'>
            <div className="p-3 pb-0">
                <Card.Img style={{height:'200px'}} className="rounded border border-success border-opacity-25" variant="top" src={full_img} />
            </div>
            <Card.Body className="pt-0">
            <div className="row p-3 pe-0 d-flex justify-content-between align-items-center">
                <div className="col-2 p-0">
                    <Image className="border border-success" style={{height:'40px', width:'40px'}} roundedCircle src={instructor.photo}></Image>
                </div>
                <div className="col-6 p-0">
                    <p className="text-success text-start mb-0">{instructor.name}</p>
                </div>
                <div className="col-4 p-0">
                    <small className="p-2 text-success bg-success bg-opacity-25 rounded">{category}</small>
                </div>
            </div>
            <Card.Title className="text-start ff-poppins">{course_name}</Card.Title>
            <div className="d-flex">
                <Link as={Link} to={`/course/${course_id}`} className="btn btn-outline-success w-25">Details</Link>
            </div>
            <div className="d-flex mt-4">
                <div className="release bg-success bg-opacity-25 p-2 rounded">
                    <small className="mb-0 text-success">Price:  <b>${price}</b> </small>
                </div>
                <div className="fevorate bg-success bg-opacity-25 p-2 rounded ms-2">
                    <small className="mb-0 text-success">Rating: <b>{ratings.rating}</b></small>
                </div>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default CourseCard;
