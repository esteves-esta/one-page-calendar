import React from "react";
function PoemScrollSticky() {
  const [closeHeader, setCloseHeader] = React.useState(false);
  const [goNext, setgoNext] = React.useState(0);

  return (
    <main className={closeHeader ? "goUp" : ""}>
      <header>
        <div className="topName">
          <p>asdf</p>
          <i>teste</i>
          <p>aoio</p>
        </div>
      </header>

      <nav>
        <button
          onClick={() => {
            setCloseHeader(!closeHeader);
            setgoNext(0);
            if (!closeHeader) setgoNext(1);
          }}
        >
          teste
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
            next
          </button>
        )}
        {goNext}
      </nav>

      <article className={goNext === 2 ? "next" : ""}>
        <section className={goNext === 1 ? "currentPage" : ""}>
          <div className="content">
            <p>teste1</p>
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
