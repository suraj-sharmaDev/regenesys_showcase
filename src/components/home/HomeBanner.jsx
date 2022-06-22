/******************************************
 *  Author : Suraj Sharma
 *  Created On : Sat Jun 18 2022
 *  File : HomeBanner.jsx
 *******************************************/
import styles from "./Home.module.css";

const HomeBanner = (props) => {
  return (
    <div className={`${styles.homeBannerRow} mt-4`}>
      <div className={styles.homeBannerBefore} />
      <div className="container">
        <div className="row">
          {/* <div className={`col-md-5 d-block d-md-none`}>
             <div className={styles.bannerGroup}>
               <LazyLoadImage
                 className={styles.bannerImageHome}
                 src="/images/bg-digital-regenesys.png"
               />
               <div
                 className={styles.playIcon}
                 onClick={() => props.handleShow(true)}
               >
                 <a className={styles.videoPlayButton} href="#">
                   <span></span>
                 </a>
               </div>
             </div>
           </div> */}

          <div className="col-md-12">
            <span>Revolutionise your career with </span>
            <h1>future ready skills </h1>
            {/* <ul>
               <li> 
                 <LazyLoadImage
                   src={'/images/slider_arrow_right.png'}
                   className={`${ProgramStyles.placementIcon}`}
                 />
                 Jobs in 1000+ Top Companies
               </li>
               <li>
                 <LazyLoadImage
                   src={'/images/slider_arrow_right.png'}
                   className={`${ProgramStyles.placementIcon}`}
                 />
                 30% Average Hike
               </li>
               <li>
                 <LazyLoadImage
                   src={'/images/slider_arrow_right.png'}
                   className={`${ProgramStyles.placementIcon}`}
                 />
                 Top 1% Global Universities
               </li>
             </ul> */}
            <div className={styles.bottomHeading}>
              <h6>Upgrade Your Career with Digital Regenesys</h6>
              <p>
                Learn the next-gen digital skills with India’s leading EdTech
                platform introduced by Regenesys Business School, an
                international business school with campuses in Johannesburg,
                Mumbai, and Lagos. Digital Regenesys is here to provide career
                transforming, skill-enhancing, and upgrading online courses in
                many digital fields. The self-paced online courses offered by
                Digital Regenesys are in sync with the demands of almost every
                industry and their digital and technological needs. The
                instructor-led training gives students a advantage in getting
                placed within top MNCs and organisations. Expose yourself to
                content within our certificate courses taught by a highly
                experienced and world-recognised faculty. Come and be a part of
                the digital revolution.
              </p>
            </div>
            <button
              className={styles.greenButton}
              onClick={() => props.scrollTo()}
            >
              Explore Our Courses
            </button>
          </div>

          {/* <div className={`col-md-5 d-none d-md-block`}>
             <div className={styles.bannerGroup}>
               <LazyLoadImage
                 className={styles.bannerImageHome}
                 src="/images/bg-digital-regenesys.png"
               />
               <div
                 className={styles.playIcon}
                 onClick={() => props.handleShow(true)}
               >
                 <a className={styles.videoPlayButton} href="#">
                   <span></span>
                 </a>
               </div>
             </div>
           </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
