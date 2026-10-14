
import React from "react";
import MacWindow from "./MacWindow";
import TerminalPackage from "react-console-emulator";
import "./cli.scss";

const Terminal = TerminalPackage.default;

function Cli({ onClose, onMinimize, isMinimized, title }) {
  const portfolioCommands = {
    about: {
      description: "Display a short introduction about the portfolio owner.",
      usage: "about",
      fn: () =>
        "Hi, I am Devashish Kubade — a frontend developer focused on building clean, responsive, and modern web experiences.",
    },
    skills: {
      description: "List technical skills and tools.",
      usage: "skills",
      fn: () =>
        [
          "Skills:",
          "  JavaScript, React, Vite",
          "  HTML, CSS, SCSS",
          "  UI/UX design, responsive web apps",
          "  Git, GitHub, deployment workflows",
        ].join("\n"),
    },
    projects: {
      description: "Show a list of featured projects.",
      usage: "projects",
      fn: () =>
        [
          "Featured projects:",
          "  1. Portfolio OS UI",
          "  2. Weather dashboard",
          "  3. Productivity tracker",
          "  4. E-commerce landing page",
        ].join("\n"),
    },
    contact: {
      description: "Show contact information.",
      usage: "contact",
      fn: () =>
        [
          "Contact:",
          "  Email: devashish@example.com",
          "  GitHub: github.com/devashish",
          "  LinkedIn: linkedin.com/in/devashish",
          "  Location: India",
        ].join("\n"),
    },
    resume: {
      description: "Show a short resume summary.",
      usage: "resume",
      fn: () =>
        [
          "Resume summary:",
          "  Frontend Developer",
          "  Building dynamic interfaces and polished user experiences",
          "  Interested in React, design systems, and web app development",
        ].join("\n"),
    },
  };

  return (
    <MacWindow
      title={title || "Terminal"}
      onClose={onClose}
      onMinimize={onMinimize}
      isMinimized={isMinimized}
    >
      <div className="cli-window">
        <Terminal
          commands={portfolioCommands}
          welcomeMessage={
            'Welcome to Devashish Kubade\'s portfolio terminal.\n\nAvailable commands: help, about, skills, projects, contact, resume\nType "help" to see the full command list.'
          }
          promptLabel="DevashishKubade:$"
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
}

export default Cli;
