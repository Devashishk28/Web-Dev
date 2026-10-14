import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import "./Chrome.scss";

const Chrome = ({ onClose, onMinimize }) => {
  const [url, setUrl] = useState("https://www.google.com");
  const [maximized, setMaximized] = useState(false);

  const rndRef = useRef(null);
  const previousLayout = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();

    const link = url.trim();
    if (!link) return;

    const isURL =
      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(link);

    const destination = isURL
      ? /^https?:\/\//i.test(link)
        ? link
        : `https://${link}`
      : `https://www.google.com/search?q=${encodeURIComponent(link)}`;

    window.open(destination, "_blank", "noopener,noreferrer");
  };

  const toggleMaximize = () => {
    const instance = rndRef.current;
    if (!instance) return;

    if (!maximized) {
      previousLayout.current = {
        x: instance.getDraggablePosition().x,
        y: instance.getDraggablePosition().y,
        ...instance.getSelfElement().getBoundingClientRect(),
      };

      instance.updatePosition({ x: 0, y: 0 });
      instance.updateSize({
        width: "100%",
        height: "100%",
      });

      setMaximized(true);
    } else {
      const previous = previousLayout.current;

      if (previous) {
        instance.updatePosition({
          x: previous.x,
          y: previous.y,
        });

        instance.updateSize({
          width: 850,
          height: 550,
        });
      }

      setMaximized(false);
    }
  };

  return (
    <Rnd
      ref={rndRef}
      default={{
        x: 100,
        y: 100,
        width: 850,
        height: 550,
      }}
      minWidth={400}
      minHeight={300}
      bounds="parent"
      dragHandleClassName="chrome-titlebar"
      disableDragging={maximized}
      enableResizing={!maximized}
    >
      <div className="chrome-window">
        <div className="chrome-titlebar">
          <div className="dots">
            <button
              type="button"
              className="dot red"
              aria-label="Close window"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={onClose}
            />

            <button
              type="button"
              className="dot yellow"
              aria-label="Minimize window"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={onMinimize}
            />

            <button
              type="button"
              className="dot green"
              aria-label="Maximize or restore window"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={toggleMaximize}
            />
          </div>

          <span className="chrome-title">Google Chrome</span>
        </div>

        <form className="chrome-toolbar" onSubmit={handleSearch}>
          <button
            type="button"
            onClick={() => setUrl("https://www.google.com")}
          >
            🏠
          </button>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Search Google or enter a URL"
          />

          <button type="submit">Go</button>
        </form>

        <iframe
          className="chrome-browser"
          src="https://www.google.com/webhp?igu=1"
          title="Google"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </Rnd>
  );
};

export default Chrome;
