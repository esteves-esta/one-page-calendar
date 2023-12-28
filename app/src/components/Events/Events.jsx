/* eslint-disable react/prop-types */
import React from "react";
import { isBefore, isEqual } from "date-fns";
import { CalendarX } from "lucide-react";
import * as Label from "@radix-ui/react-label";
import DraggableWindow from "../DraggableWindow";
import BtnToogle from "../BtnToogle";
import { CustomizationContext } from "../CustomizationProvider";

function Events({ openEvents, setOpenEvents }) {
  const { year, events, setEvents, selectDate, setSelecteDate } =
    React.useContext(CustomizationContext);

  function emptySelectedDate() {
    setSelecteDate({ day: -1, month: -1 });
  }

  function saveEvent() {
    const newEvents = [
      ...events,
      { ...selectDate, year, id: crypto.randomUUID() },
    ];

    const sorted = newEvents.sort((a, b) => {
      if (
        isEqual(
          new Date(a.year, a.month, a.day),
          new Date(b.year, b.month, b.day)
        )
      ) {
        return 0;
      }

      return isBefore(
        new Date(a.year, a.month, a.day),
        new Date(b.year, b.month, b.day)
      )
        ? -1
        : 1;
    });

    setEvents([...sorted]);
    emptySelectedDate();
  }

  function exportAll() {
    const eventsContent = [];

    if (events.length === 0) return;

    events.forEach(({ title, day, month, year }) => {
      eventsContent.push([title, `${day}/${month + 1}/${year}`]);
    });

    downloadCsvFile(
      eventsContent.join("\n"),
      "events.csv"
    );
  }

  function downloadCsvFile(content, fileName) {
    const blob = new Blob(["\ufeff", content], {
      type: "data:text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  return (
    <>
      {selectDate.day > -1 && selectDate.month > -1 && (
        <DraggableWindow
          defaultPosition={{ x: 60, y: 60 }}
          onClose={emptySelectedDate}
          windowLabel="Save event"
        >
          <h4>Do you want to save the date ?</h4>

          <Label.Root className="eventTitle">
            Title of date
            <input
              value={selectDate.title}
              onChange={(event) =>
                setSelecteDate({ ...selectDate, title: event.target.value })
              }
              type="text"
            />
          </Label.Root>

          <button className="eventBtn" onClick={saveEvent}>
            Save
          </button>
          <button className="eventBtn" onClick={emptySelectedDate}>
            Cancel
          </button>
        </DraggableWindow>
      )}
      {openEvents && (
        <DraggableWindow
          defaultPosition={{ x: 30, y: 20 }}
          onClose={() => setOpenEvents(false)}
          windowLabel="Events saved"
        >
          {events.map(({ id, day, year, month, title }) => (
            <div className="eventContainer" key={id}>
              <div>
                <span>
                  {day}/{month + 1}/{year}
                </span>
                <h4>{title}</h4>
              </div>
              <BtnToogle
                icon={CalendarX}
                onToogle={() => {
                  setEvents(events.filter((event) => event.id != id));
                }}
              />
            </div>
          ))}

          {events.length === 0 && (
            <p>Click on a day and a month to create an event.</p>
          )}

          {events.length > 1 && (
            <button className="eventBtn" onClick={() => setEvents([])}>
              Delete all
            </button>
          )}
          {events.length > 1 && (
            <button className="eventBtn" onClick={exportAll}>
              Export all as .css
            </button>
          )}
        </DraggableWindow>
      )}
    </>
  );
}

export default Events;
