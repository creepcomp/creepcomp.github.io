import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import profile from "./profile.jpeg";

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
    const [repositories, setRepositories] = React.useState([]);

    React.useEffect(e => {
        fetch("https://api.github.com/users/creepcomp/repos").then(response => response.json()).then(repositories => {
            repositories.map(repository => {
                fetch(repository.languages_url).then(response => response.json()).then(data => {
                    repository.languages = data;
                    setRepositories([...repositories]);
                });
            });
        });
    }, []);     

    return (
        <div className="container-lg rounded bg-light shadow mx-lg-auto">
            <Helmet>
                <title>Parsa Rostamzadeh Resume</title>
            </Helmet>
            <div className="row">
                <div className="col-lg-3 bg-primary bg-opacity-25 p-2">
                    <img src={profile} alt="Profile" className="w-100 rounded-circle" />
                    <div className="m-1 mb-4">
                        <h5 className="border-bottom pb-1">Contact</h5>
                        <div className="ms-2">
                            <div className="m-1">
                                <span className="d-block">Email</span>
                                <small className="d-block">creepcomp@gmail.com</small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">Phone</span>
                                <small className="d-block">+98-9361966744</small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">Address</span>
                                <small className="d-block">Iran, Tehran</small>
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
                            <a className="d-block" href="https://www.linkedin.com/in/creepcomp"><i class="fa-brands fa-linkedin fa-lg"></i> LinkedIn</a>
                            <a className="d-block" href="https://github.com/creepcomp"><i class="fa-brands fa-github fa-lg"></i> Github</a>
                            <a className="d-block" href="https://twitter.com/creepcomp"><i class="fa-brands fa-twitter fa-lg"></i> Twitter</a>
                            <a className="d-block" href="https://join.skype.com/invite/L7fWbCegvzAa"><i class="fa-brands fa-skype fa-lg"></i> Skype</a>
                            <a className="d-block" href="https://facebook.com/creepcomp"><i class="fa-brands fa-facebook fa-lg"></i> Facebook</a>
                            <a className="d-block" href="https://telegram.me/creepcomp"><i class="fa-brands fa-telegram fa-lg"></i> Telegram</a>
                            <a className="d-block" href="https://instagram.com/creepcomp"><i class="fa-brands fa-instagram fa-lg"></i> Instagram</a>
                            <a className="d-block" href="https://youtube.com/@creepcomp"><i class="fa-brands fa-youtube fa-lg"></i> Youtube</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="m-4">
                        <h1>Parsa Rostamzadeh</h1>
                        <h4>Web & Application Developer</h4>
                    </div>
                    <div className="mb-4">
                        <h5 className="pb-1 border-bottom">About me</h5>
                        <p style={{textAlign: "justify"}}>As a full-stack web and application developer with experience contributing to both small and large organizational projects, I bring fluency in Python and JavaScript languages as well as proficiency in Django and React frameworks. Moreover, I possess strong collaborative skills, having worked effectively within teams and mastered collaboration tools like Git. I am highly responsible and committed to continuous learning. My capacity to solve complex problems enables me to provide innovative solutions. I am eager to apply my experience and skills to enhance your web/app development projects.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg mb-4">
                            <h5 className="pb-1 border-bottom">Hard Skills</h5>
                            <div className="d-flex flex-wrap">
                                {skills.hard.map(x => <span className="bg-primary text-light rounded m-1 p-1">{x}</span>)}
                            </div>
                        </div>
                        <div className="col mb-4">
                            <h5 className="pb-1 border-bottom">Soft Skills</h5>
                            <div className="d-flex flex-wrap">
                                {skills.soft.map(x => <span className="bg-primary text-light rounded m-1 p-1">{x}</span>)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className="pb-1 border-bottom">Projects (Github)</h5>
                        {repositories.map(x => (
                            <div className="d-flex align-items-center m-1">
                                <i class="fa-brands fa-github fa-2x me-3"></i>
                                <div className="d-flex align-items-center flex-wrap flex-md-nowrap bg-secondary bg-opacity-25 rounded w-100 p-2">
                                    <div className="w-100">
                                        <h5>{x.name}</h5>
                                        <a href={x.html_url}>{x.full_name}</a>
                                    </div>
                                    <div className="w-100">
                                    {x.languages ? Object.keys(x.languages).map(language => <span className="bg-secondary rounded text-light m-1 p-1">{language}</span>): null}
                                    </div>
                                    <small className="w-100 text-center">{new Date(x.created_at).toLocaleString()}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="fixed-top p-2" dir="rtl">
                <Button variant="light" href="#fa">فارسی</Button>
            </div>
        </div>
    )
}

export default English;