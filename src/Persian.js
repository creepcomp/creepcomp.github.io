import React from "react";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Helmet } from "react-helmet";
import "./Persian.css";
import { Button } from "react-bootstrap";
import profile from "./profile.jpeg";

const Persian = () => {
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
            "ارتباط",
            "همکاری",
            "تطبیق پذیری",
            "حل مسئله",
            "مدیریت زمان",
            "رهبری",
            "هوش هیجانی",
            "تفکر انتقادی",
            "حل تعارض"
        ]
    };
    const [repositories, setRepositories] = React.useState([]);

    React.useEffect(e => {
        document.dir = "rtl";
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
                <title>پارسا رستم زاده رزومه</title>
            </Helmet>
            <div className="row">
                <div className="col-lg-3 bg-primary bg-opacity-25 p-2">
                    <img src={profile} alt="Profile" className="w-100 rounded-circle" />
                    <div className="m-1 mb-4">
                        <h5 className="border-bottom pb-1">راه ارتباطی</h5>
                        <div className="ms-4">
                            <div className="m-1">
                                <span className="d-block">ایمیل</span>
                                <small className="d-block">creepcomp@gmail.com</small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">موبایل</span>
                                <small className="d-block">+98-9361966744</small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">آدرس</span>
                                <small className="d-block">Iran, Tehran</small>
                            </div>
                        </div>
                    </div>
                    <div className="m-1 mb-4">
                        <h5 className="border-bottom pb-1">تحصیلات</h5>
                        <div className="bg-light rounded m-1 p-2">
                            <small className="d-block">۱۴۰۰ - ۱۴۰۲</small>
                            <span className="d-block">کاردانی شبکه های کامپیوتری</span>
                            <small>دانشکده فنی و حرفه ای شمسی پور</small>
                        </div>
                        <div className="bg-light rounded m-1 p-2">
                            <small className="d-block">۱۴۰۲ (در حال تحصیل)</small>
                            <span className="d-block">کارشناسی شبکه های کامپیوتری</span>
                            <small>دانشکده فنی و حرفه ای شمسی پور</small>
                        </div>
                    </div>
                    <div className="m-1">
                        <h5 className="border-bottom pb-1">رسانه های اجتماعی</h5>
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
                        <h1>پارسا رستم زاده</h1>
                        <h4>توسعه دهنده وب / اپلیکیشن</h4>
                    </div>
                    <div className="mb-4">
                        <h5 className="pb-1 border-bottom">درباره من</h5>
                        <p style={{textAlign: "justify"}}>به عنوان یک توسعه‌دهنده وب و برنامه‌های کاربردی با تجربه در پروژه‌های کوچک و بزرگ سازمانی، تسلط کامل بر زبان‌های پایتون و جاوااسکریپت و همچنین مهارت‌های قابل توجهی در چارچوب‌های دیجانگو و ری‌اکت دارم. علاوه بر این، توانایی همکاری موثر در تیم و مسلط بودن بر ابزارهای همکاری مانند گیت را دارم. من مسئولیت‌پذیر و علاقمند به یادگیری مداوم هستم. توانایی حل مسائل پیچیده به من امکان می‌دهد تا راهکارهای نوآورانه‌ای ارائه دهم. من مشتاقانه منتظر استفاده از تجربه و مهارت‌های خود برای بهبود پروژه‌های توسعه وب/برنامه‌های کاربردی شما هستم.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg mb-4">
                            <h5 className="pb-1 border-bottom">مهارت های سخت</h5>
                            <div className="d-flex flex-wrap">
                                {skills.hard.map(x => <span className="bg-primary text-light rounded m-1 p-1">{x}</span>)}
                            </div>
                        </div>
                        <div className="col mb-4">
                            <h5 className="pb-1 border-bottom">مهارت های نرم</h5>
                            <div className="d-flex flex-wrap">
                                {skills.soft.map(x => <span className="bg-primary text-light rounded m-1 p-1">{x}</span>)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className="pb-1 border-bottom">پروژه های متن باز (گیت هاب)</h5>
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
            <div className="fixed-top p-2">
                <Button variant="light" href="/">English</Button>
            </div>
        </div>
    )
}

export default Persian;
