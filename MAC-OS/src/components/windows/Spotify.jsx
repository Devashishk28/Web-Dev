
import React from "react";
import MacWindow from "./MacWindow";

const Spotify = ({
  onClose,
  onMinimize,
  isMinimized,
  title,
}) => {
  return (
    <MacWindow
      width="25rem"
      title={title || "Spotify"}
      onClose={onClose}
      onMinimize={onMinimize}
      isMinimized={isMinimized}
    >
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/playlist/6ZPcd4JFsPBOvv3Fk9qBoY?theme=0"
          width="100%"
          height="100%"
          style={{ borderRadius: "12px", border: 0 }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="My Spotify Playlist"
        />
      </div>
    </MacWindow>
  );
};

export default Spotify;
