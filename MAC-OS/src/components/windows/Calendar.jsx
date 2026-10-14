import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import MacWindow from "./MacWindow";
import "./calendar.scss";

const Calendar = ({
  onClose,
  onMinimize,
  isMinimized,
  title,
}) => {
  const [events, setEvents] = useState([
    {
      title: "Welcome to Calendar",
      start: new Date().toISOString().slice(0, 10),
      allDay: true,
    },
  ]);

  const handleDateClick = (info) => {
    const eventTitle = window.prompt("Enter event title:");

    if (!eventTitle?.trim()) return;

    setEvents((prev) => [
      ...prev,
      {
        title: eventTitle.trim(),
        start: info.dateStr,
        allDay: info.allDay,
      },
    ]);
  };

  const handleEventClick = (info) => {
    const shouldDelete = window.confirm(
      `Delete "${info.event.title}"?`
    );

    if (!shouldDelete) return;

    setEvents((prev) =>
      prev.filter((event) => event.id !== info.event.id)
    );
  };

  return (
    <MacWindow
      title={title || "Calendar"}
      onClose={onClose}
      onMinimize={onMinimize}
      isMinimized={isMinimized}
      width="min(900px, 94vw)"
      height="min(700px, 88vh)"
    >
      <div className="full-calendar-app">
        <div className="calendar-topbar">
          <div>
            <span className="calendar-eyebrow">YOUR SCHEDULE</span>
            <h2>Calendar</h2>
          </div>

          <span className="calendar-status">● Personal</span>
        </div>

        <div className="calendar-body">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            height="100%"
            events={events}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            selectable={true}
            dayMaxEvents={true}
            nowIndicator={true}
          />
        </div>
      </div>
    </MacWindow>
  );
};

export default Calendar;
