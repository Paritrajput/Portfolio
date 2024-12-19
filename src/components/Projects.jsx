import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./new.css";
import project from "../projectData/projects.json";

function Projects() {
  const [category, setCategory] = useState("All");
  const [filteredProject, setFilteredProject] = useState([]);

  useEffect(() => {
    if (category !== "All") {
      let newProject = project.filter(
        (element) => element.category == category
      );
      setFilteredProject(newProject);
    }
    if (category == "All") {
      setFilteredProject(project);
    }
  }, [category]);

  return (
    <div>
      <article className="text-start pt-0 p-3" data-page="project">
        <header>
          <h2 className="font-extrabold text-3xl article-title pb-0">
            Projects
          </h2>
        </header>
        <section className="projects ">
          <div className="filter-select-box p-5 pl-0 pt-2 ">
            <ul className="select-list flex gap-5">
              {[
                "All",
                ...new Set(project.map((element) => element.category)),
              ].map((data) => (
                <li className="p-2   ">
                  <button
                    onClick={(e) => {
                      setCategory(e.target.value);
                    }}
                    value={data}
                    className={`${
                      category === data ? "text-yellow-500 " : "text-white "
                    } `}
                  >
                    {data}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <ul className="project-list flex flex-wrap gap-5">
            {filteredProject.map((data) => (
              <li
                className="project-item  active "
                data-filter-item=""
                data-category={data.category}
              >
                <Link to={data.link} target="_blank" className="text-start">
                  <figure className="rounded-xl project-img relative justify-self-center flex justify-center items-center h-36 w-46    overflow-clip mb-3">
                    <div className="project-item-icon-box  h-12 w-12 rounded-lg absolute z-10 justify-self-center flex justify-center items-center">
                      <ion-icon name="eye-outline" size="large" />
                    </div>
                    <img
                      src={data.coverImg}
                      className="rounded-xl h-36 w-46 z-20 hover:brightness-50 hover:z-0 hover:scale-125 transition delay-50 duration-200 ease-in-out"
                      alt="Netflix"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">{data.title}</h3>
                  <p className="project-category text-stone-400">
                    {data.category}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}

export default Projects;
