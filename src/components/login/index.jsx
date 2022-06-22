/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Apr 05 2022
 *  File : index.jsx
 *******************************************/
import styles from "./Login.module.css";
import Link from "next/link";

export const LoginBody = (props) => {
  return (
    <div className={styles.loginDetails}>
      <div className="container">
        <div className={`row ${styles.alignCenter}`}>
          <div className="col-lg-7 d-block d-md-none">
            <div className={styles.loginRight}>
              <img src="/images/login_banner.png" alt="icon-campus" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className={styles.loginLeft}>
              <h5>Log in to continue learning</h5>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-12 position-relative">
                  <input
                    type="email"
                    className="form-control"
                    id="validationTooltip02"
                    placeholder="Email*"
                    required
                    onChange={(e) => props.inputHandler(e, "email")}
                  />
                  {props.error.email && (
                    <span className={styles.formErrorText}>
                      Please enter valid email address
                    </span>
                  )}
                </div>

                <div className="col-md-12 position-relative">
                  <input
                    type="password"
                    className="form-control mb-0"
                    id="validationTooltip01"
                    placeholder="Password*"
                    required
                    onChange={(e) => props.inputHandler(e, "password")}
                  />
                  {props.error.password && (
                    <span className={styles.formErrorText}>
                      Password should be greater than 6 characters
                    </span>
                  )}
                </div>
                <div className="col-md-12">
                  <div className="row justify-content-between">
                    <div className="col-6">
                      <div className={styles.rememberCheck}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckIndeterminate"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-right">
                      <div className={styles.forgotPass}>
                        <span>Forgot Password?</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className={styles.greenButton}
                    onClick={(e) => props.loginHandler(e, "EMAIL_PASSWORD")}
                  >
                    Submit
                  </button>
                </div>

                <div className="col-md-12 text-center">
                  <span className={styles.loginOr}>or login with</span>
                </div>
                <div className={`col-md-12 ${styles.LoginWithSocial}`}>
                  <div
                    className={`${styles.socialLogin} ${styles.google}`}
                    onClick={(e) => props.loginHandler(e, "GOOGLE")}
                  >
                    <img src="/images/icon_google.png" alt="icon-campus" />
                    <span>Google</span>
                  </div>
                  <div
                    className={`${styles.socialLogin} ${styles.facebook}`}
                    onClick={(e) => props.loginHandler(e, "FACEBOOK")}
                  >
                    <img src="/images/icon_fb.png" alt="icon-campus" />
                    <span>Facebook</span>
                  </div>
                  <div
                    className={`${styles.socialLogin} ${styles.linked}`}
                    onClick={(e) => props.loginHandler(e, "LINKEDIN")}
                  >
                    <img
                      src="/images/icon_linked_white.png"
                      alt="icon-campus"
                    />
                    <span>LinkedIn</span>
                  </div>
                  <div
                    className={`${styles.socialLogin} ${styles.apple}`}
                    onClick={(e) => props.loginHandler(e, "APPLE")}
                  >
                    <img src="/images/icon_apple.png" alt="icon-campus" />
                    <span>Apple</span>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <span className={styles.signUpLink}>
                    Don't have an account?
                    <Link href="/register"> Sign Up</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-7 d-none d-md-block">
            <div className={styles.loginRight}>
              <img src="/images/login_banner.png" alt="icon-campus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
