/* eslint-disable react/prop-types */
import React from "react";
import classes from "./styles.module.css";
import FocusLock from "react-focus-lock";

/* 
https://javascript.plainenglish.io/how-to-make-a-simple-custom-drag-to-move-component-in-react-f67d5c99f925
https://github.com/tmarshall07/medium-dragmove-component/blob/main/src/DragMove.jsx*/

function DraggableWindow({ children }) {
  React.useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  const [translate, setTranslate] = React.useState({
    x: 0,
    y: 0,
  });

  const [isDragging, setIsDragging] = React.useState(false);

  const handlePointerDown = (event) => {
    setIsDragging(true);

    // onPointerDown(event);
  };

  const handlePointerUp = (event) => {
    setIsDragging(false);

    // onPointerUp(e);
  };

  const handlePointerMove = (event) => {
    if (isDragging) handleDragMove(event);

    // onPointerMove(event);
  };

  const handleDragMove = (event) => {
    setTranslate({
      x: translate.x + event.movementX,
      y: translate.y + event.movementY,
    });
  };

  return (
    <FocusLock disabled={!isDragging}>
      <div className={classes.backdrop} />
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        style={{
          // transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
          top: `${translate.y}px`,
          left: `${translate.x}px`,
        }}
        className={classes.mydiv}
      >
        <div className={classes.mydivheader}>Click here to move</div>
        {isDragging ? "drag" : "no drag"}
        <div>{children}</div>
      </div>
    </FocusLock>
  );
}

export default DraggableWindow;
