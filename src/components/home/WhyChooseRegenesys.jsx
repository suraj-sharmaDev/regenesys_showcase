/******************************************
 *  Author : Suraj Sharma
 *  Created On : Sat Jun 18 2022
 *  File : WhyChooseRegenesys.jsx
 *******************************************/
import styles from "./Home.module.css";
import Data from "./data";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WhyChooseRegenesys = (props) => {
  return (
    <div className={styles.whyChoose}>
      <div className="container">
        <h2 className={styles.commonHeading}>Why Choose Digital Regenesys</h2>
        <div className="row justify-content-center mt-5">
          {Data.whyUs.map((d, idx) => {
            return (
              <div key={d.title1 + d.title2} className="col-6 col-md-2 mb-3">
                <div className={styles.whyChooseBox}>
                  <div className={styles.chooseImage}>
                    <LazyLoadImage src={d.img} alt={d.img} />
                  </div>
                  <span className="text-center">
                    {d.title1} <br />
                    {d.title2}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseRegenesys;
