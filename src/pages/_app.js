import React from 'react';
import Script from "next/script";
import dynamic from "next/dynamic";
import "../../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import { Provider, useSelector } from "react-redux";
import { useRouter } from "next/router";
import reduxStore from "store";
import { createWrapper } from "next-redux-wrapper";
import { PersistGate } from "redux-persist/integration/react";

import {
  HeaderWithSocialShareCurrency,
  NavigationBarHeader,
  Footer,
  RouteChangeLoader,
  ScrollToTopBtn,
} from "components/commons";
import { RequestCallBackPopup } from "components/commons/brochurePopup";
import { Colors } from "config";
import authStatuses from "config/constants/AuthConstants";
import { AuthStateHandler, GeolocationUtil } from "utils";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

function App({ Component, pageProps }) {
  const [show, setShow] = React.useState(false);
  const auth = useSelector((state) => state.authReducer);
  const {
    authStatus,
    credentials: { userType },
  } = auth;
  const isAuthenticated = authStatus !== authStatuses.LOGGED_OUT;
  const router = useRouter();
  const { pathname } = router;
  const pathApproved = AuthStateHandler(isAuthenticated, pathname);
  const [isLandingPage, setLandingPage] = React.useState(false);
  // initiate geoLocation
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const geoInfo = new GeolocationUtil();
    if (router.pathname.includes("/landing")) setLandingPage(true);
    else setLandingPage(false);
  }, []);

  React.useEffect(() => {
    if (router.pathname && router.pathname.includes("/landing")) {
      if (isLandingPage === false) {
        setLandingPage(true);
      }
    } else {
      if (isLandingPage) {
        setLandingPage(false);
      }
    }
  }, [router.pathname]);

  if (pathApproved !== true && typeof window !== "undefined") {
    // if path is not approved
    router.push(pathApproved);
  }

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const renderDefaultBody = () => {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: Colors.lighterBlue }}>
          <HeaderWithSocialShareCurrency isLandingPage={isLandingPage} />
          <NavigationBarHeader isLandingPage={isLandingPage} />
          <Component {...pageProps} />
          <Footer handleShow={handleShow} isLandingPage={isLandingPage} />
          <RequestCallBackPopup show={show} setShow={setShow} />
          <ScrollToTopBtn />
          
          {/* chatbot code start  */}
          {!isLandingPage && (
            <Script
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                window.__be = window.__be || {};
                window.__be.id = "627224a416cd190007919c85";
                (function() {
                    var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
                    be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
                })();
              `,
              }}
            />
          )}
          {/* chatbot code end  */}
        </div>
      </React.Fragment>
    );
  };

  const renderCandidateBody = () => {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: Colors.lighterBlue }}>
          <Component {...pageProps} />
        </div>
      </React.Fragment>
    );
  };

  const renderTeamsBody = () => {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: Colors.lighterBlue }}>
          <HeaderWithSocialShareCurrency />
          <Component {...pageProps} />
        </div>
      </React.Fragment>
    );
  };

  const renderBody = () => {
    // check for authentication status and type of user
    if (typeof window !== "undefined" && isAuthenticated) {
      if (userType == "candidate") return renderCandidateBody();
      return renderTeamsBody();
    }
    return renderDefaultBody();
  };

  const renderScripts = () => {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
        {/* Pixel code script start */}
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '374594639870766');
              `,
          }}
        />
        {/* Pixel code script end */}
        {/* GTM code start */}
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M9XVQW4');
              `,
          }}
        />
        {/* GTM code end */}

        {/* Google Tag Script Start  */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=AW-873313553"
        />
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-873313553');
              `,
          }}
        />
        {/* Google Tag Script End */}
      </>
    )
  }

  return (
    <Provider store={reduxStore}>
      {typeof window != "undefined" ? (
        <PersistGate persistor={reduxStore.__PERSISTOR} loading={null}>
          <RouteChangeLoader />
          {renderBody()}
          {renderScripts()}
        </PersistGate>
      ) : (
        <React.Fragment>
          <RouteChangeLoader />
          {renderBody()}
        </React.Fragment>
      )}
    </Provider>
  );
}

const makestore = () => reduxStore;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(App);
