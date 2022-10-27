import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCrown, FaDownload } from 'react-icons/fa';
import LeftSideNav from '../../Pages/Shaerd/LeftSideNav/LeftSideNav';
import './CourseDetails.css';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { course_id, course_name, full_img, instructor, price, category, details} = course;
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg='4' className='mb-3'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col className='' lg='8'>
                        <Row>
                            <div className="col-9">
                                <h2 className='ff-poppins text-start fw-bolder'>{course_name}</h2>
                            </div>
                            <div className="col-3">
                                <button className='btn btn-outline-success'>Course Outline <FaDownload></FaDownload></button>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-12">
                                <img className='img-fluid w-100' src={full_img} alt="" />
                            </div>
                        </Row>
                        <Row className='d-flex justify-content-between align-items-center pt-3 p-3'>
                            <div className="col-4 bg-success bg-opacity-25 p-2 rounded text-success">Instructor: {instructor.name}</div>
                            <div className="col-4 bg-success bg-opacity-25 p-2 rounded text-success">Category: {category}</div>
                            <div className="col-3 bg-success bg-opacity-25 p-2 rounded text-success">Price: ${price}</div>
                        </Row>
                        <Row className=''>
                            <div className="col-12">
                                <p className='details'>
                                    {details}
                                </p>
                                <Link className='btn btn-outline-warning' to={`/premium-access/${course_id}`}>
                                    <FaCrown /> Check Out This Course
                                </Link>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;