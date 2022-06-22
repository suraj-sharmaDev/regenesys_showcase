/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Apr 11 2022
 *  File : index.jsx
 *******************************************/
import React from 'react';
import styles from './Privacy.module.css';
import { GenMetaInformation } from 'components/commons';

const IndexPage = props => {
    return (
        <div className={styles.pageTopSpace}>
            <GenMetaInformation pageName={"privacyPolicy"} />
            <div className='container'>
                <div className={styles.termsConditionGrid}>
                    <h5>We Respect Your Privacy</h5>
                    <p>
                        Privacy Statement for regenesys.net
                    </p>
                    <p>
                        We respect you and we hold your personal information private.
                    </p>
                    <p>
                        Regenesys has created this privacy statement in order to demonstrate our firm commitment to your privacy. The following discloses our information gathering and dissemination practices for this website.
                    </p>

                    <h5 className='mt-4'>
                        Disclosure
                    </h5>
                    <p>
                        We never disclose your personal information to any third party.
                    </p>

                    <h5 className='mt-4'>
                        IP address Identification
                    </h5>
                    <p>
                        We use your IP address to help diagnose problems with our server, and to administer our web site. Your IP address may be used to help identify you and your behavior on this website and to gather broad technical and/or demographic information.
                    </p>

                    <h5 className='mt-4'>
                        Cookies
                    </h5>
                    <p>
                        Our site uses cookies to keep track of your navigational and other preferences, occasionally to deliver content specific to your expressed interests and possibly to save your password so you don’t have to re-enter it each time you visit our site.
                    </p>

                    <h5 className='mt-4'>
                        Registration Information
                    </h5>
                    <p>
                        Our site’s registration, comment and order forms require users to give us contact information (like your name and email address) and rarely unique identifiers (like your identity number). We use customer contact information from the registration forms and depending on visitor preferences to send the user information about our company and promotional material from our company but not from third parties or marketing partners. The customer’s contact information is also used to contact the visitor when necessary. Users may opt-out of receiving future mailings; see the choice/opt-out section below. Unique identifiers (such as usernames and identity numbers) are collected for use as account numbers in our record system.
                    </p>

                    <h5 className='mt-4'>
                        Public Forums
                    </h5>
                    <p>
                        This site may make blogs, chat rooms, forums, message boards, and/or news groups available to its users. Please remember that any information that is disclosed in these areas becomes public information and you should exercise caution when deciding to disclose your personal information.
                    </p>

                    <h5 className='mt-4'>
                        Security
                    </h5>
                    <p>
                        This site has security measures in place to protect the loss, misuse and alteration of the information under our control.
                    </p>
                    <strong>Choice/Opt-Out</strong>
                    <ul>
                        <li>
                            We do not provide your personal information, including email address, to any third party.
                        </li>
                        <li>
                            You will only receive communications from Regenesys.
                        </li>
                    </ul>
                    <p>
                        This site gives users the following options for removing their information from our database to not receive future communications or to no longer receive our service.
                    </p>
                    <p>You can send email to&nbsp;<a href="mailto:info@regenesys.co.za">info@regenesys.co.za</a>&nbsp;and subscription management links are included in any mass mailings we perform.</p>
                    <p>
                        Comments, Suggestions, Criticisms and Contacting the Web Site Owner
                    </p>
                    <p>Your opinion is very important to us, If you spot something that is amiss or if you have any questions about this privacy statement, the practices of this site, or your dealings with this web site, you can contact us through via&nbsp;<a href="mailto:info@regenesys.co.za">info@regenesys.co.za</a></p>
                    <h5 className='mt-4'>
                        Complete Privacy Guide
                    </h5>
                    <p>
                        This site has security measures in place to protect the loss, misuse and alteration of the information under our control.
                    </p>
                    <p><a href="https://digitalregenesys.com/wp-content/uploads/2021/06/POPI_Manual.pdf">Click here</a> to download our complete privacy policy .</p>

                </div>


            </div>
        </div>
    );
}

export default IndexPage;