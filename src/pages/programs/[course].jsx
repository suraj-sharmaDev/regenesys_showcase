/******************************************
 *  Author : Suraj Sharma
 *  Created On : Wed Apr 06 2022
 *  File : [course].jsx
 *******************************************/
import React from "react";
import {
  ProgramBanner,
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
} from "components/programs/courseData/_availablePages";

export async function getStaticPaths() {
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params, res }) => {
  const course = params.course;
  const data = courses[course];
  return {
    props: { data, course }, // will be passed to the page component as props
  };
};

const ProgramCoursePage = (props) => {
  const [show, setShow] = React.useState(false);
  const [isDownloadBrochure, setIsDownloadBrochure] = React.useState(true);
  const [isLoading, setLoading] = React.useState(false);
  const [playVideo, setPlayVideo] = React.useState(false);

  const handleClose = () => {
    setShow(false);
    setIsDownloadBrochure(true);
  };

  const handleShow = (isRequestCall = null) => {
    if (isRequestCall != null) {
      setIsDownloadBrochure(false);
    }
    setShow(true);
  };

  const handlePlayVideo = () => setPlayVideo(true);
  const handleStopVideo = () => setPlayVideo(false);

  return (
    <div>
      <GenMetaInformation pageName={props.course} />
      <Loader isLoading={isLoading} />
      <ProgramBanner
        handleShow={handleShow}
        handlePlayVideo={handlePlayVideo}
        Data={props.data}
      />
      <ReasonsToJoin handleShow={handleShow} Data={props.data} />
      <WhoCanApply handleShow={handleShow} Data={props.data} />
      <DreamJob handleShow={handleShow} Data={props.data} />
      <ToolsCovered handleShow={handleShow} Data={props.data} />
      <MeetYourMentors handleShow={handleShow} Data={props.data} />
      <GetCertified handleShow={handleShow} Data={props.data} />
      <CourseCurriculam handleShow={handleShow} Data={props.data} />
      {/* <AdmissionProcess handleShow={handleShow} Data={props.data} /> */}
      {/* <CourseFees handleShow={handleShow} Data={props.data} /> */}
      {/* <StudentReviews handleShow={handleShow} Data={props.data} /> */}
      <Benefits handleShow={handleShow} Data={props.data} />
      <FAQs handleShow={handleShow} Data={props.data} />
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

export default ProgramCoursePage;
