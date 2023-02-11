import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerLists">
          <ul className="footerList">
            <li className="footerListItem">Countries</li>
            <li className="footerListItem">Regions</li>
            <li className="footerListItem">Cities</li>
            <li className="footerListItem">Districts</li>
            <li className="footerListItem">Airports</li>
            <li className="footerListItem">Hotels</li>
          </ul>

          <ul className="footerList">
            <li className="footerListItem">Homes</li>
            <li className="footerListItem">Apartment</li>
            <li className="footerListItem">Resorts</li>
            <li className="footerListItem">Villas</li>
            <li className="footerListItem">Hostels</li>
            <li className="footerListItem">Guest Houses</li>
          </ul>

          <ul className="footerList">
            <li className="footerListItem">Unique Places</li>
            <li className="footerListItem">All destinations</li>
            <li className="footerListItem">All flights</li>
            <li className="footerListItem">Discover</li>
            <li className="footerListItem">Reviews</li>
            <li className="footerListItem">Travel Communities</li>
          </ul>

          <ul className="footerList">
            <li className="footerListItem">Car Rental</li>
            <li className="footerListItem">Flights Finder</li>
            <li className="footerListItem">Restaurant reservations</li>
            <li className="footerListItem">Travel.com for Travel Agents</li>
          </ul>
        </div>
      </div>

      <div className="footerText">
        Copyright 2019-2023 Travel.com. All rights reserved
      </div>
    </>
  );
};

export default Footer;
