/******************************************
 *  Author : Suraj Sharma
 *  Created On : Fri Apr 01 2022
 *  File : index.jsx
 *******************************************/
import { useState } from "react";
import styles from "./Programs.module.css";
import { Images, Colors } from "config";
import { CustomCarousel } from "../commons/carousel";
import { useWindowSize } from "utils";
import { VideoPopupModal } from "components/commons";
import { RequestCallBackForm } from '../landing/components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ProgramBanner = ({
  handleShow,
  handlePlayVideo,
  Data,
  isLandingPage = false,
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
              <div className="my-3">
                <span className={styles.bannerInfoText}>
                  {Data.programBanner.admissionInfo}
                </span>
              </div>
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
            {Data?.programBanner?.youtubeUrl && (
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
          </div>
          {isLandingPage && (
            <div className="row mt-5">
              <div className="col-12 col-md-5 text-center">
                <RequestCallBackForm
                  pageName={props.pageName}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.bannerBottomDiv}`}>
        <div className={styles.bannerPerksDiv}>
          {Data.bannerPerks.map((d, idx) => {
            return (
              <>
                <div className={styles.perkDiv}>
                  <div className={styles.perkIcon}>
                    <LazyLoadImage src={d.img} />
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

export const ReasonsToJoin = ({ handleShow, Data, ...props }) => {
  return (
    <div className={`${styles.reasonsToJoinP}`}>
      <div className="container">
        <h2 className={styles.commonHeading}>Reasons To Join This Course</h2>
        <div className="row mt-5">
          <div className="col-lg-5 mb-4 text-center d-block d-sm-none">
            <LazyLoadImage
              className={styles.reasonsBanner}
              src="/images/reasons_to_join_banner.png"
              alt="reasons-to-join-banner"
            />
          </div>
          <div className="col-lg-7">
            {Data.reasonsToJoin.map((d, idx) => {
              return (
                <div className={styles.displayList}>
                  <LazyLoadImage
                    className={styles.imageListPatch}
                    src={Images[d.img]}
                    alt={d.img}
                  />
                  <span>{d.title}</span>
                </div>
              );
            })}
          </div>
          <div className="col-lg-5 text-center d-none d-sm-block">
            <LazyLoadImage
              className={styles.reasonsBanner}
              src="/images/reasons_to_join_banner.png"
              alt="reasons-to-join-banner"
            />
          </div>

          <div className="col-md-12">
            <button className={styles.greenButton} onClick={() => handleShow()}>
              {props.btnLabel ? props.btnLabel : "Download Brochure"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WhoCanApply = ({ handleShow, Data, ...props }) => {
  return (
    <div className={`mt-5 ${styles.placementContainer}`}>
      <div className="container">
        {/* <h2 className={`mb-3 ${styles.commonHeading}`}>Who Can Apply For The Course?</h2> */}
      </div>
      <div className="py-3" style={{ backgroundColor: Colors.darkBlue }}>
        <div className="container">
          <div className="row align-items-center py-2">
            <div
              className={`col-md-5 d-block d-md-none ${styles.reasonBanner}`}
            >
              <LazyLoadImage
                src={Images["placement_assistant"]}
                className="img-fluid"
                style={{ cursor: "auto" }}
              />
            </div>

            {/* <div className={`col-lg-5 text-center d-none d-md-block ${styles.reasonBanner}`} >
              <LazyLoadImage
                src={'/images/whocanapply_banner.png'}
                className="img-fluid"
                style={{ cursor: 'auto' }}
              />
            </div> */}
            <div className="col-md-12">
              <div className="row justify-content-center">
                {Data.whoCanApply.map((d, idx) => {
                  return (
                    <div className="col-12 d-flex align-items-center mt-3">
                      <LazyLoadImage
                        src={Images[d.img]}
                        className={`${styles.placementIcon}`}
                        style={{ cursor: "auto" }}
                      />
                      <span>{d.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className={`col-md-5 d-none d-md-block ${styles.reasonBanner}`} >
              <LazyLoadImage
                src={'/images/whocanapply_banner2.png'}
                className="img-fluid"
                style={{ cursor: 'auto' }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DreamJob = ({ handleShow, Data, ...props }) => {
  return <></>;
  return (
    <div className={styles.dreamJob}>
      <div className="container">
        <h2 className="commonHeading">Design your Own Career </h2>
        <p>
          Digital Regenesys is all set to make your career sky-rocket with
          valuable corporate insights and career counselling, which can help you
          bag an excellent job position and a handsome salary package.
        </p>

        <div className="row">
          <div className="col-md-4">
            <div className={styles.placementStats}>
              <h4>Our Placement Stats</h4>
              <strong>Maximum salary hike</strong>
              <span>Upto 150%</span>
            </div>

            <div className={styles.placementStats}>
              <strong>Average salary hike </strong>
              <span> Upto 70%</span>
            </div>

            <div className={styles.placementStats}>
              <strong>Hiring partners</strong>
              <span>130+</span>
            </div>

            <button className={styles.greenButton} onClick={() => handleShow()}>
              Download Brochure
            </button>
          </div>
          <div className="col-md-8 text-center">
            <div className={styles.topCompany}>
              <h4>Our Alumni work in Top Companies</h4>
              <div className="row">
                <div className="col-6 col-md-4 mb-4">
                  <LazyLoadImage src="/images/logo_wipro.png" alt="logo-wipro" />
                </div>
                <div className="col-6 col-md-4 mb-4">
                  <LazyLoadImage
                    src="/images/logo_sanky_solution.png"
                    alt="logo_sanky-solution"
                  />
                </div>
                <div className="col-6 col-md-4 mb-4">
                  <LazyLoadImage src="/images/logo_qtech.png" alt="logo-qtech" />
                </div>

                <div className="col-6 col-md-4 mb-4">
                  <LazyLoadImage
                    src="/images/logo_iags_system.png"
                    alt="logo-iags-system"
                  />
                </div>
                <div className="col-6 col-md-4 mb-4">
                  <LazyLoadImage src="/images/logo_crimson.png" alt="logo-crimson" />
                </div>
                <div className="col-6 col-md-4 mb-4">
                  <LazyLoadImage src="/images/logo_certbar.png" alt="logo-certbar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MeetYourMentors = ({ handleShow, Data, ...props }) => {
  if (Data.mentors && Data.mentors.length === 0) return null;
  const size = useWindowSize();
  const count = Data.mentors.length;
  const maxSlideToShow = count >= 3 ? 3 : count;
  const slideToShow =
    size.width > 992
      ? maxSlideToShow
      : size.width > 752
      ? maxSlideToShow - 1
      : 1;

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    margin: 30,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
  };

  return (
    <div className={` ${styles.programContainer}`}>
      <div className={`${styles.carouselContainer} py-5`}>
        <div className="container">
          <div className="pb-2 mb-3">
            <h2 className={styles.commonHeading}>Meet Your Mentors</h2>
          </div>
          <div className="container text-center">
            {
              <CustomCarousel settings={settings}>
                {Data.mentors.map((d, idx1) => {
                  return (
                    <div className={styles.courseContainer}>
                      <div className={styles.mentorImageDiv}>
                        <LazyLoadImage src={d.img} />
                      </div>
                      <div className={styles.mentorInfoBox}>
                        <h1>{d.title}</h1>
                        <h2>{d.subTitle}</h2>
                        <span>{d.description}</span>
                      </div>
                    </div>
                  );
                })}
              </CustomCarousel>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export const ToolsCovered = ({ handleShow, Data, ...props }) => {
  return (
    <div className={styles.toolsCovered}>
      <div className="container">
        <h2 className="commonHeading">Tools Covered</h2>
        <div className="row text-center">
          {Data.toolsCovered &&
            Data.toolsCovered.map((d, idx) => {
              return (
                <div className="col-6 col-md-3 col-lg-2 mb-4">
                  <LazyLoadImage src={d} alt="tools_covered" className="img-fluid" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export const GetCertified = ({ handleShow, Data, ...props }) => {
  const [showCertificate, setShowCertificate] = useState(false);
  return (
    <div className={styles.getCertified}>
      <div className="container">
        {/* <h2 className="commonHeading">Get Certified</h2> */}
      </div>
      <div className={styles.bgWhite}>
        <div className="container">
          <div>
            <h2 className="commonHeading">Get Certified</h2>
          </div>
          <div className="row">
            <div className="col-md-8">
              {Data.getCertified.content.map((d, idx) => {
                return (
                  <div className={styles.certificateContent}>
                    <strong>{d.title}</strong>
                    <span>{d.data}</span>
                  </div>
                );
              })}
              <button
                className={styles.greenButton}
                onClick={() => handleShow()}
              >
                {props.btnLabel ? props.btnLabel : "Download Brochure"}
              </button>
            </div>
            <div className="col-md-4 d-none">
              <LazyLoadImage
                src={Data.getCertified.img}
                alt="certificate"
                className={`img-fluid ${styles.drCertificate}`}
              />
            </div>
          </div>
        </div>
      </div>
      <VideoPopupModal
        show={showCertificate}
        handleClose={() => {
          setShowCertificate(false);
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <LazyLoadImage
                src={Data.getCertified.img}
                alt="certificate"
                className={`img-fluid ${styles.drCertificate}`}
              />
            </div>
          </div>
        </div>
      </VideoPopupModal>
    </div>
  );
};

export const CourseCurriculam = ({ handleShow, Data, ...props }) => {
  const [selectedQ, setSelectedQ] = useState(null);

  const faqHandler = (index) => {
    if (selectedQ == index) {
      setSelectedQ(null);
      return;
    }
    setSelectedQ(index);
  };
  return (
    <div className={styles.courseCurriculum}>
      <div className={styles.bgGreen}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-4">
              <h2 className="commonHeading">Course Modules</h2>
            </div>
            <div className="col-md-12">
              <div className={styles.questions}>
                <div className={styles.sectionCenter}>
                  {Data.courseCurriculam.map((d, idx) => {
                    const isActive = selectedQ == idx;
                    return (
                      <article className={`${styles.question} bg-light`}>
                        <div className={styles.questionTitle}>
                          <p>{d.title}</p>
                          <button
                            type="button"
                            className={styles.questionBtn}
                            onClick={() => faqHandler(idx)}
                          >
                            <LazyLoadImage
                              src={Images["arrow_up"]}
                              className={`${
                                isActive ? "" : styles.downArrowIconFaq
                              }`}
                            />
                          </button>
                        </div>
                        {isActive && (
                          <div>
                            {/* <p>{d.subtitle}</p> */}
                            {d?.list && d.list.length > 0 && (
                              <ul style={{ margin: 0, padding: "0.375rem"}}>
                                {d.list.map((l, ix) => {
                                  return (
                                    <li>
                                      {typeof l === "string" ? (
                                        l
                                      ) : (
                                        <>
                                          {l.title}
                                          <ul style={{ margin: 3 }}>
                                            {
                                              l.list.map((m, iy) => (
                                                <li>{m}</li>
                                              ))
                                            }
                                          </ul>
                                        </>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const AdmissionProcess = ({ handleShow, Data, ...props }) => {
  return (
    <div className={`mt-5 ${styles.placementContainer}`}>
      <div className="container">
        <h2 className={`mb-3 ${styles.commonHeading}`}>Admission Process</h2>
        <div className="row">
          <div className="col-12">
            <h2 className={styles.admissioninfo}>
              The application process consists of three simple steps. An offer
              of admission will be made to selected candidates based on the
              feedback from the interview panel. The selected candidates will be
              notified over email and phone, and they can block their seats
              through the payment of the admission fee.
            </h2>
          </div>

          <div
            className={` mt-2 ${styles.admissionInfoCard} ${styles.admissionFlex}`}
          >
            {Data.admissionProcess.map((d, idx) => {
              const isLast = idx == Data.admissionProcess.length - 1;
              return (
                <>
                  <div className={styles.admissionCardContainer}>
                    <div className={styles.admissionCard}>
                      <LazyLoadImage src={Images[d.img]} />
                      <h4>{d.title}</h4>
                      <h5>{d.subTitle}</h5>
                    </div>
                  </div>
                  {!isLast && (
                    <div className={styles.arrowViewContainer}>
                      <div className={styles.arrowView}>
                        <LazyLoadImage src={Images["slider_arrow_right"]} />
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CourseFees = ({ handleShow, Data, ...props }) => {
  return (
    <div className={styles.courseFees}>
      <div className="container">
        <h2 className="commonHeading">Course Fees</h2>
      </div>
      <div className={styles.feesGreenGb}>
        <div className="container">
          <div className="row">
            <div className={`col-md-7 ${styles.borderRright}`}>
              <div className={`${styles.courseFeeLeft}`}>
                <p>
                  Admissions are closed once the requisite number of
                  participants enroll for the upcoming cohort. Apply early to
                  secure your seat.
                </p>
              </div>
            </div>
            <div className={`col-md-5 ${styles.borderLeft}`}>
              <div className={styles.courseFeeRight}>
                <div
                  className={styles.courseFeeRight}
                  onClick={() => handleShow(true)}
                >
                  <button className={styles.buttonOrange}>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StudentReviews = ({
  handleShow,
  Data,
  propClassName = "",
  ...props
}) => {
  const size = useWindowSize();
  const slideToShow =
    size.width > 992 ? 3 : size.width > 752 ? 2 : size.width > 454 ? 1 : 1;

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
  };
  return <></>;
  return (
    <div className={styles.studentsReview}>
      <div className={propClassName}>
        <div className="container">
          <h2 className="commonHeading">Student Reviews</h2>
          <div className="container py-3">
            <div className="row text-center">
              <CustomCarousel settings={settings}>
                {Data.studentReviews.map((d, idx) => {
                  return (
                    <div className={styles.reviewContainer}>
                      <div className={styles.reviewBox}>
                        <div className={styles.videoPreview}>
                          <iframe
                            width="100%"
                            height="190"
                            src={d.iframeLink}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>

                        <div className={styles.videoDescription}>
                          <strong>{d.studentName}</strong>
                          <a href={d.linkedInLink} target="_blank">
                            <LazyLoadImage src="/images/linkedId.png" alt="linkedId" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CustomCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Benefits = ({ handleShow, Data, ...props }) => {
  const [activeBtn, setActiveBtn] = useState("placementSupport");
  return (
    <div className={`mt-5 ${styles.placementContainer}`}>
      <div className="container">
        <h2 className={`mb-3 ${styles.commonHeading}`}>Benefits</h2>
        <span className={styles.benefitsPara}>
          With India's largest online higher education company, get 360 degree
          career support, mentorship from industry experts, networking
          opportunities, and more.
        </span>
      </div>
      <div className={styles.benefitContainer}>
        <div className="container">
          <div className="row">
            <button
              className={
                activeBtn === "placementSupport" ? styles.buttonActive : ""
              }
              onClick={() => setActiveBtn("placementSupport")}
            >
              Career Support
            </button>

            <button
              className={
                activeBtn === "doubtResolution" ? styles.buttonActive : ""
              }
              onClick={() => setActiveBtn("doubtResolution")}
            >
              Doubt Resolution
            </button>

            <button
              className={
                activeBtn === "learningSupport" ? styles.buttonActive : ""
              }
              onClick={() => setActiveBtn("learningSupport")}
            >
              Learning Support
            </button>

            <button
              className={activeBtn === "networking" ? styles.buttonActive : ""}
              onClick={() => setActiveBtn("networking")}
            >
              Networking
            </button>
          </div>

          <div class="row mt-4">
            <div class="col-md-4">
              <LazyLoadImage
                class={styles.reasonsBanner}
                src={Data.benefits[activeBtn].img}
                alt="benefits-image"
              />
            </div>
            <div class={`col-md-8 ${styles.tabTextCenter}`}>
              <div class={styles.benefitdList}>
                <ul>
                  {Data.benefits[activeBtn].detailsList.map((d, idx) => {
                    return <li>{d}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQs = ({ handleShow, Data, ...props }) => {
  const [selectedQ, setSelectedQ] = useState(null);

  const faqHandler = (index) => {
    if (selectedQ == index) {
      setSelectedQ(null);
      return;
    }
    setSelectedQ(index);
  };

  return (
    <div class={styles.faq}>
      <div class="container">
        <h2 class="commonHeading">FAQs</h2>

        <div class="row">
          <div class="col-md-12">
            <div className={styles.questions}>
              <div className={styles.sectionCenter}>
                {Data.faqs.map((d, idx) => {
                  const isActive = selectedQ == idx;
                  return (
                    <article className={`${styles.question} bg-light`}>
                      <div className={styles.questionTitle}>
                        <p>{d.title}</p>
                        <button
                          type="button"
                          className={styles.questionBtn}
                          onClick={() => faqHandler(idx)}
                        >
                          <LazyLoadImage
                            src={Images["arrow_up"]}
                            className={`${
                              isActive ? "" : styles.downArrowIconFaq
                            }`}
                          />
                        </button>
                      </div>
                      {isActive && (
                        <div>
                          <p>{d.subtitle}</p>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
