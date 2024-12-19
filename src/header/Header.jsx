import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router";

function Header() {
  const [showDetail, setShowDetail] = useState(false);
  const showDetailFunc = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className="min-w-80 w-full tablet:w-full xl:w-auto ">
      <div
        className={`xl:h-full sidebar w-full min-w-80 tablet:w-full transition ease-in-out delay-500 transform ${
          showDetail
            ? " max-h-130 tablet:max-h-150 h-auto"
            : "tablet:max-h-44 max-h-32 "
        } `}
        data-sidebar=""
      >
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src="profile.jpg"
              alt="Parit Rajput
    "
              width={100}
              className="rounded-lg"
            />
          </figure>
          <div className="info-content">
            <h1
              className="text-white pb-3 text-2xl font-semibold"
              title="Parit Rajput"
            >
              Parit Rajput
            </h1>
            <p className="title">Web dev Enthusiast</p>
            <p className="title2">DSA Enthusiast</p>
          </div>
          <button
            className="info_more-btn"
            onClick={showDetailFunc}
            data-sidebar-btn=""
          >
            <span>Show Contacts</span>
            <ion-icon name="chevron-down" />
          </button>
        </div>
        <div
          className={` transition ease-in-out delay-500 transform ${
            showDetail
              ? "opacity-100 max-h-96 tablet:max-h-96 h-auto "
              : "opacity-0 hidden w-80 "
          } xl:opacity-100 xl:contents`}
        >
          <div className="separator" />
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <Link
                  to="mailto:parit9389669826@gmail.com"
                  className="contact-link"
                >
                  parit9389669826@gmail.com
                </Link>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <Link to="tel:+12133522795" className="contact-link">
                  +91 9389669826
                </Link>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="1982-06-23">January 05, 2006</time>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Moradabad , Uttar Pradesh ,India</address>
              </div>
            </li>
          </ul>
          <div className="separator" />
          <ul className="social-list">
            <li className="social-item">
              <Link to="https://github.com/Paritrajput" className="social-link">
                <ion-icon name="logo-github" />
              </Link>
            </li>
            <li className="social-item">
              <Link
                to="https://www.linkedin.com/in/parit-rajput-9ba7651b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="social-link"
              >
                <ion-icon name="logo-linkedin" />
              </Link>
            </li>
            <li className="social-item">
              <Link
                to="https://www.instagram.com/paritrajput?igsh=dzhubjJsb21jZWgx"
                target="_blank"
                className="social-link"
              >
                <ion-icon name="logo-instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
