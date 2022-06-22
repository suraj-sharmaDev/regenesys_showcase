/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Apr 11 2022
 *  File : index.jsx
 *******************************************/
import React from 'react';
import styles from './Terms.module.css';
import { GenMetaInformation } from 'components/commons';

const IndexPage = props => {
    return (
        <div className={styles.pageTopSpace}>
            <GenMetaInformation pageName={"termsCondition"} />
            <div className='container'>
                <div className={styles.termsConditionGrid}>
                    <h5>A. Academic Regulations</h5>
                    <p>
                        All academic and accredited Courses are subject to academic rules, regulations and applicable domestic legislation as published and revised from time-to-time. Regenesys is obligated to make personal academic information available to regulatory and administrative bodies for academic and statistical purposes.
                    </p>
                </div>


                <div className={styles.termsConditionGrid}>
                    <h5>B.Definitions</h5>
                    <ul>
                        <li>
                            ‘Regenesys’ refers to Regenesys Business School, Regenesys School of Public Management or Regenesys Management.
                        </li>
                        <li>
                            ‘Academic programme’ shall mean CHE accredited courses conducted by Regenesys.
                        </li>
                        <li>
                            ‘Management development course’ shall mean management Courses conducted over a period of 1-5 days by Regenesys on its premises or at a client’s premise.
                        </li>
                        <li>
                            ‘Short course’ shall mean management development courses conducted by Regenesys. These courses may vary in length and are counted in days.
                        </li>
                        <li>
                            ‘In-house’ shall mean a standard or customised Regenesys course, either short or academic, that is conducted as a package for a corporate or organisational client.
                        </li>
                        <li>
                            ‘Acceptance’ shall mean that the individual has provided supporting documentation, where necessary, and has paid the application fee for the course in advance or provided documentation such as a purchase order proving commitment to pay.
                        </li>
                        <li>
                            ‘Roll-over/Returning Students’ shall mean a student moving from one year of tuition to the following year of tuition for the same qualification.

                        </li>
                    </ul>
                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>C.Course Applications</h5>
                    <p>
                        All applications submitted by an individual, whether for a short or academic course, require a fully completed and signed application form and acknowledgement of the terms and conditions.
                    </p>
                    <p>
                        All supporting documentation as laid out in the application form must be provided. An application does not constitute the full registration for a course.
                    </p>
                    <p>
                        An application will be registered once the full payment and supporting documentation (where necessary) have been received or the payment terms agreement has been signed and all entrance requirements have been met.
                    </p>
                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>D.Application Fee*</h5>
                    <p>
                        A non-refundable fee of R1,100 is required in order for an application to be processed. Regenesys reserves the right to amend this fee from time-to-time.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>E.RMAT</h5>
                    <p>
                        Please note that MBA, International and Recognition of Prior Learning (RPL) students are required to take our RMAT test for an additional fee of R250.
                    </p>
                    <p>
                        RPL students are also required to pay an additional R750 for the RPL process. Terms and conditions apply.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>F.Administration Fee*</h5>
                    <p>
                        For every qualification enrolled, the student will be required to register for each calendar year and select relevant modules to be taken during that year. This facilitates better planning for tuition demands and services required. An annual administration fee of R500 will be charged.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>G.Payment Of Study Fees*</h5>
                    <p>
                        Regenesys Management offers the following payment options to students for academic Courses:
                    </p>
                    <ul>
                        <li>
                            Monthly (by compulsory debit order)
                        </li>
                        <li>
                            Per semester
                        </li>
                        <li>
                            Upfront
                        </li>
                        <li>
                            Annual
                        </li>
                        <li>
                            Bank loan through a recognised financial institution
                        </li>
                        <li>
                            Regenesys student loan (terms and conditions apply)
                        </li>

                    </ul>
                    <p className='mt-4'>
                        If a student elects to pay on a monthly basis then the Regenesys Credit Application Form and an income-expenditure statement are required for term repayments.
                    </p>
                    <ul>
                        <li>The first month’s payment must be paid in advance.</li>
                        <li>A signed debit order needs to be completed. Should a payment be returned by the bank, the student needs to reimburse Regenesys within 5 (five) days of being informed thereof. Failure to do so will render the student’s studies suspended.</li>
                        <li>Should a monthly debit order be returned by the bank on a second occasion, in addition to reimbursing Regenesys within 5 (five) days, the student’s monthly payment arrangements will be forfeited immediately and the student will then have to pay in advance for each module attended.</li>
                        <li>A returned debit order administration fee will be charged (currently R150 + VAT)</li>
                        <li>An option for an extended monthly payment period is available, subject to approval.</li>

                    </ul>
                    <p className='mt-4'>
                        If a student elects to pay for each semester, the fee for the semester has to be paid at least 5 (five) days prior to commencement of the semester, failing which, the student will not be allowed to attend class. Should a student attend class, he/she will be liable for fees.
                    </p>
                    <p className='mt-4'>
                        In the case of upfront payments, course fees need to be paid prior to commencement and attendance of the course.
                    </p>
                    <p className='mt-4'>
                        Should the student elect to take a study loan through a recognised financial institution, Regenesys will facilitate the necessary forms and contact details for a select number of these institutions. However, payment for the respective course needs to be received by Regenesys prior to the commencement of the course.
                    </p>
                    <p className='mt-4'>
                        Access to the portal shall be blocked should a student’s fees not be paid as envisaged under point G. a. above.
                    </p>
                    <p className='mt-4'>
                        Should any monies due by the student or the signatory/ies under his/her contract with Regenesys not be paid by the due date, the student may be excluded from:
                    </p>

                    <ul>
                        <li>Attending further lectures, and/or</li>
                        <li>Submitting assessments (assignments and exams), and/or</li>
                        <li>Accessing the campus and all other facilities, and/or</li>
                        <li>Receiving assessment results, and/or</li>
                        <li>Graduation until such time as all monies due have been paid in full.</li>
                        <li>This is without prejudice to any other rights of Regenesys. Exclusion as set above, will not relieve the signatory/ies of any obligation to pay the contract amount, or any balance then outstanding.</li>
                        <li>Interest will also be levied (currently prime +2%) on any monies due from the due date until payment is received and cleared through the Regenesys’ bank account.</li>
                        <li>All late payments will attract an administrative fee of R300 + VAT. until payment is received and cleared through the Regenesys’ bank account.</li>
                        <li>All late payments will attract an administrative fee of R300 + VAT.</li>
                        <li>The signatory/ies will remain liable for all expenses incurred by Regenesys as a result of any breach of his/her/their part of this contract and acknowledge/s that this may include legal tracing and collection costs.</li>

                    </ul>
                    <p>
                        In order for a student to graduate their fees need to be settled in full. No student will be invited to the graduation event until such a time as their account is settled.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>H.Revised Fees To Applicable Year’s Rate</h5>
                    <p>
                        Tuition will be charged at fees applicable to the current year’s rate. For delayed, deferred and repeat modules, a top-up fee will be levied per module, to cover the shortfall between originally paid fees and the applicable rate when the student actually does the module. If the student has paid for the full qualification upfront, the top-up fee will only be applicable on studies extending beyond the required minimum qualification period of the course.
                    </p>
                    <p>
                        Regenesys Business School retains an exclusive and unlimited right to determine any future changes in fees and costs pertaining to its course offerings across all study modes. The student accepts and acknowledges that any such future changes in course offerings across all study modes shall not apply to his/her existing course fees as they shall be exclusively governed by this agreement and the relevant provisions herein.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>I.Cancellation And Postponement</h5>
                    <p>
                        Regenesys reserves the right to postpone or cancel a scheduled course due to insufficient numbers or any reason deemed fair by Regenesys. Registered students might be provided with an alternative course date or offered a refund.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>Academic Courses:</strong>
                    <p>
                        Should the student inform Regenesys in writing, within 7 days of Registration, that they want to cancel their studies then the following will apply:
                    </p>

                    <ul>
                        <li>The fees paid by the student in relation to the cancelled studies will be refunded, subject to a cancellation fee of R750.</li>
                    </ul>
                    <p>
                        Should the student inform Regenesys in writing, within 7 days of Registration, that they want
                        to cancel their studies then the following will apply:
                    </p>

                    <ul>
                        <li>
                            The fees paid by the student in relation to the cancelled studies will be refunded, subject to a cancellation fee of R750.
                        </li>
                    </ul>
                    <p className='mt-4'>
                        Should a student want to cancel or postpone their studies for any reason, after the 7 days notice period above, the following will apply:
                    </p>
                    <ul>
                        <li>
                            Notice of intention to cancel/postpone needs to be communicated in writing to the Personal
                        </li>
                        <li>
                            Programme Advisor (PPA). The full year’s fees will still be due and payable, irrespective of the payment option.
                        </li>
                        <li>
                            If no written cancellation is received, the student will also be liable for the following year’s fees.
                        </li>
                        <li>
                            Non-attendance of class, non-submission or failure to submit or participate in an assessment does not constitute a cancellation, and the year’s fees are still due and payable.
                        </li>
                        <li>
                            Written acceptance of the cancellation will be given to the student by the Personal
                        </li>
                        <li>
                            Programme Advisor. The onus is on the student to ensure confirmation of receipt by fax, email or post.
                        </li>
                        <li>
                            Regenesys will not be held liable for failure to receive faxed cancellation notices.
                        </li>

                    </ul>

                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>Individual Module:</strong>
                    <p>
                        If you have enrolled for an individual module you will be liable for the full module fee.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>Short Courses:</strong>
                    <p>
                        If a cancellation of a management development course or short course occurs with less than 5 days’ notice, the full course amount will be due. If over 5 days notification is granted to cancel the attendance of a short course the cancellation administration fee of R1,000 will be payable. If no advance payment or a deposit has been made, then the tax invoice issued will be credited and a new tax invoice will be issued with a full administration fee of R1,000 per person.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>J.Tuition Commencement</h5>
                    <p>
                        Once an application for any Regenesys programme has been processed and a tax invoice raised, the individual will be deemed to be an enrolled student and will be required to pay the course fees and any other associated costs (subject to meeting the National Credit Act requirements and the academic requirements).
                    </p>
                    <p>
                        A confirmed and registered place on the course will be secured by the full receipt of the invoiced amount, a government order, or 50% upfront payment and a firm written commitment to pay the balance within an agreed time frame prior to commencement.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>K. IT Requirement:  </h5>
                    <strong>Technical Requirements</strong>
                    <p>
                        Our courses are built on Moodle, which is accessed through a web browser on your PC, tablet, notepad or smartphone. You need the following to get the best out of your learning experience on Moodle:
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>Basic Computer Skills</strong>
                    <p>You should know how to:</p>
                    <ul>
                        <li>Use a keyboard and mouse</li>
                        <li>Manage files and folders: save, name, copy, move, backup, rename, delete, check properties</li>
                        <li>Use software applications like Word, PowerPoint, Excel, e-mail clients</li>
                        <li>Spellcheck</li>
                        <li>Save files in different formats</li>
                        <li>Attach documents to submit assignments</li>
                        <li>Access, download, save and read file attachments</li>
                        <li>Download and install software</li>
                        <li>Connect to the internet</li>
                        <li>Access information using browsers</li>
                        <li>Navigate and search the internet to perform online research using various search engines and library databases</li>
                        <li>Send and receive e-mail</li>
                        <li>Use discussion boards (read, search, post, reply, follow threads)</li>
                        <li>Use chats and messaging software</li>
                    </ul>

                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>Minimum System Requirements:</strong>
                    <p>Computer Hardware</p>
                    <p> PC <strong>desktop</strong> or <strong>laptop</strong> with:</p>

                    <ul>
                        <li>Monitor — 800×600, 65000+ colours (16-bit colour or greater)</li>
                        <li>Keyboard</li>
                        <li>Mouse</li>
                        <li>Sound card</li>
                    </ul>
                    <p>
                        <strong>Audio:</strong> Speakers or headphones with microphone
                    </p>
                    <p><strong>Video:</strong> Webcam</p>
                    <p><strong>A printer </strong>is recommended</p>


                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>Operating Systems</strong>
                    <p>Windows PC Requirements:</p>

                    <ul>
                        <li>Windows XP Service Pack 3</li>
                        <li>Windows Vista Service Pack 2</li>
                        <li>Windows 7 (or higher) with current updates</li>

                    </ul>

                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>Macintosh Requirements:</strong>

                    <ul>
                        <li>OS/X (10.7 or higher)</li>

                    </ul>
                    <p>Don’t know your operating system version? Here’s how to find it: <a href="http://windows.microsoft.com/en-us/windows/which-operating-system" target="_blank" rel="noopener"><strong>Windows</strong></a> | <a href="https://support.apple.com/en-in/HT201260" target="_blank" rel="noopener"><strong>Mac</strong></a></p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>System Resources</strong>
                    <p>For Windows PCs</p>

                    <ul>
                        <li><strong>Processor</strong>: Minimum 2GHz Pentium 4 or faster (dual-core processor recommended)</li>
                        <li><strong>Memory</strong>: 2+ Gigabytes RAM memory</li>
                        <li><strong>Hard drive</strong>: 120 gigabytes</li>

                    </ul>

                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>For Macintosh PCs</strong>

                    <ul>
                        <li><strong>Processor</strong>: PowerPC G4 or Intel</li>
                        <li><strong>Memory</strong>: 2+ Gigabytes RAM memory</li>
                        <li><strong>Hard drive</strong>: 120 gigabytes</li>

                    </ul>


                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>Browsers</strong>
                    <p>For Windows PCs</p>

                    <ul>
                        <li>Mozilla Firefox 25 or higher</li>
                        <li>Google Chrome 30.0 or higher</li>
                        <li><strong>Hard drive</strong>: 120 gigabytes</li>

                    </ul>

                </div>

                <div className={styles.termsConditionGrid}>
                    <strong>For Macintosh PCs</strong>

                    <ul>
                        <li>Safari 6.0 or higher</li>
                        <li>Mozilla Firefox 25 or higher</li>
                        <li>Google Chrome 30 or higher</li>

                    </ul>

                    <p>
                        Do not use Internet Explorer to access the portal. It is no longer supported and is unable to display your course material.
                    </p>
                    <p>Don’t know your browser version? <strong> <a href="https://www.whatismybrowser.com/" target="_blank" rel="noopener">Find out here.</a></strong></p>

                    <p>To download versions of these browsers, visit their websites:</p>
                    <p><strong><a href="https://www.mozilla.org/en-US/firefox/new/?from=getfirefox" target="_blank" rel="noopener">Firefox</a> | <a href="http://www.google.com/chrome/" target="_blank" rel="noopener">Chrome</a> | <a href="http://www.apple.com/safari/" target="_blank" rel="noopener">Safari</a></strong></p>
                    <strong>Internet Browser Settings</strong>
                    <p>Please refer to your browser’s Help features to check these settings.</p>
                    <p>Pop-up windows must be allowed for the site. If a pop-up blocker is active, you may not be able to see some kinds of information.</p>
                    <ul>
                        <li>Session cookies must be enabled.</li>
                        <li>JavaScript must be enabled. You will find instructions for this <a href="https://www.enable-javascript.com/" target="_blank" rel="noopener"><strong>here</strong></a>.</li>
                    </ul>
                    <strong>Screen Resolution</strong>
                    <ul>
                        <li><strong>Minimum computer screen resolution</strong>: 1024 pixels wide by 768 pixels high</li>

                    </ul>
                    <strong>To check And Adjust Screen Resolution:</strong>
                    <ul>
                        <li><strong>Windows</strong>: Go to Start > Control Panel > Display > Settings > Screen Resolution.</li>
                        <li><strong>Mac OS</strong>: Go to the Monitors Control Panel</li>
                    </ul>
                    <strong>Additional Software and Plug-in Requirements</strong>
                    <p>It is advisable to have the following software installed on your machine:</p>
                    <ul>
                        <li><a href="http://www.microsoft.com/en-us/download/details.aspx?id=4" target="_blank" rel="noopener"><strong>Microsoft Office</strong></a> 2007 or higher for Windows or Microsoft Office 2011 (Mac).</li>
                        <li><a href="https://get.adobe.com/flashplayer/otherversions/" target="_blank" rel="noopener"><strong>Macromedia Flash Player</strong></a> (for .flv and .swf files)</li>
                        <li><a href="https://get.adobe.com/reader/otherversions/" target="_blank" rel="noopener"><strong>Adobe Reader</strong></a> (for .pdf files)</li>
                        <li>Media player for audio files(MP3)</li><li><a href="https://www.microsoft.com/en-us/download/search.aspx?q=powerpoint%20viewer" target="_blank" rel="noopener"><strong>Microsoft PowerPoint Viewer</strong><strong> </strong></a>(for .pps and .ppt files) must be installed unless the entire Office Suite is already installed.</li><li>Suitable anti‐virus software such as Norton, McAfee or <a href="http://www.avg.com/in-en/homepage" target="_blank" rel="noopener"><strong>AVG</strong></a>.</li>
                    </ul>
                    <p>If Joining Online Sessions</p>
                    <strong>Bandwidth</strong>
                    <p>
                        You need at least 0.5 Mbits/sec (500 Kbits/sec) upstream bandwidth to transmit data to the Regenesys server, and at least 1Mbits/sec download bandwidth to receive the videoconference stream. If you are not broadcasting a webcam, you will use less than 0.5Mbits/sec.
                    </p>
                    <p>Check your bandwidth on <a href="http://speedtest.net/" target="_blank" rel="noopener"><strong >speedtest.net</strong></a>. The results will give your actual bandwidth rather than the figure your internet service provider says it gives you in general, without accounting for throttling, or background activity on your computer such as background downloads, file sharing clients, and so on.</p>
                    <p>
                        A wired connection is better than a wireless one. If your audio as broken or choppy, move closer to your wireless base station, try a different wireless network, or (best) connect directly to a wired connection.
                    </p>
                    <strong>Browser</strong>
                    <p>
                        Use Chrome, Firefox, or the newest version of Edge (based on Chromium). You don’t need to install any plugin or download any additional binary to share your screen.
                    </p>
                    <strong>Hardware</strong>
                    <p>Use a headset so that your microphone does not pick up an echo from audio emanating from other devices.</p>
                    <strong>Mobile connectivity</strong>
                    <p>
                        At the time of writing, you can view the presenter’s screen on mobile devices, but not share your mobile screen.
                    </p>
                    <strong>Internet Access And Security</strong>
                    <p>Internet access is required to perform various online activities like downloading and uploading files; watching and listening to recorded presentations; participating in live video conferences and other activities, and for using various web-based tools. You will need access via one of the following:</p>

                    <ul>
                        <li>High-speed broadband internet connection with a minimum speed of 2Mbps (LAN, fibre optics cable, T1/T2 or ADSL) is highly recommended.</li>
                        <li>Satellite and or cellular (3G/4G) access may also be used. Using <a href="https://portal.regenesys.net/mod/page/view.php?id=6913">free wifi</a> in public areas, dial-up, or your smartphone 2G/3G/LTE connection may provide less than optimal connection speeds, resulting in slow navigation in Moodle webpages and disrupted collaborative sessions. Wifi will typically provide a better experience than 2G/3G/LTE.</li>
                        <li>Dial-up access will be significantly slower and may make it impossible to view videos. We do not recommend it for using Moodle.</li>
                    </ul>
                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>L.Refund Of Prepaid Money</h5>

                    <p>
                        Refund of any deposits and/or advance payments are subject to Regenesys’ cancellation terms as set out above. Regenesys will only refund monies to the original source/issuer and reserves the right to refund monies in the same method in which they were received. Regenesys reserves the right to postpone or cancel a scheduled course. Registered applicants will be provided with an alternative course date or offered a refund of course fees.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>M.Value Proposition*</h5>

                    <p>
                        Student fees include the value of digital or contact facilitation and assessments. Additional services over and above the course costs are charged per event, as per the current Academic Regulations;
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>N.Fees And Increases</h5>
                    <strong>Annual Increases:</strong>
                    <p>
                        Regenesys reserves the right to increase contracted fees on an annual basis, as well as to change scheduled class and exam dates.
                    </p>
                    <strong>
                        Extended Tuition Fees:
                    </strong>

                    <p>
                        Should a student not complete the course within the timeframe stipulated as per the programme schedule, Regenesys reserves the right to adjust the outstanding module fees to those of the current retail price and to levy an extension fee, which shall be reviewed from time-to-time.
                    </p>

                    <strong>
                        Discounts:
                    </strong>
                    <p>
                        Early Bird Discount: save by being exempted from the annual fee increase.
                    </p>
                    <p>
                        Upfront Discount: save up to 10% by paying the annual upfront fee.
                    </p>
                    <p>
                        Alumni Discount: students who complete a full qualification get 10% off the cost of their next qualification.
                    </p>
                    <strong>
                        Early Bird Fees:
                    </strong>

                    <ul>
                        <li>Early Bird fees are to secure the current year’s fees for the following year’s study.</li>
                        <li>They are not an additional fee but form part of the following year’s course fees.</li>
                        <li>They only apply to students starting their course during the first semester.</li>
                        <li>The Early Bird fee is refundable.</li>
                    </ul>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>O.PoPI Act No. 4</h5>

                    <p>
                        Regenesys complies with the South African Protection of Personal Information (PoPI) Act No. 4 of 2013 and will therefore not forward any client information to a third party without the client’s consent. I however authorise and consent that Regenesys may share my details with its subsidiary companies.
                        Regenesys reserves the right to share all student-related information with sponsor/employer paying for the tuition. This includes but is not limited to marks, attendance and assignment submission.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>P.Warranty</h5>

                    <p>
                        Every applicant or student warrants that information supplied by themselves or on their behalf regarding prior qualification for entry requirement is true, accurate and legally valid. Should this be found not to be the case, the student or applicant will be legally bound to pay
                        as per normal cancellation clauses, and any studies will be for non-degree purposes.
                    </p>

                </div>



                <div className={styles.termsConditionGrid}>
                    <h5>Q.Consent Clauses</h5>

                    <p>
                        Regenesys Management reserves the right to appoint an agent to collect outstanding monies on their behalf and to institute legal proceedings against the applicant for the recovery of any monies outstanding as a result of default in payment, and in such event, the applicant acknowledges that the applicant shall be liable for all legal costs incurred by Regenesys Management in the collection of the outstanding balance on the scale as between attorney or debt collectors and client, including a collection of commission on capital, interest and costs, as well as the tracing and administrative costs incurred by the appointed agent for the recovery of any amounts owing.
                    </p>
                    <p>
                        The applicant/undersigned hereby chooses e-mail, SMS or regular post as the communication method for all accounts and notices for services supplied.
                    </p>
                    <p>
                        The applicant/undersigned consents to Regenesys Management being entitled to obtain credit and related information concerning the applicant/undersigned at any time, and to exchange or lodge and/or disclose such information with any credit bureau without any further notice to the applicant/undersigned.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>R.Liability Disclaimer</h5>

                    <p>
                        Neither Regenesys Management (Pty) Ltd nor any of its directors, subsidiaries, suppliers, employees or agents will be held liable for accidents, illness, losses or damage to private property of whatever nature either in South Africa or abroad, of registered Regenesys students. Students are strongly recommended to seek insurance cover for health and accident, lost luggage and/or personal belongings and trip cancellation.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>S.Firearms And Weapons</h5>

                    <p>
                        Firearms and anything that can be considered as a weapon (that can injure another person) are prohibited on the Regenesys campus.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>T.Consent To Information</h5>

                    <p>
                        Regenesys periodically sends out information to advise all registered students and/or signed-up participants of new developments, Courses and events that might be of interest or relevance to their personal development and career advancement.
                    </p>
                    <p>
                        Any student or participant who wishes to stop receiving any such communication from Regenesys is requested to indicate this by opting out, or by sending an e-mail to this effect, to <a href="mailto:info@regenesys.co.za.">info@regenesys.co.za.</a>
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>U.Regenesys Modes Of Learning</h5>

                    <p>
                        In order to make learning accessible to all registered Regenesys students irrespective of their location, Regenesys is investing in e-learning resources. This involves the recording of live classes and events for live streaming and distribution through downloadable video files on Regenesys websites.
                    </p>
                    <p>
                        In this way, Regenesys students have different options to benefit from lectures whether they are able to attend class or not. Regenesys may also use recorded material for demonstration or promotion of its activities or depicted events to future audiences, students give consent to being filmed for live streaming or recording.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>V.Updates To Terms And Conditions</h5>

                    <p>
                        Regenesys reserves the right to update these terms and conditions from time-to-time. Current terms and conditions are published on Regenesys’ website and may be viewed at www.regenesys.net/terms-and-conditions.
                    </p>

                </div>

                <div className={styles.termsConditionGrid}>
                    <h5>W.Copyright Reserved</h5>

                    <p>
                        Copyright persists in all materials published on any Regenesys media or website. No part of the material on this website may be produced, stored in or introduced into a retrieval system, or transmitted in any form or by any means, whether electronic, mechanical, photocopying, recording, broadcast or otherwise, without the written permission of the publisher and/or Regenesys Management.
                    </p>

                    <p className='mt-4'>
                        *Applicable to academic courses and qualification Courses.
                    </p>
                </div>


            </div>
        </div>
    );
}

export default IndexPage;