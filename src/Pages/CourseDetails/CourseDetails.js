import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import LeftSideNav from '../../Pages/Shaerd/LeftSideNav/LeftSideNav';
import courseImg from '../../assets/images/tailwind.jpg';
import './CourseDetails.css';

const CourseDetails = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='8'>
                        <Row>
                            <div className="col-9">
                                <h2 className='ff-poppins text-start'>This is title of course details</h2>
                            </div>
                            <div className="col-3">
                                <button className='btn btn-outline-success'>Course Outline <FaDownload></FaDownload></button>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-12">
                                <img className='img-fluid' src={courseImg} alt="" />
                            </div>
                        </Row>
                        <Row className='d-flex justify-content-between align-items-center gap-3 pt-3 p-3'>
                            <div className="col-3 bg-success bg-opacity-25 p-2 rounded text-success">Instructor: Pagla Reza</div>
                            <div className="col-3 bg-success bg-opacity-25 p-2 rounded text-success">Category</div>
                            <div className="col-3 bg-success bg-opacity-25 p-2 rounded text-success">Ratings</div>
                        </Row>
                        <Row>
                            <div className="col-12">
                                <p className='details'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum excepturi qui consectetur porro reprehenderit sunt minima labore ipsum rerum fugiat, odit incidunt recusandae aut nostrum voluptas eius maxime molestias, laudantium hic temporibus non repudiandae ipsam debitis unde? Sint aut excepturi dolorum recusandae ipsam impedit consectetur cupiditate, reiciendis fuga repellendus dolorem inventore et error commodi laudantium corrupti obcaecati odit ipsa necessitatibus optio nobis illo. Tempora aliquam tenetur magnam<br></br> distinctio, aliquid delectus harum vitae sed exercitationem, at eius est omnis perspiciatis? Tempore pariatur tempora quo ratione commodi nulla neque nisi unde libero aspernatur eum aperiam eius eos earum ex, amet in dolore corporis deleniti dolor repudiandae similique quae voluptatibus non? Possimus ipsam velit eaque itaque quae illum cumque perferendis? Voluptatum, iste sequi fugiat corrupti ut quisquam aut eos aliquam laborum consequuntur nostrum? <br></br><br></br>Incidunt, magnam repudiandae. Odit officia temporibus ut molestias beatae, sapiente quo, animi itaque delectus, nulla dolor rerum nostrum. Aliquid facilis repellat voluptatum, dolores porro, pariatur qui est nihil odio perspiciatis rem velit aliquam laudantium totam iure cumque omnis minus id quibusdam voluptatem optio harum, impedit beatae fuga! Atque quibusdam temporibus illo reprehenderit. Labore, atque quos odio accusamus mollitia aperiam. Distinctio aliquid voluptates sit ea aut praesentium placeat numquam debitis obcaecati.
                                </p>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;