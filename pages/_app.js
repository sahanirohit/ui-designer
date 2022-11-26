import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.element,
};

export default MyApp;
