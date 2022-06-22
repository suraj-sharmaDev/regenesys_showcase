/******************************************
 *  Author : Suraj Sharma
 *  Created On : Fri Jun 03 2022
 *  File : index.js
 *******************************************/

import {useState, Fragment, useEffect} from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { PopupModal, Loader } from "components/commons";
import CustomDropDown from "../dropdown";
import {
  EMAIL_REGEX,
  PHONE_NUMBER_REGEX,
} from "config/constants/InputValidationConstants";
import { formService } from "services/api";
import { downloadStorageFile } from "services/firebase";
import { downloadFromBlob } from "utils";
import {allAvailableCourseNames} from 'components/programs/courseData/_availablePages'
import {dateTimeUtil} from 'utils';

const courseNames = Object.values(allAvailableCourseNames);
const highestQualificationData = [
  "Post Graduate (Masters)",
  "Pursuing Post Graduation",
  "Graduate",
  "Pursuing Graduation"
];

export const validateFormData = (type, data) => {
  if (type === "name") {
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
};

export const DownloadBrochurePopup = ({
  show,
  setShow,
  brochureUrl,
  pageName,
  ...props
}) => {
  const router = useRouter();
  const { utm_source, utm_medium, utm_campaign, utm_content } = router.query;

  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleClose = () => {
    setShow(false);
    setState({
      name: "",
      email: "",
      phone: "",
    });
    setError({
      name: false,
      email: false,
      phone: false,
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

  const handleFormSubit = async () => {
    const newError = { ...error };
    let brochureBlobFile = null;

    Object.keys(newError).map((d) => {
      newError[d] = validateFormData(d, state[d]);
    });

    if (newError.email || newError.name || newError.phone) {
      setError(newError);
      return;
    }

    setLoading(true);
    if (brochureUrl) {
      brochureBlobFile = await downloadStorageFile(brochureUrl);
    }
    // handling form submission
    try {
      handleClose();
      let apiResult = null;
      const params = {
        fullName: state.name,
        email: state.email,
        phone: state.phone,
        program: pageName,
        course: pageName,
      };
      if (utm_source) params.utm_source = utm_source;
      if (utm_medium) params.utm_medium = utm_medium;
      if (utm_campaign) params.utm_campaign = utm_campaign;
      if (utm_content) params.utm_content = utm_content;
      const {error, dateValue, timeValue} = dateTimeUtil(new Date());
      if (!error) params.created_at = dateValue;
      if (typeof window !== "undefined" && window?.location?.href) params.page_url = window.location.href;

      apiResult = await formService.downloadBrochure(params);

      if (apiResult?.httpStatusCode == 200) {
        setLoading(false);
        if (
          downloadFromBlob(
            brochureBlobFile,
            props?.data?.programBanner?.brochureUrl
          ) == false
        ) {
          // show error
          console.log("couldnt download");
        }
      } else {
        setLoading(false);
        alert("Could not post your request");
      }
    } catch (error) {
      setLoading(false);
      if (
        downloadFromBlob(
          brochureBlobFile,
          props?.data?.programBanner?.brochureUrl
        ) == false
      ) {
        // show error
        console.log(error);
        console.log("couldnt download");
      }
      alert("Could not post your request");
    }
  };

  return (
    <Fragment>
      <Loader isLoading={isLoading} />
      <PopupModal
        title={"Download Brochure"}
        show={show}
        handleClose={handleClose}
        handleFormSubit={handleFormSubit}
      >
        <Form autoComplete="off">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Full name"
              onChange={(e) => handleInput(e, "name")}
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
              placeholder="Email"
              onChange={(e) => handleInput(e, "email")}
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
              placeholder="Phone"
              onChange={(e) => handleInput(e, "phone")}
            />
            {error.phone && (
              <span className="formErrorText">
                Please enter valid phone number
              </span>
            )}
          </Form.Group>
        </Form>
      </PopupModal>
    </Fragment>
  );
};

export const RequestCallBackPopup = ({ show, setShow, pageName, ...props }) => {
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
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    city: false,
    course: false,
    highestQualification: false,
    interestedTopic: false,
  });

  useEffect(()=>{
      if (pageName !== null && typeof pageName !== "undefined") {
          setState({...state, course : pageName});
      }
  }, [pageName]);

  const handleClose = () => {
    setShow(false);
    setState({
      name: "",
      email: "",
      phone: "",
      city: "",
      course: "",
      highestQualification: "",
    });
    setError({
      name: false,
      email: false,
      phone: false,
      city: false,
      course: false,
      highestQualification: false,
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

  const handleFormSubit = async () => {
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
      };
      if (utm_source) params.utm_source = utm_source;
      if (utm_medium) params.utm_medium = utm_medium;
      if (utm_campaign) params.utm_campaign = utm_campaign;
      if (utm_content) params.utm_content = utm_content;
      const {error, dateValue, timeValue} = dateTimeUtil(new Date());
      if (!error) params.created_at = dateValue;
      if (typeof window !== "undefined" && window?.location?.href) params.page_url = window.location.href;

      const result = await formService.requestCall(params);
      if (result?.httpStatusCode == 200) {
        setLoading(false);
      } else {
        setLoading(false);
        alert("Could not post your request");
      }
    } catch (error) {
      setLoading(false);
      alert("Could not post your request");
    }
  };

  return (
    <Fragment>
      <Loader isLoading={isLoading} />
      <PopupModal
        title={"Request a call"}
        show={show}
        handleClose={handleClose}
        handleFormSubit={handleFormSubit}
      >
        <Form autoComplete="off">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Full name*"
              onChange={(e) => handleInput(e, "name")}
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
              label={"Course you are looking for *"}
              onChange={(e) => handleInput(e, "course")}
              isError={error.course}
            />
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Interested Topic"
              onChange={(e) => handleInput(e, "interestedTopic")}
            />
          </Form.Group>
          <CustomDropDown
              data={highestQualificationData}
              label={"Highest Qualification*"}
              onChange={(e) => handleInput(e, "highestQualification")}
              isError={error.highestQualification}
            />
        </Form>
      </PopupModal>
    </Fragment>
  );
};
