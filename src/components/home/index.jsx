/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Mar 29 2022
 *  File : index.jsx
 *******************************************/
import dynamic from "next/dynamic";

const CustomDataScience = dynamic(() => import("components/home/CustomDataScience"))
const HomeBanner = dynamic(() => import("components/home/HomeBanner"));
const HomePrograms = dynamic(() => import("components/home/HomePrograms"));
const HomePlacementAssistance = dynamic(() => import("components/home/HomePlacementAssistance"));;
const HomePlacement = dynamic(() => import("components/home/HomePlacement"));;
const Testimonials = dynamic(() => import("components/home/Testimonials"));;
const WhyChooseRegenesys = dynamic(() => import("components/home/WhyChooseRegenesys"));;

export {
  HomeBanner,
  HomePrograms,
  HomePlacementAssistance,
  HomePlacement,
  Testimonials,
  WhyChooseRegenesys,
  CustomDataScience
};
