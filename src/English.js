import React, { Suspense } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import profile from "./profile.jpeg";
import foobar from "./foobar.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Repositories = React.lazy(() => import("./Repositories"));

const English = () => {
    const skills = {
        hard: [
            "Python",
            "Javascript",
            "Django",
            "FastAPI",
            "PostgreSQL",
            "MongoDB",
            "React",
            "RESTful APIs",
            "Deployment",
            "Security",
            "Testing"
        ],
        soft: [
            "Communication",
            "Collaboration",
            "Adaptability",
            "Problem-solving",
            "Time management",
            "Leadership",
            "Emotional intelligence",
            "Critical thinking",
            "Conflict resolution"
        ]
    }; 

    return (
        <Container className="bg-light rounded shadow">
            <Helmet>
                <title>Parsa Rostamzadeh | CV</title>
            </Helmet>
            <Row>
                <Col lg={3} className="bg-primary bg-opacity-25 p-2">
                    <Image src={profile} alt="Profile" className="w-100 rounded-circle" />
                    <div className="m-1 mb-4">
                        <h5 className="border-bottom pb-1">Contact</h5>
                        <div className="ms-2">
                            <div className="m-1">
                                <span className="d-block">Email</span>
                                <small className="d-block ms-2">creepcomp@gmail.com</small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">Phone</span>
                                <small className="d-block ms-2">+98-9361966744</small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">Address</span>
                                <small className="d-block ms-2">Iran, Tehran</small>
                            </div>
                        </div>
                    </div>
                    <div className="m-1 mb-4">
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
                        <div className="ms-4">
                            <a className="d-block" href="https://www.linkedin.com/in/creepcomp"><i className="fa-brands fa-linkedin fa-lg"></i> LinkedIn</a>
                            <a className="d-block" href="https://github.com/creepcomp"><i className="fa-brands fa-github fa-lg"></i> Github</a>
                            <a className="d-block" href="https://twitter.com/creepcomp"><i className="fa-brands fa-twitter fa-lg"></i> Twitter</a>
                            <a className="d-block" href="https://join.skype.com/invite/L7fWbCegvzAa"><i className="fa-brands fa-skype fa-lg"></i> Skype</a>
                            <a className="d-block" href="https://facebook.com/creepcomp"><i className="fa-brands fa-facebook fa-lg"></i> Facebook</a>
                            <a className="d-block" href="https://telegram.me/creepcomp"><i className="fa-brands fa-telegram fa-lg"></i> Telegram</a>
                            <a className="d-block" href="https://instagram.com/creepcomp"><i className="fa-brands fa-instagram fa-lg"></i> Instagram</a>
                            <a className="d-block" href="https://youtube.com/@creepcomp"><i className="fa-brands fa-youtube fa-lg"></i> Youtube</a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="m-4">
                        <h1>Parsa Rostamzadeh</h1>
                        <h4>Web & Application Developer</h4>
                    </div>
                    <div className="mb-4">
                        <h5 className="pb-1 border-bottom">About me</h5>
                        <p style={{textAlign: "justify"}}>As a full-stack web and application developer with experience contributing to both small and large organizational projects, I bring fluency in Python and JavaScript languages as well as proficiency in Django and React frameworks. Moreover, I possess strong collaborative skills, having worked effectively within teams and mastered collaboration tools like Git. I am highly responsible and committed to continuous learning. My capacity to solve complex problems enables me to provide innovative solutions. I am eager to apply my experience and skills to enhance your web/app development projects.</p>
                    </div>
                    <Row>
                        <Col lg className="mb-4">
                            <h5 className="pb-1 border-bottom">Hard Skills</h5>
                            <div className="d-flex flex-wrap">
                                {skills.hard.map((x, i) => <span key={i} className="bg-primary text-light rounded m-1 p-1">{x}</span>)}
                            </div>
                        </Col>
                        <Col className="mb-4">
                            <h5 className="pb-1 border-bottom">Soft Skills</h5>
                            <div className="d-flex flex-wrap">
                                {skills.soft.map((x, i) => <span key={i} className="bg-primary text-light rounded m-1 p-1">{x}</span>)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg className="mb-4">
                            <h5 className="pb-1 border-bottom">Projects (Github)</h5>
                            <Suspense fallback={"Loading .."}>
                                <Repositories />
                            </Suspense>
                        </Col>
                        <Col className="mb-4">
                            <h5 className="pb-1 border-bottom">Achievements</h5>
                            <ul>
                                <li>
                                    <strong>Level 4 at <a href="https://www.turing.com/kb/foobar-google-secret-hiring-technique">Google Foobar</a>.</strong>
                                    <p>A few years ago, while browsing online, Google surprised me with a unique suggestion: Google Foobar. It's a secret recruitment tool by Google where they invite people to solve coding challenges to find potential talent.</p>
                                    <a href={foobar}><Image src={foobar} fluid /></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <div>
                        <h5 className="pb-1 border-bottom">Work Experience</h5>
                        <ul>
                            <li>
                                <strong className="d-block">Project Manager & Full-Stack Web Developer</strong>
                                <a href="https://saherandishe.ir">Saher Andishe | Digital Store | https://saherandishe.ir</a>
                                <p>An official store platform, based on Django (Rest Framework) for the backend and React (Native) for the frontend, has been developed for a local digital store business.</p>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <div className="fixed-top p-2" dir="rtl">
                <Button variant="light" href="#fa">فارسی</Button>
            </div>
        </Container>
    )
}

export default English;
