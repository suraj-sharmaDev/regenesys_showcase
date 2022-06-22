/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Mar 28 2022
 *  File : index.jsx
 *******************************************/
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./Home.module.css";

import HomeBanner from "components/home/HomeBanner";
import HomePrograms from "components/home/HomePrograms";
import HomePlacementAssistance from "components/home/HomePlacementAssistance";

const HomePlacement = dynamic(() => import("components/home/HomePlacement"));;
const Testimonials = dynamic(() => import("components/home/Testimonials"));;
const WhyChooseRegenesys = dynamic(() => import("components/home/WhyChooseRegenesys"));;

import {
  Loader,
  VideoPopupModal,
  GenMetaInformation,
} from "components/commons";

import { RequestCallBackPopup } from "components/commons/brochurePopup";

const Home = (props) => {
  const [show, setShow] = useState(false);
  const [isVideoContent, setIsVideoContent] = useState(false);
  const programsRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

  const handleClose = (showVideo = false) => {
    setIsVideoContent(showVideo);
    setShow(false);
  };

  const handleShow = (showVideo = false) => {
    setIsVideoContent(showVideo);
    setShow(true);
  };

  const scrollToProgram = () => {
    programsRef?.current && programsRef.current.scrollIntoView();
  };

  return (
    <div className={styles.homeContainer}>
      <Loader isLoading={isLoading} />
      <GenMetaInformation />
      <HomeBanner scrollTo={scrollToProgram} handleShow={handleShow} />
      <HomePrograms refProp={programsRef} />
      <WhyChooseRegenesys />
      {/* <CustomDataScience /> */}
      <HomePlacementAssistance handleShow={handleShow} />

      <Testimonials />
      <HomePlacement />

      <VideoPopupModal show={show && isVideoContent} handleClose={handleClose}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/CsdB4LDToos?rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoPopupModal>
      <RequestCallBackPopup show={show && !isVideoContent} setShow={setShow} />
    </div>
  );
};

export default Home;
