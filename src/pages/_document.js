import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zh-Hant-TW">
        <Head>
          <script src="https://smtpjs.com/v3/smtp.js" async />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-130589250-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'UA-130589250-1');
          `,
            }}
          />

          {/* <!-- Facebook Pixel Code --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
               fbq('init', '913288296128666'); 
              fbq('track', 'PageView');
          `,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=913288296128666&ev=PageView&noscript=1"
            />
          `,
            }}
          ></noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
