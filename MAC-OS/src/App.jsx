import { useState } from "react";
import "./app.scss";

import Dock from "./components/Dock";
import Nav from "./components/Nav.jsx";
import Github from "./components/windows/Github.jsx";
import Note from "./components/windows/Note.jsx";
import Resume from "./components/Resume.jsx";
import Spotify from "./components/windows/Spotify.jsx";
import Cli from "./components/windows/Cli.jsx";
import Chrome from "./components/windows/Chrome.jsx";
import Calendar from "./components/windows/Calendar.jsx";
import Calculator from "./components/windows/Calculator.jsx";
import Links from "./components/windows/Links.jsx";
import Mail from "./components/windows/Mail.jsx";

function App() {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    chrome: false,
    calendar:false,
    calculator:false,
    links:false,
    mail:false,
  });

  const [minimized, setMinimized] = useState({});

  const closeWindow = (name) => {
    setWindowState((prev) => ({
      ...prev,
      [name]: false,
    }));

    setMinimized((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const minimizeWindow = (name) => {
    setMinimized((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const restoreWindow = (name) => {
    setWindowState((prev) => ({
      ...prev,
      [name]: true,
    }));

    setMinimized((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const windowProps = (name, title) => ({
    title,
    isMinimized: Boolean(minimized[name]),
    onClose: () => closeWindow(name),
    onMinimize: () => minimizeWindow(name),
  });

  return (
    <main>
      <Nav />

      <Dock
  windowState={windowState}
  setWindowState={setWindowState}
  minimized={minimized}
  restoreWindow={restoreWindow}
  minimizeWindow={minimizeWindow}
/>
      {windowState.github && (
        <Github {...windowProps("github", "GitHub")} />
      )}

      {windowState.note && (
        <Note {...windowProps("note", "Notes")} />
      )}

      {windowState.resume && (
        <Resume {...windowProps("resume", "Resume")} />
      )}

      {windowState.spotify && (
        <Spotify {...windowProps("spotify", "Spotify")} />
      )}

      {windowState.cli && (
        <Cli {...windowProps("cli", "Terminal")} />
      )}

      {windowState.links && (
      <Links {...windowProps("links", "Links")} />
      )}
      {windowState.calculator && (
  <Calculator {...windowProps("calculator", "Calculator")} />
)}

      {windowState.chrome && (
        <Chrome {...windowProps("chrome", "Google Chrome")} />
      )}

      {windowState.mail && (
      <Mail {...windowProps("mail", "Mail")} />
      )}

      {windowState.calendar && (
      <Calendar {...windowProps("calendar", "Calendar")} />
      )}
    </main>
  );
}

export default App;
