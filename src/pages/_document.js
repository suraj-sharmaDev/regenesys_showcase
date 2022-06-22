/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Jun 14 2022
 *  File : _document.js
 *******************************************/
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=374594639870766&ev=PageView&noscript=1"
          />
        </noscript>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
      </body>
    </Html>
  );
}
