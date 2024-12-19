import React from "react";
import { Link } from "react-router";
import "./new.css";

function Projects() {
  return (
    <div>
      <article className="text-start" data-page="project">
        <header>
          <h2 className="h2 article-title">Projects</h2>
        </header>
        <section className="projects ">
          <ul className="filter-list flex gap-5">
            <li className="filter-item">
              <button className="active" data-filter-btn="">
                All
              </button>
            </li>
            <li className="filter-item">
              <button data-filter-btn="">Game</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn="">Games</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn="">Web Development</button>
            </li>
          </ul>
          <div className="filter-select-box">
            <button className="filter-select" data-select="">
              <div className="select-value" data-selecct-value="">
                Select category
              </div>
              <div className="select-icon">
                <ion-icon name="chevron-down" />
              </div>
            </button>
            <ul className="select-list flex">
              <li className="select-item">
                <button data-select-item="">All</button>
              </li>
              <li className="select-item">
                <button data-select-item="">Game</button>
              </li>
              <li className="select-item">
                <button data-select-item="">Games</button>
              </li>
              <li className="select-item">
                <button data-select-item="">Web development</button>
              </li>
            </ul>
          </div>
          <ul className="project-list flex flex-wrap gap-5">
            <li
              className="project-item  active "
              data-filter-item=""
              data-category="web development"
            >
              <Link
                to="netflix\index.html"
                target="_blank"
                className="text-start"
              >
                <figure className="rounded-xl project-img relative justify-self-center flex justify-center items-center h-36 w-46    overflow-clip mb-3">
                  <div className="project-item-icon-box bg-gray-700 h-12 w-12 rounded-lg absolute z-10 justify-self-center flex justify-center items-center">
                    <ion-icon name="eye-outline" size="large" />
                  </div>
                  <img
                    src="download.jpg"
                    className="rounded-xl h-36 w-46 z-20 hover:brightness-50 hover:z-0 hover:scale-125 transition delay-50 duration-200 ease-in-out"
                    alt="Netflix"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Netflix Clone</h3>
                <p className="project-category">Web development</p>
              </Link>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <Link
                to="spotify\index.html"
                target="_blank"
                className="text-start "
              >
                <figure className="rounded-xl project-img relative justify-self-center flex justify-center items-center h-36 w-46    overflow-clip mb-3">
                  <div className=" bg-gray-700 h-12 w-12 rounded-lg absolute z-10 justify-self-center flex justify-center items-center">
                    <ion-icon name="eye-outline" size="large" />
                  </div>
                  <img
                    src="spoty.jpg"
                    height="30px"
                    alt="Spotify Clone"
                    className="rounded-xl h-36 w-46 z-20 hover:brightness-50 hover:z-0 hover:scale-125 transition delay-50 duration-200 ease-in-out"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Spotify Clone</h3>
                <p className="project-category">Web development</p>
              </Link>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="Games"
            >
              <Link
                to="rock_paper_scissorsl\index.html"
                target="_blank"
                className="text-start"
              >
                <figure className="rounded-xl project-img relative justify-self-center flex justify-center items-center h-36 w-46    overflow-clip mb-3">
                  <div className=" bg-gray-700 h-12 w-12 rounded-lg absolute z-10 justify-self-center flex justify-center items-center">
                    <ion-icon name="eye-outline" size="large" />
                  </div>
                  <img
                    src="rockpprscr.jpg"
                    alt="Rock Paper Scissors"
                    className="rounded-xl h-36 w-46 z-20 hover:brightness-50 hover:z-0 hover:scale-125 transition delay-50 duration-200 ease-in-out"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Rock Paper Scissors</h3>
                <p className="project-category">Games</p>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}

export default Projects;
