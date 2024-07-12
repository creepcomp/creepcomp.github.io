import React, { Suspense } from "react"
import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"
import Socials from "./Socials"
import Skills from "./Skills"
import profile from "./assets/profile.jpg"
import stockdevice from "./assets/stockdevice.png"
import foobar from "./assets/foobar.png"
import "bootstrap/dist/css/bootstrap.min.css"

const Projects = React.lazy(() => import("./Projects"))

const English = () => {
    const aboutme = "I am a passionate and dedicated full-stack web developer with a strong background in building dynamic, high-performance web applications. With expertise in both front-end and back-end development, I specialize in using React to create intuitive and responsive user interfaces and Django to build robust and scalable server-side applications. My comprehensive understanding of the web development lifecycle allows me to seamlessly integrate design, functionality, and user experience. I thrive in collaborative environments and am always eager to tackle new challenges, continuously seeking to enhance my skills and contribute to innovative projects."

    return (
        <Container className="bg-light rounded shadow">
            <Helmet>
                <title>Parsa Rostamzadeh - Resume (CV)</title>
                <meta name="keyword" content="parsa, rostamzadeh, resume, cv" />
                <meta name="description" content={aboutme.slice(0, 256)} />
            </Helmet>
            <Row>
                <Col lg={3} className="bg-primary bg-opacity-25 p-2">
                    <a href={profile}><img src={profile} alt="Profile" className="w-100 rounded-circle" /></a>
                    <div className="m-1 mb-3">
                        <h5 className="border-bottom pb-1">Contact</h5>
                        <div className="ms-2">
                        <div className="m-1">
                                <span className="d-block">Email:</span>
                                <small className="d-block">
                                    <a href="mail:creepcomp@gmail.com">creepcomp@gmail.com</a>
                                </small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">Mobile:</span>
                                <small className="d-block">
                                    <a href="tel:0989361966744">+98-9361966744</a>
                                </small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">Website:</span>
                                <small className="d-block">
                                    <a href="https://creepcomp.github.io">creepcomp.github.io</a>
                                </small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">Address:</span>
                                <small className="d-block">Iran, Tehran</small>
                            </div>
                        </div>
                    </div>
                    <div className="m-1 mb-3">
                        <h5 className="border-bottom pb-1">Education</h5>
                        <div className="bg-light rounded m-1 p-2">
                            <small className="d-block">2021 - 2023</small>
                            <span className="d-block">Associate in Computer Networking</span>
                            <small>Shamsipour Technical College</small>
                        </div>
                        <div className="bg-light rounded m-1 p-2">
                            <small className="d-block">2023 (Currently)</small>
                            <span className="d-block">Bachelor of Computer Networking</span>
                            <small>Shamsipour Technical College</small>
                        </div>
                    </div>
                    <div className="m-1">
                        <h5 className="border-bottom pb-1">Social</h5>
                        <Socials />
                    </div>
                </Col>
                <Col>
                    <div className="m-4">
                        <h1>Parsa Rostamzadeh</h1>
                        <h4>Web & Application Developer</h4>
                    </div>
                    <div>
                        <h5 className="pb-1 border-bottom">About me</h5>
                        <p style={{textAlign: "justify"}}>{aboutme}</p>
                    </div>
                    <Row>
                        <Col lg>
                            <div className="mb-3">
                                <h5 className="pb-1 border-bottom">Skills</h5>
                                <Skills />
                            </div>
                            <div>
                                <h5 className="pb-1 border-bottom">Projects (Github)</h5>
                                <Suspense fallback={"Loading .."}>
                                    <Projects />
                                </Suspense>
                            </div>
                        </Col>
                        <Col>
                            <h5 className="pb-1 border-bottom">Achievements</h5>
                            <ul>
                                <li className="mb-3">
                                    <strong>Level 4 at <a href="https://www.turing.com/kb/foobar-google-secret-hiring-technique">Google Foobar</a></strong>
                                    <p style={{textAlign: "justify"}}>This was a covert request from Google, requiring candidates to complete at least three levels of its challenges to be shortlisted. I was one of the few who received this request and progressed to level four. Unfortunately, due to my Iranian nationality, Google did not accept my application, and I have yet to receive a response.</p>
                                    <a href={foobar}><Image src={foobar} className="w-100 rounded" /></a>
                                </li>
                                <li>
                                    <strong>Successful e-commerce project (<a href="https://stockdevice.ir">StockDevice.ir</a>)</strong>
                                    <p style={{textAlign: "justify"}}>I have been working on a personal project for several years to challenge my abilities. This is an e-commerce project built as a full REST API using Django Rest Framework and React Native. The project has been successful so far.</p>
                                    <a href={stockdevice}><Image src={stockdevice} className="w-100 rounded" /></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="fixed-top p-2 d-print-none" dir="rtl">
                <Button variant="light" href="#fa">فارسی</Button>
            </div>
        </Container>
    )
}

export default English
