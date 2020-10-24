import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import PageContainer from "../components/page-container";
import ContactBar from "../components/contact-bar";

const Root = () => {
  const MainContent = () => {
    return <Nav />;
  };
  const SubContent = () => {
    return (
      <>
        <ContactBar />
        <Footer />
      </>
    );
  };
  return <PageContainer main={<MainContent />} sub={<SubContent />} />;
};

export default Root;
