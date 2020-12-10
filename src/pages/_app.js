import React, { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
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
      <DefaultSeo
        additionalMetaTags={[
          {
            name: "viewport",
            property:
              "width=device-width,initial-scale=1, viewport-fit=cover,user-scalable=no",
          },
          {
            name: "charset",
            property: "utf08",
          },
          {
            name: "color-scheme",
            property: "light",
          },
        ]}
        title="UNME DESIGN 非我設計"
        description="UnMe Design是一間品牌空間設計公司，利用多種設計領域與經營面，量身訂製企業的獨特形象，並以夥伴的身份陪同品牌成長，達成品牌旅程的一致規劃。UnMe同時執行品牌識別設計、企業形象、活動視覺、辦公室設計、專櫃設計、商空設計、品牌顧問 。讓我們一起趟上品牌的建構旅程！"
        openGraph={{
          url: "https://unmedesign.co",
          title: "UNME DESIGN",
          description:
            "UnMe Design是一間品牌空間設計公司，利用多種設計領域與經營面，量身訂製企業的獨特形象，並以夥伴的身份陪同品牌成長，達成品牌旅程的一致規劃。UnMe同時執行品牌識別設計、企業形象、活動視覺、辦公室設計、專櫃設計、商空設計、品牌顧問 。讓我們一起趟上品牌的建構旅程！",
          locale: "zh_TW",
          type: "website",
          images: [
            {
              // url: "https://www.example.ie/og-image-02.jpg",
            },
          ],
          site_name: "UNME DESIGN",
        }}
      />
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
