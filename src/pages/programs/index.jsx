/******************************************
 *  Author : Suraj Sharma
 *  Created On : Fri Apr 01 2022
 *  File : index.jsx
 *******************************************/
import Programs from './[course]';
import dataScience from "components/programs/courseData/dataScience";

export const getStaticProps = async ({ params, res }) => {
  const course = "dataScience";
  const data = dataScience;
  return {
    props: { data, course }, // will be passed to the page component as props
  };
};

export default Programs;