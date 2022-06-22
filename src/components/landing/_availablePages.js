/******************************************
 *  Author : Suraj Sharma
 *  Created On : Wed Jun 08 2022
 *  File : _availablePages.js
 *******************************************/
import cryptoCurrency from "components/programs/courseData/cryptoCurrency";
import cyberSecurity from "components/programs/courseData/cyberSecurity";
import digitalMarketing from "components/programs/courseData/digitalMarketing";
import projectManagement from "components/programs/courseData/projectManagement";
import designThinking from "components/programs/courseData/designThinking";
import dataScience from "components/programs/courseData/dataScience";

import advanceDataScience from "components/programs/courseData/advanceDataScience";
import appliedDataScience from "components/programs/courseData/appliedDataScience";
import basicDataScience from "components/programs/courseData/basicDataScience";

export const countries = ["in", "sa", "nigeria"];

const createCountryBasedCoursePage = (courseNameArray, countries) => {
  const mergedArray = [];
  for (let i = 0; i < courseNameArray.length; i++) {
    const course = courseNameArray[i];
    for (let j = 0; j < countries.length; j++) {
      const country = countries[j];
      mergedArray.push({ params: { country, ...course } });
    }
  }
  return mergedArray;
};

export const masterCourses = {
  cryptoCurrency,
  cyberSecurity,
  digitalMarketing,
  projectManagement,
  designThinking,
  dataScience,
  dataScience2: dataScience,
};

export const masterCoursePageNames = {
  cryptoCurrency: "Cryptocurrency",
  cyberSecurity: "Cyber Security",
  digitalMarketing: "Digital Marketing",
  projectManagement: "Project Management",
  designThinking: "Design Thinking",
  dataScience: "Data Science",
  dataScience2: "Data Science"
};

export const masterCoursePageNameArray = Object.keys(masterCoursePageNames).map(
  (d) => {
    return { course: d };
  }
);

export const masterCoursePaths = createCountryBasedCoursePage(
  masterCoursePageNameArray,
  countries
);

export const dataScienceCourses = {
  dataScience,
  advanceDataScience,
  basicDataScience,
  appliedDataScience,
};

export const dataScienceCoursePageName = {
  dataScience: "Data Science",
  advanceDataScience: "Data Science",
  appliedDataScience: "Data Science",
  basicDataScience: "Data Science",
};

export const dataScienceCoursePageNameArray = Object.keys(
  dataScienceCoursePageName
).map((d) => {
  return { course: d };
});

export const dataScienceCoursePaths = createCountryBasedCoursePage(
  dataScienceCoursePageNameArray,
  countries
);

export const allAvailableCourseNames = {
  dataScience: "Data Science",
  cyberSecurity: "Cyber Security",
  digitalMarketing: "Digital Marketing",
  projectManagement: "Project Management",
};
