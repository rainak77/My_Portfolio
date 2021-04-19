import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import arif from '../../assets/img/profile/arif.jpg';
import './about.styles.css';
import Button from "react-bootstrap/Button";


const About = () => {
    return (
        <div className="pt-5 pb-3 mt-3" id="about">
            <h1 className="text-center font-details mt-3 ">ABOUT</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center mt-3">
                    {/* profile pic*/}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile" src={arif} thumbnail fluid />
                        </Row>
                    </Col>

                    {/* About me description*/}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            <p className='text'>
                                Hi there! I am <strong>&nbsp;Md Syedul Arif</strong> <br />
                                <br />
                                    A passionate Full-stack Developer. I have been studying web development for last 2.5 years.  I have experience working with React.js, Redux, Asp.Net Core Mvc and  Sql Server.
                                    <br />
                                <br />
                                    In 2019 December, I have successfully completed my .Net Development training from Utbildning Nörd, Övertorneä, Sweden and i have aquired MCSA (Microsoft Certified Solution Associate) certification.
                                    <br />
                                <br />
                                    I am most passionate about developing software using .Net. I prioritize readable and well-documented code.
                                    <br /><br />
                            </p>
                        </Row>
                        <br />
                        <Row>
                            {/*buttons */}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary"> Let's talk </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://drive.google.com/file/d/1P-sVSIh0mJMYqSn6V7CrJohA8jPJxNFl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                            My Resume
                                  </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/rainak77" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                                  </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/syedularif/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                  </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>
        </div>

    );
};

export default About;