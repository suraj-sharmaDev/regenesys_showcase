/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Apr 04 2022
 *  File : index.jsx
 *******************************************/
import {useState} from 'react';
import { Images } from "config";
import styles from './About.module.css';
import Data from './data';
import { Colors } from 'config';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Banner = (props) => {
    const buttonIcons = [
        {
            img: "icon_fb",
            url: ""
        },
        {
            img: "icon_fb",
            url: ""
        },
        {
            img: "icon_fb",
            url: ""
        },
        {
            img: "icon_fb",
            url: ""
        }
    ];

    const btnHandler = url => {

    }

    return (
        <div className={styles.bannerContainer}>

        </div>
    )
}

export const AboutDescription = props => {
    return (
        <div className='container py-md-5 py-4'>
            <h2 className={'commonHeading'}>About Us</h2>
            <div className={styles.aboutDescpView}>
                <p className='mt-4'>
                    Digital Regenesys is a cutting-edge digital learning platform introduced by the Regenesys Business School, a global business school with state-of-the-art campuses in Johannesburg, Mumbai, and Lagos.
                </p>
                <p>
                    Digital Regenesys offers upskilling digital courses in futuristic domains relevant to multiple industries. We have transformed lives and elevated the careers of more than 1100 students, helping them to upskill and get placed in top MNCs in all over the globe.
                </p>
            </div>
        </div>
    );
}

export const InfoGraphics = props => {
    return (<></>)
    return (
        <div className={`py-4 ${styles.inforGraphicsContainer}`}>
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <h2>Upgrade Your Career with Digital Regenesys </h2>
                        <p>
                            Learn the next-gen digital skills with India’s leading EdTech platform introduced by the Regenesys Business School, a global business school with campuses in Johannesburg, Mumbai, and Lagos. Digital Regenesys is here to provide you with career transformation, skill-enhancing, and upgrading <strong>online courses</strong> in many digital domains. The <strong>self-paced online courses</strong>  offered by Digital Regenesys are in sync with the demands of almost every industry and their digital and technological needs. The <strong>instructor led training</strong> gives students a golden opportunity to get placed in top MNCs and organizations. Avail yourself of the <strong>certificate programs</strong> offered by highly experienced and achieved faculty. Come and be a part of the digital revolution.
                        </p>
                    </div>
                    <div className={`col-6 col-md-3 ${styles.infoView}`}>
                        <img src="/images/about_icon1.png" className='img-fluid' />
                        <strong>3,000,000+</strong>
                        <p>Professionals Trained</p>
                    </div>
                    <div className={`col-6 col-md-3 ${styles.infoView}`}>
                        <img src="/images/about_icon2.png" className='img-fluid' />
                        <strong>2,000+</strong>
                        <p>Qualified Trainers</p>
                    </div>
                    <div className={`col-6 col-md-3 ${styles.infoView}`}>
                        <img src="/images/about_icon3.png" className='img-fluid' />
                        <strong>400+</strong>
                        <p>Courses</p>
                    </div>
                    <div className={`col-6 col-md-3 ${styles.infoView}`}>
                        <img src="/images/about_icon4.png" className='img-fluid' />
                        <strong>40+</strong>
                        <p>Global Accreditations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const VisionBanner = (props) => {
    const [state, setState] = useState("vision");
    return (
        <div className={` py-4 ${styles.visionBannerContainer}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md d-flex align-items-center">
                        <div>
                            <div className={styles.btnGroup}>
                                <button
                                    className={state === "vision" ? styles.btnActive : ""}
                                    onClick={() => setState("vision")}
                                >
                                    Our Vision
                                </button>
                                <button
                                    className={state === "mission" ? styles.btnActive : ""}
                                    onClick={() => setState("mission")}
                                >
                                    Our Mission
                                </button>
                            </div>
                            <div>
                                <p>
                                    {Data.visionBanner[state]}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-md-3'></div> */}
                    {/* <div className="col-md-4">
                        <img
                            src="/images/vision-mission.jpg"
                            alt="certificate"
                            className="img-fluid"
                        />
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export const MarkoBanner = props => {
    return (
        <div
            className={`${styles.visionBannerContainer} py-4`}
            style={{ backgroundColor: Colors.darkBlue, color: "#ffffff" }}
        >
            <div className="container">
                <div className="row">
                    <div className={`col-md-4 ${styles.founderContainer}`}>
                        <LazyLoadImage
                            src="/images/image_banner_founder.png"
                            alt="certificate"
                            className="img-fluid"
                        />
                        <h1>Dr Marko Saravanja</h1>
                        <p className='mb-0'>Executive Chairperson</p>
                        <p>Regenesys Business School</p>
                    </div>
                    <div className={`col-md-7 offset-md-1 ${styles.founderSaysContainer}`}>
                        <div>
                            <div className={styles.btnGroup}>
                                <strong>Shifting The Focus to The New Digital World</strong>
                            </div>
                            <div>
                                <p>
                                    I am delighted to welcome you to Digital Regenesys at Regenesys Business
                                    School.
                                    The ongoing digital revolution demands a new breed of professionals to
                                    succeed in the new digital world where new technologies have sparked rapid
                                    innovation.
                                </p>
                                <p>
                                    To give you a competitive advantage, we have developed cutting-edge
                                    digital technology Courses in the areas of information technology
                                    and management. Our Courses are facilitated by leading experts,
                                    entrepreneurs, and academics from top local and international institutions.
                                    Get inspired and energised to transform your career with Courses
                                    grounded in the realities of the new digtital world.
                                </p>
                                <p>
                                    I wish you success on your journey towards greatness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}