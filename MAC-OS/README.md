# 🍎 MAC-OS Portfolio

### An Interactive macOS-Inspired Desktop Built with React
Have a Look at my Project:https://mac-os-project-sable.vercel.app/
<img width="1920" height="946" alt="image" src="https://github.com/user-attachments/assets/4b44db73-6e82-40dd-bb2c-154d486513aa" />



https://github.com/user-attachments/assets/3c4c8335-618d-41d2-93cf-e1e45c10d658


https://github.com/user-attachments/assets/0b922ade-0662-463c-a46e-fcf6b789f2db





A desktop-style portfolio experience inspired by macOS. Instead of navigating a traditional portfolio page, users can interact with a desktop interface, open application windows, explore projects, view a resume, and access useful links.

Built using **React, Vite, JavaScript, and SCSS**.

## ✨ Features

### 🖥️ Desktop Experience
- macOS-inspired desktop interface with wallpaper.
- Navigation bar with the current date and time.
- Interactive dock for opening desktop applications.
- Draggable, resizable application windows.
- Window controls for closing, minimizing, and maximizing windows.

### 📱 Built-in Applications

| Application | Description |
|---|---|
| 🌐 Google Chrome | Search Google or enter a URL to open websites in a new tab. |
| 💻 GitHub | Browse project cards with repository and demo links. |
| 📝 Notes | Display formatted code and notes using syntax highlighting. |
| 📄 Resume | View the resume directly inside a desktop window. |
| 🎵 Spotify | Listen using an embedded Spotify playlist. |
| 🖥️ Terminal | Explore portfolio information through custom commands. |
| 🧮 Calculator | Perform basic arithmetic calculations. |
| 📅 Calendar | View calendar layouts and add or delete events. |
| 🔗 Links | Search and filter useful links by category. |
| ✉️ Mail | Explore a demo email interface with folders and a compose action. |

### 🔗 Links Application
- Search links by name or description.
- Filter links by Developer, Social, Entertainment, and Contact categories.
- Access useful websites from one interface.

### 📅 Calendar Application
- Switch between month, week, and day views.
- Add events by selecting a date.
- Remove events by selecting an event.

### 🪟 Window Management
- Drag windows around the desktop.
- Resize application windows.
- Minimize, restore, close, and maximize windows.

## 🛠️ Tech Stack

- **Frontend:** React 19, JavaScript
- **Build Tool:** Vite
- **Styling:** CSS, SCSS
- **Window Management:** `react-rnd`
- **Calendar:** FullCalendar
- **Terminal:** `react-console-emulator`
- **Syntax Highlighting:** `react-syntax-highlighter`
- **Code Quality:** ESLint

## 📂 Project Structure

```text
MAC-OS/
├── public/
│   ├── doc-icons/
│   ├── navbar-icons/
│   ├── wallpaper.jpg
│   ├── mac-wallpaper.jpg
│   ├── note.txt
│   └── Devashish_Kubade_Resume.2oct.pdf
├── src/
│   ├── assets/
│   │   └── github.json
│   ├── components/
│   │   ├── windows/
│   │   │   ├── Calculator.jsx
│   │   │   ├── Calendar.jsx
│   │   │   ├── Chrome.jsx
│   │   │   ├── Cli.jsx
│   │   │   ├── Github.jsx
│   │   │   ├── Links.jsx
│   │   │   ├── MacWindow.jsx
│   │   │   ├── Mail.jsx
│   │   │   ├── Note.jsx
│   │   │   └── Spotify.jsx
│   │   ├── DateTime.jsx
│   │   ├── Dock.jsx
│   │   ├── Nav.jsx
│   │   └── Resume.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── app.scss
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🧠 What I Learned

This project helped me practice:

- Building reusable React components.
- Managing application state with React hooks.
- Passing props between components.
- Creating interactive user interfaces.
- Implementing draggable and resizable windows.
- Working with third-party React libraries.
- Styling complex interfaces using SCSS.
- Organizing a multi-component frontend project.

## ⚠️ Notes

- Calendar events are stored in application state and are not persisted across page reloads.
- The Mail interface is a demo and is not connected to a real inbox.
- The Mail compose action and some profile links currently use placeholder URLs or email addresses and should be configured before publishing.
- Spotify playback depends on Spotify's embed and account restrictions.

## 👨‍💻 Author

**Devashish Kubade**

- GitHub: [@Devashishk28](https://github.com/Devashishk28)
- Repository: [Web-Dev / MAC-OS](https://github.com/Devashishk28/Web-Dev/tree/main/MAC-OS)

---

⭐ If you find this project interesting, feel free to explore the code and share feedback!
