import React from "react";

function Resume() {
  return (
    <div className="">
      <article className="text-start mt-1 pt-0 p-3" data-page="resume">
        <header>
          <h2 className="font-extrabold text-3xl article-title mb-2">Resume</h2>
        </header>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline" />
            </div>
            <h3 className="font-bold text-2xl">Education</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Rainbow Inter Collage ,Rampur ,Uttar Pradesh ,India
              </h4>
              <span>2021 — 2023</span>
              <p className="timeline-text">passed intermediate</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                National Institute of Technology, Hamirpur ,Himachal Pradesh
                ,India
              </h4>
              <span>2023 — 2027</span>
              <p className="timeline-text">
                Bachelor of Technology in Electronics and Communication
                Engineering
              </p>
            </li>
          </ol>
        </section>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline" />
            </div>
            <h3 className="font-bold text-2xl">Academic Achievments</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                District Topper in 12th standard
              </h4>
              <span>2023 — 2024</span>
              <p className="timeline-text">
                District Topper Uttar Pradesh Board in 12th standard
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Qualify Jee Main and Advanced
              </h4>
              <span>2024 — present</span>
              <p className="timeline-text">
                Qualify Entrance exams of top technical Institute of India (Jee
                Main and Advanced) .
              </p>
            </li>
          </ol>
        </section>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline" />
            </div>
            <h3 className="font-bold text-2xl">Experience</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Volunteer Team Vibhav</h4>
              <span>2023 — 2024</span>
              <p className="timeline-text">
                volunteer at technical club , participated in various technical
                event .
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Executive Member Team Vibhav
              </h4>
              <span>2024 — present</span>
              <p className="timeline-text">
                being Executive Member of technical club , learning knowladge in
                various field , create projects to compete in events.
              </p>
            </li>
            {/* <li class="timeline-item">

                <h4 class="h4 timeline-item-title">Web designer</h4>

                <span>2010 — 2013</span>

                <p class="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti,
                    quos dolores et
                    quas molestias
                    exceptur.
                </p>

            </li> */}
          </ol>
        </section>
        <section className="skill">
          <h3 className="font-bold text-2xl skills-title">My skills</h3>
          <ul className="skills-list content-card bg-stone-800/60 border-solid border border-jet rounded-lg">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web development</h5>
                <data value={60}>60%</data>
              </div>
              <div className=" h-2 w-full bg-stone-700 rounded">
                <div
                  className="   bg-yellow-300  h-full rounded"
                  style={{ width: "60%" }}
                />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Python Programming language</h5>
                <data value={70}>70%</data>
              </div>
              <div className="h-2 w-full bg-stone-700 rounded">
                <div
                  className=" bg-yellow-300  h-full rounded"
                  style={{ width: "70%" }}
                />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">C Programming language</h5>
                <data value={75}>75%</data>
              </div>
              <div className="h-2 w-full bg-stone-700 rounded">
                <div
                  className=" bg-yellow-300  h-full rounded"
                  style={{ width: "70%" }}
                />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">C++ Programming language</h5>
                <data value={25}>25%</data>
              </div>
              <div className="h-2 w-full bg-stone-700 rounded">
                <div
                  className=" bg-yellow-300  h-full rounded"
                  style={{ width: "25%" }}
                />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">DSA </h5>
                <data value={15}>15%</data>
              </div>
              <div className="h-2 w-full bg-stone-700 rounded">
                <div
                  className=" bg-yellow-300  h-full rounded"
                  style={{ width: "15%" }}
                />
              </div>
            </li>
            {/* <li class="skills-item">

                <div class="title-wrapper">
                    <h5 class="h5">WordPress</h5>
                    <data value="50">50%</data>
                </div>

                <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 50%;"></div>
                </div>

            </li> */}
          </ul>
        </section>
      </article>
    </div>
  );
}

export default Resume;
