import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projectslist.css";

const ProjectsList = () => {
  const [data, setData] = useState([]);
  const getProjectsList = async () => {
    const res = await fetch(
      "https://yuvaraj643.github.io/Projects/projects.json"
    );
    const resultData = await res.json();
    console.log(resultData.data);
    setData(resultData.data);
  };

  useEffect(() => {
    getProjectsList();
  }, []);

  return (
    <>
      <div className="main">
        <div className="nav content"><h2>Projects</h2><h2>Projects</h2></div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item) => {
            return (
              <div className="col" key={item.id}>
                <div className="card border-info mb-3 shadow p-3 mb-5" id="animation">
                  <span className="card-title">{item.name}</span>
                  <img key={item.id} src={item.img} alt={item.name} />
                  <div className="button-group">
                  <a href={item.github}>
                    <button class="button">
                      <span class="button-content">Github</span>
                    </button>
                  </a>
                  
                  <a href={item.preview}>
                    <button class="button" >
                      <span class="button-content">Preview</span>
                    </button>
                  </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
