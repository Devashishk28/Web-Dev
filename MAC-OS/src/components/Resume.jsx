
import React from "react";
import MacWindow from "./windows/MacWindow";
import "./resume.scss";

function Resume({ onClose, onMinimize, isMinimized, title }) {
  return (
    <MacWindow
      title={title || "Resume"}
      onClose={onClose}
      onMinimize={onMinimize}
      isMinimized={isMinimized}
    >
      <div className="resume-window">
        <iframe
          src="/Devashish_Kubade_Resume.2oct.pdf"
          title="Devashish Kubade Resume"
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      </div>
    </MacWindow>
  );
}

export default Resume;
