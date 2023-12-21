import React from "react";
import { Sun, Moon } from "lucide-react";

function PoemScrollSticky() {
  const [timeOfDay, settimeOfDay] = React.useState(() => {
    //time stuff
    return "morning";
  });
  const [closeHeader, setCloseHeader] = React.useState(false);
  const [goNext, setgoNext] = React.useState(0);

  return (
    <main className={closeHeader ? `closeHeader ${timeOfDay}` : timeOfDay}>
      <div className="top-fixed">
        <p>fernanda esteves</p>
        <div className="time-icon">
          {timeOfDay == "night" && <Moon size={32} />}
          {timeOfDay !== "night" && <Sun size={32} />}
        </div>
        <p>esteves-esta</p>
      </div>
      <header>
        <div className="header-content">
          <h1>
            bom dia
            <span className="accent-emoticon">\(^-^)/</span>
          </h1>
          <h1>bom dia \(^-^) </h1>
          <h1>bom dia \(^-^)/ </h1>
          <h1>bom dia \(^-^)/ </h1>
        </div>
      </header>

      <nav>
        <h1>
          bom dia
          <span className="accent-emoticon">\(^-^)/</span>
        </h1>
        <button
          onClick={() => {
            setCloseHeader(!closeHeader);
            setgoNext(0);
            if (!closeHeader) setgoNext(1);
          }}
        >
          {!closeHeader ? "projetos" : "voltar"}
        </button>
        <button
          onClick={() => {
            switch (timeOfDay) {
              case "morning":
                settimeOfDay("afternoon");
                break;
              case "afternoon":
                settimeOfDay("night");
                break;

              default:
                settimeOfDay("morning");
                break;
            }
          }}
        >
          {timeOfDay}
        </button>
        <br />
        {closeHeader && (
          <button
            onClick={() => {
              switch (goNext) {
                case 1:
                  setgoNext(2);
                  break;
                case 2:
                  setgoNext(1);
                  break;
              }
            }}
          >
            próximo
          </button>
        )}
      </nav>

      <article className={goNext === 2 ? "projects" : ""}>
        <section className={goNext === 1 ? "currentPage" : ""}>
          <div className="content">
            <h1>teste1</h1>
            <p>teste1</p>

            <div
              style={{ width: "123px", height: "123px", background: "red" }}
            ></div>
          </div>
        </section>

        <section className={goNext === 2 ? "currentPage" : ""}>
          <div className="content">
            <p>teste2</p>
          </div>
        </section>
      </article>
    </main>
  );
}

export default PoemScrollSticky;
