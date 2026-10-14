
import React, { useState } from "react";
import MacWindow from "./MacWindow";
import "./mail.scss";

const Mail = ({ onClose, onMinimize, isMinimized, title }) => {
  const [activeFolder, setActiveFolder] = useState("Inbox");

  const folders = [
    { name: "Inbox", icon: "📥", count: 3 },
    { name: "Starred", icon: "⭐" },
    { name: "Sent", icon: "📤" },
    { name: "Drafts", icon: "📝" },
    { name: "Trash", icon: "🗑️" },
  ];

  const openCompose = () => {
    window.location.href =
      "mailto:your-email@example.com?subject=Hello";
  };

  return (
    <MacWindow
      title={title || "Mail"}
      onClose={onClose}
      onMinimize={onMinimize}
      isMinimized={isMinimized}
    >
      <div className="mail-app">
        <aside className="mail-sidebar">
          <button className="compose-btn" onClick={openCompose}>
            + Compose
          </button>

          {folders.map((folder) => (
            <button
              key={folder.name}
              className={`mail-folder ${
                activeFolder === folder.name ? "active" : ""
              }`}
              onClick={() => setActiveFolder(folder.name)}
            >
              <span>{folder.icon}</span>
              <span>{folder.name}</span>
              {folder.count && <small>{folder.count}</small>}
            </button>
          ))}

          <div className="mail-account">
            <span className="account-avatar">D</span>
            <div>
              <strong>Your Mail</strong>
              <small>Personal account</small>
            </div>
          </div>
        </aside>

        <section className="mail-content">
          <header className="mail-header">
            <div>
              <h2>{activeFolder}</h2>
              <p>Your personal mailbox</p>
            </div>

            <button
              className="mail-refresh"
              onClick={() => setActiveFolder("Inbox")}
            >
              ↻
            </button>
          </header>

          <div className="mail-empty">
            <div className="mail-empty-icon">✉</div>
            <h3>{activeFolder} is peaceful</h3>
            <p>
              This is your portfolio's demo Mail app.
              It isn't connected to a real inbox.
            </p>
            <button className="compose-btn" onClick={openCompose}>
              Compose Email
            </button>
          </div>
        </section>
      </div>
    </MacWindow>
  );
};

export default Mail;
