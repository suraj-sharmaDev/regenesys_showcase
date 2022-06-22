/******************************************
 *  Author : Suraj Sharma
 *  Created On : Sat Jun 18 2022
 *  File : Testimonials.jsx
 *******************************************/
import { Carousel } from "react-bootstrap";
import { Images } from "config";
import styles from "./Home.module.css";
import Data from "./data";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Testimonials = (props) => {
  const renderIcon = (type = "slider_arrow_left") => {
    return (
      <button className={styles.carouselControl}>
        <LazyLoadImage src={Images[type]} />
      </button>
    );
  };

  return (
    <div className={`pb-4 mt-5 ${styles.testimonialContainer}`}>
      <div className="container">
        <h2 className={styles.commonHeading}>Testimonials</h2>
      </div>
      <div className="container">
        <Carousel
          indicators={false}
          className={styles.testCarouselContainer}
          nextIcon={renderIcon("slider_arrow_right")}
          prevIcon={renderIcon("slider_arrow_left")}
        >
          {Data.testimonials.map((d, idx) => {
            return (
              <Carousel.Item
                key={d.title}
                className={styles.testCarouselItemContainer}
              >
                <div
                  className={`${styles.testimonialItemContainer} d-block w-100`}
                >
                  <div className={`${styles.testimonialItem} row`}>
                    <div className="col-md-2">
                      <LazyLoadImage
                        src={d.img}
                        className={`${styles.test_image} d-block`}
                      />
                    </div>
                    <div className={`${styles.testimonDesp} col`}>
                      <LazyLoadImage
                        src={Images["testimonial_quotes_icon"]}
                        className={styles.iconQuote}
                      />
                      <span>{d.description}</span>
                      <p>{d.title}</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
