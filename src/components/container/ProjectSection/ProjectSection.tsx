import React, { useEffect, useState } from "react";
import type { Project } from "../../../types";
import fetchJson from "../../../api/fetchJson";
import "./ProjectSection.css";

const ProjectSection: React.FC = () => {
    const [projects, setProject] = useState<Project[]>([]);

    const getData = async () => {
        const data = await fetchJson<Project[]>('/data/project.json');
        setProject(data);

    }
    useEffect(() => {
        getData();
    }, []);
  return (
    <section id="projects" className="project-section">
      <div className="project-container">
        <h2 className="project-title">From Vision to Launch! Projects We’re Proud Of</h2>
        <p className="project-subtitle">
          Take a closer look at our recent work powering startups, enterprises, and everything in between.
        </p>

        <div className="project-grid">
          {projects.map((item) => (
            <div key={item.id} className="project-card">
              <img
                src={item.imageUrl}
                alt={item.alt || item.title}
                className="project-image"
              />

              <p className="project-type">{item.type}</p>
              <h4 className="project-name">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
