import React from "react";

function Home() {
  return (
    <div>
      <article className="flex flex-col items-start p-3 pt-0" data-page="about">
        <header>
          <h2 className="font-extrabold text-3xl article-title p-1">
            About me
          </h2>
        </header>
        <section className="p-3 flex text-start flex-col items-start css-typing">
          <p>Welcome to my Portfolio Webpage.</p>
          <p>
            I am a 2nd year BTech (in ECE) student at National Institute of
            Technology .
          </p>
          <p>
            I am a web development Enthusiast, leraning web development releated
            skills.
          </p>
          <p>Also have an intrest in Data Structure and Algorithms.</p>
        </section>
        {/*
    - service
  */}
        <section className="service mt-5">
          <h3 className="font-bold text-2xl service-title flex items-start m-3">
            What i'm doing
          </h3>
          <ul className="service-list flex flex-wrap justify-between gap-5 p-3">
            <li className="service-item bg-stone-800 w-full xl:w-100  rounded-xl p-7 gap-5 flex justify-start items-center">
              <div className="service-icon-box ">
                <img
                  src="webdesign.svg
          "
                  alt="design icon"
                  width={60}
                />
              </div>
              <div className="service-content-box flex flex-col  text-start items-start">
                <h4 className="font-bold text-lg service-item-title">
                  Web design
                </h4>
                <p className="service-item-text">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </li>
            <li className="service-item bg-gradient-to-r from-jet2 to-jet3  w-full xl:w-100  rounded-xl p-7 gap-5 flex justify-start items-center">
              <div className="service-icon-box">
                <img src="webdev.svg" alt="Web development icon" width={60} />
              </div>
              <div className="service-content-box flex flex-col  text-start items-start">
                <h4 className="font-bold text-lg service-item-title">
                  Web development
                </h4>
                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>
            <li className="service-item bg-stone-800 w-full xl:w-100  rounded-xl p-7 gap-5 flex justify-start items-center">
              <div className="service-icon-box">
                <img src="app.svg" alt="mobile app icon" width={60} />
              </div>
              <div className="service-content-box flex flex-col  text-start items-start">
                <h4 className="font-bold text-lg service-item-title">
                  Programming Languages (C,Python,C++){" "}
                </h4>
                <p className="service-item-text">
                  leraning concepts of various programming languages like CPP
                  ,Python and C.
                </p>
              </div>
            </li>
            <li className="service-item bg-stone-800 w-full xl:w-100  rounded-xl p-7 gap-5 flex justify-start items-center">
              <div className="service-icon-box">
                <img src="algorithm.svg" alt="camera icon" width={60} />
              </div>
              <div className="service-content-box flex flex-col  text-start items-start">
                <h4 className="font-bold text-lg service-item-title">
                  Data Structure and Algorithm
                </h4>
                <p className="service-item-text">
                  Learning and understanding data stuctures and algorithms to
                  enhance critical thinking and problem solving kills.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}

export default Home;
