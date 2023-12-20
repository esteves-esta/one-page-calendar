import React from "react";

function SvgLearning() {
  const [teste1, setTeste1] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    document.addEventListener("pointermove", teste);
    return () => document.removeEventListener(`pointermove`, teste);
  }, []);

  function teste(event) {
    setTeste1({ x: event.pageX, y: event.pageY });
  }

  return (
    <>
 

      <p
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          fontSize: "2em",
      
          transform: `translate(${teste1.x + 20}px, ${teste1.y}px) `,
        }}
      >
        ✨
      </p>

    </>
  );
}

export default SvgLearning;
