/******************************************
 *  Author : Suraj Sharma
 *  Created On : Sat Jun 18 2022
 *  File : HomePrograms.jsx
 *******************************************/
 import { useRouter } from "next/router";
 import { CustomCarousel } from "../commons/carousel";
 import { Images } from "config";
 import styles from "./Home.module.css";
 import Data from "./data";
 import { useWindowSize } from "utils";
 import { LazyLoadImage } from 'react-lazy-load-image-component';
 
 const HomePrograms = (props) => {
   const size = useWindowSize();
   const count = Data.programs.length;
   const maxSlideToShow = count >= 3 ? 3 : count;
   const slideToShow =
     size.width > 992
       ? maxSlideToShow
       : size.width > 752
         ? maxSlideToShow - 1
         : 1;
   const router = useRouter();
 
   const settings = {
     arrows: false,
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: slideToShow,
     slidesToScroll: 1,
   };
 
   const navigationHandler = (e, url) => {
     e.preventDefault();
     if (url == null || url == undefined) return;
     router.push(url);
   };
 
   return (
     <div className={`${styles.programContainer}`} ref={props.refProp}>
       <div className="container">
         <h2 className={styles.commonHeading}>Facilitator Led Courses</h2>
       </div>
       <div className={`${styles.carouselContainer} container`}>
         {
           <CustomCarousel settings={settings}>
             {Data.programs.map((d, idx1) => {
               return (
                 <div
                   key={d.title}
                   className={`${styles.courseContainer}`}
                   onClick={(e) => navigationHandler(e, d.referToUrl)}
                 >
                   <div className={styles.courseCard}>
                     <LazyLoadImage
                       src={d.bannerImage}
                       className={styles.courseBannerImage}
                     />
                     <div className={styles.courseCardInfo}>
                       <span className={styles.courseTitle}>{d.title}</span>
                       <div style={{ display: "flex", flexDirection: "column" }}>
                         <div className="d-flex align-items-center">
                           <LazyLoadImage
                             src={Images["icon_calendar"]}
                             className={styles.courseInfoIcon}
                           />
                           <span className={styles.courseInfoTitle}>
                             {d.duration}
                           </span>
                         </div>
                         {d.courseInfo.map((e, idx2) => {
                           return (
                             <div
                               key={e.title}
                               className="d-flex align-items-center"
                             >
                               <LazyLoadImage
                                 src={Images[e.img]}
                                 className={styles.courseInfoIcon}
                               />
                               <span className={styles.courseInfoTitle}>
                                 {e.title}
                               </span>
                             </div>
                           );
                         })}
                       </div>
                     </div>
                   </div>
                 </div>
               );
             })}
           </CustomCarousel>
         }
       </div>
     </div>
   );
 };

 export default HomePrograms;