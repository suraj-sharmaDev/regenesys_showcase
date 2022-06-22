/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Apr 05 2022
 *  File : index.jsx
 *******************************************/
import styles from "./Register.module.css";
import Link from 'next/link';

export const RegisterBody = (props) => {
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
              <h5>Register</h5>


              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-12 position-relative">
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltip02"
                    placeholder="Full Name*"
                    required
                  />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-12 position-relative">
                  <input
                    type="email"
                    className="form-control"
                    id="validationTooltip02"
                    placeholder="Email*"
                    required
                  />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-12 position-relative">
                  <input
                    type="number"
                    className="form-control"
                    id="validationTooltip02"
                    placeholder="Phone*"
                    required
                  />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-12 position-relative">
                  <input
                    type="text"
                    className="form-control mb-0"
                    id="validationTooltip01"
                    placeholder="Password*"
                    required
                  />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-12 position-relative">
                  <input
                    type="text"
                    className="form-control mb-0"
                    id="validationTooltip01"
                    placeholder="Confirm Password*"
                    required
                  />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-12">
                  <button className={styles.greenButton} type="submit">
                    Submit
                  </button>
                </div>


              </form>
              <div className="col-md-12 text-center">
                <span className={styles.signUpLink}>
                  Click on any option to create an account with
                  <a href="#"> Digital Regenesys</a>
                </span>
              </div>

              <div className={`col-12 ${styles.LoginWithSocial}`}>
                <div
                  className={`${styles.socialLogin} ${styles.google}`}
                >
                  <img src="/images/icon_google.png" alt="icon-campus" />
                  <span>Google</span>
                </div>
                <div
                  className={`${styles.socialLogin} ${styles.facebook}`}
                >
                  <img src="/images/icon_fb.png" alt="icon-campus" />
                  <span>Google</span>
                </div>
                <div
                  className={`${styles.socialLogin} ${styles.linked}`}
                >
                  <img src="/images/icon_linked_white.png" alt="icon-campus" />
                  <span>Google</span>
                </div>
                <div
                  className={`${styles.socialLogin} ${styles.apple}`}
                >
                  <img src="/images/icon_apple.png" alt="icon-campus" />
                  <span>Google</span>
                </div>
              </div>
              <div className={`col-6 ${styles.LoginWithSocial}`}>

              </div>
              <div className="col-md-12 text-center">
                <span className={styles.signUpLink}>
                  Already have an account? <Link href="/login"> Login in</Link>
                </span>
              </div>
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
