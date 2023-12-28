/* eslint-disable react/prop-types */
import React from "react";
import Draggable from "react-draggable";
import classes from "./styles.module.css";
import { X } from "lucide-react";

function DraggableWindow({ defaultPosition, windowLabel, children, onClose }) {
  const [zIndex, setZIndex] = React.useState(2);
  const nodeRef = React.useRef(null);

  return (
    <Draggable
      defaultPosition={defaultPosition}
      bounds="parent"
      handle=".handler"
      nodeRef={nodeRef}
      onStart={() => setZIndex(zIndex + 1)}
      // onStop={() => setDragging(false)}
    >
      <div
        ref={nodeRef}
        className={classes.container}
        style={{
          zIndex: zIndex,
        }}
      >
        <div className={`handler ${classes.handle}`}>
          {windowLabel}
          <button onClick={onClose}>
            <X size={19} />
          </button>
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </Draggable>
  );
}

export default DraggableWindow;
