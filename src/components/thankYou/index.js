/******************************************
 *  Author : Suraj Sharma
 *  Created On : Wed Jun 08 2022
 *  File : index.js
 *******************************************/
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import confetti from "canvas-confetti";
import {
  VideoPopupModal,
} from "components/commons";
import styles from "./ThankYou.module.css";

export const BannerSection = (props) => {
  const [playVideo, setPlayVideo] = React.useState(false);

  const handlePlayVideo = () => setPlayVideo(true);
  const handleStopVideo = () => setPlayVideo(false);

  React.useEffect(() => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
    });
  }, []);
  return (
    <div className="container">
      <div className={styles.container}>
        <h1>Thank You for your Interest!</h1>
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ fontSize: 130, marginLeft: 4, color: "#1fa393" }}
        />
        <h3>Our Consultant will get in touch with you soon</h3>
        <div className={`mt-5 ${styles.bannerVideoDiv}`} onClick={handlePlayVideo}>
          <a class={styles.videoPlayButton} href="#">
            <span></span>
          </a>
          <span>Watch preview video</span>
        </div>
      </div>

      {props?.videoUrl && (
        <VideoPopupModal show={playVideo} handleClose={handleStopVideo}>
          <iframe
            width="100%"
            height="450"
            src={props?.videoUrl}
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
