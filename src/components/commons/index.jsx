/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Mar 28 2022
 *  File : index.jsx
 *******************************************/
import {useState, useEffect, useRef} from "react";
import Link from "next/link";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import Router, { useRouter } from "next/router";
import CustomDropDown from "./dropdown";
import styles from "./Commons.module.css";
import { Colors, Images } from "config";
import Data from "./data";
import { useOutsideAlerter } from "utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import Head from "next/head";

export const HeaderWithSocialShareCurrency = (props) => {
  const btnhandler = (url, title) => {
    if (title == "email") {
      window.open(`mailto: ${url}`);
    } else {
      window.open(url, "blank");
    }
    return;
  };

  if (props.isLandingPage) return null;
  return (
    <div className={styles.socialShareCurrencyContainer}>
      <div className="container">
        <div className="row">
          <div
            className={`col-6 col-md-9 col-lg-10 d-flex justify-content-end align-items-center ${styles.borderRight}`}
          >
            {/* <div className="py-2">
              <CustomDropDown
                data={Data.currencyDropDown}
                toggleClassName={styles.dropDownToggle}
                menuClassName={styles.dropDownMenu}
                iconStyles={{
                  backgroundColor: Colors.bgColor,
                  padding: 3,
                  paddingTop: 2,
                  paddingBottom: 2,
                  marginLeft: 10,
                  marginRight: 10,
                  color: Colors.redColor,
                  fontSize: 11,
                }}
              />
            </div> */}
            <div className={` py-2 ${styles.verticalLine}`} />
          </div>
          <div className="col d-flex py-2 justify-content-between">
            {Data.shareIcons.map((d, idx) => (
              <div
                key={idx.toString()}
                className={styles.iconOverlay}
                onClick={() => btnhandler(d.url, d.title)}
              >
                {d.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const NavigationBarHeader = (props) => {
  const router = useRouter();
  const [state, setState] = useState({
    activeRoute: null,
    routeQuery: null,
    isProgramsHovered: false,
    isClickedSearch: false,
    searchKey: '',
  });

  const searchInputRef = useRef(null);

  useEffect(() => {
    setState({
      ...state,
      activeRoute: router.pathname,
      routeQuery: router.query,
    });
  }, [router.pathname, router.query]);

  const navigationHandler = (e, route) => {
    e.preventDefault();
    showProgramsDropDown(false);
    router.push(route);
  };

  const showProgramsDropDown = (status) => {
    setState({
      ...state,
      isProgramsHovered: status,
    });
  };

  const closeSearchField = () => {
    if (!state.isClickedSearch || state.searchKey.length > 0) return;
    setState({
      ...state,
      isClickedSearch: false,
    });
  };

  const onClickSearchButton = (e) => {
    e.preventDefault();
    setState({
      ...state,
      isClickedSearch: !state.isClickedSearch,
    });
  };

  const onHandleTextChange = e => {
    setState({
      ...state,
      searchKey: e.target.value,
    });
  }

  const onSubmitSearch = e => {
    if (state.searchKey.length == 0) return;
    e.preventDefault();
    setState({
      ...state,
      searchKey: '',
      isClickedSearch: false,
    });
    router.push(`/search?searchKey=${state.searchKey}`);
  }

  const onHandleKeyDown = e => {
    if (e.key === 'Enter') {
      onSubmitSearch(e);
    }
  }

  useOutsideAlerter(searchInputRef, closeSearchField, state.isClickedSearch);

  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.navborder}>
        <Container>
          <Navbar.Brand href="#" onClick={(e) => navigationHandler(e, '/')}>
            <img
              src="/images/DR_Logo_Black.png"
              width="100px"
              height="100%"
              className={`${styles.drLogo} d-inline-block align-top`}
              alt="Regenesys logo"
            />
          </Navbar.Brand>

          {
            !props.isLandingPage && (
              <>
              <Form
              className={`d-flex d-lg-none ${styles.smallScreenInputBox}`}
              onSubmit={onSubmitSearch}
            >
              <div ref={searchInputRef}>
                <input
                  type="text"
                  placeholder="Type to Search..."
                  value={state.searchKey}
                  onChange={(e) => onHandleTextChange(e)}
                />
                <img src={Images["search"]} onClick={onSubmitSearch} />
              </div>
            </Form>
  
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className={`me-auto my-2 my-lg-0 ${styles.navLinkContainer}`}>
                {Data.navigationMenu.map((d, idx) => {
                  const { activeRoute, routeQuery } = state;
                  const curQuery = routeQuery?.course;
                  const isActive = activeRoute == d.to;
                  // const classes = `${isActive ? styles.activeLink : ""}`;
                  const classes = "";
                  return d.title != "Courses" ? (
                    <Nav.Link
                      key={idx}
                      className={classes}
                      href=""
                      onClick={(e) => navigationHandler(e, d.to)}
                    >
                      {d.title === "Home" ? <img className={`${styles.homeIcon}`} src="/images/home.svg" /> : d.title}
                      {/* {isActive && <img src={Images["menu_active"]} />} */}
                    </Nav.Link>
                  ) : (
                    <NavDropdown
                      title="Courses"
                      id="basic-nav-dropdown"
                      alignRight
                      onMouseEnter={() => showProgramsDropDown(true)}
                      onMouseLeave={() => showProgramsDropDown(false)}
                      toggle={() =>
                        showProgramsDropDown(!state.isProgramsHovered)
                      }
                      show={state.isProgramsHovered}
                    >
                      <NavDropdown.Item
                        href="#"
                        onClick={(e) =>
                          navigationHandler(e, "/programs/dataScience")
                        }
                        className={`${styles.programDropdownLink} ${curQuery == "dataScience"
                          ? styles.activeDropDownLink
                          : ""
                          }`}
                      >
                        <img src="/images/bullet_check.png" />
                        <span>Data Science</span>
                      </NavDropdown.Item>
  
                      <NavDropdown.Item
                        href="#"
                        onClick={(e) =>
                          navigationHandler(e, "/programs/digitalMarketing")
                        }
                        className={`${styles.programDropdownLink} ${curQuery == "digitalMarketing"
                          ? styles.activeDropDownLink
                          : ""
                          }`}
                      >
                        <img src="/images/bullet_check.png" />
                        <span>Digital Marketing</span>
                      </NavDropdown.Item>
  
                      <NavDropdown.Item
                        href="#"
                        onClick={(e) =>
                          navigationHandler(e, "/programs/projectManagement")
                        }
                        className={`${styles.programDropdownLink} ${curQuery == "projectManagement"
                          ? styles.activeDropDownLink
                          : ""
                          }`}
                      >
                        <img src="/images/bullet_check.png" />
                        <span>Project Management</span>
                      </NavDropdown.Item>
  
                      <NavDropdown.Item
                        href="#"
                        onClick={(e) =>
                          navigationHandler(e, "/programs/cyberSecurity")
                        }
                        className={`${styles.programDropdownLink} ${curQuery == "cyberSecurity"
                          ? styles.activeDropDownLink
                          : ""
                          }`}
                      >
                        <img src="/images/bullet_check.png" />
                        <span>Cyber Security</span>
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        href="#"
                        onClick={(e) =>
                          navigationHandler(e, "/programs/createMyWealth")
                        }
                        className={`${styles.programDropdownLink} ${curQuery == "createMyWealth"
                          ? styles.activeDropDownLink
                          : ""
                          }`}
                      >
                        <img src="/images/bullet_check.png" />
                        <span>Create My Wealth</span>
                      </NavDropdown.Item>
  
                    </NavDropdown>
                  );
                })}
                <button
                  className={styles.loginBtn}
                  onClick={(e) => navigationHandler(e, "https://mydigital.regenesys.net/login/index.php")}
                >
                  <img src={Images["login_icon"]} />
                  Login
                </button>
              </Nav>
              <div
                className={`d-none d-lg-flex justify-content-center ${styles.searchForm}`}
              >
                <div
                  className={`${styles.searchInput} ${state.isClickedSearch ? styles.searchInputBigAnimated : ""
                    }`}
                  ref={searchInputRef}
                >
                  <input
                    type="text"
                    placeholder="Type to Search..."
                    value={state.searchKey}
                    onChange={(e) => onHandleTextChange(e)}
                    onKeyDown={(e) => onHandleKeyDown(e)}
                  />
                  <img src={Images["search"]} onClick={onSubmitSearch} />
                </div>
  
                <button
                  className={styles.searchBtn}
                  onClick={onClickSearchButton}
                >
                  {/* This is the search button at navigation */}
                  <img src={Images["search"]} />
                </button>
              </div>
            </Navbar.Collapse>
              </>
            )
          }
        </Container>

      </Navbar>
    </>
  );
};

export const Footer = (props) => {
  if (props.isLandingPage) return null;
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBorder}></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className={styles.campusDetails}>
              <div className={styles.callDialer}>
                <h6>SOUTH AFRICA CAMPUS</h6>
                <div className={styles.footerIcon}>
                  <img src="/images/icon_campus.png" alt="icon-campus" />
                </div>
              </div>
              <p>
                165 West Street, <br />
                Sandton, Johannesburg <br />
                South Africa, 2031
              </p>

              <div className={styles.callDialer}>
                <a href="tel:+27 (11) 669 5000">+27 (11) 669 5000 </a>
                <div className={styles.footerIcon}>
                  <img src="/images/icon_call.png" alt="icon-call" />
                </div>
              </div>

              <div className={styles.callDialer}>
                <a href="https://regenesys.net/" target="_blank">
                  www.regenesys.net
                </a>

                <div className={styles.footerIcon}>
                  <img src="/images/icon_website.png" alt="icon-website" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className={styles.campusDetails}>
              <div className={styles.callDialer}>
                <h6>India Corporate Office</h6>
                <div className={styles.footerIcon}>
                  <img src="/images/icon_campus.png" alt="icon-campus" />
                </div>
              </div>
              <p>
                Proxima Building, Unit 1101 <br />
                11th Floor, Plot 19, Sector 30A, <br />
                Vashi Navi Mumbai, India, 40075
              </p>

              <div className={styles.callDialer}>
                <a href="tel:1 800 212 9950">+91 1800 212 9950 </a>
                <div className={styles.footerIcon}>
                  <img src="/images/icon_call.png" alt="icon-call" />
                </div>
              </div>

              <div className={styles.callDialer}>
                <a href="https://india.regenesys.net/" target="_blank">
                  www.india.regenesys.net
                </a>
                <div className={styles.footerIcon}>
                  <img src="/images/icon_website.png" alt="icon-website" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className={styles.campusDetails}>
              <div className={styles.callDialer}>
                <h6>Nigeria Corporate Office</h6>
                <div className={styles.footerIcon}>
                  <img src="/images/icon_campus.png" alt="icon-campus" />
                </div>
              </div>

              <p>
                <br />
                8th Floor, Churchgate Tower 2 <br /> PC 31 Victoria Island,
                Nigeria <br />
              </p>

              <div className={styles.callDialer}>
                <a href="tel:+234 (1) 453 0959">+234 (1) 453 0959 </a>
                <div className={styles.footerIcon}>
                  <img src="/images/icon_call.png" alt="icon-call" />
                </div>
              </div>

              <div className={styles.callDialer}>
                <a href="https://nigeria.regenesys.net/" target="_blank">
                  www.nigeria.regenesys.net
                </a>
                <div className={styles.footerIcon}>
                  <img src="/images/icon_website.png" alt="icon-website" />
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className={styles.campusDetails}>
              <div className={styles.callDialer}>
                <h6>QUICK LINKS</h6>
                <div className={styles.footerIcon}>
                  <img
                    src="/images/icon_quicklinks.png"
                    alt="icon-quicklinks"
                  />
                </div>
              </div>

              <div className={styles.callDialer}>
                <Link href="/termsCondition" target="_blank">
                  Terms & Conditions
                </Link>
                <Link href="/privacyPolicy" target="_blank">
                  Privacy Policy
                </Link>
                {/* <Link href="/refundPolicy" target="_blank">
                  Refund Policy
                </Link> */}
                <Link href="https://edforall.co.za/" target="_blank">
                  EdForAll
                </Link>
                <Link href="/about" target="_blank">
                  About
                </Link>
                <Link href="/contact" target="_blank">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.coursesList}>
          <h6>Facilitator Led Courses</h6>

          <Link href="/programs/dataScience" target="_blank">
            <a className={styles.firstLink}> Data Science</a>
          </Link>
          <Link href="/programs/digitalMarketing" target="_blank">
            Digital Marketing
          </Link>
          <Link href="/programs/projectManagement" target="_blank">
            Project Management
          </Link>
        </div>

        {/* <div className={styles.footerSelectCountry}>
          <h6>Select country</h6>
          <a href="https://regenesys.net/" target="_blank">
            <img src="/images/sa_flag.png" alt="Sa-flag" />
            <span>South Africa</span>
          </a>
          <a href="https://nigeria.regenesys.net/" target="_blank">
            <img src="/images/flag_nigeria.png" alt="flag-nigeria" />
            <span>Nigeria</span>
          </a>
          <a href="https://india.regenesys.net/" target="_blank">
            <img src="/images/india_flag.png" alt="india-flag" />
            <span>India</span>
          </a>
        </div>
        
        <div className={styles.bottomHeading}>
          <h6>Upgrade Your Career with Digital Regenesys</h6>
          <p>
            Learn the next-gen digital skills with India’s leading EdTech platform introduced by the Regenesys Business School, an international business school with Johannesburg, Mumbai, and Lagos campuses. Digital Regenesys is here to provide career transformation, skill-enhancing, and upgrading online courses in many digital domains. The self-paced online courses offered by Digital Regenesys are in sync with the demands of almost every industry and their digital and technological needs. The instructor-led training gives students a golden opportunity to get placed in top MNCs and organisations. Avail yourself of the certificate programs offered by highly experienced and achieved faculty. Come and be a part of the digital revolution.
          </p>
        </div>
        */}
      </div>
      <div className={styles.copyright}>
        <span>
          Copyright © 2022 | Regenesys Business School (Pvt) Ltd | All Rights
          Reserved
        </span>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-5 col-lg-4 col-xl-3">
              <div className={styles.quickCall} onClick={props.handleShow}>
                <a href="#">
                  <img src="/images/icon_call_back.png" alt="logo-wipro" />
                  <span>Request-a-callback</span>
                </a>
              </div>
            </div>
            <div className="col-6 col-lg-5 col-xl-3">
              <div className={styles.quickCall}>
                <a href="tel:18002129950">
                  <img src="/images/icon_call_us.png" alt="icon-call-us" />
                  <span>Call us on: +91 18002129950</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export const RouteChangeLoader = (props) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    Router.onRouteChangeStart = (url) => {
      setLoading(true);
    };

    Router.onRouteChangeComplete = (url) => {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    };

    Router.onRouteChangeError = (err, url) => {
      setLoading(false);
    };
  }, []);

  return isLoading ? (
    <div className={styles.screenLoader}>
      <div className={styles.loaderDiv} />
    </div>
  ) : null;
};

