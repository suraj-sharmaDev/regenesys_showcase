/******************************************
 *  Author : Suraj Sharma
 *  Created On : Wed Jun 08 2022
 *  File : index.js
 *******************************************/
import React from "react";
import { useRouter } from "next/router";
import { GenMetaInformation } from "components/commons";
import { BannerSection } from "components/thankYou";
import { HomePlacement, Testimonials } from "components/home";
import {
  masterCourses,
  dataScienceCourses,
} from "components/landing/_availablePages";

/**
 * NOTE: Most of ad campaigning and register logic is written inside this page.
 * Using the router query we can understand which page the routing has been done from
 * and respectively call the fb pixel code and gtm event logic
 */

const GTM_SEND_TO_DATA = {
  "DS_Form_Submit_IND": "AW-873313553/onfCCNrB-sUDEJHqtqAD",
  "DS_Form_Submit_SA": "AW-873313553/21tPCLe1wsYDEJHqtqAD"
}

const Index = (props) => {
  const router = useRouter();
  const { query } = router;
  const { fromPage, param } = query;

  const keys1 = Object.keys(masterCourses);
  const keys2 = Object.keys(dataScienceCourses);
  let dataUrl = null;

  if (keys1.includes(fromPage)) {
    dataUrl = masterCourses[fromPage]["programBanner"]["youtubeUrl"];
  } else if (keys2.includes(fromPage)) {
    dataUrl = dataScienceCourses[fromPage]["programBanner"]["youtubeUrl"];
  }

  React.useEffect(()=>{
    if (typeof window === "undefined") return;
    callCampaignEvents();
  }, [param]);

  const callCampaignEvents = () => {
    
    const gtagEventCallBack = () => {
      console.log('this is a callback');
    }

    if (window.fbq && param) {
      window.fbq("track", param);
    }
    if (window.gtag && GTM_SEND_TO_DATA[param]) {
      window.gtag("event", "conversion", {
        send_to: GTM_SEND_TO_DATA[param],
        event_callback: gtagEventCallBack,
      });
    }
  };

  return (
    <>
      <GenMetaInformation pageName={"thankYou"} />
      <BannerSection videoUrl={dataUrl} />
      <HomePlacement />
      <Testimonials />
    </>
  );
};

export default Index;
