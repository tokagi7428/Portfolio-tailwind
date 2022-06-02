import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Service from "../../components/Service/Service";
import Aboutme from "../../components/Aboutme/Aboutme";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div className="max-w-full mx-auto ">
      <Navbar />
      <Banner />
      <Service />
      <Aboutme />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
