/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Mar 29 2022
 *  File : index.jsx
 *******************************************/
import { useState, useEffect, useRef, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTypeOfDevice } from "utils";
import { Images } from "config";
import styles from "./Carousel.module.css";

export const CustomCarousel = (props) => {
  const { children, settings } = props;
  const [deviceType, setDeviceType] = useState("");
  const isAutoPlay = props.settings.slidesToShow <= props.children.length;

  const sliderRef = useRef();

  useEffect(() => {
    const device_type = getTypeOfDevice();
    setDeviceType(device_type);
  }, []);

  const sliderHandler = (type) => {
    if (type == "left") {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  const renderIcon = () => {
    if (props.settings.slidesToShow >= props.children.length) return;
    return (
      <>
        <button
          className={`${styles.carouselControl} ${styles.carouselControlLeft}`}
          onClick={() => sliderHandler("left")}
        >
          <img src={Images["slider_arrow_left"]} />
        </button>
        <button
          className={`${styles.carouselControl} ${styles.carouselControlRight}`}
          onClick={() => sliderHandler("right")}
        >
          <img src={Images["slider_arrow_right"]} />
        </button>
      </>
    );
  };

  return (
    <Fragment>
      {renderIcon()}
      <Slider {...settings} autoplay={isAutoPlay} autoplaySpeed={1800} ref={sliderRef}>
        {children}
      </Slider>
    </Fragment>
  );
};
