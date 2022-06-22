/******************************************
 *  Author : Suraj Sharma
 *  Created On : Sat Jun 18 2022
 *  File : HomePlacement.jsx
 *******************************************/
import styles from "./Home.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomePlacement = (props) => {
  return (
    <div className={`mt-5 pb-4 ${styles.placementRow}`}>
      <div className="container">
        <h2 className={styles.commonHeading}>
          Our Graduates Have Been Placed At
        </h2>
        <div className="row">
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage src="/images/logo_wipro.png" alt="logo_wipro" />
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage
              src="/images/logo_tridhya_tech.png"
              alt="logo_tridhya_tech"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage src="/images/logo_ss.png" alt="logo-ss" />
          </div>
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage
              src="/images/logo_sanky_solution.png"
              alt="logo_sanky_solution"
            />
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage
              src="/images/logo_route_mobile.png"
              alt="logo_route_mobile"
            />
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage src="/images/logo_qtech.png" alt="logo_qtech" />
          </div>
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage
              src="/images/logo_iags_system.png"
              alt="logo_iags_system"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage src="/images/logo_crimson.png" alt="logo_crimson" />
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage src="/images/logo_certbar.png" alt="logo_certbar" />
          </div>
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <LazyLoadImage
              src="/images/logo_avishkar.png"
              alt="logo_avishkar"
            />
          </div>
        </div>

        {/* <div className="row mt-4">
           <div className="col-md-4 mb-3 text-center">
             <div className={styles.ratingsBox}>
               <h4>4.4</h4>
               <div className={styles.stars}>
                 <LazyLoadImage src="/images/star.png" alt="star" />
                 <LazyLoadImage src="/images/star.png" alt="star" />
                 <LazyLoadImage src="/images/star.png" alt="star" />
                 <LazyLoadImage src="/images/star.png" alt="star" />
                 <LazyLoadImage src="/images/star_half.png" alt="star-half" />
               </div>
               <span>100+ Reviews</span>
               <h5>Facebook</h5>
             </div>
           </div>
 
           <div className="col-md-4 mb-3 text-center">
             <div className={styles.ratingsBox}>
               <h4>4.5</h4>
               <div className={styles.stars}>
                 <LazyLoadImage src="/images/star.png" alt="star" />
                 <LazyLoadImage src="/images/star.png" alt="star" />
                 <LazyLoadImage src="/images/star.png" alt="star" />
                 <LazyLoadImage src="/images/star.png" alt="star" />
                 <LazyLoadImage src="/images/star_half.png" alt="star-half" />
               </div>
               <span>1000+ Reviews</span>
               <h5 style={{ color: "#DB4437" }}>Google</h5>
             </div>
           </div>
 
           <div className="col-md-4 mb-3 text-center">
             <div className={styles.ratingsBox}>
               <h4>50+</h4>
               <div className={styles.quoraDiv}>
                 <span>Question asked</span>
                 <span>5000 answered</span>
               </div>
               <h5 style={{ color: "#801B00" }}>Quora</h5>
             </div>
           </div>
         </div> */}
      </div>
    </div>
  );
};

export default HomePlacement;
