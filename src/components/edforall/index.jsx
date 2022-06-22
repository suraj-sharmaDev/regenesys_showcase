import styles from './Edforall.module.css';
import { StudentReviews } from '../programs';
import { ContactForm } from '../contact';
import Data from '../programs/courseData/dataScience';

export const Banner = ({ handleShow, handleContactSubmit }) => {
    return (
        <div className={styles.bannerContainer}>
            <img src="/images/edforall-banner.jpg" className='img-fluid' />
            <div className="container">
                <div className={styles.bannerEdForAllPatch}>
                    <div className="row">
                        <div className={`col-6 col-md-3`}>
                            <div className={styles.patchDiv}>
                                <img src="/images/edforallbanner_icon1.png" className='img-fluid' />
                                <div className={styles.patchText}>
                                    <strong>200000+</strong>
                                    <p>Alumni</p>
                                </div>
                            </div>

                        </div>

                        <div className={`col-6 col-md-3`}>
                            <div className={styles.patchDiv}>
                                <img src="/images/edforallbanner_icon2.png" className='img-fluid' />
                                <div className={styles.patchText}>
                                    <strong>190+</strong>
                                    <p>Countries</p>
                                </div>
                            </div>

                        </div>

                        <div className={`col-6 col-md-3`}>
                            <div className={styles.patchDiv}>
                                <img src="/images/edforallbanner_icon3.png" className='img-fluid' />
                                <div className={styles.patchText}>
                                    <strong>100+</strong>
                                    <p>Faculty</p>
                                </div>
                            </div>

                        </div>

                        <div className={`col-6 col-md-3`}>
                            <div className={styles.patchDiv}>
                                <img src="/images/edforallbanner_icon4.png" className='img-fluid' />
                                <div className={styles.patchText}>
                                    <strong>1000+</strong>
                                    <p>Clients</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className={styles.edForAllPara}>
                    <h2 className="commonHeading">EdForAll</h2>
                    <h4>Promoting global access to world-class higher education</h4>
                    <p>
                        Promoting global access to world-class higher education
                        In 2021, Regenesys Business School launched EdForAll (Education for All). It is a groundbreaking online learning initiative that aims to give financially disadvantaged, yet deserving students access to quality higher education at a nominal commitment fee of as little as $35 (USD)/ ₹2900 (Rupees)/ R500 (Rand)/ 15000 (Naira) per month. This fee will be interest-free for the duration of their study programme.
                    </p>
                    <p>
                        EdForAll empowers students to break out of the vicious cycle of poverty: no education, no job, no money, and no education. This revolutionary initiative will enable anyone anywhere to obtain accredited, internationally recognised master’s and bachelor’s degrees, diplomas, and higher certificate qualifications – all without the added financial burden of obtaining the qualification.
                        Combining education, technology, the internet, financial engineering, and philanthropy has made the game-changing education initiative possible. It is based on the principle of ‘study now and pay later.
                    </p>

                </div>

                <div className={styles.degreeCourses}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.degreeCourses}>
                                <h4 className={styles.subHeading}>Bachelor’s Degrees:</h4>
                                <ul>
                                    <li>
                                        Bachelor of Accounting Science Business Administration
                                    </li>
                                    <li>
                                        Accounting Science
                                    </li>
                                    <li>
                                        Bachelor of Business Administration: Banking
                                    </li>
                                    <li>
                                        Bachelor of Business Administration: Retail Management
                                    </li>
                                    <li>
                                        Master‘s Degrees:
                                    </li>
                                    <li>
                                        Master of Business Administration – MBA
                                    </li>
                                    <li>
                                        Master of Public Management

                                    </li>
                                </ul>
                                <h4 className={styles.subHeading}>Postgraduate Diplomas:</h4>
                                <ul>
                                    <li>
                                        Postgraduate Diploma in Business Management
                                    </li>
                                    <li>
                                        Postgraduate Diploma in Public Management
                                    </li>

                                </ul>

                                <h4 className={styles.subHeading}>Diploma:</h4>
                                <ul>
                                    <li>
                                        National Diploma in Public Administration
                                    </li>
                                </ul>

                            </div>
                            <button className={styles.greenButton} onClick={() => handleShow()} >Request a call</button>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.degreeCourses}>
                                <h4 className={styles.subHeading}>Digital Courses:</h4>
                                <ul>
                                    <li>
                                        Project Management
                                    </li>
                                    <li>
                                        Digital Marketing
                                    </li>
                                    <li>
                                        Artificial Intelligence
                                    </li>
                                    <li>
                                        Robotics
                                    </li>
                                    <li>
                                        Data Science
                                    </li>
                                    <li>
                                        Coding
                                    </li>
                                    <li>
                                        Blockchain
                                    </li>
                                    <li>
                                        Machine Learning
                                    </li>
                                    <li>
                                        Cybersecurity
                                    </li>
                                    <li>
                                        Design Thinking
                                    </li>
                                    <li>
                                        Finance for Non-Financial Managers
                                    </li>
                                    <li>
                                        Professional Business Writing Skills
                                    </li>

                                </ul>

                                <h4 className={styles.subHeading}>Certificate Courses:</h4>
                                <ul>
                                    <li>
                                        Higher Certificate in Business Management
                                    </li>
                                    <li>
                                        Higher Certificate in Credit Banking
                                    </li>
                                    <li>
                                        Higher Certificate in Retail Management
                                    </li>
                                    <li>
                                        Higher Certificate in Public Management
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <StudentReviews Data={Data} propClassName={styles.studentReviewBg} />
            <div className="container">
                <div className={styles.degreeCourses}>
                    <div className="col-md-12">
                        <div className={styles.degreeCourses}>
                            <h4 className={styles.subHeading}>The purpose of EdForAll is to:</h4>
                            <ul>
                                <li>
                                    Disrupt traditional higher education systems and provide access to affordable, quality online higher education to the world.
                                </li>
                                <li>
                                    Provide every human being the opportunity to get educated and awaken their potential to be able to achieve
                                    their dreams.
                                </li>
                                <li>
                                    Create a world in which higher education is a human right for all and not a privilege of the wealthy.
                                </li>
                                <li>
                                    Utilise the Internet, technology, and education as great equalisers.
                                </li>
                                <li>
                                    Wipe away the tears of all parents who cannot afford to pay for their children’s education.
                                </li>
                                <li>
                                    Develop conscious leaders who are capable of solving the current challenges the world is facing – from
                                    unemployment and poverty caused by the Covid-19 pandemic, to corruption and sustainable development.
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.speakToConsultantRow}>
                <div className="container">
                    <h2 className="commonHeading">Speak to a Consultant</h2>
                </div>
                <div className={styles.speakToConsultant}>
                    <div className="container">
                        <div className={styles.consultantForm}>
                            <ContactForm handleSubmit={handleContactSubmit} />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
