import cryptoCurrency from "./cryptoCurrency";
import cyberSecurity from "./cyberSecurity";
import digitalMarketing from "./digitalMarketing";
import projectManagement from "./projectManagement";
import designThinking from "./designThinking";
import dataScience from "components/programs/courseData/dataScience";
import advanceDataScience from "components/programs/courseData/advanceDataScience";
import appliedDataScience from "components/programs/courseData/appliedDataScience";
import basicDataScience from "components/programs/courseData/basicDataScience";
import createMyWealth from "components/programs/courseData/createMyWealth";

export const masterCourses = {
  cryptoCurrency,
  cyberSecurity,
  digitalMarketing,
  projectManagement,
  designThinking,
  createMyWealth
};

export const masterCoursePageNames = {
  cryptoCurrency: "Cryptocurrency",
  cyberSecurity: "Cyber Security",
  digitalMarketing: "Digital Marketing",
  projectManagement: "Project Management",
  designThinking: "Design Thinking",
  createMyWealth: "Create My Wealth"
};

export const masterCoursePaths = Object.keys(masterCoursePageNames).map((d) => {
  return { params: { course: d } };
});

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

export const dataScienceCoursePaths = Object.keys(dataScienceCoursePageName).map((d) => {
    return { params: { course: d } };
});

export const allAvailableCourseNames = {
    dataScience: "Data Science",
    cyberSecurity: "Cyber Security",
    digitalMarketing: "Digital Marketing",
    projectManagement: "Project Management",
}