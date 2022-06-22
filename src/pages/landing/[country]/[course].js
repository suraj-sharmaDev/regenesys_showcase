/******************************************
 *  Author : Suraj Sharma
 *  Created On : Wed Jun 08 2022
 *  File : [course].js
 *******************************************/
import React from "react";
import {
  WhoCanApply,
  MeetYourMentors,
  AdmissionProcess,
  ReasonsToJoin,
  DreamJob,
  ToolsCovered,
  GetCertified,
  CourseCurriculam,
  CourseFees,
  StudentReviews,
  Benefits,
  FAQs,
} from "components/programs";
import {
  Loader,
  VideoPopupModal,
  GenMetaInformation,
} from "components/commons";
import {
  RequestCallBackPopup,
  DownloadBrochurePopup,
} from "components/commons/brochurePopup";

import {
  masterCourses as courses,
  masterCoursePageNames as pageName,
  masterCoursePaths as paths,
} from "components/landing/_availablePages";

import { ProgramBanner } from "components/landing/components";

import { HomePlacement, Testimonials } from "components/home";

export async function getStaticPaths() {
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params, res }) => {
  const course = params.course;
  const country = params.country;
  const data = courses[course];
  return {
    props: { data, course, country }, // will be passed to the page component as props
  };
};

const ProgramLandingPage = (props) => {
  const [show, setShow] = React.useState(false);
  const [isDownloadBrochure, setIsDownloadBrochure] = React.useState(true);
  const [isLoading, setLoading] = React.useState(false);
  const [playVideo, setPlayVideo] = React.useState(false);
  const formRef = React.useRef(null);
  const btnLabel = "Apply Now";

  const handleClose = () => {
    setShow(false);
    setIsDownloadBrochure(true);
  };

  const handleShow = (isRequestCall = null) => {
    scrollToForm();
    // if (isRequestCall != null) {
    //   setIsDownloadBrochure(false);
    // }
    // setShow(true);
  };

  const handlePlayVideo = () => setPlayVideo(true);
  const handleStopVideo = () => setPlayVideo(false);

  const scrollToForm = () => {
    formRef?.current && formRef.current.scrollIntoView();
  };

  return (
    <div>
      <GenMetaInformation pageName={props.course} />
      <Loader isLoading={isLoading} />
      <ProgramBanner
        handleShow={handleShow}
        handlePlayVideo={handlePlayVideo}
        Data={props.data}
        isLandingPage={true}
        pageName={pageName[props.course]}
        refProp={formRef}
        pageNameKey={props.course}
        country={props.country}
      />
      <ReasonsToJoin
        handleShow={handleShow}
        Data={props.data}
        btnLabel={btnLabel}
      />
      <WhoCanApply
        handleShow={handleShow}
        Data={props.data}
        btnLabel={btnLabel}
      />
      <DreamJob handleShow={handleShow} Data={props.data} btnLabel={btnLabel} />
      <ToolsCovered
        handleShow={handleShow}
        Data={props.data}
        btnLabel={btnLabel}
      />
      <MeetYourMentors
        handleShow={handleShow}
        Data={props.data}
        btnLabel={btnLabel}
      />
      <GetCertified
        handleShow={handleShow}
        Data={props.data}
        btnLabel={btnLabel}
      />
      <HomePlacement />
      <CourseCurriculam
        handleShow={handleShow}
        Data={props.data}
        btnLabel={btnLabel}
      />
      {/* <AdmissionProcess handleShow={handleShow} Data={props.data} /> */}
      {/* <CourseFees handleShow={handleShow} Data={props.data} /> */}
      {/* <StudentReviews handleShow={handleShow} Data={props.data} /> */}
      <Benefits handleShow={handleShow} Data={props.data} btnLabel={btnLabel} />
      <Testimonials />
      <FAQs handleShow={handleShow} Data={props.data} btnLabel={btnLabel} />
      <RequestCallBackPopup
        show={show && !isDownloadBrochure}
        setShow={handleClose}
        pageName={pageName[props.course]}
      />
      <DownloadBrochurePopup
        show={show && isDownloadBrochure}
        setShow={handleClose}
        pageName={pageName[props.course]}
        brochureUrl={props?.data?.programBanner?.brochureUrl}
      />
      {props?.data?.programBanner?.youtubeUrl && (
        <VideoPopupModal show={playVideo} handleClose={handleStopVideo}>
          <iframe
            width="100%"
            height="450"
            src={props?.data?.programBanner?.youtubeUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoPopupModal>
      )}
    </div>
  );
};

export default ProgramLandingPage;
