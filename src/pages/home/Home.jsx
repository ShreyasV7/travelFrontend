import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featuredCities/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import HomeGuests from "../../components/homeGuests/HomeGuests";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <HomeGuests />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
