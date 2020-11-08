import React, { useEffect } from "react";
import Head from "next/head";
import localDataService from "service/local-data-service";
import { Provider } from "react-redux";
import { useStore } from "redux/store";
import emailjs from "emailjs-com";

// add global css
import "styles/normalize.css";
import "styles/base.sass";
import "styles/variables.sass";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialState);

  useEffect(() => {
    emailjs.init("unme");
  }, []);

  // set mode
  useEffect(() => {
    const localTheme = localDataService.getTheme();
    const preferDarkScheme = window.matchMedia("(prefers-color-scheme: light)");
    if (localTheme === "light" || preferDarkScheme.matches) {
      document.body.classList.add("light");
    }
  }, []);

  // set init css variable
  useEffect(() => {
    let h = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${h}px`);

    const onResize = () => {
      let h = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${h}px`);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <meta name="color-scheme" content="light" />
        <title>UNME DESIGN</title>
        <script src="https://smtpjs.com/v3/smtp.js" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
