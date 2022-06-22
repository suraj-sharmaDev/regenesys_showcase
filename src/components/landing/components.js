/******************************************
 *  Author : Suraj Sharma
 *  Created On : Thu Jun 09 2022
 *  File : components.js
 *******************************************/
import { useState, useEffect, Fragment } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import CustomDropDown from "../commons/dropdown";
import { Loader } from "components/commons";
import {
  EMAIL_REGEX,
  PHONE_NUMBER_REGEX,
} from "config/constants/InputValidationConstants";
import { formService } from "services/api";
import { allAvailableCourseNames } from "components/programs/courseData/_availablePages";
import styles from "./Components.module.css";
import { dateTimeUtil } from "utils";
import CustomDatePicker from "components/commons/datePicker";

const courseNames = Object.values(allAvailableCourseNames);

const highestQualificationData = [
  "Post Graduate (Masters)",
  "Pursuing Post Graduation",
  "Graduate",
  "Pursuing Graduation",
];

const workExperienceData = [
  "0 Years",
  "Less than 1 year",
  "1-2 Years",
  "2-3 Years",
  "3-5 Years",
  "5-8 Years",
  "More than 8 Years",
];

const facebkPxlCdData = {
  in: "IND",
  sa: "SA",
  digitalMarketing: "DM",
  projectManagement: "PM",
  dataScience: "DS",
  dataScience2: "DS",
};

const fieldOfStudyData = [
  "IT Engineering",
  "Electronics and telecommunications engineering",
  "Mechanical Engineering",
  "Computer Science",
  "Other",
];

const financialDecisionMakerData = ["Parents", "Guardian", "Myself", "Other"];

const preferredTimeToCallData = [
  "10 AM - 12 PM",
  "1 PM - 3 PM",
  "4 PM - 6 PM",
  "7 PM - 9 PM",
];

const zapierHookUrls = {
  in: {
    dataScience2: "https://hooks.zapier.com/hooks/catch/2583450/bak8fqa/silent/", 
    dataScience: "https://hooks.zapier.com/hooks/catch/2583450/bak8fqa/silent/",
    digitalMarketing: "",
    projectManagement: "",
  },
  sa: {
    dataScience: "https://hooks.zapier.com/hooks/catch/2583450/bak8wve/silent/",
    digitalMarketing:
      "https://hooks.zapier.com/hooks/catch/2583450/bak8gm0/silent/",
    projectManagement:
      "https://hooks.zapier.com/hooks/catch/2583450/bak8qup/silent/",
  },
};

const showExtraFormDataPages = {
  in: ["dataScience2"],
};

const isExtraFormInputVisible = (country, pageNameKey) => {
  if (showExtraFormDataPages?.[country]?.includes(pageNameKey)) return true;
  return false;
};

export const validateFormData = (type, data) => {
  if (
    type === "name" ||
    type === "workExperience" ||
    type === "fieldOfStudy" ||
    type === "financialDecisionMaker" ||
    type === "preferredTimeToCall"
  ) {
    return !(data.length > 3);
  }
  if (type === "email") {
    return !EMAIL_REGEX.test(data);
  }
  if (type === "phone") {
    return !PHONE_NUMBER_REGEX.test(data);
  }
  if (type === "city") {
    return !(data.length > 3);
  }
  if (type === "course") {
    return !(data.length > 3);
  }
  if (type === "interestedTopic") {
    return !(data.length > 3);
  }
  if (type === "highestQualification") {
    return !(data.length > 3);
  }
  if (type === "dateOfBirth") {
    return !(data instanceof Date);
  }
};

