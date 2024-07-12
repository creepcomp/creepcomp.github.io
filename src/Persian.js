import React, { Suspense } from "react"
import { Helmet } from "react-helmet"
import { Button, Col, Container, Image, Row } from "react-bootstrap"
import Socials from "./Socials"
import Skills from "./Skills"
import profile from "./assets/profile.jpg"
import stockdevice from "./assets/stockdevice.png"
import foobar from "./assets/foobar.png"
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "./assets/Persian.css"

const Projects = React.lazy(() => import("./Projects"))

const Persian = () => {
    const aboutme = "من یک توسعه‌دهنده‌ فول استک وب هستم که با فریم‌ورک‌های Django و React کار می‌کنم. چند سالی هست که توی این زمینه فعالیت می‌کنم و تونستم تو پروژه‌های مختلفی از ایده‌پردازی تا اجرا و تحویل، نقش داشته باشم. با Django بک‌اند قوی و امن می‌سازم و با React رابط‌های کاربری جذاب و کاربردی طراحی می‌کنم. آشنایی خوبی با مفاهیمی مثل RESTful APIها، GraphQL و معماری‌های میکروسرویس دارم و به ابزارهای مثل Docker، Git و CI/CD تسلط کامل دارم. علاقه زیادی به حل مسائل پیچیده، یادگیری تکنولوژی‌های جدید و کار تیمی دارم و همیشه دنبال ارائه‌ی راه‌حل‌های نوآورانه و بهینه برای رفع نیازهای کاربران و مشتریان هستم."

    return (
        <Container className="bg-light rounded shadow" dir="rtl">
            <Helmet>
                <title>پارسا رستم زاده - رزومه</title>
                <meta name="keyword" content="پارسا, رستم زاده, رزومه" />
                <meta name="description" content={aboutme.slice(0, 256)} />
            </Helmet>
            <Row>
                <Col lg={3} className="bg-primary bg-opacity-25 p-2">
                    <a href={profile}><img src={profile} alt="Profile" className="w-100 rounded-circle" /></a>
                    <div className="m-1 mb-3">
                        <h5 className="border-bottom p-1">راه ارتباطی</h5>
                        <div className="ms-2">
                            <div className="m-1">
                                <span className="d-block">ایمیل:</span>
                                <small className="d-block" dir="ltr">
                                    <a href="mail:creepcomp@gmail.com">creepcomp@gmail.com</a>
                                </small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">موبایل:</span>
                                <small className="d-block" dir="ltr">
                                    <a href="tel:09361966744">۰۹۳۶۱۹۶۶۷۴۴</a>
                                </small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">وب سایت:</span>
                                <small className="d-block" dir="ltr">
                                    <a href="https://creepcomp.github.io">creepcomp.github.io</a>
                                </small>
                            </div>
                            <div className="m-1">
                                <span className="d-block">آدرس:</span>
                                <small className="d-block" dir="ltr">ایران - تهران</small>
                            </div>
                        </div>
                    </div>
                    <div className="m-1 mb-3">
                        <h5 className="border-bottom p-1">تحصیلات</h5>
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
                        <h5 className="border-bottom p-1">رسانه های اجتماعی</h5>
                        <Socials />
                    </div>
                </Col>
                <Col>
                    <div className="m-4">
                        <h1>پارسا رستم زاده</h1>
                        <h4>توسعه دهنده وب / اپلیکیشن</h4>
                    </div>
                    <div className="mb-3">
                        <h5 className="p-1 border-bottom">درباره من</h5>
                        <p style={{textAlign: "justify"}}>{aboutme}</p>
                    </div>
                    <Row>
                        <Col lg>
                            <div className="mb-3">
                                <h5 className="p-1 border-bottom">مهارت ها</h5>
                                <Skills />
                            </div>
                            <div>
                                <h5 className="p-1 border-bottom">پروژه ها (Github)</h5>
                                <Suspense fallback={"درحال بارگداری .."}>
                                    <Projects />
                                </Suspense>
                            </div>
                        </Col>
                        <Col>
                            <h5 className="p-1 border-bottom">دستاورد ها</h5>
                            <ul>
                                <li className="mb-3">
                                    <strong>سطح ۴ در <a href="https://www.turing.com/kb/foobar-google-secret-hiring-technique">Google Foobar</a>.</strong>
                                    <p style={{textAlign: "justify"}}>این یک درخواست مخفیانه از طرف گوگل بود که شما می بایست حداقل ۳ سطح از چالش های آن را جهت قرارگیری در لیست منتخبین گوگل انجام میدادید. از معدود افرادی بودم که این درخواست را دریافت کردم و تا سطح ۴ آن پیش رفتم اما متاسفانه به دلیل هویت ایرانی، گوگل درخواستم را نپذیرفت و تاکنون جوابی دریافت نکرده ام.</p>
                                    <a href={foobar}><Image src={foobar} className="w-100 rounded" /></a>
                                </li>
                                <li>
                                    <strong>پروژه فروشگاهی موفق (<a href="https://stockdevice.ir">StockDevice.ir</a>)</strong>
                                    <p style={{textAlign: "justify"}}>حدود چند سالی هست که روی یک پروژه شخصی جهت به چالش کشیدن توانایی خودم کار می کنم، این یک پروژه فروشگاهی به صورت full restapi که با فریم ورک های django rest framework و react native نوشته شده و تاکنون موفق واقع شده است.</p>
                                    <a href={stockdevice}><Image src={stockdevice} className="w-100 rounded" /></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="fixed-top p-2 d-print-none" dir="ltr">
                <Button variant="light" href="/">English</Button>
            </div>
        </Container>
    )
}

export default Persian
