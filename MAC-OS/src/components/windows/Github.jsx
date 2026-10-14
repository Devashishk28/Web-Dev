
import React from "react";
import githubData from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./github.scss";

const GitCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />

      <h1>{data.title}</h1>

      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag" key={tag}>
            {tag}
          </p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repoLink} target="_blank" rel="noreferrer">
          Repository
        </a>

        {data.demoLink && (
          <a href={data.demoLink} target="_blank" rel="noreferrer">
            Demo Link
          </a>
        )}
      </div>
    </div>
  );
};

const Github = ({ onClose, onMinimize, isMinimized, title }) => {
  return (
    <MacWindow
      title={title || "GitHub Projects"}
      onClose={onClose}
      onMinimize={onMinimize}
      isMinimized={isMinimized}
    >
      <div className="cards">
        {githubData.map((project) => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </MacWindow>
  );
};

export default Github;
