import React from "react";
import "./dock.scss";

const Dock = ({
  windowState,
  setWindowState,
  minimized = {},
  restoreWindow,
  minimizeWindow,
}) => {
 
const handleDockClick = (name) => {
  if (!windowState[name] || minimized[name]) {
    if (restoreWindow) {
      restoreWindow(name);
    } else {
      setWindowState((prev) => ({
        ...prev,
        [name]: true,
      }));
    }
    return;
  }

  if (minimizeWindow) {
    minimizeWindow(name);
  } else {
    setWindowState((prev) => ({
      ...prev,
      [name]: false,
    }));
  }
};



  return (
    <footer className="dock">
      <div className="icon chrome" onClick={() => handleDockClick("chrome")}>
        <img src="/doc-icons/chrome.svg" alt="Chrome" />
      </div>

      <div className="icon github" onClick={() => handleDockClick("github")}>
        <img src="/doc-icons/github.svg" alt="GitHub" />
      </div>

      <div className="icon calender" onClick={() => handleDockClick("calendar")}>
        <img src="/doc-icons/calender.svg" alt="Calendar" />
      </div>

      <div className="icon cli" onClick={() => handleDockClick("cli")}>
        <img src="/doc-icons/cli.svg" alt="Terminal" />
      </div>

      
      <div className="icon link" onClick={() => handleDockClick("links")}>
        <img src="/doc-icons/link.svg" alt="Links" />
      </div>

     <div className="icon mail" onClick={() => handleDockClick("mail")}>
  <img src="/doc-icons/mail.svg" alt="Mail" />
</div>

      <div className="icon note" onClick={() => handleDockClick("note")}>
        <img src="/doc-icons/note.svg" alt="Notes" />
      </div>

      <div
  className="icon calculator"
  onClick={() => handleDockClick("calculator")}
>
  <img src="/doc-icons/calculator.png" alt="Calculator" />
</div>

      <div className="icon spotify" onClick={() => handleDockClick("spotify")}>
        <img src="/doc-icons/spotify.svg" alt="Spotify" />
      </div>

      <div className="icon pdf" onClick={() => handleDockClick("resume")}>
        <img src="/doc-icons/pdf.svg" alt="Resume" />
      </div>
    </footer>
  );
};

export default Dock;
