import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Button, Col, Image, Row } from "react-bootstrap";
import profile from "./profile.jpeg";
import foobar from "./foobar.png";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./Persian.css";

const Repositories = React.lazy(() => import("./Repositories"));

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

    React.useEffect(() => {
        document.dir = "rtl";
    });

    return (
        <div className="container-lg rounded bg-light shadow mx-lg-auto">
            <Helmet>
                <title>پارسا رستم زاده | رزومه</title>
            </Helmet>
            <Row>
                <Col lg={3} className="bg-primary bg-opacity-25 p-2">
                    <img src={profile} alt="Profile" className="w-100 rounded-circle" />
                    <div className="m-1 mb-4">
                        <h5 className="border-bottom pb-1">راه ارتباطی</h5>
                        <div className="ms-2">
                            <div className="m-1">
                                <span className="d-block">ایمیل</span>
                                <small className="d-block"dir="ltr">creepcomp@gmail.com</small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">موبایل</span>
                                <small className="d-block" dir="ltr">+98-9361966744</small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">آدرس</span>
                                <small className="d-block" dir="ltr">Iran, Tehran</small>
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
                        <h1>پارسا رستم زاده</h1>
                        <h4>توسعه دهنده وب / اپلیکیشن</h4>
                    </div>
                    <div className="mb-4">
                        <h5 className="pb-1 border-bottom">درباره من</h5>
                        <p style={{textAlign: "justify"}}>توسعه دهنده وب و اپلیکیشن، مسلط بر زبان های پایتون و جاوااسکریپت، مسلط بر فریمورک های جنگو و ری اکت و توانایی همکاری موثر در تیم و کار با ابزار گیت را دارم، علاوه بر این مسئولیت پذیر و علاقمند یادگیری مداوم هستم. توانایی حل مسائل پیچیده به من این امکان را می دهد تا راهکارهای نوآورانه ای ارایه دهم. مشتاقانه منتظر استفاده از تجربه ها و مهارت های خودم در کسب و کار شما هستم.</p>
                    </div>
                    <Row>
                        <Col lg className="mb-4">
                            <h5 className="pb-1 border-bottom">مهارت های سخت</h5>
                            <div className="d-flex flex-wrap">
                                {skills.hard.map((x, i) => <span key={i} className="bg-primary text-light rounded m-1 p-1">{x}</span>)}
                            </div>
                        </Col>
                        <Col lg className="mb-4">
                            <h5 className="pb-1 border-bottom">مهارت های نرم</h5>
                            <div className="d-flex flex-wrap">
                                {skills.soft.map((x, i)  => <span key={i} className="bg-primary text-light rounded m-1 p-1">{x}</span>)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg className="mb-4">
                            <h5 className="pb-1 border-bottom">پروژه های متن باز (Github)</h5>
                            <Suspense fallback={"در حال بارگذاری .."}>
                                <Repositories />
                            </Suspense>
                        </Col>
                        <Col className="mb-4">
                            <h5 className="pb-1 border-bottom">دستاورد ها</h5>
                            <ul>
                                <li>
                                    <strong>سطح ۴ در <a href="https://www.turing.com/kb/foobar-google-secret-hiring-technique">Google Foobar</a>.</strong>
                                    <p>چند سال پیش، هنگام جستجوی آنلاین، گوگل با یک پیشنهاد منحصر به فرد مرا شگفت زده کرد: Google Foobar. این یک ابزار مخفی استخدام توسط گوگل است که در آن افراد را به حل چالش‌های کدنویسی برای یافتن استعدادهای بالقوه دعوت می‌کند.</p>
                                    <a href={foobar}><Image src={foobar} fluid /></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <div>
                        <h5 className="pb-1 border-bottom">تجربه کاری</h5>
                        <ul>
                            <li>
                                <strong className="d-block">مدیر پروژه و توسعه دهنده وب Full-Stack</strong>
                                <a href="https://saherandishe.ir">ساحراندیشه | فروشگاه دیجیتالی | https://saherandishe.ir</a>
                                <p>یک پلت فرم فروشگاهی، نوشته شده در فریمورک های Django و React برای یک کسب و کار محلی فروش اجناس دیجیتالی توسعه یافته است. (<a href="https://github.com/creepcomp/saherandishe.ir">سورس کد</a>)</p>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <div className="fixed-top p-2">
                <Button variant="light" href="/">English</Button>
            </div>
        </div>
    )
}

export default Persian;
