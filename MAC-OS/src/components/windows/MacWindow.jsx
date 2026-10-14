import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "40vw",
  height = "40vh",
  title = "DevashishKubade -zsh",
  onClose,
  onMinimize,
  isMinimized = false,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [previousBounds, setPreviousBounds] = useState(null);

  const [bounds, setBounds] = useState({
    x: 300,
    y: 200,
    width,
    height,
  });

  if (isMinimized) return null;

  const handleMaximize = () => {
    if (!isMaximized) {
      setPreviousBounds(bounds);
      setIsMaximized(true);
    } else {
      setIsMaximized(false);

      if (previousBounds) {
        setBounds(previousBounds);
      }
    }
  };

  return (
    <Rnd
      size={
        isMaximized
          ? {
              width: "100%",
              height: "100%",
            }
          : {
              width: bounds.width,
              height: bounds.height,
            }
      }
      position={
        isMaximized
          ? { x: 0, y: 0 }
          : { x: bounds.x, y: bounds.y }
      }
      minWidth={300}
      minHeight={200}
      bounds="parent"
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      dragHandleClassName="nav"
      onDragStop={(event, data) => {
        setBounds((prev) => ({
          ...prev,
          x: data.x,
          y: data.y,
        }));
      }}
      onResizeStop={(event, direction, ref, delta, position) => {
        setBounds({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: position.x,
          y: position.y,
        });
      }}
    >
      <div className={`window ${isMaximized ? "maximized" : ""}`}>
        <div className="nav">
          <div className="dots">
            {/* RED: CLOSE */}
            <button
              type="button"
              className="dot red"
              aria-label="Close window"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onClose?.();
              }}
            />

            {/* YELLOW: MINIMIZE */}
            <button
              type="button"
              className="dot yellow"
              aria-label="Minimize window"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onMinimize?.();
              }}
            />

            {/* GREEN: MAXIMIZE / RESTORE */}
            <button
              type="button"
              className="dot green"
              aria-label="Maximize or restore window"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                handleMaximize();
              }}
            />
          </div>

          <div className="title">
            <p>{title}</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
