import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../Pages/Shaerd/LeftSideNav/LeftSideNav';
import CourseCard from '../Shaerd/CourseCard/CourseCard';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg='4 category2 border rounded border-success border-opacity-50 p-3 mt-3'>
                    <h4 className='ff-poppins fw-bolder'>Course List</h4>
                    <hr></hr>
                    <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='8'>
                        <Row>
                            {
                                courses.map(course =>
                                    <Col lg='6' key={course.course_id}><CourseCard
                                    course={course}
                                    ></CourseCard></Col>    
                                )
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;