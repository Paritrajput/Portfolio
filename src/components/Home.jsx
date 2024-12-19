import React from "react";

function Home() {
  return (
    <div>
      <article className="flex flex-col items-start p-3" data-page="about">
        <header>
          <h2 className="h2 article-title p-1">About me</h2>
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
          <h3 className="h3 service-title flex items-start m-3">
            What i'm doing
          </h3>
          <ul className="service-list flex flex-wrap justify-between gap-5">
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
                <h4 className="h4 service-item-title">Web design</h4>
                <p className="service-item-text">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </li>
            <li className="service-item bg-stone-800 w-full xl:w-100  rounded-xl p-7 gap-5 flex justify-start items-center">
              <div className="service-icon-box">
                <img src="webdev.svg" alt="Web development icon" width={60} />
              </div>
              <div className="service-content-box flex flex-col  text-start items-start">
                <h4 className="h4 service-item-title">Web development</h4>
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
                <h4 className="h4 service-item-title">
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
                <h4 className="h4 service-item-title">
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
        {/*
    - testimonials
  */}
        {/* 
          <section class="testimonials">

              <h3 class="h3 testimonials-title">Testimonials</h3>

              <ul class="testimonials-list has-scrollbar">

                  <li class="testimonials-item">
                      <div class="content-card" data-testimonials-item>

                          <figure class="testimonials-avatar-box">
                              <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60"
                                  data-testimonials-avatar>
                          </figure>

                          <h4 class="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

                          <div class="testimonials-text" data-testimonials-text>
                              <p>
                                  Richard was hired to create a corporate identity. We were very pleased with the
                                  work done. She has a
                                  lot of experience
                                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet,
                                  ullamcous cididt
                                  consectetur adipiscing
                                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                              </p>
                          </div>

                      </div>
                  </li>

                  <li class="testimonials-item">
                      <div class="content-card" data-testimonials-item>

                          <figure class="testimonials-avatar-box">
                              <img src="./assets/images/avatar-2.png" alt="Jessica miller" width="60"
                                  data-testimonials-avatar>
                          </figure>

                          <h4 class="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

                          <div class="testimonials-text" data-testimonials-text>
                              <p>
                                  Richard was hired to create a corporate identity. We were very pleased with the
                                  work done. She has a
                                  lot of experience
                                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet,
                                  ullamcous cididt
                                  consectetur adipiscing
                                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                              </p>
                          </div>

                      </div>
                  </li>

                  <li class="testimonials-item">
                      <div class="content-card" data-testimonials-item>

                          <figure class="testimonials-avatar-box">
                              <img src="./assets/images/avatar-3.png" alt="Emily evans" width="60"
                                  data-testimonials-avatar>
                          </figure>

                          <h4 class="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

                          <div class="testimonials-text" data-testimonials-text>
                              <p>
                                  Richard was hired to create a corporate identity. We were very pleased with the
                                  work done. She has a
                                  lot of experience
                                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet,
                                  ullamcous cididt
                                  consectetur adipiscing
                                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                              </p>
                          </div>

                      </div>
                  </li>

                  <li class="testimonials-item">
                      <div class="content-card" data-testimonials-item>

                          <figure class="testimonials-avatar-box">
                              <img src="./assets/images/avatar-4.png" alt="Henry william" width="60"
                                  data-testimonials-avatar>
                          </figure>

                          <h4 class="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

                          <div class="testimonials-text" data-testimonials-text>
                              <p>
                                  Richard was hired to create a corporate identity. We were very pleased with the
                                  work done. She has a
                                  lot of experience
                                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet,
                                  ullamcous cididt
                                  consectetur adipiscing
                                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                              </p>
                          </div>

                      </div>
                  </li>

              </ul>

          </section> */}
        {/*
    - testimonials modal
  */}
        <div className="modal-container" data-modal-container="">
          <div className="overlay" data-overlay="" />
          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn="">
              <ion-icon name="close-outline" />
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="./assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width={80}
                  data-modal-img=""
                />
              </figure>
              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title="">
                Daniel lewis
              </h4>
              <time dateTime="2021-06-14">14 June, 2021</time>
              <div data-modal-text="">
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

export default Home;