export const Loader = ({ isLoading, ...props }) => {
  return isLoading ? (
    <div className={styles.screenLoader}>
      <div className={styles.loaderDiv} />
    </div>
  ) : null;
}

export const PopupModal = ({
  show,
  title,
  handleClose,
  children,
  showFooter = true,
  handleFormSubit,
  ...props
}) => {

  const localSubmit = (e) => {
    if (typeof handleFormSubit == 'function') {
      handleFormSubit(e);
      return;
    }
    handleClose(e);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: Colors.darkBlue }}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {showFooter && (
        <Modal.Footer>
          <div className={styles.modalFtrBtnDiv}>
            <button
              className={styles.modalSubmitBtn}
              onClick={(e) => localSubmit(e)}
            >
              Submit
            </button>
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export const ScrollToTopBtn = props => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return showButton ? (
    <button className={styles.scrolltopBtn} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faAngleUp} size="2x" color={'white'} />
    </button>
  ) : null;
}

export const VideoPopupModal = ({
  show,
  handleClose,
  children,
  ...props
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className={styles.videoPopup}
      contentClassName={styles.videoPopupContent}
    >
      <Modal.Body>
        <div className={styles.popupCloseBtn} onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} size="1x" color={'white'} />
        </div>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export const GenMetaInformation = (props) => {
  const {
    pageName = "home"
  } = props;

  const title = Data?.metaInfo?.title?.[pageName] || Data?.metaInfo?.title?.["home"];
  const description = Data?.metaInfo?.description?.[pageName] || Data?.metaInfo?.description?.["home"];
  const keywords = Data?.metaInfo?.keywords?.[pageName] || Data?.metaInfo?.keywords?.["home"];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};