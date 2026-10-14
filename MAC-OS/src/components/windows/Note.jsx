import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import MacWindow from "./MacWindow";
import "./note.scss";

const Note = ({ onClose, onMinimize, isMinimized, title }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Could not load note:", error));
  }, []);

  return (
    <MacWindow
      title={title || "Notes"}
      onClose={onClose}
      onMinimize={onMinimize}
      isMinimized={isMinimized}
    >
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={oneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
