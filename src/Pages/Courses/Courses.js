import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Pages/Shaerd/LeftSideNav/LeftSideNav';
import CourseCard from '../Shaerd/CourseCard/CourseCard';

const Courses = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='8'>
                        <Row>
                            <Col lg='6'><CourseCard></CourseCard></Col>
                            <Col lg='6'><CourseCard></CourseCard></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;