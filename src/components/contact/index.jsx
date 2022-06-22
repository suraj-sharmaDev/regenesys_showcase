/******************************************
 *  Author : Suraj Sharma
 *  Created On : Fri Apr 08 2022
 *  File : index.jsx
 *******************************************/
import { useState } from 'react';
import Link from 'next/link'
import { Images } from "config";
import styles from "./Contact.module.css";
import { Colors } from "config";
import { EMAIL_REGEX } from 'config/constants/InputValidationConstants';

export const Banner = (props) => {
  const buttonIcons = [];

  const btnHandler = (url) => { };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.floatingContainer}>
        <div className={`container ${styles.bannerbuttonContainer}`}>
          {buttonIcons.map((d, idx) => {
            return (
              <button
                onClick={() => btnHandler(d.url)}
                style={{ marginLeft: idx == 0 ? 0 : 30 }}
              >
                <img src={Images[d.img]} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ContactDetails = ({ scrollTo, ...props }) => {
  return (
    <div className={`py-5 ${styles.contactContainer}`}>
      <div className="container">
        <h2 className={"commonHeading"}>Contact Us</h2>
        <div className="row mx-0 mt-3 g-3 justify-content-between">
          <div className={`col-lg-4 col-md-6`} onClick={scrollTo}>
            <div className={styles.contactBox}>
              <div className="mb-1 row col-md-12" >
                <div className="col-md-2 p-0"><img src="/images/icon_location.png" /></div>
                <div className="col-md-10 p-0 pt-2">
                  <strong>Location</strong>
                  <p>1101 Proxima Building,</p>
                  <p>Plot 19, Sector 30A,</p>
                  <p>Vashi Navi Mumbai, India, 40075</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6`} href="tel:18002129950">
            <div className={styles.contactBox}>
            <div className="mb-1 row col-md-12" >
                <div className="col-md-2 p-0"><img src="/images/icon_call.png" /></div>
                <div className="col-md-10 p-0 pt-2">
                  <strong>Make a Call</strong>
                  <p>India:<a href="tel:1 800 212 9950" >&nbsp;+91&nbsp;1&nbsp;800&nbsp;212&nbsp;9950</a></p>
                  <p>S.Africa:<a href="tel:116695000" >&nbsp;+27&nbsp;11&nbsp;669&nbsp;212&nbsp;5000</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6`}>
            <div className={styles.contactBox}>
              <div className="mb-1 row col-md-12" >
                  <div className="col-md-2 p-0"><img src="/images/icon_call.png" /></div>
                  <div className="col-md-10 p-0 pt-2">
                    <strong>Send a Mail</strong>
                    <p><a href="mailto:info.digital@regenesys.net">info.digital@regenesys.net</a></p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactForm = (props) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    program_of_interest: "",
    message: "",
    termscondition:""
  });

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    country: false,
    program_of_interest: false,
    message: false,
    termscondition:false
  });


  const validateFormData = (type, data) => {
    const NUMBER_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(type === 'firstName' || type === 'lastName') {
      return !(data.length > 3);
    }
    if (type === 'email') {
      return !(EMAIL_REGEX.test(data));
    }
    if(type === 'phone') {
      return !(NUMBER_REGEX.test(data));
    }
    if(type === 'country') {
      return !(data.length > 3);
    }
    if(type === 'program_of_interest') {
      return !(data.length > 3);
    }
    if(type === 'message') {
      return !(data.length > 3);
    }
    if(type === "termscondition"){
      return !data
    }
  }

  const handleInput = (e, type) => {
    const newState = {...state};
    const newError = {...error};
    newState[type] = e.target.value;
    const value =  type ===  "termscondition"? e.target.checked :e.target.value;
    newError[type] = validateFormData(type, value);
    setState(newState);
    setError(newError);
    return;
  }

  const handleFormSubit = async() => {
    const newError = {...error};
    Object.keys(newError).map((d) => {
      newError[d] = validateFormData(d, state[d]);
    });

    if (newError.firstName || newError.lastName || 
      newError.phone || newError.email || newError.country || newError.program_of_interest
      || newError.message || newError.termscondition
      ) {
      setError(newError);
      return;
    }    
    console.log("Submitting the contact form")
    const {termscondition , ...rest} = state
    props.handleSubmit && props.handleSubmit(rest);
  }

  return (
    <div className={`${styles.contactFormContainer}`}>
      <div className={`d-flex justify-content-center`}>
        <div className={` ${styles.contactForm}`}>
          <div className="row g-3 mb-3 justify-content-between">
            <div className="col-md-5">
              <input
                type="text"
                class="form-control"
                placeholder="First Name*"
                onChange={(e) => handleInput(e, 'firstName')}
              />
              {error.firstName && (
              <span className={styles.formErrorText}>
                Must have more than 3 characters
              </span>
            )}
            </div>
            <div className="col-md-5">
              <input
                type="text"
                class="form-control"
                placeholder="Last Name*"
                onChange={(e) => handleInput(e, 'lastName')}
              />
              {error.lastName && (
              <span className={styles.formErrorText}>
                Must have more than 3 characters
              </span>
            )}
            </div>
          </div>
          <div className="row g-3 mb-3 justify-content-between">
            <div className="col-md-5">
              <input 
                type="email" 
                class="form-control" 
                placeholder="Email*" 
                onChange={(e) => handleInput(e, 'email')}
              />
              {error.email && (
              <span className={styles.formErrorText}>
                Please provide valid email Address
              </span>
            )}
            </div>
            <div className="col-md-5">
              <input 
                type="tel" 
                class="form-control" 
                placeholder="Phone*"
                onChange={(e) => handleInput(e, 'phone')}
              />
              {error.phone && (
              <span className={styles.formErrorText}>
                Please enter valid phone number
              </span>
            )}
            </div>
          </div>
          <div className="row g-3 mb-3 justify-content-between">
            <div className="col-md-5">
              <input 
                type="text" 
                class="form-control" 
                placeholder="Country*" 
                onChange={(e) => handleInput(e, 'country')}
              />
              {error.country && (
              <span className={styles.formErrorText}>
                Must have more than 3 characters
              </span>
            )}
            </div>
            <div className="col-md-5">
              <input
                type="text"
                class="form-control"
                placeholder="Programme of interest*"
                onChange={(e) => handleInput(e, 'program_of_interest')}
              />
              {error.program_of_interest && (
              <span className={styles.formErrorText}>
                Must have more than 3 characters
              </span>
            )}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Message*"
                onChange={(e) => handleInput(e, 'message')}
              ></textarea>
              {error.message && (
              <span className={styles.formErrorText}>
                Must have more than 3 characters
              </span>
            )}
            </div>
          </div>
          <div className={`form-check ${styles.submitContainer}`}>
            <input
              type="checkbox"
              class="form-check-input"
              id="termsConditionsId"
              onChange={e => handleInput(e, "termscondition") }
            />
            <label class="form-check-label" for="termsConditionsId">
              By clicking submit, you agree to the{" "}
              <Link href="/termsCondition" passHref><a target="_blank" rel="noopener noreferrer">Terms & Conditions</a></Link> and
              <Link href="/privacyPolicy" passHref><a target="_blank" rel="noopener noreferrer"> Privacy Policy</a></Link>
            </label><br />
            {error.termscondition && (
              <span className={styles.formErrorText}>
                Please accept the Terms and Conditions.
              </span>
            )}
          </div>
          <button className={styles.greenButton} onClick={handleFormSubit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export const LocationMap = (props) => {
  return (
    <div ref={props.propRef}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.959914280887!2d72.99419831490108!3d19.065499987093908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceebee65afe5%3A0x2314e609c30716c1!2sRegenesys%20Business%20School%20-%20India%20Office!5e0!3m2!1sen!2snp!4v1649402231132!5m2!1sen!2snp"
        width="100%"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};
