import { Colors, Images } from 'config';

const iconStyles = {
  fontIcon: {
    fontSize: 10,
    marginLeft: 4
  },
  socialIcon: {
    fontSize: 20,
    color: Colors.lightBlue,
    stroke: Colors.darkBlue,
    strokeWidth: 23,
    padding: 0,
    margin: 0
  }
}


const Data = {
  currencyDropDown: [],
  shareIcons: [
    {
      title: "facebook",
      icon: <img src={Images["fb_icons"]} />,
      url: "https://www.facebook.com/digitalregenesys",
    },
    {
      title: "instagram",
      icon: <img src={Images["insta_icons"]} />,
      url: "https://www.instagram.com/digital_regenesys/"
    },
    {
      title: "youtube",
      icon: <img src={Images["youtube_icons"]} />,
      url: "https://www.youtube.com/channel/UCPQNtnWidXkTSxDYJLkRY1A"
    },
    {
      title: "email",
      icon: <img src={Images["gmail_icons"]} />,
      url: "info.digital@regenesys.net"
    }
  ],
  navigationMenu: [
    {
      title: "Home",
      to: "/"
    },
    {
      title: "Courses",
      to: "/programs"
    },
    {
      title: "EdForAll",
      to: "https://edforall.co.za/"
    },
    {
      title: "About",
      to: "/about"
    },
    {
      title: "Contact",
      to: "/contact"
    }
  ],
  metaInfo: {
    title: {
      home: "Digital Regenesys",
      about: "About",
      contact: "Contact Us",
      privacyPolicy: "Privacy Policy",
      refundPolicy: "Refund Policy",
      termsCondition: "Terms and Conditions",
      search: "Search - DR Website",
      register: "Register",
      login: "Login",
      edforall: "Ed For All",
      cryptoCurrency: "Crypto Currency",
      cyberSecurity: "Cyber Security",
      digitalMarketing: "Digital Marketing",
      projectManagement: "Project Management",
      designThinking: "Design Thinking",
      dataScience: "Data Science",
      advanceDataScience: "Advanced Data Science",
      appliedDataScience: "Applied Data Science",
      basicDataScience: "Basic Data Science",
      thankYou: "Thank You",
      createMyWealth: "Create My Wealth"
    },
    keywords: {
      home: "Digital Regenesys",
      about: "About",
      contact: "Contact Us",
      privacyPolicy: "Privacy Policy",
      refundPolicy: "Refund Policy",
      termsCondition: "Terms and Conditions",
      search: "Search - DR Website",
      register: "Register",
      login: "Login",
      edforall: "Ed For All",
      cryptoCurrency: "Crypto Currency",
      cyberSecurity: "Cyber Security",
      digitalMarketing: "Digital Marketing",
      projectManagement: "Project Management",
      designThinking: "Design Thinking",
      dataScience: "Data Science",
      advanceDataScience: "Advanced Data Science",
      appliedDataScience: "Applied Data Science",
      basicDataScience: "Basic Data Science",
      thankYou: "Thank You",
      createMyWealth: "Wealth, income"
    },
    description: {
      home: "Revolutionize your career with future ready skills · Facilitator Led Courses · Cryptocurrency · Cybersecurity · Project Management · Digital Marketing",
      about: "Digital Regenesys is a cutting-edge digital learning platform introduced by the Regenesys Business School, a global business school with state-of-the-art campuses in Johannesburg, Mumbai, and Lagos.",
      contact: "Contact Us India: 1 800 212 9950, South Africa: +27 11 669 5000",
      privacyPolicy: "We respect you and we hold your personal information private.",
      refundPolicy: "To claim refund, kindly drop an email on: info.digital@regenesys.net Online course refund",
      termsCondition: "All academic and accredited Courses are subject to academic rules, regulations and applicable domestic legislation as published and revised from time-to-time.",
      search: "Search - DR Website",
      register: "Register",
      login: "Login",
      edforall: "Ed For All",
      cryptoCurrency: "Crypto Currency",
      cyberSecurity: "Cyber Security",
      digitalMarketing: "Digital Marketing",
      projectManagement: "Project Management",
      designThinking: "Design Thinking",
      dataScience: "Upskill yourself with a course in Data Science designed especially for college students & freshers.",
      advanceDataScience: "Upskill yourself with a course in Data Science designed especially for college students & freshers.",
      appliedDataScience: "Upskill yourself with a course in Data Science designed especially for college students & freshers.",
      basicDataScience: "Upskill yourself with a course in Data Science designed especially for college students & freshers.",
      thankYou: "Thank You",
      createMyWealth: ""
    }
  }
};

export default Data;