export const RequestCallBackForm = ({
  show,
  setShow,
  pageName,
  refProp,
  ...props
}) => {
  const router = useRouter();
  const { utm_source, utm_medium, utm_campaign, utm_content } = router.query;
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    highestQualification: "",
    interestedTopic: "",
    workExperience: "",
    fieldOfStudy: "",
    dateOfBirth: "",
    financialDecisionMaker: "",
    preferredTimeToCall: "",
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    city: false,
    course: false,
    highestQualification: false,
    interestedTopic: false,
    workExperience: false,
    fieldOfStudy: false,
    dateOfBirth: false,
    financialDecisionMaker: false,
    preferredTimeToCall: false,
  });

  const [isExtraInputVisible, setExtraInputVisible] = useState(false);

  useEffect(() => {
    if (pageName !== null && typeof pageName !== "undefined") {
      setState({ ...state, course: pageName });
      setExtraInputVisible(
        isExtraFormInputVisible(props.country, props.pageNameKey)
      );
    }
  }, [pageName]);

  const handleClose = () => {
    setShow && setShow(false);
    setState({
      name: "",
      email: "",
      phone: "",
      city: "",
      course: "",
      highestQualification: "",
      interestedTopic: "",
      workExperience: "",
      fieldOfStudy: "",
      dateOfBirth: "",
      financialDecisionMaker: "",
      preferredTimeToCall: "",
    });
    setError({
      name: false,
      email: false,
      phone: false,
      city: false,
      course: false,
      highestQualification: false,
      interestedTopic: false,
      workExperience: false,
      fieldOfStudy: false,
      dateOfBirth: false,
      financialDecisionMaker: false,
      preferredTimeToCall: false,
    });
  };

  const handleInput = (e, type) => {
    const newState = { ...state };
    const newError = { ...error };
    newState[type] = e.target.value;
    newError[type] = validateFormData(type, e.target.value);
    setState(newState);
    setError(newError);
  };

  const handleFormSubit = async (e) => {
    e.preventDefault();
    const newError = { ...error };
    Object.keys(newError).map((d) => {
      newError[d] = validateFormData(d, state[d]);
    });

    if (
      newError.email ||
      newError.name ||
      newError.phone ||
      newError.city ||
      newError.course ||
      newError.highestQualification
    ) {
      setError(newError);
      return;
    }

    if (isExtraInputVisible && (
      newError.fieldOfStudy ||
      newError.dateOfBirth ||
      newError.financialDecisionMaker ||
      newError.preferredTimeToCall
    )) {
      setError(newError);
      return;
    }

    // handling form submission
    try {
      setLoading(true);
      handleClose();
      const params = {
        fullName: state.name,
        email: state.email,
        phone: state.phone,
        highest_qualification: state.highestQualification,
        city: state.city,
        interested_topic: state.interestedTopic,
        program: state.course,
        course: state.course,
        workExperience: state.workExperience,
        zapCatchHookUrl: zapierHookUrls?.[props.country]?.[props.pageNameKey],
      };
      if (utm_source) params.utm_source = utm_source;
      if (utm_medium) params.utm_medium = utm_medium;
      if (utm_campaign) params.utm_campaign = utm_campaign;
      if (utm_content) params.utm_content = utm_content;
      const { error, dateValue, timeValue } = dateTimeUtil(new Date());
      if (!error) params.created_at = dateValue;
      if (typeof window !== "undefined" && window?.location?.href)
        params.page_url = window.location.href;
      
      if (isExtraInputVisible) {
        params.fieldOfStudy = state.fieldOfStudy;
        params.dateOfBirth = state.dateOfBirth;
        params.financialDecisionMaker = state.financialDecisionMaker;
        params.preferredTimeToCall = state.preferredTimeToCall;
      }

      const result = await formService.requestCall(params);
      if (result?.httpStatusCode == 200) {
        // param is for facebook campaign which will be called once user
        // submits form data and user reaches thank you page
        /**
         * NOTE: This logic is wrong since user can directly browse thank you page
         * with custom queries and still fbq will be registered.
         */
        const param = {
          pageName: facebkPxlCdData[props.pageNameKey],
          country: facebkPxlCdData[props.country],
        };
        const fbqParam = `${param.pageName}_Form_Submit_${param.country}`;
        setLoading(false);
        router.push(
          `/thankYou?fromPage=${props.pageNameKey}&param=${fbqParam}`
        );
      } else {
        setLoading(false);
        alert("Could not post your request");
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      alert("Could not post your request");
    }
  };

  return (
    <Fragment>
      <Loader isLoading={isLoading} />
      <div className="row" ref={refProp}>
        <Form autoComplete="off">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Full name*"
              onChange={(e) => handleInput(e, "name")}
              value={state.name}
            />
            {error.name && (
              <span className="formErrorText">
                Must have more than 3 characters
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Email*"
              onChange={(e) => handleInput(e, "email")}
              value={state.email}
            />
            {error.email && (
              <span className="formErrorText">
                Please provide valid email Address
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Phone*"
              onChange={(e) => handleInput(e, "phone")}
              value={state.phone}
            />
            {error.phone && (
              <span className="formErrorText">
                Please enter valid phone number
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="City*"
              onChange={(e) => handleInput(e, "city")}
              value={state.city}
            />
            {error.city && (
              <span className="formErrorText">
                Must have more than 3 characters
              </span>
            )}
          </Form.Group>
          {(pageName === undefined || pageName === null) && (
            <CustomDropDown
              data={courseNames}
              label={"Course you are looking for*"}
              onChange={(e) => handleInput(e, "course")}
              isError={error.course}
            />
          )}

          <CustomDropDown
            data={highestQualificationData}
            label={"Highest Qualification*"}
            onChange={(e) => handleInput(e, "highestQualification")}
            isError={error.highestQualification}
          />
          {isExtraInputVisible && (
            <CustomDropDown
              data={fieldOfStudyData}
              label={"Field of study*"}
              onChange={(e) => handleInput(e, "fieldOfStudy")}
              isError={error.fieldOfStudy}
            />
          )}
          {isExtraInputVisible && (
            <CustomDatePicker
              data={state.dateOfBirth}
              label={"Date of Birth*"}
              onChange={(e) => handleInput(e, "dateOfBirth")}
              isError={error.dateOfBirth}
            />
          )}
          {isExtraInputVisible && (
            <CustomDropDown
              data={financialDecisionMakerData}
              label={"Financial decision maker*"}
              onChange={(e) => handleInput(e, "financialDecisionMaker")}
              isError={error.financialDecisionMaker}
            />
          )}
          {isExtraInputVisible && (
            <CustomDropDown
              data={preferredTimeToCallData}
              label={"Preferred time to call*"}
              onChange={(e) => handleInput(e, "preferredTimeToCall")}
              isError={error.preferredTimeToCall}
            />
          )}

          <CustomDropDown
            data={workExperienceData}
            label={"Total Work Experience*"}
            onChange={(e) => handleInput(e, "workExperience")}
            isError={error.workExperience}
          />

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <button className={styles.greenButton} onClick={handleFormSubit}>
              Request Callback
            </button>
          </Form.Group>
        </Form>
      </div>
    </Fragment>
  );
};

export const ProgramBanner = ({
  handleShow,
  handlePlayVideo,
  Data,
  isLandingPage = false,
  refProp = null,
  ...props
}) => {
  return (
    <div
      className={`${styles.programBannerContainer}`}
      style={{
        backgroundImage: `url("${Data.programBanner.backgroundImage}")`,
      }}
    >
      <div className={styles.bannerOverlay}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7">
              <h1>{Data.programBanner.title}</h1>
              <span className={styles.bannerDescp}>
                {Data.programBanner.bannerDescp1}
              </span>
              <div className={styles.bannerYellowInfo}>
                <span>
                  Live Sessions&nbsp;&nbsp;|&nbsp;&nbsp; Mentor
                  Support&nbsp;&nbsp;|&nbsp;&nbsp; Career Counselling
                </span>
              </div>
              <span className={styles.bannerDescp}>
                {Data.programBanner.bannerDescp2}
              </span>

              {!props.pageName.includes("Data Science") && (
                <div className="my-3">
                  <span className={styles.bannerInfoText}>
                    {Data.programBanner.admissionInfo}
                  </span>
                </div>
              )}

              {!isLandingPage && (
                <div className={styles.bannerBtnGrp}>
                  <button
                    className={styles.transparentButton}
                    onClick={() => handleShow()}
                  >
                    Download Brochure
                  </button>
                  <button
                    className={styles.transparentButton}
                    onClick={() => handleShow(true)}
                  >
                    Talk To A Consultant
                  </button>
                </div>
              )}
            </div>
            {Data?.programBanner?.youtubeUrl && !isLandingPage && (
              <div className={`col mt-5 ${styles.videoContainer}`}>
                <div
                  className={`${styles.bannerVideoDiv}`}
                  onClick={handlePlayVideo}
                >
                  <a class={styles.videoPlayButton} href="#">
                    <span></span>
                  </a>
                  <span>Watch preview video</span>
                </div>
              </div>
            )}
            {isLandingPage && (
              <div className="col-12 col-md-5 mt-3 mt-md-0 text-center">
                <RequestCallBackForm
                  pageName={props.pageName}
                  pageNameKey={props.pageNameKey}
                  refProp={refProp}
                  country={props.country}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.bannerBottomDiv}`}>
        <div className={styles.bannerPerksDiv}>
          {Data.bannerPerks.map((d, idx) => {
            return (
              <>
                <div className={styles.perkDiv}>
                  <div className={styles.perkIcon}>
                    <img src={d.img} />
                  </div>
                  <span>{d.title}</span>
                </div>
                {idx < Data.bannerPerks.length - 1 && (
                  <div className={styles.verticalLine} />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
