import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import localDataService from "service/local-data-service";
import { Provider } from "react-redux";
import { useStore } from "redux/store";
import emailjs from "emailjs-com";
import Splash from "components/splash";
import smoothscroll from "smoothscroll-polyfill";

// add global css
import "styles/normalize.css";
import "styles/base.sass";
import "styles/variables.sass";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
// for splash page
import "components/splash/splash.sass";
// for service svg
import "pages/service/svg.sass";

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialState);
  const [splash, setSplash] = useState(false);
  const router = useRouter();

  useEffect(() => {
    smoothscroll.polyfill();
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

  useEffect(() => {
    const handleRouteChange = () => {
      setSplash(true);
      window.scrollTo({
        left: 0,
        top: 0,
      });
    };

    const handleRouteComplete = () => {
      setSplash(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChange);
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
        <title>UNME DESIGN 非我設計</title>
        <script src="https://smtpjs.com/v3/smtp.js" />
      </Head>
      <Provider store={store}>
        <Splash active={splash} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

App.getInitialProps = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 600);
  });

  return { pageProps: {} };
};

export default App;
