/******************************************
 *  Author : Suraj Sharma
 *  Created On : Sat Jun 18 2022
 *  File : HomePlacementAssistance.jsx
 *******************************************/
import { Images } from "config";
import styles from "./Home.module.css";
import Data from "./data";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomePlacementAssistance = (props) => {
  return (
    <div className={`mt-5 ${styles.placementContainer}`}>
      <div className="container">
        {/* <h2 className={`mb-3 ${styles.commonHeading}`}>Career Counselling</h2> */}
      </div>
      <div className="bg-white py-4">
        <div className="container">
          <div className="row align-items-center py-2">
            <div
              className={`${styles.placementBanner} col-md-5 d-block d-md-none  align-items-center`}
            >
              <LazyLoadImage
                src={Images["placement_assistant"]}
                className="img-fluid w-50"
                style={{ cursor: "auto" }}
              />
            </div>
            <div>
              <h2 className={`mb-3 ${styles.commonHeading}`}>
                Career Counselling
              </h2>
            </div>
            <div className="col-md-7">
              <div className="row justify-content-center">
                {Data.placementAssistant.map((d, idx) => {
                  return (
                    <div
                      key={d.title}
                      className="col-12 col-md-6 d-flex align-items-center mt-3"
                    >
                      {d.img !== "" && (
                        <LazyLoadImage
                          src={Images[d.img]}
                          className={styles.placementIcon}
                          style={{ cursor: "auto" }}
                        />
                      )}
                      <span>{d.title}</span>
                    </div>
                  );
                })}
                <div className="text-left d-none d-md-block">
                  <button
                    className={`${styles.greenButton}`}
                    onClick={() => props.handleShow()}
                  >
                    Request a call
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${styles.placementBanner} col-md-5 d-none d-md-block align-items-center`}
            >
              <LazyLoadImage
                src={Images["placement_assistant"]}
                className="img-fluid w-50"
                style={{ cursor: "auto" }}
              />
            </div>
          </div>
          <div className="text-center d-md-none mt-3">
            <button
              className={`${styles.greenButton}`}
              onClick={() => props.handleShow()}
            >
              Request a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePlacementAssistance;
