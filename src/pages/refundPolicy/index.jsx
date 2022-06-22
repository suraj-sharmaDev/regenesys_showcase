/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Apr 11 2022
 *  File : index.jsx
 *******************************************/
import React from 'react';
import styles from './Refund.module.css';
import { GenMetaInformation } from 'components/commons';

const IndexPage = props => {
    return (

        <div className={styles.pageTopSpace}>
            <GenMetaInformation pageName={"refundPolicy"} />
            <div className='container'>
                <div className={styles.termsConditionGrid}>
                    <h5>Claim for Refund</h5>
                    <p>To claim refund, kindly drop an email on: <a href="mailto:info.digital@regenesys.net">info.digital@regenesys.net</a> <strong>Online course refund</strong> .” We attempt to process and complete refund requests within 7 working days from the time of receiving the refund request, however, in case there is any delay in refund beyond the above-mentioned period, then you may notify us through email. The refund process may include a feedback call to you and validation of key information that may be required by us to process the refund request.</p>

                    <strong>One-time Payment</strong>
                    <ul>
                        <li>Self-paced Courses: Non refundable</li>
                        <li>
                            Facilitator led Courses: We provide 90% refund if the request is raised within 5 days of the course start date. No refund requests shall be entertained after 5 working days from the course start date.
                        </li>
                    </ul>
                    <strong>EMI Payment</strong>
                    <ul>
                        <li>Self-paced Courses: Non refundable</li>
                        <li>Facilitator led Courses: We provide 80% refund if the request is raised within 5 days of the course start date. No refund requests shall be entertained after 5 working days from the course start date.</li>
                    </ul>
                    <p>We reserve the right to change any fees at any time at our sole discretion and any change, update, or modification in the fee shall become effective immediately upon the same being posted/uploaded or notified on our website <a href="https://digitalregenesys.com.">https://digitalregenesys.com.</a></p>
                </div>


            </div>
        </div>

    );
}

export default IndexPage;