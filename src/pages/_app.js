import React from "react";
import App from "next/app";
import Head from "next/head";
// add global css
import "styles/normalize.css";
import "styles/base.sass";
import "styles/variables.sass";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>UNME DESIGN</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

// export default appWithTranslation(MyApp);
export default MyApp;
