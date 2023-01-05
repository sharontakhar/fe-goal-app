import React, { useEffect, useState } from "react";
import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import axios from "axios";
import { fontSize } from "@mui/system";

const ViewCalendar = () => {
  const [currentEvents, setCurrentEvent] = useState([
    { id: "1234", title: "Dad's birthday", start: "2023-01-07" },
  ]);
  // const events = [{ id: "1234", title: "Dad's birthday", start: "2023-01-07" }];

  useEffect(() => {
    axios
      .get("https://www.gov.uk/bank-holidays.json")
      .then((response) => {
        // console.log(response.data["england-and-wales"].events, "FILTERED");
        const endpoint = response.data["england-and-wales"].events;

        const allHolidays = currentEvents;

        endpoint.forEach((data) => {
          allHolidays.push({ id: "1234", title: data.title, start: data.date });
          // console.log(allHolidays, "ALLHOLS");
        }, []);
        setCurrentEvent(allHolidays);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(currentEvents, "CURR EVENTS");
  }, [currentEvents]);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        initialEvents={currentEvents}
        eventsSet={(events) => {
          console.log(events, "EVENTS");
          setCurrentEvent(events);
        }}
      />
      <div className="div_container">
        {/* <div className="quarter">
          <div className="month_jan">
            <p>JAN</p>
          </div>
          <div className="month_feb">
            <p>FEB</p>
          </div>
          <div className="month_march">
            <p>MARCH</p>
          </div>
        </div>

        <div className="quarter">
          <div className="month_apr">
            <p>APR</p>
          </div>
          <div className="month_may">
            <p>MAY</p>
          </div>
          <div className="month_jun">
            <p>JUN</p>
          </div>
        </div>

        <div className="quarter">
          <div className="month_jul">
            <p>JUL</p>
          </div>
          <div className="month_aug">
            <p>AUG</p>
          </div>
          <div className="month_sep">
            <p>SEP</p>
          </div>
        </div>

        <div className="quarter">
          <div className="month_oct">
            <p>OCT</p>
          </div>
          <div className="month_nov">
            <p>NOV</p>
          </div>
          <div className="month_dec">
            <p>DEC</p>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default ViewCalendar;
